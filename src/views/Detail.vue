        <template>
          <ion-page>
            <ion-header :translucent="true">
              <ion-toolbar>
                <ion-buttons slot="start">
                  <ion-menu-button color="primary"></ion-menu-button>
                </ion-buttons>
                <ion-title>{{  items.title  }}</ion-title>
              </ion-toolbar>
            </ion-header>

            <ion-content :fullscreen="true">
              <ion-header collapse="condense">
                <ion-toolbar>
                  <ion-title size="large">{{ items.title }}</ion-title>
                </ion-toolbar>
              </ion-header>
              <ion-list>
                <ion-item>
                  <ion-label class="ion-text-wrap">
                    <ion-chip color="secondary">
                      <ion-label color="dark">{{ items.category }}</ion-label>
                    </ion-chip>
                    <br/>
                    <br/>
                    <div>
                    <ion-icon @click="presentActionSheet" size="large" :src="ellipsisVerticalOutline" />
                    <ion-img style="width: 270px; height: 250px;"  :src="items.image"></ion-img>
                    </div>
                    <h1>{{ items.title }}</h1>
                    <p>{{ items.description }}</p>
                    <ion-badge color="primary">Price: {{ items.price }}€</ion-badge>
                    <br />
                    <ion-button
                        type="button"
                        class="btn"
                        @click="showModal"
                    >
                      Add item to list
                    </ion-button>
                  <br/>
                    <ion-button
                        type="button"
                        class="btn"
                        @click="showModal2"
                    >
                      Buy item
                    </ion-button>
                    <modal
                        v-show="isModalVisible"
                        @close="closeModal"
                    />
                    <modal2
                        v-show="isModalVisible2"
                        @close="closeModal2"
                    />
                  </ion-label>
                </ion-item>
              </ion-list>
            </ion-content>
          </ion-page>
        </template>

<script >
import { IonButtons, actionSheetController,IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import modal from '../components/Modal.vue';
import modal2 from '../components/Modal2.vue';
import axios from 'axios';
import { caretForwardCircle,createOutline, close, heart, trash, share } from 'ionicons/icons';
import { ellipsisVerticalOutline } from 'ionicons/icons';
export default {
  name: 'CatalogueList',
  components: {
    modal2,
    modal,
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar
  },  data() {
    return {
      items: [],
      isModalVisible: false,
      isModalVisible2: false
    }
  },
  created() {
    axios.get('https://fakestoreapi.com/products/'+this.$route.params.id)
        .then(response => {
          this.items = response.data
        })
  },
  setup(){
    return{
      ellipsisVerticalOutline
    }
  },

  methods: {
    async presentActionSheet() {
      const actionSheet = await actionSheetController
          .create({
            header: 'Albums',
            cssClass: 'my-custom-class',
            buttons: [
              {
                text: 'Delete',
                role: 'destructive',
                icon: trash,
                handler: () => {
                  console.log('Delete clicked')
                },
              },
              {
                text: 'Modify',
                icon: createOutline,
                handler: () => {
                  console.log('Share clicked')
                },
              },
              {
                text: 'Cancel',
                icon: close,
                role: 'cancel',
                handler: () => {
                  console.log('Cancel clicked')
                },
              },
            ],
          });
      return actionSheet.present();
    },
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    showModal2() {
      this.isModalVisible2= true;
    },
    closeModal2() {
      this.isModalVisible2 = false;
    }
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