<template>
  <div class="container mx-auto px-4 py-6">
    <!-- Table for Trips -->
    <div class="w-full overflow-x-auto shadow-md rounded-lg">
      <table class="min-w-full table-auto bg-white rounded-lg">
        <thead class="bg-[#ffb830] text-white text-left">
          <tr>
            <th class="px-4 py-3 border-b">{{$t('title')}}</th>
            <th class="px-4 py-3 border-b">{{$t('location')}}</th>
            <th class="px-4 py-3 border-b">{{$t('price')}}</th>
            <th class="px-4 py-3 border-b">{{$t('sDate')}}</th>
            <th class="px-4 py-3 border-b">{{$t('eDate')}}</th>
            <th class="px-4 py-3 border-b">{{$t('actions')}}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="trip in trips" :key="trip.id" class="border-t hover:bg-gray-50 transition duration-150">
            <td class="px-4 py-3 border-b">{{ trip.title }}</td>
            <td class="px-4 py-3 border-b">{{ trip.locations.gov_name }}</td>
            <td class="px-4 py-3 border-b">{{ trip.price }}</td>
            <td class="px-4 py-3 border-b">{{ trip.start_date }}</td>
            <td class="px-4 py-3 border-b">{{ trip.end_date }}</td>
            <td class="px-4 py-3 flex space-x-2">
              <router-link :to="`/tripdetails/${trip.id}`"
          class="text-center border py-2 px-2 border-[#ffb830]  rounded-lg text-[#ffb830] font-bold hover:bg-[#ffb830] hover:text-slate-50 "
          >
              {{$t('tripDetails')}}
          </router-link>
              <button
                @click="openUpload(trip)"
                class="text-center border py-2 px-2 border-[#ffb830]  rounded-lg text-[#ffb830] font-bold hover:bg-[#ffb830] hover:text-slate-50"
              >
                Upload Images
              </button>
              <button
                @click="openPopup(trip)"
                class="text-center border py-2 px-2 border-[#ffb830]  rounded-lg text-[#ffb830] font-bold hover:bg-[#ffb830] hover:text-slate-50"
              >
                {{$t('editTrip')}}
              </button>
              <button
                @click="deleteTrip(trip)"
                class="text-center border py-2 px-2 border-red-500  rounded-lg text-red-500 font-bold hover:bg-red-500 hover:text-slate-50"
              >
                {{$t('delete')}}
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Popup forms -->
      <div v-if="showPopup" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <!-- Update form -->
        <div class="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-lg">
          <form @submit.prevent="updateTrip" class="space-y-4">
            <!-- Title -->
            <div>
              <label for="title" class="block font-medium">{{$t('title')}}</label>
              <input
                type="text"
                id="title"
                v-model="selectedTrip.title"
                class="w-full border border-gray-300 rounded-lg p-2"
                required
              />
            </div>

            <!-- Price -->
            <div>
              <label for="price" class="block font-medium">{{$t('price')}}</label>
              <input
                type="text"
                id="title"
                v-model="selectedTrip.price"
                class="w-full border border-gray-300 rounded-lg p-2"
                required
              />
            </div>

            <!-- Start Date -->
            <div>
              <label for="start_date" class="block font-medium"
                >{{$t('sDate')}}</label
              >
              <input
                type="date"
                id="start_date"
                v-model="selectedTrip.start_date"
                class="w-full border border-gray-300 rounded-lg p-2"
                required
              />
            </div>

            <!-- End Date -->
            <div>
              <label for="end_date" class="block font-medium">{{$t('eDate')}}</label>
              <input
                type="date"
                id="end_date"
                v-model="selectedTrip.end_date"
                class="w-full border border-gray-300 rounded-lg p-2"
                required
              />
            </div>

            <!-- Description -->
            <div>
              <label for="description" class="block font-medium"
                >{{$t('Description')}}</label
              >
              <textarea
                id="description"
                v-model="selectedTrip.description"
                class="w-full border border-gray-300 rounded-lg p-2"
                required
              ></textarea>
            </div>

            <!-- Submit Button -->
            <button
              type="submit"
              class="bg-[#ffb830] py-2 px-4 rounded-lg text-[#ffffff] font-bold hover:bg-[#feaf55] hover:text-white w-full"
            >
              {{$t('updateTrip')}}
            </button>
          </form>
          <button @click="closePopup" class="mt-4 bg-[#ffb830] py-2 px-4 rounded-lg text-white font-bold hover:bg-[#ff9800] transition w-full">{{$t('close')}}</button>
        </div>
      </div>

      <div v-if="showUpload" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <!-- Upload form -->
        <div class="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-lg">
          <!-- Form content here -->
          <form @submit.prevent="uploadImage" class="space-y-4">
            <div>
              <label for="image" class="block font-medium">{{$('img1')}}</label>
              <input type="file" @change="handleFileUpload1" />
            </div>
            <div>
              <label for="image" class="block font-medium">{{$('img2')}}</label>
              <input type="file" @change="handleFileUpload2" />
            </div>
            <button
              type="submit"
              class="bg-[#ffb830] py-2 px-4 rounded-lg text-[#ffffff] font-bold hover:bg-[#feaf55] hover:text-white w-full"
            >
              {{$('Upload')}}
            </button>
          </form>
          <button @click="closeUpload" class="mt-4 bg-[#ffb830] py-2 px-4 rounded-lg text-white font-bold hover:bg-[#ff9800] transition w-full">{{$('close')}}</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
export default {
  name: "providersTripsDash",
  data() {
    return {
      image_name: "",
      trips: [],
      showPopup: false,
      showUpload: false,
      selectedTrip: null,

      imageFile1: null,
      imageFile2: null,
    };
  },
  methods: {
    handleFileUpload1(event) {
      this.imageFile1 = event.target.files[0];
      console.log("image1", this.imageFile1);
    },
    handleFileUpload2(event) {
      this.imageFile2 = event.target.files[0];
      console.log("image2", this.imageFile2);
    },
    uploadImage() {
      const self = this;

      if (this.imageFile1) {
        const formData = new FormData();
        formData.append("image", this.imageFile1);
        axios
          .post(
            `https:dqorskomhqezaztrdhzc.supabase.co/storage/v1/object/trip_images/uploads/${this.imageFile1.name}`,
            formData,
            {
              headers: {
                apikey:
                  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRxb3Jza29taHFlemF6dHJkaHpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ4NjA0ODUsImV4cCI6MjA0MDQzNjQ4NX0.sT1ehQrr-wQuwq0OVRgDtPh2gnvRGfKIMiDXlZIuvMI",
                Authorization:
                  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRxb3Jza29taHFlemF6dHJkaHpjIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyNDg2MDQ4NSwiZXhwIjoyMDQwNDM2NDg1fQ.2VhaDTcy4Cuyrek0tdur92cXYr1zeIHMm0yMti4Kkn8",
                "Content-Type": "imgage/png",
              },
            }
          )
          .then((response) => {
            console.log("Image uploaded:", response.data);
            const fullPath = response.data.Key;
            const imageName1 = fullPath.split("/").pop();
            this.image_name = imageName1;
            this.submitImages();
          })
          .catch((error) => {
            console.log("Error uploading image:", error);
          });
      }
      if (this.imageFile2) {
        const formData = new FormData();
        formData.append("image", this.imageFile2);
        axios
          .post(
            `https://dqorskomhqezaztrdhzc.supabase.co/storage/v1/object/trip_images/uploads/${this.imageFile2.name}`,
            formData,
            {
              headers: {
                apikey:
                  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRxb3Jza29taHFlemF6dHJkaHpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ4NjA0ODUsImV4cCI6MjA0MDQzNjQ4NX0.sT1ehQrr-wQuwq0OVRgDtPh2gnvRGfKIMiDXlZIuvMI",
                Authorization:
                  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRxb3Jza29taHFlemF6dHJkaHpjIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyNDg2MDQ4NSwiZXhwIjoyMDQwNDM2NDg1fQ.2VhaDTcy4Cuyrek0tdur92cXYr1zeIHMm0yMti4Kkn8",
                "Content-Type": "imgage/png",
              },
            }
          )
          .then((response) => {
            console.log("Image uploaded:", response.data);
            const fullPath = response.data.Key;
            const imageName2 = fullPath.split("/").pop();
            this.image_name = imageName2;
            this.submitImages();
          })
          .catch((error) => {
            console.log("Error uploading image:", error);
          });
      }
    },
    getProvidersTrips() {
      const userId = this.$store.getters.getUser?.id;
      if (!userId) {
        console.error("No logged-in user.");
        return;
      }

      axios
        .get(
          `https://dqorskomhqezaztrdhzc.supabase.co/rest/v1/trips?select=id,created_at,creator_id,location_id,title,price,start_date,end_date,description,users!inner(*),locations!inner(*),trips_images!fk_trips(id,created_at,image_name)&creator_id=eq.${userId}`,
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
    openPopup(trip) {
      this.selectedTrip = { ...trip };
      this.showPopup = true;
    },
    openUpload(trip) {
      this.selectedTrip = trip;
      this.showUpload = true;
    },

    closePopup() {
      this.showPopup = false;
      this.selectedTrip = null;
    },
    closeUpload() {
      this.showUpload = false;
    },
    deleteTrip(trip) {
      axios
        .delete(
          `https://dqorskomhqezaztrdhzc.supabase.co/rest/v1/trips?id=eq.${trip.id}`,
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
          this.getProvidersTrips();
        })
        .catch((error) => {
          console.error("Error deleting trip:", error);
        });
    },
    updateTrip() {
      axios
        .patch(
          `https://dqorskomhqezaztrdhzc.supabase.co/rest/v1/trips?id=eq.${this.selectedTrip.id}`,
          {
            title: this.selectedTrip.title,
            start_date: this.selectedTrip.start_date,
            end_date: this.selectedTrip.end_date,
            description: this.selectedTrip.description,
            price: this.selectedTrip.price,
          },
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
          this.closePopup();
          this.getProvidersTrips();
        })
        .catch((error) => {
          console.error("Error updating trip:", error);
        });
    },

    submitImages() {
      if (!this.selectedTrip || !this.selectedTrip.id) {
        console.error("No trip selected for uploading images.");
        return;
      }

      const imageData = {
        trip_id: this.selectedTrip.id,
        image_name: this.image_name, 
      };
      console.log("Submitting image data:", imageData);

      axios
        .post(
          "https://dqorskomhqezaztrdhzc.supabase.co/rest/v1/trips_images",
          imageData,
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
          console.log("Images submitted successfully:", response.data);
          this.closeUpload();
        })
        .catch((error) => {
          console.error("Error submitting images:", error);
        });
    },
  },
  created() {
    this.getProvidersTrips();
  },
};
</script>

<style scoped></style>
