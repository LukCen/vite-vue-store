<script setup lang="ts">
import { fetchProducts } from '../utils/ProductFetcher';
import { useRoute } from 'vue-router';
import { ShoppingBasket, Loader, UserCircle2 } from 'lucide-vue-next';
import { computed, ref } from 'vue';
import { api } from '../utils/HandleBasketData';
import ItemAddedPopup from '../components/products/ItemAddedPopup.vue';

import { useStore } from '../store/store';

const store = useStore()

const route = useRoute()
const productId = route.params.id
const productData = await fetchProducts(api.products + `/${productId}`)

const isLoaded = ref(false)
const itemAmount = ref(1)
const timer = ref(0)
const timerVisible = ref(false)
const totalPrice = computed(() => productData.price * itemAmount.value)
let timerInterval: ReturnType<typeof setInterval> | null = null

/**
 * Simple helper for showing a popup after adding a product to the basket.
 */
function popupTimer() {
  timer.value = 0
  timerVisible.value = true

  if (timerInterval) clearInterval(timerInterval)

  timerInterval = setInterval(() => {
    timer.value++
    if (timer.value >= 3) {
      timerVisible.value = false
      clearInterval(timerInterval!)
    }
  }, 1000)
}

const purchasedProduct:BasketDataItem = {
  id: productData.id,
  name: productData.name,
  price:productData.price,
  quantity: itemAmount.value
}

</script>

<template>
  <main class="flex flex-col gap-4">
    <section class="top flex justify-between gap-4">
      <div class="gallery flex bg-white shadow-2xl p-4 rounded-xl gap-2 justify-center items-center flex-[1_1_30%] h-[300px]">
        <img v-show="isLoaded === true" v-bind:src="productData.images?.[0]" alt="" @load="isLoaded = true">
        <Loader class="animate-spin" v-if="isLoaded === false" />
      </div>
      <div class="product_info flex flex-col bg-white shadow-2xl p-4 rounded-xl gap-2 flex-[1_1_70%]">
        <h2>{{ productData.title }}</h2>
        <p>Unit price: ${{ productData.price }}</p>
        <p>Total price: ${{ totalPrice.toFixed(2) }}</p>
        <p>{{ productData.rating }} / 5</p>
        <div class="product_info__button flex gap-4 relative">
           <select v-model="itemAmount" class="flex border-2 border-black rounded-xl p-2 justify-center items-center" name="Select amount" id="item_quantity">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
           </select> 
           <button @click="store.addItem(purchasedProduct), popupTimer()" class="add-to-basket flex gap-2 p-2 bg-blue-500 font-med text-white rounded-sm duration-200 hover:scale-105">
          <ShoppingBasket/>Add to basket
          </button>
        
        </div>
      </div>
    </section>
    <section class="opinions" v-if="productData.reviews">
      <ul class="flex flex-col gap-4">
        <li class="bg-white shadow-2xl rounded-xl flex gap-4 p-4" v-for="(review, index) in productData.reviews" :key="index">
          <UserCircle2/>
          <div class="opinion_details flex flex-col gap-4">
            <h4 class="name">{{ review.reviewerName }}</h4>
            <div class="comment">{{ review.comment }}</div>
            <div class="rating">{{ review.rating }} / 5</div>
          </div>
        </li>
      </ul>
    </section>
  </main>
<ItemAddedPopup v-show="timerVisible"/>
</template>
