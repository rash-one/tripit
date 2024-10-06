<template>
  <div>
    <!-- TripSearch -->
    <div
      class="tripSearch w-8/12 flex flex-col lg:flex-row rounded-2xl p-6 justify-between items-center bg-white bg-opacity-10 backdrop-blur-md gap-4"
    >
      <!-- Provider Type -->
      <div class="flex items-center gap-4 py-4 w-full">
        <select
          id="providerType"
          v-model="selectedrole"
          class="bg-transparent cursor-pointer text-[#ffb830] w-full text-center"
        >
          <option disabled value="">{{$t('homeSearch1')}}</option>
          <option value="agency">{{$t('homeSearch1opt1')}}</option>
          <option value="tour">{{$t('homeSearch1opt2')}}</option>
          <option value="local">{{$t('homeSearch1opt3')}}</option>
        </select>
      </div>

      <!-- Trip Location -->
      <div class="flex items-center gap-4 py-4 w-full">
        <select
          id="location"
          v-model="selectedLocation"
          class="bg-transparent cursor-pointer text-[#ffb830] w-full  text-center"

        >
        <option disabled value="">{{$t('homeSearch2')}}</option>
        <option
            v-for="location in locations"
            :key="location.id"
            :value="location.id"
          >
            {{ location.gov_name }}
          </option>
        </select>
      </div>

      <!-- Start Date -->
      <div class="flex items-center gap-4 py-4 w-full">
        <input
          id="startDate"
          type="date"
          v-model="selectedStartDate"
          class="bg-transparent cursor-pointer text-[#ffb830] w-full text-center"
          placeholder="Select Date"
        />
      </div>

      <!-- Submit Button -->
      <button
        
        class="w-full self-center cursor-pointer bg-[#ffb830] hover:bg-[#feaf55] text-slate-50 p-3 rounded-xl"
        @click="searchTrips"
      > {{$t('SearchTrips')}}</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "homeSearch",
  data() {
    return {
      locations: [],
      selectedrole: "",
      selectedLocation: "",
      selectedStartDate: "",
    };
  },
  methods: {
    getLocations() {
      axios
        .get("https://dqorskomhqezaztrdhzc.supabase.co/rest/v1/locations", {
          headers: {
              apikey:
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRxb3Jza29taHFlemF6dHJkaHpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ4NjA0ODUsImV4cCI6MjA0MDQzNjQ4NX0.sT1ehQrr-wQuwq0OVRgDtPh2gnvRGfKIMiDXlZIuvMI",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRxb3Jza29taHFlemF6dHJkaHpjIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyNDg2MDQ4NSwiZXhwIjoyMDQwNDM2NDg1fQ.2VhaDTcy4Cuyrek0tdur92cXYr1zeIHMm0yMti4Kkn8",
            },
        })
        .then((response) => {
          this.locations = response.data;
        })
        .catch((error) => {
          console.error("Error fetching locations:", error);
        });
    },

    searchTrips() {
      const role = this.selectedrole || "";
      const location = this.selectedLocation || "";
      const startDate = this.selectedStartDate || "";

      // Redirect to the filtered trips page with query parameters
      this.$router.push({
        path: "/filteredSearch",
        query: { role, location, startDate },
      });
    },
  },
  created() {
    this.getLocations();
  },
};
</script>

<style scoped>

</style>
