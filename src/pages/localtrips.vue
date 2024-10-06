<template>
    <div>
      <div class="relative h-screen w-full overflow-hidden">
        <img
          src="../assets/localtrips.jpg"
          alt="Travel agency background"
          class="absolute inset-0 w-full h-full object-cover object-right lg:object-center  z-0"
        />
        <div
          class="relative z-10 flex flex-col items-center justify-center h-full text-center"
        >
          <h1
            class="text-white text-5xl lg:text-7xl font-bold whitespace-nowrap"
            id="hero-title"
          >
           {{$t('gemsBondhaha')}}
          </h1>
        </div>
        <div class="absolute inset-0 bg-gray-600 opacity-40 z-0"></div>
      </div>
      <div class="container mx-auto">
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:my-10 p-10 lg:p-8"
      >

        <div
          v-for="trip in trips"
          :key="trip.id"
          class="relative rounded-lg overflow-hidden shadow-lg group h-[480px]  lg:h-[471px]  animateCard"
        >
        <router-link :to="`/tripdetails/${trip.id}`">
            <img
              :src="getImageUrl(trip.image_name)"
              alt="Trip Image"
              class="w-full h-full object-cover rounded-lg transition-transform duration-500 transform group-hover:scale-110  :"
            />
            <div
              class="absolute left-0 bottom-0 w-full h-0 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-center flex-col p-8 text-center text-sm transition-all duration-500 group-hover:h-full"
            >
              <h3
                class="text-white font-semibold text-2xl tracking-wide mb-1 mt-[80%]"
              >
                {{ trip.title }}
              </h3>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  import { supabase } from "../supabase";
  export default {
    name: "localTrips",
    data() {
      return {
        trips: [],
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
      getAgencyTrips() {
        axios
          .get(
            "https://dqorskomhqezaztrdhzc.supabase.co/rest/v1/trips?select=id,created_at,creator_id,location_id,title,image_name,start_date,end_date,description,users!inner(*),locations!inner(*),trips_images!fk_trips(id,created_at,image_name)&users.role=eq.local&users.vis=eq.true",
            {
              headers: {
                apikey:
                  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRxb3Jza29taHFlemF6dHJkaHpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ4NjA0ODUsImV4cCI6MjA0MDQzNjQ4NX0.sT1ehQrr-wQuwq0OVRgDtPh2gnvRGfKIMiDXlZIuvMI",
                Authorization:
                  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRxb3Jza29taHFlemF6dHJkaHpjIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyNDg2MDQ4NSwiZXhwIjoyMDQwNDM2NDg1fQ.2VhaDTcy4Cuyrek0tdur92cXYr1zeIHMm0yMti4Kkn8",
              },
            }
          )
          .then((response) => {
            this.trips = response.data;
          })
          .catch((error) => {
            console.error("Error fetching local trips:", error);
          });
      },
    },
    created() {
      this.getAgencyTrips();
    },
  };
  </script>
  
  <style scoped></style>
  