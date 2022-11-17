<script>
export default {
  data() {
    return {
       firstname:"",
       lastname: '',
       email: '',
       phone: '',
       message: '', 
    }
  },
}

</script>

<template>
    <main class="max-w-2xl mx-auto">
        <div class="rounded-lg sm:container border-2 border-slate-900 bg-white">
            <div class="p-10 space-y-5 shadow-xl">
                <h4 class="text-center semibold text-4xl">Contact Us</h4>
                <form>
                <div class="grid grid-cols-2 gap-5">
                    <input
                    type="text"
                    class="border border-gray-500 px-4 py-2 focus:outline-none focus:border-slate-900"
                    placeholder="First Name"
                    v-model="firstname"
                    />
                    <input
                    type="text"
                    class="border border-gray-500 px-4 py-2 focus:outline-none focus:border-slate-900"
                    placeholder="Last Name"
                    v-model="lastname"
                    />
                    <input
                    type="email"
                    class="border border-gray-500 px-4 py-2 focus:outline-none focus:border-slate-900 col-span-2"
                    placeholder="Email"
                    v-model="email"
                    />
                    <input
                    type="tel"
                    class="border border-gray-500 px-4 py-2 focus:outline-none focus:border-slate-900 col-span-2"
                    placeholder="Phone"
                    v-model="phone"
                    />
                    <textarea
                    cols="10"
                    rows="5"
                    class="border border-gray-500 px-4 py-2 focus:outline-nonefocus:border-slate-900 col-span-2"
                    placeholder="Write your message..."
                    v-model="message"
                    ></textarea>
                </div>
                <input
                    type="submit"
                    value="Send Message"
                    class="block w-full bg-blue-500 text-white font-bold p-4 mt-3 rounded-lg"
                />
                </form>
            </div>
        </div>
    </main>
</template>