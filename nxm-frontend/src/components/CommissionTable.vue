
<script setup>
import { onMounted, ref } from "vue";
import apiEndpoint from '@/config/apiEndpoint';
import RequestService from "@/services/RequestService.js";

const loading = ref(false);
const isFetchInvoice = ref(false);
const invoiceData = ref([]);

const props = defineProps({
  commData: { type: Array, required: true },
  loading: { type: Boolean, default: false },
});

function setLoading(value) {
  loading.value = value;
}
const fetchInvoice = async (e, id) =>{
  e.preventDefault();
  isFetchInvoice.value = true;
  setLoading(true);

  const response = await RequestService.get(`${apiEndpoint.commissions}?${query}`, {isLoading: setLoading});

  invoiceData.value = response.data || [];
  setLoading(false);
}
</script>
<template>
  <div>
    <table class="min-w-full border border-gray-300 text-sm">
      <thead class="bg-gray-100">
        <tr class="border">
          <th class="border px-3 py-2">Invoice</th>
          <th class="border px-3 py-2">Purchaser</th>
          <th class="border px-3 py-2">Distributor</th>
          <th class="border px-3 py-2">Referred Distributors</th>
          <th class="border px-3 py-2">Order Date</th>
          <th class="border px-3 py-2 text-right">Order Total</th>
          <th class="border px-3 py-2">Percentage</th>
          <th class="border px-3 py-2">Distributors's Commission</th>
          <th class="border px-3 py-2 text-center">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="props.loading">
          <td colspan="6" :style="{height: '200px', margin: '100px auto !important'}" class="text-center py-3" >Loading...</td>
        </tr>
        <tr v-else-if="!commData.length">
          <td colspan="6" class="text-center py-3">No records found</td>
        </tr>
        <tr v-for="(item, index) in commData" :key="index" class="hover:bg-gray-50">
          <td class="border px-3 py-2">{{ item.invoice }}</td>
          <td class="border px-3 py-2">{{ item.purchaser }}</td>
          <td class="border px-3 py-2">{{ item.distributor }}</td>
          <td class="border px-3 py-2">{{ item.referred_distributors }}</td>
          <td class="border px-3 py-2">{{ item.order_date }}</td>
          <td class="border px-3 py-2 text-right">{{ item.order_total }}</td>
          <td class="border px-3 py-2 text-right">{{ item.percentage }}%</td>
          <td class="border px-3 py-2 text-right font-medium">{{ item.commission }}</td>
          <td class="border px-3 py-2 text-right font-medium">
          <button @click="(e) => fetchInvoice(e, item)">
            View Items
          </button>
        </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>