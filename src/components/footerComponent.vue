<template>
 <footer class="border-2 border-t-[#ffb830]">
  <div class="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 ">
    <div class="sm:flex sm:items-center sm:justify-center gap-4">
      <div class="flex justify-center  sm:justify-start">
        <img src="../assets/egypt (2).png" alt="" width="48" height="48">
      </div>
      <p class="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
        {{$t('copyright')}} &copy; 2024 {{$t('allrights')}}
      </p>
    </div>
  </div>
</footer>
</template>

<script>
export default {
  name: "footerPage",
  data() {
    return {};
  },
};
</script>

<style scoped></style>
