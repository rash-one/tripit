<template>
    <div class="container mx-auto flex flex-col gap-4 justify-center items-center h-screen">
      <div class="relative flex h-[100px] w-[100px] justify-center items-center">
        <div
          class="animate-spin h-full w-full border-[#ffb830] rounded-full border-4 border-solid border-e-transparent"
          role="status">
        </div>
        <img
          src="../assets/egypt (2).png"
          alt="Logo"
          class="absolute w-[50px] h-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10" />
      </div>
    </div>
  </template>
  

<script>
export default {
  name: "LoadingPage",
};
</script>

<style scoped></style>
