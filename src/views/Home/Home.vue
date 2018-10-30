<template>
    <div class="wraper" :class="{'loading': loader === true}">
        <div class="loader-demo-box" v-if="loader === true">
          <loaderComponent></loaderComponent>
        </div>
        <TopBar></TopBar>
        <!-- partial -->
        <div class="container-fluid page-body-wrapper">
          <div class="main-panel">
            <Content></Content>
            <Footer></Footer>
          </div>
          <!-- main-panel ends -->
        </div>
    </div>
</template>

<style scoped>
@import url(./style.css);
</style>

<script>
import TopBar from '../../components/TopBar/TopBar'
import Content from './Content'
import Footer from '../../components/Footer/Footer'
import loaderComponent from '../../components/loaders/loader'

export default {
  components: {
    TopBar,
    Content,
    Footer,
    loaderComponent
  },
  data () {
    return {
      loader: false,
    }
  },
  methods: {}
}
</script>
