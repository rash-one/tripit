<template>
  <div class="relative h-screen w-full overflow-hidden">
    <img
      src="../assets/g.jpg"
      alt="Travel agency background"
      class="absolute inset-0 w-full h-full object-cover z-0"
    />
    <div
      class="relative z-10 flex flex-col items-center justify-center h-full text-center"
    ></div>
    <!-- <div class="absolute inset-0 bg-gray-600 opacity-40 z-0"></div> -->
  </div>
  <div class="container mx-auto columns-xs  my-8">
    <div v-for="image in images" :key="image.id" class="animatePic">
      <img :src="getImageUrl(image.image_name)" alt="Trip Image" class="object-cover rounded-lg shadow mb-4 w-full"/>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { supabase } from "../supabase";
export default {
  name: "galleryPage",
  data() {
    return {
      images: [],
    };
  },
  methods: {
    getImageUrl(imageName) {
      const { data, error } = supabase.storage
        .from("trip_images")
        .getPublicUrl(`uploads/${imageName}`);

      if (error) {
        console.error("Error fetching public URL:", error);
        return null;
      }

      return data.publicUrl;
    },
    getAllImages() {
      axios.get(
        "https://dqorskomhqezaztrdhzc.supabase.co/rest/v1/trips_images",
        {
          headers: {
            apikey:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRxb3Jza29taHFlemF6dHJkaHpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ4NjA0ODUsImV4cCI6MjA0MDQzNjQ4NX0.sT1ehQrr-wQuwq0OVRgDtPh2gnvRGfKIMiDXlZIuvMI",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRxb3Jza29taHFlemF6dHJkaHpjIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyNDg2MDQ4NSwiZXhwIjoyMDQwNDM2NDg1fQ.2VhaDTcy4Cuyrek0tdur92cXYr1zeIHMm0yMti4Kkn8",
          },
        }
      ).then((response) => {
        this.images = response.data;
        console.log(this.images);
      }).catch((error) => {
        console.error("Error fetching images:", error);
      })
    },
  },
  created() {
    this.getAllImages();
  },
};
</script>

<style scoped>
@keyframes appear{
  from{
    opacity: 0;
    scale: 0.5;
  }to{
    opacity: 1;
    scale: 1;
  }
}

.animatePic{
  animation: appear linear;
  animation-timeline: view() ;
  animation-range:entry 0% cover 40% ;
}
</style>
