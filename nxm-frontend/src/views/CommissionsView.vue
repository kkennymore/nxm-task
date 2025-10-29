<script setup>
import { onMounted, ref, computed, watch } from "vue";
import CommissionTable from "@/components/CommissionTable.vue";
import RequestService from "@/services/RequestService.js";
import apiEndpoint from "@/config/apiEndpoint.js";

// --- State ---
const allCommissions = ref([]);
const displayedCommissions = ref([]);
const page = ref(1);
const perPage = 10;
const filters = ref({ distributor: "", date_from: "", date_to: "" });
const loading = ref(false);

function setLoading(value) {
  loading.value = value;
}

// --- Fetch all data once from backend ---
async function fetchData() {
  try {
    setLoading(true);

    const query = new URLSearchParams({
      distributor: filters.value.distributor || "",
      date_from: filters.value.date_from || "",
      date_to: filters.value.date_to || "",
    }).toString();

    const response = await RequestService.get(`${apiEndpoint.commissions}?${query}`, {
      isLoading: setLoading,
    });

    // Handle possible API variations
    allCommissions.value = Array.isArray(response.data)
      ? response.data
      : response.data?.data || [];

    updateDisplayedPage();
  } catch (error) {
    console.error("Error fetching commissions:", error);
  } finally {
    setLoading(false);
  }
}

// --- Compute total pages dynamically ---
const totalPages = computed(() =>
  Math.ceil(allCommissions.value.length / perPage)
);

// --- Update data for the current page ---
function updateDisplayedPage() {
  const start = (page.value - 1) * perPage;
  const end = start + perPage;
  displayedCommissions.value = allCommissions.value.slice(start, end);
}

// --- Pagination Handlers ---
function nextPage() {
  if (page.value < totalPages.value) {
    page.value++;
  }
}

function prevPage() {
  if (page.value > 1) {
    page.value--;
  }
}

// --- Watch for page changes (auto update displayed data) ---
watch(page, updateDisplayedPage);

// --- Reactively apply filters ---
async function applyFilters() {
  page.value = 1;
  await fetchData();
}

// --- Load data on component mount ---
onMounted(fetchData);
</script>

<template>
  <div class="p-6">
    <h2 class="text-xl font-semibold mb-4">Commission Report</h2>

    <!-- Filters -->
    <div class="flex flex-wrap gap-4 mb-4 items-center">
      <input
        v-model="filters.distributor"
        type="text"
        placeholder="Distributor name or ID"
        class="border rounded p-2 w-60"
      />
      <input v-model="filters.date_from" type="date" class="border rounded p-2" />
      <input v-model="filters.date_to" type="date" class="border rounded p-2" />
      <button
        @click="applyFilters"
        class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
      >
        Filter
      </button>
    </div>

    <div>
      <!-- Table -->
     <CommissionTable :commData="displayedCommissions" :loading="loading" />
    </div>

    <!-- Pagination -->
    <div
      v-if="totalPages > 1"
      class="flex justify-center items-center mt-4 gap-2 text-gray-700"
    >
      <button
        :disabled="page <= 1"
        @click="prevPage"
        class="px-3 py-1 border rounded disabled:opacity-50 hover:bg-gray-100"
      >
        Prev
      </button>

      <span>Page {{ page }} of {{ totalPages }}</span>

      <button
        :disabled="page >= totalPages"
        @click="nextPage"
        class="px-3 py-1 border rounded disabled:opacity-50 hover:bg-gray-100"
      >
        Next
      </button>
    </div>
  </div>
</template>
