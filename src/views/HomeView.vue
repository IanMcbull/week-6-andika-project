<script setup lang="ts">
import {onMounted,computed, reactive} from "vue";
import { useCounterStore } from "@/stores/counter"
import moment from "moment"
const store = useCounterStore();

const editNote = () =>{
const txtInput = document.querySelector('#message') as HTMLElement
txtInput.focus()
}

const changeBg = computed(() =>{
  return randomHexColor();
})

const currentDate = computed(()=>{
 return moment().format('MMM Do, YYYY');
})

const myStyles = reactive({
  backgroundColor:changeBg
})
onMounted(()=>{
 console.log(store.count)
})
const randomInteger =(max:number) => {
    return Math.floor(Math.random()*(max + 1));
}
  const randomRgbColor = () => {
    let r = randomInteger(255);
    let g = randomInteger(255);
    let b = randomInteger(255);
    return [r,g,b];
}
  const randomHexColor = ()=> {
    let [r,g,b] = randomRgbColor();

    let hr = r.toString(16).padStart(2, '0');
    let hg = g.toString(16).padStart(2, '0');
    let hb = b.toString(16).padStart(2, '0');

    return "#" + hr + hg + hb;
} 
</script>
<template>
  <main class="flex space-x-6 h-screen">
    <nav
      class="flex flex-col space-y-16 items-center border-2 border-grey-500 max-w-[120px] p-4"
    >
      <img src="../assets/logo.png" alt="logo" class="max-w-[120px]"/>
      <div class="flex flex-col space-y-8 items-center">
        <button
          class="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center"
        >
          <span class="material-symbols-outlined"> add </span>
        </button>
        <button class="w-4 h-4 border-2 border-black rounded-full"></button>
        <button class="w-4 h-4 border-2 border-black rounded-full"></button>
        <button class="w-4 h-4 border-2 border-black rounded-full"></button>
      </div>
    </nav>
    <section class="p-4 w-full">
      <form>
        <label
          for="default-search"
          class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
          >Search</label
        >
        <div class="relative">
          <div
            class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            class="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search notes.."
            required=""
          />
        </div>
      </form>
      <div class="flex flex-col">
         <h2 class="text-5xl font-charm mt-4">Notes</h2>
         <div class="mt-16 grid grid-cols-4 gap-4 text-white font-railway">
            <form class="min-w-[25%] h-64 flex flex-col p-4 justify-between rounded-2xl outline-none shadow-lg notesForm" :style="myStyles" @submit.prevent="">
              <textarea id="message" rows="4" class="block p-2.5 w-full text-md bg-transparent rounded-lg focus:ring-blue-500 focus:outline-none font-bold"></textarea>
              <div class="note-details flex justify-between items-center">
               <p class="text-sm">{{currentDate}}</p>
               <button class="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white" @click="editNote"><span class="material-symbols-outlined text-xl">
edit
</span></button>
              </div>
            </form>
         </div>
      </div>
    </section>
  </main>
</template>


<style scoped>
/* ===== Scrollbar CSS ===== */
  /* Firefox */
  * {
    scrollbar-width: auto;
    border: none;
    scrollbar-color: #1a181b #ffffff;
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 16px;
  }

  *::-webkit-scrollbar-track {
    background: #ffffff;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #1a181b;
    border-radius: 10px;
    border: 3px solid #ffffff;
  }
  .notesForm{
    background-color: v-bind('myStyles.backgroundColor');
  }
</style>

