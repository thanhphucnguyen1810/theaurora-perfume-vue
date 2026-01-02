<template>
  <div
    id="contact"
    class="min-h-screen scroll-mt-20 bg-pink-950 py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-serif text-white font-bold mb-4">
          Contact Us
        </h1>
        <p class="text-lg text-white max-w-2xl mx-auto">
          Have questions about our perfumes? Our fragrance experts are here to help you.
        </p>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div class="bg-white p-8 rounded-lg shadow-xl border border-gray-100">
          <h2 class="text-2xl font-serif font-semibold text-gray-900 mb-6">
            Send Us a Message
          </h2>

          <form class="space-y-6">
            <div>
              <label
                for="name"
                class="block text-sm font-medium text-gray-800 mb-1"
              >Your Name</label>
              <input
                id="name"
                type="text"
                class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                placeholder="Your name"
              >
            </div>
            <div>
              <label
                for="email"
                class="block text-sm font-medium text-gray-800 mb-1"
              >Email Address</label>
              <input
                id="email"
                type="text"
                class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                placeholder="you@email.com"
              >
            </div>
            <div>
              <label
                for="message"
                class="block text-sm font-medium text-gray-800 mb-1"
              >Your message</label>
              <textarea
                id="message"
                rows="5"
                class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                placeholder="Tell us about your fragrance needs..."
              />
            </div>

            <button
              class="w-full bg-pink-700 hover:bg-pink-800 text-white py-3 px-6 rounded-lg transition duration-300 font-medium shadow-md"
            >
              Send Message
            </button>
          </form>
        </div>

        <div class="space-y-8">
          <div class="bg-white p-8 rounded-lh shadow-xl border border-gray-100">
            <h2 class="text-2xl font-serif font-semibold text-gray-900 mb-6">
              Contact Informations
            </h2>
            <div class="space-y-6">
              <div class="flex items-start">
                <div class="bg-pink-200 p-3 rounded-full mr-4">
                  <Icon
                    icon="fa-solid:phone"
                    class="text-pink-950 text-lg"
                  />
                </div>
                <div>
                  <h3 class="text-lg font-medium text-gray-900">
                    Phone
                  </h3>
                  <p class="text-gray-800">
                    +1 (234) 567-8900
                  </p>
                  <p class="text-gray-600">
                    Mon-Fri:9am-6pm
                  </p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="bg-pink-200 p-3 rounded-full mr-4">
                  <Icon
                    icon="fa-solid:envelope"
                    class="text-pink-950 text-lg"
                  />
                </div>
                <div>
                  <h3 class="text-lg font-medium text-gray-900">
                    Email
                  </h3>
                  <p class="text-gray-800">
                    contact@perfume.com
                  </p>
                  <p class="text-gray-600">
                    support@perfume.com
                  </p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="bg-pink-200 p-3 rounded-full mr-4">
                  <Icon
                    icon="fa-solid:map-marker-alt"
                    class="text-pink-950 text-lg"
                  />
                </div>
                <div>
                  <h3 class="text-lg font-medium text-gray-900">
                    Our Boutique
                  </h3>
                  <p class="text-gray-800">
                    123 Perfume Street
                  </p>
                  <p class="text-gray-600">
                    Paris, France 75001
                  </p>
                </div>
              </div>
            </div>

            <div class="mt-24">
              <h3 class="text-lg font-medium text-gray-900 mb-4">
                Follow Us
              </h3>
              <div class="flex space-x-4">
                <a
                  href="#"
                  class="bg-pink-200 hover:bg-gray-200 p-3 rounded-full transition duration-300"
                >
                  <Icon
                    icon="fa-brands:instagram"
                    class="text-pink-950"
                  />
                </a>
                <a
                  href="#"
                  class="bg-pink-200 hover:bg-gray-200 p-3 rounded-full transition duration-300"
                >
                  <Icon
                    icon="fa-brands:facebook-f"
                    class="text-pink-950"
                  />
                </a>
                <a
                  href="#"
                  class="bg-pink-200 hover:bg-gray-200 p-3 rounded-full transition duration-300"
                >
                  <Icon
                    icon="fa-brands:twitter"
                    class="text-pink-950"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


