<script setup>
import { onMounted, ref, computed, watch } from "vue";
import DistributorTable from "@/components/DistributorTable.vue";
import RequestService from "@/services/RequestService.js";
import apiEndpoint from "@/config/apiEndpoint.js";

// --- State ---
const allDistributors = ref([]);
const displayedDistributors = ref([]);
const page = ref(1);
const perPage = 10;
const loading = ref(false);

function setLoading(value) {
  loading.value = value;
}

// --- Fetch all distributors once ---
async function _fetchData() {
  try {
    setLoading(true);

    const response = await RequestService.get(apiEndpoint.distributors, {
      isLoading: setLoading,
    });

    // Handle possible nested API responses
    allDistributors.value = Array.isArray(response.data)
      ? response.data
      : response.data?.data || [];

    _updateDisplayedPage();
  } catch (error) {
    console.error("Error fetching distributors:", error);
  } finally {
    setLoading(false);
  }
}

// --- Compute total pages dynamically ---
const totalPages = computed(() =>
  Math.ceil(allDistributors.value.length / perPage)
);

// --- Update visible records for current page ---
function _updateDisplayedPage() {
  const start = (page.value - 1) * perPage;
  const end = start + perPage;
  displayedDistributors.value = allDistributors.value.slice(start, end);
}

// --- Pagination Handlers ---
function _nextPage() {
  if (page.value < totalPages.value) {
    page.value++;
  }
}

function _prevPage() {
  if (page.value > 1) {
    page.value--;
  }
}

// --- Watch for page changes to update displayed data ---
watch(page, _updateDisplayedPage);

// --- Fetch data on mount ---
onMounted(_fetchData);
</script>

<template>
  <div class="p-6">
    <h2 class="text-xl font-semibold mb-4">Distributor Sales Report</h2>

    <!-- Table -->
    <div>
      <DistributorTable :data="displayedDistributors" :loading="loading" />
    </div>

    <!-- Pagination -->
    <div
      v-if="totalPages > 1"
      class="flex justify-center items-center mt-4 gap-2 text-gray-700"
    >
      <button
        :disabled="page <= 1"
        @click="_prevPage"
        class="px-3 py-1 border rounded disabled:opacity-50 hover:bg-gray-100"
      >
        Prev
      </button>

      <span>Page {{ page }} of {{ totalPages }}</span>

      <button
        :disabled="page >= totalPages"
        @click="_nextPage"
        class="px-3 py-1 border rounded disabled:opacity-50 hover:bg-gray-100"
      >
        Next
      </button>
    </div>
  </div>
</template>
