<template>
   <!--
    Graphic from https://www.opendoodles.com/
-->

<div class="grid h-screen place-content-center bg-white px-4">
  <div class="text-center flex flex-col gap-2 justify-center items-center">
    <img src="../assets/404.svg" alt="" class="mx-auto h-56 w-auto text-black sm:h-64">

    <h1 class="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl"> {{$t('uh')}}</h1>

    <p class="mt-4 text-gray-500"> {{$t('find')}} </p>

    <router-link to="/" class=" bg-[#ffb830] text-white p-2 rounded-lg hover:bg-[#feaf55] w-1/2 text-center">{{$t('backHome')}}</router-link>
  </div>
</div>
</template>

<script>
    export default {
        name: "errorPage",
    }
</script>

<style scoped>

</style>