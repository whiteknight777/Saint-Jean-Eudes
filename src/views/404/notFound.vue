<template>
    <div class="container-scroller">
    <div class="container-fluid page-body-wrapper full-page-wrapper">
      <div class="content-wrapper d-flex align-items-center text-center error-page bg-primary">
        <div class="row flex-grow">
          <div class="col-lg-7 mx-auto text-white">
            <div class="row align-items-center d-flex flex-row">
              <div class="col-lg-6 text-lg-right pr-lg-4">
                <h1 class="display-1 mb-0 text-white">404</h1>
              </div>
              <div class="col-lg-6 error-page-divider text-lg-left pl-lg-4" style="margin-top: 50px;">
                <h2 class="text-white">OUPS...!</h2>
                <h3 class="font-weight-light text-white">La page que vous recherchez n'est pas disponible.</h3>
              </div>
            </div>
            <div class="row mt-5">
              <div class="col-12 text-center mt-xl-2">
                <router-link class="text-white font-weight-medium" to="/">Retourner à l'accueil</router-link>
              </div>
            </div>
            <div class="row mt-5">
              <div class="col-12 mt-xl-2">
                <p class="text-white font-weight-medium text-center">Centre Saint Jean Eudes Copyright &copy; 2018  All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- content-wrapper ends -->
    </div>
    <!-- page-body-wrapper ends -->
  </div>
</template>

<style scoped>
@import url(./style.css);
</style>

<script>
export default {
  data () {
    return {}
  }
}
</script>
