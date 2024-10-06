<template>
  <nav
    class="bg-white bg-opacity-10 backdrop-blur-md fixed top-0 w-full z-[999] shadow-lg"
  >
    <div class="container mx-auto px-4 flex justify-between items-center">
      <!-- Logo -->
      <div class="py-4">
        <router-link to="/home" class="font-bold text-[#ffb830]">
          <div class="logo flex flex-row items-center justify-center">
            <!-- <img src="../assets/egypt.png" alt="" width="48" height="48"> -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.0"
              width="48"
              height="48"
              viewBox="0 0 64.000000 64.000000"
              preserveAspectRatio="xMidYMid meet"
            >
              <g
                transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
                fill="#none"
                stroke="#ffb830"
              >
                <path
                  d="M73 588 c-4 -7 -13 -28 -20 -47 -10 -28 -9 -40 3 -63 12 -24 13 -54 4 -195 -5 -93 -10 -175 -10 -184 0 -19 59 -27 273 -34 81 -3 146 -10 157 -17 16 -10 23 -8 44 15 15 16 26 31 26 35 0 4 9 13 21 20 11 7 18 19 16 26 -3 8 0 19 6 25 8 8 7 14 -5 23 -9 7 -26 34 -38 60 -12 26 -28 52 -36 59 -8 6 -14 17 -14 24 0 7 -7 19 -16 26 -17 14 -66 110 -60 117 3 2 12 -9 22 -25 22 -35 55 -73 65 -73 3 0 16 23 28 50 l22 51 -22 59 c-23 63 -29 69 -49 45 -14 -17 -80 -21 -80 -4 0 6 -6 9 -14 6 -7 -3 -18 -1 -23 4 -5 5 -28 1 -57 -10 -39 -14 -58 -16 -99 -9 -28 5 -64 7 -79 4 -20 -4 -30 -1 -34 9 -7 18 -20 19 -31 3z m64 -34 c15 4 51 2 78 -3 38 -7 61 -6 97 6 34 11 51 12 66 4 26 -14 87 -14 112 -1 16 8 20 4 34 -36 14 -41 14 -48 -1 -79 -16 -33 -18 -34 -35 -18 -10 9 -18 21 -18 28 0 6 -11 22 -26 35 -21 21 -27 22 -34 10 -5 -8 -10 -18 -10 -22 0 -15 35 -84 57 -111 13 -16 23 -34 23 -42 0 -7 7 -18 16 -26 20 -16 66 -107 70 -137 1 -14 -5 -26 -17 -32 -10 -6 -19 -15 -19 -21 0 -21 -35 -48 -50 -39 -8 5 -29 10 -45 10 -17 0 -36 5 -43 12 -8 8 -15 8 -26 -1 -11 -9 -46 -10 -152 -2 -75 6 -139 12 -141 14 -1 2 2 83 7 180 8 131 8 182 0 198 -7 12 -9 36 -5 56 5 28 9 32 20 23 8 -7 26 -9 42 -6z"
                  fill="#ffb830"
                />
              </g>
            </svg>
            <h1 class="font-bold hidden xl:flex xl:text-2xl">Trip It</h1>
          </div>
        </router-link>
      </div>

      <div class="lg:hidden">
        <button @click="toggleMenu" class="focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#ffb830"
            stroke="#ffb830"
            viewBox="0 0 24 24"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      <!-- Nav Links and Search Bar (Hidden on small screens) -->
      <div class="hidden lg:flex items-center space-x-6">


        <button @click="setEng() "  class="bg-[#ffb830] hover:bg-[#feaf55] text-white px-4 py-2 rounded-lg mx-2">EN   </button>
        <button @click="setAr()" class="bg-[#ffb830] hover:bg-[#feaf55] text-white px-4 py-2 rounded-lg mx-2">AR   </button>

     

        <router-link
          to="/home"
          class="hover:text-[#ffb830] text-[#313131] text-md xl:text-lg font-medium"
          active-class="active-link"
          >{{$t('nav1')}}</router-link
        >
        <router-link
          to="/alltrips"
          class="hover:text-[#ffb830] text-[#313131] text-md xl:text-lg font-medium"
          active-class="active-link"
          >{{$t('nav2')}}</router-link
        >
        <router-link
          to="/agency"
          class="hover:text-[#ffb830] text-[#313131] text-md xl:text-lg font-medium"
          active-class="active-link"
          >{{$t('homeSearch1opt1')}}</router-link
        >
        <router-link
          to="/tourtrips"
          class="hover:text-[#ffb830] text-[#313131] text-md xl:text-lg font-medium"
          active-class="active-link"
          >{{$t('homeSearch1opt2')}}</router-link
        >
        <router-link
          to="/localtrips"
          class="hover:text-[#ffb830] text-[#313131] text-md xl:text-lg font-medium"
          active-class="active-link"
          >{{$t('homeSearch1opt3')}}</router-link
        >
        <router-link
          to="/gallery"
          class="hover:text-[#ffb830] text-[#313131] text-md xl:text-lg font-medium"
          active-class="active-link"
          >{{$t('nav3')}}</router-link
        >

        <!-- Search Bar -->
        <div class="relative">
          <input
            v-model="searchQuery"
            @input="filterTrips"
            type="text"
            placeholder="Search Trips..."
            class="p-2 rounded-lg border-[#ffb830] bg-[#ffffff] text-[#ffb830] focus:outline-none"
          />
          <!-- Search Results Dropdown -->
          <div
            v-if="filteredTrips.length"
            class="absolute bg-white rounded-lg shadow-lg w-full mt-2"
          >
            <ul>
              <li
                v-for="trip in filteredTrips"
                :key="trip.id"
                @click="goToTripDetails(trip.id)"
                class="p-2 cursor-pointer hover:bg-gray-200"
              >
                {{ trip.title }}
              </li>
            </ul>
          </div>
        </div>

        <!-- Login / Username Button -->
        <button
          v-if="!user"
          @click="login"
          class="bg-[#ffb830] hover:bg-[#feaf55] text-white px-4 py-2 rounded-lg"
        >
          {{$t('loginBtn')}}
        </button>
        <div v-else class="text-[#ffb830] text-lg font-medium">
          <router-link to="/profile" class="flex flex-row gap-2">
            <svg
              viewBox="0 0 24 24"
              width="24px"
              height="24px"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M12.12 12.78C12.05 12.77 11.96 12.77 11.88 12.78C10.12 12.72 8.71997 11.28 8.71997 9.50998C8.71997 7.69998 10.18 6.22998 12 6.22998C13.81 6.22998 15.28 7.69998 15.28 9.50998C15.27 11.28 13.88 12.72 12.12 12.78Z"
                  stroke="#ffb830"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M18.74 19.3801C16.96 21.0101 14.6 22.0001 12 22.0001C9.40001 22.0001 7.04001 21.0101 5.26001 19.3801C5.36001 18.4401 5.96001 17.5201 7.03001 16.8001C9.77001 14.9801 14.25 14.9801 16.97 16.8001C18.04 17.5201 18.64 18.4401 18.74 19.3801Z"
                  stroke="#ffb830"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="#ffb830"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
            </svg>
            {{ user.username }}
          </router-link>
        </div>
      </div>
    </div>
    
    
    <div class="container mx-auto">

      <!-- Dropdown Menu (Visible on small screens) -->
      <div v-if="isMenuOpen" class="lg:hidden">
        <button @click="$i18n.locale = 'EN' "  class="bg-[#ffb830] hover:bg-[#feaf55] text-white px-2 py-1 rounded-lg mx-2">EN   </button>
    <button @click="$i18n.locale = 'AR' " class="bg-[#ffb830] hover:bg-[#feaf55] text-white px-2 py-1 rounded-lg mx-2">AR   </button>

        <router-link
          to="/home"
          class="hover:text-[#ffb830] block py-2 px-4 text-sm text-[#313131 ]"
          active-class="active-link"
          >{{$t('nav1')}}</router-link
        >
        <router-link
          to="/alltrips"
          class="hover:text-[#ffb830] block py-2 px-4 text-sm text-[#313131]"
          active-class="active-link"
          >{{$t('nav2')}}</router-link
        >
        <router-link
          to="/agency"
          class="hover:text-[#ffb830] block py-2 px-4 text-sm text-[#313131]"
          active-class="active-link"
          >{{$t('homeSearch1opt1')}}</router-link
        >
        <router-link
          to="/tourtrips"
          class="hover:text-[#ffb830] block py-2 px-4 text-sm text-[#313131]"
          active-class="active-link"
          >{{$t('homeSearch1opt2')}}</router-link
        >
        <router-link
          to="/localtrips"
          class="hover:text-[#ffb830] block py-2 px-4 text-sm text-[#313131]"
          active-class="active-link"
          >{{$t('homeSearch1opt3')}}</router-link
        >
        <router-link
          to="/gallery"
          class="hover:text-[#ffb830] block py-2 px-4 text-sm text-[#313131]"
          active-class="active-link"
          >{{$t('nav3')}}</router-link
        >

        <!-- Search Bar -->
        <div class="py-2 px-4">
          <input
            v-model="searchQuery"
            @input="filterTrips"
            type="text"
            placeholder="Search..."
            class="border p-2 w-full rounded-lg bg-[#ffffff] text-[#ffb830] focus:outline-none"
          />
        </div>
        <div
          v-if="filteredTrips.length"
          class="absolute bg-white rounded-lg shadow-lg w-full mt-2"
        >
          <ul>
            <li
              v-for="trip in filteredTrips"
              :key="trip.id"
              @click="goToTripDetails(trip.id)"
              class="p-2 cursor-pointer hover:bg-gray-200"
            >
              {{ trip.title }}
            </li>
          </ul>
        </div>

        <!-- Login / Username Button -->

        <button
          v-if="!user"
          @click="login"
          class="bg-[#ffb830] text-white w-12/12 px-4 py-2 mx-4 rounded-lg"
        >
          {{$t('loginBtn')}}
        </button>
        <div v-else class="py-2 px-4 text-sm text-[#ffb830]">
          <router-link to="/profile" class="flex flex-row gap-2">
            <svg
              viewBox="0 0 24 24"
              width="24px"
              height="24px"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M12.12 12.78C12.05 12.77 11.96 12.77 11.88 12.78C10.12 12.72 8.71997 11.28 8.71997 9.50998C8.71997 7.69998 10.18 6.22998 12 6.22998C13.81 6.22998 15.28 7.69998 15.28 9.50998C15.27 11.28 13.88 12.72 12.12 12.78Z"
                  stroke="#ffb830"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M18.74 19.3801C16.96 21.0101 14.6 22.0001 12 22.0001C9.40001 22.0001 7.04001 21.0101 5.26001 19.3801C5.36001 18.4401 5.96001 17.5201 7.03001 16.8001C9.77001 14.9801 14.25 14.9801 16.97 16.8001C18.04 17.5201 18.64 18.4401 18.74 19.3801Z"
                  stroke="#ffb830"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="#ffb830"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
            </svg>
            {{ user.username }}
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      isMenuOpen: false,
      user: this.$store.getters.getUser,
      searchQuery: "",
      trips: [],
      filteredTrips: [],
      
    };
  },

  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    login() {
      this.$router.push("/login");
      console.log("Login clicked");
    },
    filterTrips() {
      this.filteredTrips = this.trips.filter((trip) =>
        trip.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
    goToTripDetails(tripId) {
      this.$router.push(`/tripdetails/${tripId}`);
      this.searchQuery = "";
      this.filteredTrips = [];
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    fetchTrips() {
      // Fetch the trips from your API
      axios
        .get(
          "https://dqorskomhqezaztrdhzc.supabase.co/rest/v1/trips?select=id,title",
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
          console.error("Error fetching trips:", error);
        });
    },
    setEng(){
      this.$i18n.locale = 'EN';
      localStorage.setItem("lang","EN")
      document.documentElement.dir= "ltr"
      
    },
    setAr(){
      this.$i18n.locale = 'AR';
      localStorage.setItem("lang","AR")
      document.documentElement.dir= "rtl"
     
    }
  },
  created() {
    this.fetchTrips();
    let lang = localStorage.getItem("lang")
    if( lang === "AR"){
       document.documentElement.dir= "rtl"
    }else{
      document.documentElement.dir= "ltr"
    }
  },
};
</script>

<style scoped>
.active-link {
  color: #ffb830;
  border-bottom: 2px solid #ffb830;
}
</style>
