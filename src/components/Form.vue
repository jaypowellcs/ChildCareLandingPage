<script>
export default {
  data() {
    return {
      firstname: '',
      lastname: '',
      phone: '',
      email: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      childname: '',
      childage: '',
      about: '',
    }
  },
}

</script>

<template>
 <div class="bg-blue-100 min-h-screen flex items-center">
   <div class="w-full">
     <h2 class="text-center text-blue-400 font-bold text-2xl uppercase mb-10">Waitlist Inquiry</h2>
     <p class="text-center text-blue-400 font-bold text-2xl uppercase mb-10">Fill out our waitlist form for 2022 mid-year enrollements. If you have any questions or concerns about our waitlist, please feel free to contact us on 123-234-2343</p>
     <div class="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2 mb-5">
       <form action="">
         
        <div class="mb-5">
           <label for="firstname" class="block mb-2 font-bold text-gray-600">First Name</label>
           <input  v-model="firstname" type="text" id="firstname" name="firstname" placeholder="Put in your first name." class="border border-gray-300 shadow p-3 w-full rounded mb-">
         </div>

         <div class="mb-5">
           <label for="lastname" class="block mb-2 font-bold text-gray-600">Last Name</label>
           <input v-model="lastname" type="text" id="lastname" name="lastname" placeholder="Put in your last name." class="border border-gray-300 shadow p-3 w-full rounded mb-">
         </div>

         <div class="mb-5">
           <label for="phone" class="block mb-2 font-bold text-gray-600">Phone Number</label>
           <input v-model="phone" type="tel" id="phone" name="phone" placeholder="Put in your Phone Number." class="border  border-gray-300  shadow p-3 w-full rounded mb-">
         </div>
         <div class="mb-5">
           <label for="email" class="block mb-2 font-bold text-gray-600">Email required</label>
           <input v-model="email" type="email" id="email" name="email" placeholder="Put in your Email." class="border border-gray-300 shadow p-3 w-full rounded mb-">
         </div>
         <div class="mb-5">
           <label for="address" class="block mb-2 font-bold text-gray-600">Address</label>
           <input v-model="address" type="text" id="address" name="address" placeholder="Put in your address." class="border border-gray-300 shadow p-3 w-full rounded mb-">
         </div>
         <div class="mb-5">
           <label for="city" class="block mb-2 font-bold text-gray-600">City</label>
           <input v-model="city" type="text" id="city" name="city" placeholder="Put in your City." class="border border-gray-300 shadow p-3 w-full rounded mb-">
         </div>
         <div class="mb-5">
           <label for="state" class="block mb-2 font-bold text-gray-600">State</label>
           <input v-model="state" type="text" id="state" name="state" placeholder="Put in your State." class="border border-gray-300 shadow p-3 w-full rounded mb-">
         </div>
         <div class="mb-5">
           <label for="zip" class="block mb-2 font-bold text-gray-600">Zip Code</label>
           <input v-model="zip" type="text" id="zip" name="zip" placeholder="Put in your Zip Code." class="border border-gray-300 shadow p-3 w-full rounded mb-">
         </div>
         <div class="mb-5">
           <label for="childname" class="block mb-2 font-bold text-gray-600">Child Name</label>
           <input v-model="childname" type="text" id="childname" name="childname" placeholder="Put in your Child's name." class="border border-gray-300 shadow p-3 w-full rounded mb-">
         </div>
         <div class="mb-5">
           <label for="childage" class="block mb-2 font-bold text-gray-600">Child Age</label>
           <input v-model="childage" type="text" id="name" name="name" placeholder="Put in your Child's age." class="border border-gray-300 shadow p-3 w-full rounded mb-">
         </div>
         <div class="mb-5">
           <label for="about" class="block mb-2 font-bold text-gray-600">How did you hear about us?</label>
           <input v-model="about" type="text" id="about" name="about" placeholder="How did you hear about us?" class="border border-gray-300 shadow p-3 w-full rounded mb-">
         </div>

         <button class="block w-full bg-blue-500 text-white font-bold p-4 rounded-lg">Submit</button>
       </form>
     </div>
   </div>
 </div>
</template>