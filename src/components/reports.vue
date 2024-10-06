<template>
  <div class="container mx-auto px-4 w-full">
    <div class="flex flex-col p-4 gap-8">
      <div class="accounts flex flex-col gap-2">
        <h1 class="text-3xl font-bold text-[#ffb830] mb-2"> {{$t('acc')}}</h1>
        <div class="cards flex flex-col xl:flex-row w-full gap-2">
          <div
            class="totalAgencies flex flex-col border-2 border-[#ffb830] shadow-lg rounded-xl p-6 w-full xl:w-3/12 gap-2"
          >
            <h1 class="text-[#ffb830] text-2xl font-medium"> {{$t('Agencies')}}</h1>
            <h1 class="text-6xl text-[#ffb830] font-medium">
              {{ agencies.length }}
            </h1>
          </div>
          <div
            class="totalTourGuides flex flex-col border-2 border-[#ffb830] shadow-lg rounded-xl p-6 w-full xl:w-3/12 gap-2"
          >
            <h1 class="text-[#ffb830] text-2xl font-medium"> {{$t('TourGuys')}}</h1>
            <h1 class="text-6xl text-[#ffb830] font-medium">
              {{ tourGuides.length }}
            </h1>
          </div>
          <div
            class="totalTourGuides flex flex-col border-2 border-[#ffb830] shadow-lg rounded-xl p-6 w-full xl:w-3/12 gap-2"
          >
            <h1 class="text-[#ffb830] text-2xl font-medium">{{$t('TourGuys')}}</h1>
            <h1 class="text-6xl text-[#ffb830] font-medium">
              {{ local.length }}
            </h1>
          </div>
          <div
            class="totalUsers flex flex-col border-2 border-[#ffb830] shadow-lg rounded-xl p-6 w-full xl:w-3/12 gap-2"
          >
            <h1 class="text-[#ffb830] text-2xl font-medium"> {{$t('tripitians')}}</h1>
            <h1 class="text-6xl text-[#ffb830] font-medium">
              {{ users.length }}
            </h1>
          </div>
        </div>
        <div
          class="total flex flex-col border-2 border-[#ffb830] shadow-lg rounded-xl p-6 w-full xl:w-full gap-2"
        >
          <h1 class="text-[#ffb830] text-2xl font-medium"> {{$t('totalEnergies')}}</h1>
          <h1 class="text-6xl text-[#ffb830] font-medium">
            {{ allUsers.length }}
          </h1>
        </div>
      </div>
      <div class="trips flex flex-col gap-2">
        <h1 class="text-3xl font-bold text-[#ffb830] mb-2"> {{$t('Trips')}}</h1>
        <div class="cards flex flex-col xl:flex-row w-full gap-2">
          <div
            class="agenciesTrip flex flex-col border-2 border-[#ffb830] shadow-lg rounded-xl p-6 w-full xl:w-4/12 gap-2"
          >
            <h1 class="text-[#ffb830] text-2xl font-medium"> {{$t('ATrips')}}</h1>
            <h1 class="text-6xl text-[#ffb830] font-medium">
              {{ agencysTrips.length }}
            </h1>
          </div>
          <div
            class="TourTrip flex flex-col border-2 border-[#ffb830] shadow-lg rounded-xl p-6 w-full xl:w-4/12 gap-2"
          >
            <h1 class="text-[#ffb830] text-2xl font-medium"> {{$t('TTrips')}}</h1>
            <h1 class="text-6xl text-[#ffb830] font-medium">
              {{ tourGuidesTrips.length }}
            </h1>
          </div>
          <div
            class="localTrip flex flex-col border-2 border-[#ffb830] shadow-lg rounded-xl p-6 w-full xl:w-4/12 gap-2"
          >
            <h1 class="text-[#ffb830] text-2xl font-medium"> {{$t('LTrips')}}</h1>
            <h1 class="text-6xl text-[#ffb830] font-medium">
              {{ localTrips.length }}
            </h1>
          </div>
        </div>
        <div
          class="total flex flex-col border-2 border-[#ffb830] shadow-lg rounded-xl p-6 w-full xl:w-full gap-2"
        >
          <h1 class="text-[#ffb830] text-2xl font-medium"></h1>
          <h1 class="text-6xl text-[#ffb830] font-medium">
            {{ allTrips.length }}
          </h1>
        </div>
      </div>
      <div class="earn flex flex-col gap-2">
        <h1 class="text-3xl font-bold text-[#ffb830] mb-2"> {{$t('Earnings')}}</h1>
        <div
          class="total flex flex-col border-2 border-[#ffb830] shadow-lg rounded-xl p-6 w-full xl:w-full gap-2"
        >
          <h1 class="text-[#ffb830] text-2xl font-medium">{{$t('totalEnergies')}}</h1>
          <h1 class="text-6xl text-[#ffb830] font-medium">
            {{ totalEarning }} EGP
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "reports",
  data() {
    return {
      allUsers: [],
      agencies: [],
      tourGuides: [],
      local: [],
      users: [],
      allTrips: [],
      agencysTrips: [],
      tourGuidesTrips: [],
      localTrips: [],
      bookedTrips: [],
      totalEarning: 0
    };
  },
  methods: {
    getAllUsers() {
      axios
        .get(
          "https://dqorskomhqezaztrdhzc.supabase.co/rest/v1/users?role=neq.super",
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
          this.allUsers = response.data;
          this.agencies = response.data.filter(
            (user) => user.role === "agency"
          );
          this.tourGuides = response.data.filter(
            (user) => user.role === "tour"
          );
          this.users = response.data.filter((user) => user.role === "user");
          this.local = response.data.filter((user) => user.role === "local");
          console.log(this.allUsers);
        })
        .catch((error) => {
          console.error("Error fetching users:", error);
        });
    },
    getAllTrips() {
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
          this.allTrips = response.data;
          this.agencysTrips = this.allTrips.filter((trip) =>
            this.agencies.some((agency) => agency.id === trip.creator_id)
          );

          this.tourGuidesTrips = this.allTrips.filter((trip) =>
            this.tourGuides.some((guide) => guide.id === trip.creator_id)
          );

          this.localTrips = this.allTrips.filter((trip) =>
            this.local.some((localUser) => localUser.id === trip.creator_id)
          );

          console.log(this.agencysTrips);
          console.log(this.tourGuidesTrips);
          console.log(this.localTrips);
        })
        .catch((error) => {
          console.error("Error fetching trips:", error);
        });
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
          this.bookedTrips = response.data;
          this.totalEarn();
          console.log(this.bookedTrips);
        })
        .catch((error) => {
          console.error("Error fetching trips:", error);
        });
    },
    totalEarn(){
        this.totalEarning = this.bookedTrips .filter((trip) => trip.total_price !== null) 
        .reduce((sum, trip) => sum + trip.total_price, 0); 
    }
  },
  created() {
    this.getAllUsers();
    this.getAllTrips();
    this.getBookedTrips();
  },
};
</script>

<style scoped></style>
