<template>
  <div class="container mx-auto px-4 w-full">
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 xl:grid-cols-4 my-10 p-4 xl:p-0"
    >
      <article
        class="overflow-hidden rounded-lg shadow transition hover:shadow-lg"
        v-for="trip in filteredTrips"
        :key="trip.id"
      >
        <img
          alt=""
          class="h-56 w-full object-cover"
          :src="getImageUrl(trip.image_name)"
        />

        <div class="bg-white p-4 sm:p-6 flex flex-col gap-2 h-[330px] justify-between">
          <h3 class=" text-md text-[#ffb830]">
            <strong>{{ trip.title }}</strong>
          </h3>
          <h3 class=" text-md text-[#ffb830]">
            <strong> {{$t('bookedBy')}}</strong> {{ trip.user.username }}
          </h3>
          <h3 class=" text-md text-[#ffb830]">
            <strong> {{$t('bookedOn')}}</strong> {{ trip.booking.date }}
          </h3>
          <h3 class=" text-md text-[#ffb830]">
            <strong>{{$t('numTravelers')}} </strong> {{ trip.booking.num }}
          </h3>
          <h3 class="text-md text-[#ffb830]">
            <strong>{{$t('totalPrice')}}</strong> {{ trip.booking.total_price }}
          </h3>

          <router-link
            :to="`/tripdetails/${trip.id}`"
            class="w-full text-center border border-[#ffb830] py-2 px-4 rounded-lg text-[#ffb830] font-bold hover:bg-[#ffb830] hover:text-slate-50 "
          >
             {{$t('tripDetails')}}
          </router-link>

          <button
            @click="showUserDetails(trip.user)"
            class="w-full text-center border border-[#ffb830] py-2 px-4 rounded-lg text-[#ffb830] font-bold hover:bg-[#ffb830] hover:text-slate-50 mt-2"
          >
            {{$t('userDetails')}}
          </button>
        </div>
      </article>
    </div>

    <!-- Modal to show user details -->
    <div
      v-if="selectedUser"
      class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
    >
      <div class="bg-white rounded-lg p-6 w-1/2">
        <h2 class="text-2xl font-bold mb-4 text-[#ffb830]">{{$t('userDetails')}}</h2>
        <p class="text-[#ffb830]"><strong>{{$t('Name')}}</strong> {{ selectedUser.username }}</p>
        <p class="text-[#ffb830]"><strong>{{$t('email')}}</strong>  {{ selectedUser.email }}</p>
        <p class="text-[#ffb830]"><strong>{{$t('phone')}}</strong> {{ selectedUser.phone }}</p>
        <p class="text-[#ffb830]"><strong>{{$t('gender')}}</strong> {{ selectedUser.gender }}</p>
        <button
          @click="closeUserDetails"
          class="mt-4 px-4 py-2 bg-[#ffb830] text-white rounded-lg"
        >
          {{$t('close')}}
        </button>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
import { supabase } from "../supabase";

export default {
  name: "BookedTripsProviderDash",
  data() {
    return {
      trips: [],
      providerId: null,
      selectedUser: null, 
    };
  },
  computed: {
    filteredTrips() {
      return this.trips.filter((trip) => trip.creator_id === this.providerId);
    },
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
    getBookedTrips() {
      // Fetch booked trips and join with trip details and user info
      axios
        .get(
          "https://dqorskomhqezaztrdhzc.supabase.co/rest/v1/booked_trips?select=*,trips(*),users(*)",
          {
            headers: {
              apikey:
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRxb3Jza29taHFlemF6dHJkaHpjIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyNDg2MDQ4NSwiZXhwIjoyMDQwNDM2NDg1fQ.2VhaDTcy4Cuyrek0tdur92cXYr1zeIHMm0yMti4Kkn8",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRxb3Jza29taHFlemF6dHJkaHpjIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyNDg2MDQ4NSwiZXhwIjoyMDQwNDM2NDg1fQ.2VhaDTcy4Cuyrek0tdur92cXYr1zeIHMm0yMti4Kkn8",
            },
          }
        )
        .then((response) => {
          this.trips = response.data.map((booking) => ({
            booking,
            ...booking.trips,
            user: booking.users,
          }));
        })
        .catch((error) => {
          console.error("Error fetching trips:", error);
        });
    },
    showUserDetails(user) {
      this.selectedUser = user;
      console.log(this.selectedUser);
    },
    closeUserDetails() {
      this.selectedUser = null;
    },
  },
  created() {
    this.providerId = this.$store.state.user.id; // Assuming provider id is stored in the Vuex store
    this.getBookedTrips();
  },
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal-content {
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 500px;
  max-width: 90%;
}
</style>
