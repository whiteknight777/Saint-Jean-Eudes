<template>
    <div class="wraper" :class="{'loading': loader === true}">
        <div class="loader-demo-box" v-if="loader === true">
          <loaderComponent></loaderComponent>
        </div>
        <TopBar 
        @openAddRetraitantForm="openRetraitantForm"
        ></TopBar>
        <!-- partial -->
        <div class="container-fluid page-body-wrapper">
          <div class="main-panel">
            <Content></Content>
            <Footer></Footer>
          </div>
          <!-- main-panel ends -->
        </div>

        <!-- Ajouter un retraitant -->
        <AddRetraitantForm 
        @closeForm="closeRetraitantForm"
        :open="dialog"
        v-show="dialog === true"
        ></AddRetraitantForm>

    </div>
</template>

<style scoped>
@import url(./style.css);
</style>

<script>
import TopBar from "../../components/TopBar/TopBar";
import Content from "./Content";
import Footer from "../../components/Footer/Footer";
import loaderComponent from "../../components/loaders/loader";
import AddRetraitantForm from "../../components/AddRetraitantForm/AddRetraitantForm";

export default {
  components: {
    TopBar,
    Content,
    Footer,
    loaderComponent,
    AddRetraitantForm
  },
  data() {
    return {
      loader: false,
      dialog: false
    };
  },
  methods: {
    openRetraitantForm() {
      this.dialog = true;
    },
    closeRetraitantForm() {
      this.dialog = false;
    }
  }
};
</script>
