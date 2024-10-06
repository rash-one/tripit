<template>
  <div class="container mx-auto px-4">
    <div
      class="createtrip w-full flex flex-col rounded-2xl bg-white shadow-md p-6"
    >
      <h2 class="text-lg font-bold mb-4 text-[#ffb830]"> {{$t('createTrip')}}</h2>
      <form @submit.prevent="createTrip" class="space-y-4">
        <!-- Title -->
        <div>
          <label for="title" class="block font-medium">{{$t('title')}}</label>
          <input
            type="text"
            id="title"
            v-model="form.title"
            class="w-full border  rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#Ffb830]"
            required
          />
        </div>

        <!-- Location Dropdown -->
        <div>
          <label for="location" class="block font-medium">{{$t('location')}}</label>
          <select
            id="location"
            v-model="form.location_id"
            class="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#Ffb830]"
            required
          >
            <option disabled value="">{{$t('selectLocation')}}</option>
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
        <div>
          <label for="start_date" class="block font-medium">{{$t('sDate')}}</label>
          <input
            type="date"
            id="start_date"
            v-model="form.start_date"
            class="w-full border  rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-[#Ffb830]"
            required
          />
        </div>

        <!-- End Date -->
        <div>
          <label for="end_date" class="block font-medium">{{$t('eDate')}}</label>
          <input
            type="date"
            id="end_date"
            v-model="form.end_date"
            class="w-full border focus:outline-none focus:ring-2 focus:ring-[#Ffb830] rounded-lg p-2"
            required
          />
        </div>

        <!-- Price -->
        <div>
          <label for="price" class="block font-medium">{{$t('price')}}</label>
          <input
            type="number"
            id="price"
            v-model="form.price"
            class="w-full border focus:outline-none focus:ring-2 focus:ring-[#Ffb830] rounded-lg p-2"
            required
          />
        </div>

        <!-- Description -->
        <div>
          <label for="description" class="block font-medium">{{$t('Description')}}</label>
          <textarea
            id="description"
            v-model="form.description"
            class="w-full border focus:outline-none focus:ring-2 focus:ring-[#Ffb830] rounded-lg p-2"
            required
          ></textarea>
        </div>
        <!-- Image Upload -->
        <div>
          <label for="image" class="block font-medium">{{$t('uploadimg')}}</label>
          <input type="file" @change="handleFileUpload" />
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          class="bg-[#ffb830] p-3 rounded-lg text-[#ffffff] font-bold hover:bg-[#feaf55] hover:text-white"
        >
         {{$t('crateTrip')}} 
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      form: {
        title: "",
        location_id: "", 
        start_date: "",
        end_date: "",
        description: "",
        image_name: "",
        price: "",
      },
      locations: [],
      imageFile: null,
    };
  },
  methods: {
    handleFileUpload(event) {
      this.imageFile = event.target.files[0];
    },
    createTrip() {
      const self = this;

      // Upload the image if selected
      if (this.imageFile) {
        const formData = new FormData();
        formData.append("file", this.imageFile);

        axios
          .post(
            `https://dqorskomhqezaztrdhzc.supabase.co/storage/v1/object/trip_images/uploads/${this.imageFile.name}`,
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
          .then(function (response) {
            console.log("Image uploaded:", response.data);
            const fullPath = response.data.Key; 
            const imageName = fullPath.split('/').pop(); 
            // Store the image path in the form
            self.form.image_name = imageName;

            // Now create the trip after image upload
            self.submitTrip();
          })
          .catch(function (error) {
            console.error("Error uploading image:", error);
          });
      } else {
        // No image, directly submit trip
        this.submitTrip();
      }
    },
    submitTrip() {
      const userId = this.$store.getters.getUser?.id;
      if (!userId) {
        console.error("No logged-in user.");
        return;
      }

      const newTrip = {
        ...this.form,
        creator_id: userId,
      };

      axios
        .post(
          "https://dqorskomhqezaztrdhzc.supabase.co/rest/v1/trips",
          newTrip,
          {
            headers: {
                apikey:
                  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRxb3Jza29taHFlemF6dHJkaHpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ4NjA0ODUsImV4cCI6MjA0MDQzNjQ4NX0.sT1ehQrr-wQuwq0OVRgDtPh2gnvRGfKIMiDXlZIuvMI",
                Authorization:
                  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRxb3Jza29taHFlemF6dHJkaHpjIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyNDg2MDQ4NSwiZXhwIjoyMDQwNDM2NDg1fQ.2VhaDTcy4Cuyrek0tdur92cXYr1zeIHMm0yMti4Kkn8",
                "Content-Type": "application/json",
              },
          }
        )
        .then((response) => {
          console.log("Trip created successfully:", response.data);
          this.resetForm();
        })
        .catch((error) => {
          console.error("Error creating trip:", error);
        });
    },

    resetForm() {
      this.form = {
        title: "",
        location_id: "",
        start_date: "",
        end_date: "",
        description: "",
        price: "",
        image_name: "", 

      };
      this.imageFile = null; // Reset the image file input
    },
    getLocations() {
      axios
        .get("https://dqorskomhqezaztrdhzc.supabase.co/rest/v1/locations", {
          headers: {
            apikey:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRxb3Jza29taHFlemF6dHJkaHpjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ4NjA0ODUsImV4cCI6MjA0MDQzNjQ4NX0.sT1ehQrr-wQuwq0OVRgDtPh2gnvRGfKIMiDXlZIuvMI",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRxb3Jza29taHFlemF6dHJkaHpjIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyNDg2MDQ4NSwiZXhwIjoyMDQwNDM2NDg1fQ.2VhaDTcy4Cuyrek0tdur92cXYr1zeIHMm0yMti4Kkn8",
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          this.locations = response.data;
        })
        .catch((error) => {
          console.error("Error fetching locations:", error);
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
