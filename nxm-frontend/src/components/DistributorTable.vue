<script setup>
defineProps({
  data: { type: Array, required: true },
  loading: { type: Boolean, default: false },
});
</script>

<template>
  <div
    class="overflow-hidden rounded-2xl border border-gray-200 shadow-sm bg-white transition-all duration-300 hover:shadow-md"
  >
    <table class="min-w-full text-sm text-gray-700">
      <!-- Table Header -->
      <thead class="bg-gradient-to-r from-gray-50 to-gray-100 text-gray-600 uppercase text-xs tracking-wide">
        <tr>
          <th class="px-4 py-3 text-left font-semibold">Rank</th>
          <th class="px-4 py-3 text-left font-semibold">Distributor</th>
          <th class="px-4 py-3 text-right font-semibold">Referred</th>
          <th class="px-4 py-3 text-right font-semibold">Total Sales ($)</th>
        </tr>
      </thead>

      <!-- Table Body -->
      <tbody>
        <!-- Loading State -->
        <tr v-if="loading">
          <td colspan="4" class="py-6 text-center text-gray-500 animate-pulse">
            Loading distributor data...
          </td>
        </tr>

        <!-- Empty State -->
        <tr v-else-if="!data.length">
          <td colspan="4" class="py-6 text-center text-gray-400 italic">
            No distributor records found.
          </td>
        </tr>

        <!-- Data Rows -->
        <tr
          v-for="(item, index) in data"
          :key="index"
          class="border-t border-gray-100 hover:bg-blue-50 transition-colors duration-200"
        >
          <td class="px-4 py-3 text-gray-800 font-semibold">{{ item.rank }}</td>
          <td class="px-4 py-3 flex items-center gap-2">
            <div
              class="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-blue-600 font-semibold shadow-sm"
            >
              {{ item.distributor_name.charAt(0) }}
            </div>
            <span>{{ item.distributor_name }}</span>
          </td>
          <td class="px-4 py-3 text-right">{{ item.referred_distributors }}</td>
          <td
            class="px-4 py-3 text-right font-semibold text-green-600 tracking-tight"
          >
            {{item.total_sales.toLocaleString() }}
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Subtle gradient footer accent -->
    <div class="h-1 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400"></div>
  </div>
</template>
