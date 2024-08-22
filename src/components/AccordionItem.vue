<template>
  <div class="accordion-item">
    <div class="accordion-header" :class="{ 'open': isOpen }" @click="toggle">
      <h3>{{ title }}</h3>
      <span class="icon">
        <svg v-if="isOpen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 13">
          <path d="M23.7071 13.2071C23.3166 13.5976 22.6834 13.5976 22.2929 13.2071L12 2.91425L1.70711 13.2071C1.31659 13.5976 0.683402 13.5976 0.292887 13.2071C-0.0976289 12.8166 -0.0976289 12.1834 0.292887 11.7929L11.2929 0.792878C11.6834 0.402363 12.3166 0.402363 12.7071 0.792878L23.7071 11.7929C24.0977 12.1835 24.0977 12.8166 23.7071 13.2071Z" fill="black"/>
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 13">
          <path d="M0.292862 0.792887C0.683378 0.402371 1.31657 0.402371 1.70708 0.792887L12 11.0857L22.2929 0.792887C22.6834 0.402371 23.3166 0.402371 23.7071 0.792887C24.0976 1.1834 24.0976 1.81659 23.7071 2.20711L12.7071 13.2071C12.3166 13.5976 11.6834 13.5976 11.2929 13.2071L0.292862 2.20711C-0.0976524 1.81654 -0.0976524 1.1834 0.292862 0.792887Z" fill="black"/>
        </svg>
      </span>
    </div>
    <div class="accordion-content" v-show="isOpen">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});

const isOpen = ref(false);

const toggle = () => {
  isOpen.value = !isOpen.value;
};
</script>

<style scoped>
.accordion-item {
  margin-bottom: 15px;
}
.accordion-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 10px 30px;
  border: 2px solid #FCDE41;
  border-radius: 10px;
  transition: background-color 0.3s ease;
}
.accordion-header.open {
  background-color: #FCDE41;
}
.accordion-header h3 {
  font-size: 24px;
}
.accordion-content {
  font-size: 16px;
  padding: 20px 30px;
}
.icon svg {
  width: 24px;
  height: 24px;
  padding-left: 80px;
}
</style>
