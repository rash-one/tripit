<template>
  <div
    class="container mx-auto px-4 flex flex-col lg:flex-row items-center h-screen justify-center"
  >
    <form
      @submit.prevent="submitPapers"
      class="w-full lg:w-6/12 bg-[#ffe7bb] flex flex-col p-8 rounded-2xl my-10 lg:my-0"
    >
      <div class="logo flex flex-row items-center mb-8">
        <img src="../assets/egypt (2).png" alt="" width="48px" />
        <div class="title">
          <h1 class="text-3xl font-bold text-[#ffb830]">Trip It</h1>
        </div>
      </div>
      <div class="form_title">
        <h1 class="text-[#02073f] font-bold mt-4">
          {{$t('hello')}}, {{ user.username }}
        </h1>
        <p class="text-[#02073f] font-bold mt-4">{{$t('email')}}: {{ user.email }}</p>
        <p class="text-[#02073f] font-bold mt-4">{{$t('gender')}}: {{ user.gender }}</p>
        <p class="text-[#02073f] font-bold mt-4">{{$t('role')}}: {{ user.role }}</p>
      </div>
      <div class="form_input flex flex-col">
        <label for="id_img" class="text-[#02073f] font-bold mt-4"
          > {{$t('ID')}}</label
        >
        <input
          type="text"
          class="w-full bg-slate-50 p-2 rounded-lg"
          v-model="id_img"
          required
        />
        <label for="check_paper" class="text-[#02073f] font-bold mt-4"
          > {{$t('Official')}}</label
        >
        <input
          type="text"
          class="w-full bg-slate-50 p-2 rounded-lg"
          v-model="check_paper"
          required
        />
      </div>

      <button
        type="submit"
        class="w-full bg-[#ffb830] p-2 rounded-lg mt-5 text-[#ffffff] font-bold hover:bg-[#feaf55] hover:text-slate-50"
      >
         {{$t('submitPaper')}}
      </button>
    </form>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";

export default {
  name: "papersPage",
  data() {
    return {
      id_img: null,
      check_paper: null,
    };
  },
  computed: {
    ...mapGetters(["getUser"]),
    user() {
      return this.getUser;
    },
  },
  methods: {
    getUserId() {
      const userId = this.user.id; // Assuming you have stored the user's ID when they signed up
      return userId;
    },
    
    submitPapers() {
      const userId = this.getUserId();
      const id_img = this.id_img;
      const check_paper = this.check_paper;
      const updatedData = {
        id_img,
        check_paper,
      };
      
      if (!id_img || !check_paper) {
        alert("Please upload all files");
        return;
      }
      console.log(this.user.id)
      axios
        .patch(
          `https://dqorskomhqezaztrdhzc.supabase.co/rest/v1/users?id=eq.${this.user.id}`, 
          updatedData,
          {
            headers: {
              apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRxb3Jza29taHFlemF6dHJkaHpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ4NjA0ODUsImV4cCI6MjA0MDQzNjQ4NX0.sT1ehQrr-wQuwq0OVRgDtPh2gnvRGfKIMiDXlZIuvMI",
              Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRxb3Jza29taHFlemF6dHJkaHpjIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyNDg2MDQ4NSwiZXhwIjoyMDQwNDM2NDg1fQ.2VhaDTcy4Cuyrek0tdur92cXYr1zeIHMm0yMti4Kkn8",
              "Content-Type": "application/json",
            },
          }
        )
        .then(() => {
          this.$router.push("/papersSubmitted");
          console.log(updatedData);
        })
        .catch((error) => {
          console.log("Error:", error);
        });
    },
  },
};
</script>

<style scoped></style>
