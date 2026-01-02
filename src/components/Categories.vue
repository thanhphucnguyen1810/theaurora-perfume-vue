<template>
  <section
    id="categories"
    class="py-16 scroll-mt-20 bg-white"
  >
    <div class="container mx-auto mb-12">
      <!-- Section Header -->
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-amber-950 mb-3">
          Explore Our Fragrance Collections
        </h2>
        <p class="text-lg text-gray-800 max-w-2xl mx-auto">
          Discover scents that match your personality
        </p>
      </div>

      <!-- Categories Grid-->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(category, index) in categories"
          :key="index"
          class="relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
        >
          <div class="h-64 overflow-hidden">
            <img
              :src="category.image"
              :alt="category.alt"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            >
          </div>
          <div class="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent">
            <div class="absolute bottom-0 left-0 p-6">
              <h3 class="text-xl font-semibold text-white">
                {{ category.title }}
              </h3>
              <p class="text-gray-200 mt-1">
                {{ category.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

import product8 from '../assets/product8.png'
import product9 from '../assets/product9.png'
import product10 from '../assets/product10.png'
import product11 from '../assets/product11.png'
import product12 from '../assets/product12.png'
import product13 from '../assets/product13.png'

const categories = ref([
  {
    image: product8,
    title: 'Men\'s Selection',
    description: 'Bold, masculine & sophisticated',
    alt: 'Men\'s Fragrances'
  },
  {
    image: product9,
    title: 'Women\'s Collection',
    description: 'Elegant, floral & enchanting',
    alt: 'Women\'s Fragrances'
  },
  {
    image: product10,
    title: 'Unisex Essence',
    description: 'Boundary-breaking scents for all',
    alt: 'Unisex Fragrances'
  },
  {
    image: product11,
    title: 'Woody & Earthy',
    description: 'Warm notes of cedar and sandalwood',
    alt: 'Woody Fragrance Category'
  },
  {
    image: product12,
    title: 'Fresh & Citrus',
    description: 'Vibrant, clean and energetic',
    alt: 'Fresh Fragrance Category'
  },
  {
    image: product13,
    title: 'Luxury Gift Sets',
    description: 'The perfect curated gift for loved ones',
    alt: 'Fragrance Gift Sets'
  }
])

</script>