<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Catalogue grid</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Catalogue grid</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-button href="/catalogue/form" >Add item</ion-button>
      <ion-searchbar></ion-searchbar>
      <div v-if="data">
      <ion-grid>
        <ion-row>
          <ion-col size-xs="12" size-sm="12" size="12" size-lg="4" size-xl="4"  v-for="item in items" :key="item">
<!--          //  <ion-button id='hidden-button' :href="'/detail/'+item.id">-->
            <ion-card :href="'/detail/'+item.id">
              <ion-chip color="danger">
                <ion-text color="dark">{{ item.category }}</ion-text>
              </ion-chip>
            <ion-img style="width: 270px; height: 250px;" :src="item.image"></ion-img>
              <ion-text color="dark">
              <h2>{{ item.title }}</h2>
              </ion-text>
              <ion-text color="dark">
                <ion-badge color="primary">Price: {{ item.price }}€</ion-badge>
              </ion-text>
              <br />
              <ion-button :href="'/detail/'+item.id" >Detail</ion-button>
            </ion-card>
<!--            </ion-button>-->
          </ion-col>
        </ion-row>
      </ion-grid>
</div>


  <!-- Skeleton screen -->
  <div v-if="!data">
      <ion-grid>
      <ion-row>
        <ion-col size-xs="12" size-sm="12" size="12" size-lg="4" size-xl="4"  v-for="item in items" :key="item">
          <!--          //  <ion-button id='hidden-button' :href="'/detail/'+item.id">-->
          <ion-card>
            <ion-chip color="danger">
              <ion-skeleton-text color="dark"></ion-skeleton-text>
            </ion-chip>
            <ion-skeleton-text style="width: 270px; height: 250px;" ></ion-skeleton-text>
            <ion-skeleton-text color="dark">
              <h2></h2>
            </ion-skeleton-text>
            <ion-skeleton-text color="dark">
             <ion-badge color="primary"></ion-badge>
            </ion-skeleton-text>
            <br />
            <ion-skeleton-text><ion-button></ion-button></ion-skeleton-text>
          </ion-card>
          <!--            </ion-button>-->
        </ion-col>
      </ion-row>
    </ion-grid>
  </div>
    </ion-content>
  </ion-page>
</template>
<script >
import {
  IonListHeader,
  IonSkeletonText,
  IonThumbnail,IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar} from '@ionic/vue';
import { ref } from 'vue';
import * as axios from "core-js";
export default {
  name: 'CatalogueGrid',
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar
    // ,
    // IonListHeader,
    // IonSkeletonText,
    // IonThumbnail
  },  data() {
    return {
      items: []
    }
  },
created() {
  fetch(`https://fakestoreapi.com/products`)
      .then(res => res.json()).then(data =>
      this.items = data
  )
},
setup() {
  const data = ref();

  setTimeout(() => {
    data.value = {
    };
  }, 5000);

  return { data }
}
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

#hidden-button{
  height: 100%;
  width: 100%;
  box-shadow: none;
  -webkit-box-shadow: none;
}

ion-card {
  height: 100%;
}

#container a {
  text-decoration: none;
}
</style>