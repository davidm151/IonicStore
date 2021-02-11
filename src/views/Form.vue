<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>FORM ADD ITEM</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">{{ $route.params.id }}</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-item>
        <ion-label position="stacked">Title</ion-label>
        <ion-input></ion-input>
      </ion-item>

      <ion-item>
        <ion-label position="stacked">Price</ion-label>
        <ion-input></ion-input>
      </ion-item>
      <ion-item>
        <ion-label position="stacked">Description</ion-label>
       <ion-textarea></ion-textarea>
      </ion-item>

      <ion-item>
        <ion-label>Category</ion-label>
        <ion-select placeholder="Select One">
          <ion-select-option value="Men clothing">Men clothing</ion-select-option>
          <ion-select-option value="Jewelery">Jewelery</ion-select-option>
          <ion-select-option value="Electronics">Electronics</ion-select-option>
          <ion-select-option value="Women clothing">Women clothing</ion-select-option>
        </ion-select>
      </ion-item>
      <ion-button
          type="button"
          class="btn"
          @click="showModal"
      >
        Add item
      </ion-button>
      <modal
          v-show="isModalVisible"
          @close="closeModal"
      />
    </ion-content>
  </ion-page>
</template>
<script >
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import modal from '../components/Modal.vue';
export default {
  name: 'CatalogueList',
  components: {
    modal,
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar
  },
  data () {
    return {
      isModalVisible: false,
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
  },
}
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
#container strong {
  font-size: 20px;
  line-height: 26px;
}
#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}
#container a {
  text-decoration: none;
}
</style>