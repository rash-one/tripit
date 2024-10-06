<template>
  <div class="container mx-auto px-4 w-full">
   

    <!-- Main Card -->
    <div
      class="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-4 my-10 p-4 xl:p-0"
    >
      <article
        class="overflow-hidden rounded-lg shadow transition hover:shadow-lg"
        v-for="trip in tripsDetails"
        :key="trip.id"
      >
        <img
          alt=""
          class="h-[320px] w-full object-cover"
          :src="getImageUrl(trip.image_name)"
        />
            
            
        <div class="bg-white p-4 sm:p-6 flex flex-col gap-2 h-[330px] justify-between ">
          <h3 class=" text-lg text-[#ffb830]">
            <strong>{{ trip.title }}</strong>
          </h3>
          <h3 class=" text-lg text-[#ffb830]">
            <strong>{{$t('tripDate')}}</strong> {{ formatDate(trip.bookedDate) }}
          </h3>
          <h3 class=" text-lg text-[#ffb830]">
            <strong> {{$t('numTravelers')}}</strong> {{ trip.num }}
          </h3>
          <div class="buttons flex flex-col gap-2">
            <router-link
            :to="`/tripdetails/${trip.id}`"
            class="w-full text-center border border-[#ffb830] py-2 px-4 rounded-lg text-[#ffb830] font-bold hover:bg-[#ffb830] hover:text-slate-50 "
          >
            {{$t('Details')}}
          </router-link>
          <button
            @click="showInstructions = true"
            class="w-full text-center border border-[#ffb830] py-2 px-4 rounded-lg text-[#ffb830] font-bold hover:bg-[#ffb830] hover:text-slate-50 "
          >
             {{$t('Instructions')}}
          </button>
          <button
            @click="cancelTrip(trip.id, trip.bookedDate)"
            class="w-full text-center border border-red-600 py-2 px-4 rounded-lg text-red-600 font-bold hover:bg-red-600 hover:text-white "
          >
            {{$t('cancelTrip')}}
          </button>
          </div>
        </div>
      </article>
    </div>
    <!-- PopUp Inst. -->
    <div
      v-if="showInstructions"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div class="bg-white rounded-lg shadow-lg p-6 w-4/5 lg:w-1/3">
        <h2 class="text-xl font-bold text-[#ffb830] mb-4">{{$t('Instructions')}}</h2>
        <p class="text-sm mb-2">
          
          {{$t('Instructions1')}}
        </p>
        <p class="text-sm mb-2">
          {{$t('Instructions2')}}
          
        </p>
        <p class="text-sm mb-2">
          {{$t('Instructions3')}}
          
        </p>
        <p class="text-sm mb-2">
          {{$t('Instructions4')}}
        </p>
        <p class="text-sm mb-2">
          {{$t('Instructions5')}}
        </p>
        <p class="text-sm mb-2">
          {{$t('Instructions6')}}
          
        </p>
        <button
          @click="showInstructions = false"
          class="w-full text-center border border-[#ffb830] py-2 px-4 rounded-lg text-[#ffb830] font-bold hover:bg-[#ffb830] hover:text-white mt-4"
        >
          {{$t('close')}}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
import { supabase } from "../supabase";

export default {
  name: "userDash",
  data() {
    return {
      trips: [],
      tripsDetails: [],
      showInstructions: false,
    };
  },

  methods: {
    formatDate(dateString) {
      const date = new Date(dateString);
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed in JS
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    },
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
    getBookedTrips() {
      axios
        .get("https://dqorskomhqezaztrdhzc.supabase.co/rest/v1/booked_trips", {
          headers: {
            apikey:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRxb3Jza29taHFlemF6dHJkaHpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ4NjA0ODUsImV4cCI6MjA0MDQzNjQ4NX0.sT1ehQrr-wQuwq0OVRgDtPh2gnvRGfKIMiDXlZIuvMI",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRxb3Jza29taHFlemF6dHJkaHpjIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyNDg2MDQ4NSwiZXhwIjoyMDQwNDM2NDg1fQ.2VhaDTcy4Cuyrek0tdur92cXYr1zeIHMm0yMti4Kkn8",
          },
        })
        .then((response) => {
          const user_Trips = response.data.filter(
            (trip) => trip.user_id == this.user.id
          );
          this.trips = user_Trips;
          console.log(this.trips);
          const tripsId = this.trips.map((trip) => trip.trip_id);
          this.fetchTripsDetails(tripsId);
        })
        .catch((error) => {
          console.error("Error fetching trips:", error);
        });
    },
    fetchTripsDetails(tripsId) {
      axios
        .get("https://dqorskomhqezaztrdhzc.supabase.co/rest/v1/trips", {
          headers: {
            apikey:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRxb3Jza29taHFlemF6dHJkaHpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ4NjA0ODUsImV4cCI6MjA0MDQzNjQ4NX0.sT1ehQrr-wQuwq0OVRgDtPh2gnvRGfKIMiDXlZIuvMI",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRxb3Jza29taHFlemF6dHJkaHpjIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyNDg2MDQ4NSwiZXhwIjoyMDQwNDM2NDg1fQ.2VhaDTcy4Cuyrek0tdur92cXYr1zeIHMm0yMti4Kkn8",
          },
        })
        .then((response) => {
          this.tripsDetails = response.data;
          const tripsDetails = this.tripsDetails.filter((trip) =>
            tripsId.includes(trip.id)
          );
          this.tripsDetails = this.trips.map((bookedTrip) => {
            const tripDetail = tripsDetails.find(
              (trip) => trip.id === bookedTrip.trip_id
            );
            return {
              ...tripDetail,
              bookedDate: bookedTrip.date,
              num: bookedTrip.num,
            };
          });
          console.log(this.tripsDetails);
        })
        .catch((error) => {
          console.error("Error fetching tripsDetails:", error);
        });
    },
    cancelTrip(tripId, bookedDate) {
      axios
        .delete(
          `https://dqorskomhqezaztrdhzc.supabase.co/rest/v1/booked_trips?trip_id=eq.${tripId}&user_id=eq.${this.user.id}&date=eq.${bookedDate}`,
          {
            headers: {
              apikey:
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRxb3Jza29taHFlemF6dHJkaHpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ4NjA0ODUsImV4cCI6MjA0MDQzNjQ4NX0.sT1ehQrr-wQuwq0OVRgDtPh2gnvRGfKIMiDXlZIuvMI",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRxb3Jza29taHFlemF6dHJkaHpjIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyNDg2MDQ4NSwiZXhwIjoyMDQwNDM2NDg1fQ.2VhaDTcy4Cuyrek0tdur92cXYr1zeIHMm0yMti4Kkn8",
            },
          }
        )
        .then(() => {
          // Remove the canceled trip from the local state
          this.tripsDetails = this.tripsDetails.filter(
            (trip) => !(trip.id === tripId && trip.bookedDate === bookedDate)
          );
          console.log(
            `Trip with ID ${tripId} on date ${bookedDate} canceled successfully.`
          );
        })
        .catch((error) => {
          console.error("Error canceling trip:", error);
        });
    },
  },

  computed: {
    ...mapGetters(["getUser"]),
    user() {
      console.log(this.getUser);
      return this.getUser;
    },
  },
  created() {
    this.getBookedTrips();
  },
};
</script>

<style scoped></style>
