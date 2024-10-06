<template>
  <div class="h-full">
    <div class="wrapper">
      <!-- background -->
      <div class="zezo-bg h-screen z-100 w-full">
        <div class="wrapper container mx-auto flex flex-col pt-60 gap-4">
          <!-- slogan -->
          <div
            class="slogan flex flex-wrap w-full md:w-8/12 text-4xl md:text-6xl text-[#ffff] font-bold p-6"
          >
            {{ $t('landingHeadind1') }}<br />
            {{ $t('landingHeadind2') }}
          </div>
          <homeSearch class="px-6" />
        </div>
      </div>

      <!-- header 1 -->
      <div
        class="header text-2xl md:text-5xl text-[#ffb830] text-center font-bold mt-10"
      >
        {{ $t('cart') }}
      </div>

      <!-- cards -->
      <div
        class="cards container mx-auto p-5 gap-10 mt-6 justify-center lg:justify-between flex flex-col lg:flex-row"
      >
        <!-- Card 1 -->
        <div class="flip-card w-full xl:w-1/3 rounded-lg">
          <router-link to="/agency">
            <div class="flip-card-inner">
              <!-- Front of the card -->
              <div class="flip-card-front rounded-lg">
                <img
                  class="object-cover h-full object-center rounded-lg"
                  src="../assets/ag.jpg"
                />
              </div>

              <!-- Back of the card with blur effect and text overlay -->
              <div class="flip-card-back rounded-lg relative">
                <!-- Image with blur effect -->
                <img
                  class="object-cover h-full object-center rounded-lg blur-sm"
                  src="../assets/ag.jpg"
                />

                <!-- Text overlay on top of the blurred image -->
                <div
                  class="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-8 gap-4 rounded-lg"
                >
                  <p class="text-xl font-semibold text-white text-center">
                    {{$t('card1')}}
                  </p>
                </div>
              </div>
            </div>
          </router-link>
        </div>
        <!-- Card 2 -->
        <div class="flip-card w-full xl:w-1/3 rounded-lg">
          <router-link to="/tourtrips">
            <div class="flip-card-inner">
              <!-- Front of the card -->
              <div class="flip-card-front rounded-lg">
                <img
                  class="object-cover h-full object-center rounded-lg"
                  src="../assets/tour.jpg"
                />
              </div>

              <!-- Back of the card with blur effect and text overlay -->
              <div class="flip-card-back rounded-lg relative">
                <!-- Image with blur effect -->
                <img
                  class="object-cover h-full object-center rounded-lg blur-sm"
                  src="../assets/tour.jpg"
                />

                <!-- Text overlay on top of the blurred image -->
                <div
                  class="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-8 gap-4"
                >
                  <!-- Text with description -->
                  <p class="text-xl font-semibold text-white text-center">
                    {{$t('card2')}}
                  </p>
                </div>
              </div>
            </div>
          </router-link>
        </div>
        <!-- Card 3 -->
        <div class="flip-card w-full xl:w-1/3 rounded-lg">
  <router-link to="/localtrips">
    <div class="flip-card-inner">
      <!-- Front of the card -->
      <div class="flip-card-front rounded-lg">
        <img
          class="object-cover h-full object-center rounded-lg"
          src="../assets/lo.jpg"
        />
      </div>

      <!-- Back of the card with blur effect and text overlay -->
      <div class="flip-card-back rounded-lg relative">
        <!-- Image with blur effect -->
        <img
          class="object-cover h-full object-center rounded-lg blur-sm"
          src="../assets/lo.jpg"
        />

        <!-- Text overlay on top of the blurred image -->
        <div
          class="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center p-8 gap-4"
        >

          <!-- Text with description -->
          <p class="text-xl font-semibold text-white text-center">
            {{$t('card3')}}
          </p>
        </div>
      </div>
    </div>
  </router-link>
</div>

      </div>

      <!-- statistics -->
      <div class="statisticsBack mt-10">
        <div
          class="statistics flex flex-col md:flex-row items-center w-full justify-center"
        >
          <div
            class="container mx-auto p-5 gap-10 mt-6 justify-center lg:justify-between flex flex-col lg:flex-row"
          >
            <div
              class="statistic rounded-lg flex flex-col w-full justify-center items-center px-10 py-24 my-24 lg:w-3/12"
            >
              <p class="text-center text-6xl text-[#ffb830] font-bold pt-10">
                {{$t('statistic1')}}
              </p>
              <p class="text-center text-2xl text-[#ffb830] font-bold pb-10">
                {{$t('statistic1Text')}}
              </p>
            </div>
            <div
              class="statistic rounded-lg flex flex-col w-full justify-center items-center px-10 py-24 my-24 lg:w-3/12"
            >
              <p class="text-center text-6xl text-[#ffb830] font-bold pt-10">
                {{$t('statistic2')}}
              </p>
              <p class="text-center text-2xl text-[#ffb830] font-bold pb-10">
               {{$t('statistic2Text')}}
              </p>
            </div>
            <div
              class="statistic rounded-lg flex flex-col w-full justify-center items-center px-10 py-24 my-24 lg:w-3/12"
            >
              <p class="text-center text-6xl text-[#ffb830] font-bold pt-10">
                {{$t('statistic3')}}
              </p>
              <p class="text-center text-2xl text-[#ffb830] font-bold pb-10">
                {{$t('statistic3Text')}}
              </p>
            </div>
            <div
              class="statistic rounded-lg flex flex-col w-full justify-center items-center px-10 py-24 my-24 lg:w-3/12"
            >
              <p class="text-center text-6xl text-[#ffb830] font-bold pt-10">
               {{$t('statistic4')}}
              </p>
              <p class="text-center text-2xl text-[#ffb830] font-bold pb-10">
                {{$t('statistic4Text')}}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- header 3 -->
      <!-- <div
        class="header text-2xl md:text-5xl text-[#ffb830] text-center font-bold mt-10"
      >
        What Our Clients Say About us
      </div> -->

      <!-- test reviews -->
      <section class="bg-white">
        <div class="container px-6 py-10 mx-auto w-full">
          <h1
            class="header text-2xl md:text-5xl text-[#ffb830] text-center font-bold mt-10"
          >
            {{$t('reviewsHeading')}}
          </h1>

          <div class="flex justify-center mx-auto mt-6 underl">
            <span
              class="inline-block w-40 h-1 bg-[#ffb830] rounded-full"
            ></span>
            <span
              class="inline-block w-3 h-1 mx-1 bg-[#ffb830] rounded-full"
            ></span>
            <span class="inline-block w-1 h-1 bg-[#ffb830] rounded-full"></span>
          </div>

          <div class="flex items-start justify-center w-full mx-auto mt-16">
            <!-- Left Arrow -->
            <button
              title="left arrow"
              class="p-2 text-[#ffb830] transition-colors duration-300 border rounded-full dark:border-[#ffb830] dark:hover:text-[#f9f9f9] dark:hover:bg-[#ffb830] lg:block hover:bg-gray-100"
              @click="prevReview"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <!-- Review Content -->
            <div class="review-content mx-8 w-full lg:w-5/12">
              <p class="text-center text-gray-500 lg:mx-8">
                {{ reviews[currentIndex].text }}
              </p>

              <div class="flex flex-col items-center justify-center mt-8">
                <img
                  :src="`src/assets/${reviews[currentIndex].image}`"
                  alt="Reviewer Image"
                  class="object-cover rounded-full w-14 h-14"
                />
                <div class="mt-4 text-center">
                  <h1 class="font-semibold text-gray-800 dark:text-[#ffb830]">
                    {{ reviews[currentIndex].name }}
                  </h1>
                  <span class="text-sm text-gray-500 dark:text-gray-400">
                    {{ reviews[currentIndex].role }}
                  </span>
                </div>
              </div>
            </div>

            <!-- Right Arrow -->
            <button
              title="right arrow"
              class="p-2 text-[#ffb830] transition-colors duration-300 border rounded-full dark:border-[#ffb830] dark:hover:text-[#f9f9f9] dark:hover:bg-[#ffb830] lg:block hover:bg-gray-100"
              @click="nextReview"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import homeSearch from "../components/homeSearch.vue";
export default {
  name: "homePage",
  components: {
    homeSearch,
  },
  data() {
    return {
      reviews: [
        {
          text: "Definitely one of the best experiences i’ve had. Thank you for having us paradise ✨",
          name: "Yassin Tarek",
          role: "Traveler",
          image: "yassin.jpg",
        },
        {
          text: "Best Experience everr ! Great Organization and Supervision fromthe whole team, THANKS",
          name: "Mayar Hossam",
          role: "Traveler",
          image: "girl1.jpg",
        },
        {
          text: "Highly recommended ! They are so professional and well-organized.Siwa Trip was amazing !!",
          name: "Sara Essam",
          role: "Traveler",
          image: "girl2.jpg",
        },
        {
          text: "Thank you so much guys ! It was a very great experience ! Will be coming back again for sure ❤️",
          name: "Basant Mohamed",
          role: "Traveler",
          image: "girl3.jpg",
        },
      ],
      currentIndex: 0, // Starting index for the review
    };
  },
  methods: {
    nextReview() {
      this.currentIndex = (this.currentIndex + 1) % this.reviews.length;
    },
    prevReview() {
      this.currentIndex =
        (this.currentIndex - 1 + this.reviews.length) % this.reviews.length;
    },
  },
};
</script>

<style scoped>
.tripSearch,
.statistic {
  background: linear-gradient(
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.05),
    rgba(255, 255, 255, 0.02)
  );
  backdrop-filter: blur(5px);
}
.cardText,
.review {
  background-color: #fff;
}
.zezo-bg {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("../assets/nile.png");
}
.statisticsBack {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  background-image: url("../assets/cards.jpg");
}
@keyframes appear {
  from {
    opacity: 0;
    scale: 0.5;
  }
  to {
    opacity: 1;
    scale: 1;
  }
}

.header,
.card,
.flip-card,
.statistic,
.underl {
  animation: appear linear;
  animation-timeline: view();
  animation-range: entry 0% cover 40%;
}

/* From Uiverse.io by joe-watson-sbf */
.flip-card {
  background-color: transparent;
  height: 420px;
  perspective: 1000px;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.9s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  box-shadow: 0 8px 14px 0 rgba(0, 0, 0, 0.2);
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-back {
  transform: rotateY(180deg);
}
</style>
