<template>
  <div class="container mx-auto px-4 py-6">
    <!-- Table for Users -->
    


    <div class="w-full overflow-x-auto shadow-md rounded-lg">
      <table class="min-w-full table-auto bg-white rounded-lg">
        <thead class="bg-[#ffb830] text-white text-left">
          <tr>
            <th class="px-4 py-3  border-[#ffe7bb]"></th>
            <th class="px-4 py-3  border-[#ffe7bb]">{{$t('email')}}</th>
            <th class="px-4 py-3 ">{{$t('gender')}}</th>
            <th class="px-4 py-3">{{$t('actions')}}</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="user in users"
            :key="user.id"
            class="border-t hover:bg-gray-50 transition duration-150"
          >
            <td class="px-4 py-3 ">
              {{ user.username }}
            </td>
            <td class="px-4 py-3 ">{{ user.email }}</td>
            <td class="px-4 py-3 ">{{ user.gender }}</td>
            <td class="px-4 py-3 space-x-2 flex">
              <button
                v-if="user.role !== 'super'"
                @click="deleteUser(user)"
                class="bg-white text-red-500 py-1 px-2 hover:bg-red-500 hover:text-white border-2 border-red-500 rounded-lg transition"
              >
                {{$t('delete')}}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "allusers",
  data() {
    return {
      users: [],
    };
  },
  created(){
    this.getallusers();
  },
  methods: {
    getallusers() {
      axios
        .get(
          "https://dqorskomhqezaztrdhzc.supabase.co/rest/v1/users?role=eq.user",
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
          this.users = response.data;
        })
        .catch((error) => {
          console.error("Error fetching users:", error);
        });
    },
    deleteUser(user) {
      axios
      .delete(`https://dqorskomhqezaztrdhzc.supabase.co/rest/v1/users?id=eq.${user.id}`, {
        headers: {
              apikey:
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRxb3Jza29taHFlemF6dHJkaHpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ4NjA0ODUsImV4cCI6MjA0MDQzNjQ4NX0.sT1ehQrr-wQuwq0OVRgDtPh2gnvRGfKIMiDXlZIuvMI",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRxb3Jza29taHFlemF6dHJkaHpjIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyNDg2MDQ4NSwiZXhwIjoyMDQwNDM2NDg1fQ.2VhaDTcy4Cuyrek0tdur92cXYr1zeIHMm0yMti4Kkn8",
              "Content-Type": "application/json",
              Prefer: "return=representation",
            },
      })
      .then(() => {
        this.users = this.users.filter((u) => u.id !== user.id);
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
    },
  },
};
</script>

<style scoped></style>
