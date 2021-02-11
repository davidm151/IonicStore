<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>Catalogue list</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Catalogue list</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-refresher slot="fixed" @ionRefresh="doRefresh($event)">
        <ion-refresher-content
            :pulling-icon="chevronDownCircleOutline"
            pulling-text="Pull to refresh"
            refreshing-spinner="circles"
            refreshing-text="Refreshing...">
        </ion-refresher-content>
      </ion-refresher>
      <ion-button href="/catalogue/form" >Add item</ion-button>
      <ion-searchbar></ion-searchbar>
      <ion-list>
        <ion-item v-for="item in items" :key="item">
          <ion-label class="ion-text-wrap">
            <ion-chip color="secondary">
              <ion-label color="dark">{{ item.category }}</ion-label>
            </ion-chip>
            <ion-img style="width: 270px; height: 250px;"  :src="item.image"></ion-img>
            <h1>{{ item.title }}</h1>
            <ion-badge color="primary">Price: {{ item.price }}€</ion-badge>
            <br />
            <ion-button :href="'/detail/'+item.id" >Detail</ion-button>
          </ion-label>
        </ion-item>
      </ion-list>
      <ion-infinite-scroll
          @ionInfinite="loadData"
          threshold="100px"
          id="infinite-scroll">
        <ion-infinite-scroll-content
            loading-spinner="bubbles"
            loading-text="Loading more data...">
        </ion-infinite-scroll-content>
      </ion-infinite-scroll>
    </ion-content>
  </ion-page>
</template>
<script >
import { IonRefresher, IonRefresherContent,IonInfiniteScroll,IonInfiniteScrollContent,IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, loadingController  } from '@ionic/vue';

export default {
  name: 'CatalogueList',
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    IonRefresher,
    IonRefresherContent
  },  methods: {
    loadData(event) {
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      const vm = this;
      const max = this.i + 5;
      setTimeout(function () {
        for (; vm.i < max; vm.i++) {
          const val = vm.posts[vm.i];
          vm.items.push(val);
        }
        event.target.complete();
      }, 500);
    },
    doRefresh(event) {
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      const vm = this;
      const max = this.i + 5;
      setTimeout(function () {
        for (; vm.i < max; vm.i++) {
          const val = vm.posts[vm.i];
          vm.items.unshift(val);
        }
        event.target.complete();
      }, 500);
    },
  },
  data() {
    const numTimesLeft=5;
    const number= 5;
    return {
      items: [],
      posts: null,
      showLoader: true,
      i: 0,
      itemCount: 5
    }
  },
  async created() {
    const loading = await loadingController
        .create({
          cssClass: 'my-custom-class',
          message: 'Please wait...',
          duration: this.timeout,
        });
    await loading.present();
    setTimeout(function () {
      loading.dismiss()
    }, this.timeout);
    fetch(`https://fakestoreapi.com/products`)
        .then(res => res.json()).then(data => {
          setTimeout(() => {
            this.posts = data.reverse();
            for (; this.i <10; this.i++){
              this.items.push(this.posts[this.i]);
            }
            this.showLoader=false;
          },3000)
    })
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
#container a {
  text-decoration: none;
}
</style>