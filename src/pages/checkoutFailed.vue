<template>
  <div
    class="container mx-auto px-4 flex flex-col items-center h-screen justify-center"
  >
  <svg fill="#ffb830" width="100px" height="100px" viewBox="0 0 200 200" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title></title><path d="M100,15a85,85,0,1,0,85,85A84.93,84.93,0,0,0,100,15Zm0,150a65,65,0,1,1,65-65A64.87,64.87,0,0,1,100,165Z"></path><path d="M128.5,74a9.67,9.67,0,0,0-14,0L100,88.5l-14-14a9.9,9.9,0,0,0-14,14l14,14-14,14a9.9,9.9,0,0,0,14,14l14-14,14,14a9.9,9.9,0,0,0,14-14l-14-14,14-14A10.77,10.77,0,0,0,128.5,74Z"></path></g></svg>
    <h1 class="text-3xl font-bold mt-6 ">{{$t('failedBooking')}}</h1>
    <p class="text-xl mt-3 text-center">
       {{$t('Unfortunately')}}
    </p>
    <p class="text-xl mt-3 text-center">
      {{$t('assistance')}}
    </p>
    <p class="text-xl mt-3"> {{$t('apologize')}}</p>

    <router-link
      to="/home"
      class="flex justify-center bg-[#ffb830] p-3 rounded-lg mt-5 text-[#ffffff] font-bold hover:bg-[#feaf55] hover:text-slate-50"
      >{{$t('backHome')}}</router-link
    >
  </div>
</template>

<script>
export default {
  name: "checkoutFailed",
};
</script>

<style scoped></style>
