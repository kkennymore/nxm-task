<script setup>
defineProps({
  data: { type: Array, required: true },
  loading: { type: Boolean, default: false },
});
</script>

<template>
  <div>
    <table class="min-w-full border border-gray-300 text-sm">
      <thead class="bg-gray-100">
        <tr>
          <th class="border px-3 py-2">Rank</th>
          <th class="border px-3 py-2">Distributor</th>
          <th class="border px-3 py-2 text-right">Referred</th>
          <th class="border px-3 py-2 text-right">Total Sales ($)</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="loading">
          <td colspan="4" class="text-center py-3">Loading...</td>
        </tr>
        <tr v-else-if="!data.length">
          <td colspan="4" class="text-center py-3">No records found</td>
        </tr>
        <tr v-for="(item, index) in data" :key="index" class="hover:bg-gray-50">
          <td class="border px-3 py-2">{{ item.rank }}</td>
          <td class="border px-3 py-2">{{ item.distributor_name }}</td>
          <td class="border px-3 py-2 text-right">{{ item.referred_distributors }}</td>
          <td class="border px-3 py-2 text-right font-medium">{{ item.total_sales }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
