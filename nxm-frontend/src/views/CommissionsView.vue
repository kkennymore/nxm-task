<script setup>
import { onMounted, ref, computed } from "vue";
import CommissionTable from "@/components/CommissionTable.vue";
import RequestService from "@/services/RequestService.js";
import apiEndpoint from "@/config/apiEndpoint.js";

// State
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
  setLoading(true);

  const query = new URLSearchParams({
    distributor: filters.value.distributor,
    date_from: filters.value.date_from,
    date_to: filters.value.date_to,
  }).toString();

  const response = await RequestService.get(`${apiEndpoint.commissions}?${query}`, {
    isLoading: setLoading,
  });

  allCommissions.value = response.data || [];
  updateDisplayedPage();
  setLoading(false);
}

// --- Compute total pages dynamically ---
const totalPages = computed(() => Math.ceil(allCommissions.value.length / perPage));

// --- Function to update data for the current page ---
function updateDisplayedPage() {
  const start = (page.value - 1) * perPage;
  const end = start + perPage;
  displayedCommissions.value = allCommissions.value.slice(start, end);
}

// --- Pagination Handlers ---
function nextPage() {
  if (page.value < totalPages.value) {
    page.value++;
    updateDisplayedPage();
  }
}

function prevPage() {
  if (page.value > 1) {
    page.value--;
    updateDisplayedPage();
  }
}

// --- Reactively refresh table when filters change ---
async function applyFilters() {
  page.value = 1;
  await fetchData();
}

// --- Load data on component mount ---
onMounted(() => fetchData());
</script>

<template>
  <div class="p-6">
    <h2 class="text-xl font-semibold mb-4">Commission Report</h2>

    <!-- Filters -->
    <div class="flex gap-4 mb-4">
      <input
        v-model="filters.distributor"
        type="text"
        placeholder="Distributor name or ID"
        class="border rounded p-2 w-60"
      />
      <input v-model="filters.date_from" type="date" class="border rounded p-2" />
      <input v-model="filters.date_to" type="date" class="border rounded p-2" />
      <button @click="applyFilters" class="bg-blue-600 text-white px-4 py-2 rounded">Filter</button>
    </div>

    <!-- Table -->
    <CommissionTable :data="displayedCommissions" :loading="loading" />

    <!-- Pagination -->
    <div v-if="totalPages > 1" class="flex justify-center mt-4 gap-2">
      <button
        :disabled="page <= 1"
        @click="prevPage"
        class="px-3 py-1 border rounded disabled:opacity-50"
      >
        Prev
      </button>

      <span>Page {{ page }} of {{ totalPages }}</span>

      <button
        :disabled="page >= totalPages"
        @click="nextPage"
        class="px-3 py-1 border rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  </div>
</template>
