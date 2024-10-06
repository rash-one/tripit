<template>
  <div class="container mx-auto px-4 py-6">
   


    <!-- Category Buttons -->
    <div class="w-full flex justify-center space-x-3 mb-6">
      <button
        @click="selectProvider = 'agency'"
        class="transition  py-2 px-4 rounded-lg text-[#ffb830] border-2 border-[#ffb830] font-medium lg:font-semibold hover:bg-[#ffb830] hover:text-white "
        :class="selectProvider === 'agency' ? 'bg-[#ffb830] text-white' : ''"
      >
        {{$t('homeSearch1opt1')}}
      </button>
      <button
        @click="selectProvider = 'tour'"
        class="transition  py-2 px-4 rounded-lg text-[#ffb830] border-2 border-[#ffb830] font-medium lg:font-semibold hover:bg-[#ffb830] hover:text-white "
        :class="selectProvider === 'tour' ? 'bg-[#ffb830] text-white' : ''"
      >
        {{$t('homeSearch1opt2')}}
      </button>
      <button
        @click="selectProvider = 'local'"
        class="transition  py-2 px-4 rounded-lg text-[#ffb830] border-2 border-[#ffb830] font-medium lg:font-semibold hover:bg-[#ffb830] hover:text-white "
        :class="selectProvider === 'local' ? 'bg-[#ffb830] text-white' : ''"
      >
        {{$t('homeSearch1opt3')}}
      </button>
    </div>

    <!-- Table for Users -->
    <div v-if="selectProvider" class="w-full overflow-x-auto shadow-md rounded-lg">
      <table class="min-w-full table-auto bg-white rounded-lg">
        <thead class="bg-[#ffb830] text-white text-left">
          <tr>
            <th class="px-4 py-3">{{$t('userName')}}</th>
            <th class="px-4 py-3">{{$t('email')}}</th>
            <th v-if="selectProvider !== 'agency'" class="px-4 py-3">{{$t('gender')}}</th>
            <th class="px-4 py-3">{{$t('Approved')}}</th>
            <th class="px-4 py-3">{{$t('actions')}}</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="user in filteredUsers"
            :key="user.id"
            class="border-t hover:bg-gray-50 transition duration-150"
          >
            <td class="px-4 py-3">{{ user.username }}</td>
            <td class="px-4 py-3">{{ user.email }}</td>
            <td v-if="selectProvider !== 'agency'" class="px-4 py-3">{{ user.gender }}</td>
            <td class="px-4 py-3">
              <svg v-if="user.approved" height="32px" width="32px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 39.428 39.428" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path style="fill:#ffb830;" d="M38.783,8.467c-0.578-0.751-1.514-1.199-2.502-1.199c-0.688,0-1.354,0.222-1.881,0.625 L12.209,24.942l-6.95-6.487c-1.172-1.096-3.325-1.02-4.417,0.152c-0.569,0.61-0.867,1.405-0.84,2.241 c0.029,0.833,0.382,1.607,0.992,2.176l8.887,8.295c0.582,0.543,1.34,0.842,2.133,0.842c0.693,0,1.352-0.225,1.904-0.648 L38.21,12.85C39.574,11.802,39.833,9.835,38.783,8.467z M36.99,11.264L12.699,29.927c-0.406,0.312-1.081,0.278-1.455-0.068 l-8.886-8.295c-0.22-0.205-0.347-0.483-0.356-0.785c-0.011-0.3,0.096-0.587,0.301-0.806c0.216-0.231,0.509-0.358,0.824-0.358 c0.286,0,0.559,0.108,0.769,0.303l8.188,7.644L35.617,9.481c0.459-0.352,1.232-0.248,1.58,0.205 C37.574,10.178,37.483,10.886,36.99,11.264z"></path> </g> </g></svg>
              <svg v-else height="24px" width="24px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32.235 32.235" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path style="fill:#ff0000;" d="M30.044,24.737l-7.799-8.566c-0.027-0.031-0.028-0.121,0-0.149l7.799-8.571 c1.66-1.827,1.526-4.666-0.299-6.329c-0.796-0.723-1.86-1.121-2.997-1.121c-1.295,0-2.51,0.517-3.333,1.419l-7.297,8.019 L8.822,1.42C8,0.518,6.787,0,5.493,0C4.355,0,3.29,0.398,2.492,1.122C0.665,2.785,0.531,5.624,2.194,7.453l7.797,8.566 c0.027,0.031,0.028,0.122,0,0.151l-7.799,8.569c-1.661,1.828-1.527,4.667,0.3,6.33c0.795,0.724,1.859,1.121,2.997,1.121 c1.295,0,2.51-0.519,3.333-1.419l7.296-8.02l7.297,8.018c0.847,0.932,2.055,1.466,3.313,1.466c1.116,0,2.188-0.414,3.018-1.167 C31.57,29.405,31.704,26.566,30.044,24.737z M28.227,29.396c-0.834,0.754-2.388,0.683-3.139-0.147l-7.373-8.101 c-0.419-0.464-0.985-0.718-1.596-0.718c-0.61,0-1.176,0.254-1.596,0.715L7.15,29.249c-0.4,0.44-1.001,0.693-1.652,0.693 c-0.569,0.001-1.097-0.193-1.485-0.546c-0.905-0.824-0.972-2.231-0.147-3.138l7.798-8.57c0.812-0.895,0.814-2.295,0-3.19 L3.866,5.931C3.042,5.025,3.108,3.617,4.012,2.793C4.845,2.036,6.4,2.112,7.151,2.939l7.373,8.101 c0.805,0.89,2.385,0.89,3.191,0.002l7.371-8.102c0.755-0.829,2.311-0.904,3.139-0.148c0.438,0.398,0.695,0.944,0.723,1.537 c0.027,0.594-0.176,1.162-0.574,1.6L20.575,14.5c-0.812,0.894-0.812,2.295,0,3.19l7.799,8.566 C29.197,27.164,29.132,28.571,28.227,29.396z"></path> </g> </g></svg>
            </td>
            <td class="px-4 py-3 space-x-2 flex">
              <button
                v-if="user.role !== 'super'"
                @click="openPopup(user)"
                class="bg-white text-[#ffb830] py-1 px-2 hover:bg-[#ffb830] hover:text-white border-2 border-[#ffb830] rounded-lg transition"
              >
                {{$t('showPapers')}}
              </button>
              <button
                v-if="user.role !== 'super'"
                @click="toggleApproved(user)"
                class="bg-white text-[#ffb830] py-1 px-2 hover:bg-[#ffb830] hover:text-white border-2 border-[#ffb830] rounded-lg transitionn"
              >
                {{ user.approved ? $t('Decline') : $t('Approved') }}
              </button>
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

    <!-- Popup Modal -->
    <div v-if="showPopup" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div class="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-lg">
        <div class="flex flex-col space-y-4">
          <!-- Dynamically display selected user's images -->
          <img :src="selectedUser.id_img" alt="ID Image" class="w-full h-48 object-cover rounded-lg shadow" />
          <img :src="selectedUser.check_paper" alt="Check Paper" class="w-full h-48 object-cover rounded-lg shadow" />
        </div>
        <div class="mt-6 text-right">
          <button
            @click="closePopup"
            class="bg-[#ffb830] py-2 px-4 rounded-lg text-white font-bold hover:bg-[#ff9800] transition"
          >
            {{$t('close')}}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SuperAdminPage",
  data() {
    return {
      users: [],
      selectProvider: "agency",
      showPopup: false,
      selectedUser: null,
    };
  },
  created() {
    this.fetchUsers();
  },
  computed: {
    filteredUsers() {
      return this.users.filter((user) => user.role === this.selectProvider);
    },
  },
  methods: {
    fetchUsers() {
      axios
        .get(
          "https://dqorskomhqezaztrdhzc.supabase.co/rest/v1/users?email&password&select=*",
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
    toggleApproved(user) {
      const updatedApprovalStatus = !user.approved;

      axios
        .patch(
          `https://dqorskomhqezaztrdhzc.supabase.co/rest/v1/users?id=eq.${user.id}`,
          { approved: updatedApprovalStatus },
          {
            headers: {
              apikey:
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRxb3Jza29taHFlemF6dHJkaHpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ4NjA0ODUsImV4cCI6MjA0MDQzNjQ4NX0.sT1ehQrr-wQuwq0OVRgDtPh2gnvRGfKIMiDXlZIuvMI",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRxb3Jza29taHFlemF6dHJkaHpjIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyNDg2MDQ4NSwiZXhwIjoyMDQwNDM2NDg1fQ.2VhaDTcy4Cuyrek0tdur92cXYr1zeIHMm0yMti4Kkn8",
              "Content-Type": "application/json",
              Prefer: "return=representation",
            },
          }
        )
        .then(() => {
          user.approved = updatedApprovalStatus;
        })
        .catch((error) => {
          console.error("Error updating approval status:", error);
        });
    },
    openPopup(user) {
      this.selectedUser = user;
      this.showPopup = true;
    },
    closePopup() {
      this.showPopup = false;
      this.selectedUser = null;
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

<style scoped>

</style>
