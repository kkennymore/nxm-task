<script setup>
import { onMounted, ref, computed } from "vue";
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
async function fetchData() {
  setLoading(true);
  const response = await RequestService.get(apiEndpoint.distributors, {
    isLoading: setLoading,
  });

  allDistributors.value = response.data || [];
  updateDisplayedPage();
  setLoading(false);
}

// --- Compute total pages dynamically ---
const totalPages = computed(() => Math.ceil(allDistributors.value.length / perPage));

// --- Update visible records for current page ---
function updateDisplayedPage() {
  const start = (page.value - 1) * perPage;
  const end = start + perPage;
  displayedDistributors.value = allDistributors.value.slice(start, end);
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

// --- Fetch data on mount ---
onMounted(() => fetchData());
</script>

<template>
  <div class="p-6">
    <h2 class="text-xl font-semibold mb-4">Distributor Sales Report</h2>

    <!-- Table -->
    <DistributorTable :data="displayedDistributors" :loading="loading" />

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
