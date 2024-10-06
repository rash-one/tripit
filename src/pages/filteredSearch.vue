<template>
  <div class="container mx-auto pt-20">
    <div class="w-full h-screen mt-10">
      <div
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:my-10 p-10 lg:p-8"
          v-if="filteredTrips.length > 0"
        >
  
          <div
           v-for="(trip, index) in filteredTrips"
            :key="index"
            class="relative rounded-lg overflow-hidden shadow-lg group h-[480px]  lg:h-[471px]  animateCard"
          >
          <router-link :to="`/tripdetails/${trip.id}`">
            <img
              :src="getImageUrl(trip.image_name)"
              alt="Trip Image"
              class="w-full h-full object-cover rounded-lg transition-transform duration-500 transform group-hover:scale-110 max-h-[700px] lg:max-h-[auto] :"
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
      <div v-else>
        <p> {{'noTripsFound'}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { supabase } from "../supabase";

export default {
  data() {
    return {
      filteredTrips: [], 
      
    };
  },
  created() {
    // Fetch the query parameters from the URL
    const role = this.$route.query.role;
    const location = this.$route.query.location;
    const startDate = this.$route.query.startDate;

    // Fetch trips based on the filters
    this.fetchFilteredTrips(role, location, startDate);
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
    fetchFilteredTrips(role, location, startDate) {
      let url = `https://dqorskomhqezaztrdhzc.supabase.co/rest/v1/trips?select=*,user:users(role),location:locations(id,gov_name)`;

      // Add query parameters if they exist
      const filters = [];

      if (role) {
        filters.push(`user.role=eq.${role}`); // Filter by role from the `users` table
      }
      if (location) {
        filters.push(`location.id=eq.${location}`); // Filter by location from the `locations` table
      }
      if (startDate) {
        // Filter by start date or ongoing trips
        filters.push(
          `or=(start_date.gte.${startDate},end_date.gte.${startDate})`
        );
      }

      if (filters.length > 0) {
        // Append the filters to the URL
        url += `&${filters.join("&")}`;
      }
      console.log("URL:", url);

      // Fetch the filtered trips
      axios
        .get(url, {
          headers: {
            apikey:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRxb3Jza29taHFlemF6dHJkaHpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ4NjA0ODUsImV4cCI6MjA0MDQzNjQ4NX0.sT1ehQrr-wQuwq0OVRgDtPh2gnvRGfKIMiDXlZIuvMI",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRxb3Jza29taHFlemF6dHJkaHpjIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyNDg2MDQ4NSwiZXhwIjoyMDQwNDM2NDg1fQ.2VhaDTcy4Cuyrek0tdur92cXYr1zeIHMm0yMti4Kkn8",
          },
        })
        .then((response) => {
          const filteredData = response.data.filter((trip) => {
            // Filter trips by role, location, and date
            if (role && (!trip.user || trip.user.role !== role)) return false;
            if (
              location &&
              (!trip.location || trip.location.id !== Number(location))
            )
              return false;
            if (startDate && new Date(trip.start_date) < new Date(startDate))
              return false;
            return true;
          });
          this.filteredTrips = filteredData;
          console.log("Filtered trips:", this.filteredTrips);
        })
        .catch((error) => {
          console.error("Error fetching filtered trips:", error);
        });
    },

  },
};
</script>

<style scoped>
/* Add any styles needed */
</style>
