<template>
  <div id="Login" class="" :class="{'loading': loader === true}">
      <div class="loader-demo-box" v-if="loader === true">
        <loaderComponent></loaderComponent>
      </div>
     <div class="container-scroller">
      <div class="container-fluid page-body-wrapper full-page-wrapper">
        <div class="main-panel bg-login">
            <img id="material-bg-login" src="../../../public/images/lg.png" alt="">
          <div class="content-wrapper d-flex align-items-center auth no-p-t no-p-b">
            <div class="row w-100 ">
              <div class="col-lg-4 mx-auto">
                <div class="auth-form-light text-center p-5">
                  <div class="brand-logo">
                    <img src="../../../public/images/logo1-mini.png" alt="logo">
                  </div>
                  <h4>-- Espace de Connexion --</h4>
                  <h6 class="font-weight-light">Connectez-vous à votre interface.</h6>
                  <form class="pt-3">
                    <div class="form-group">
                      <input 
                        type="email" 
                        class="form-control form-control-lg" 
                        id="exampleInputEmail1" 
                        placeholder="Login"
                      >
                    </div>
                    <div class="form-group">
                      <input 
                        type="password" 
                        class="form-control form-control-lg" 
                        id="exampleInputPassword1" 
                        placeholder="Password"
                      >
                    </div>
                    <div class="mt-3">
                      <a 
                        class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" 
                        href=""
                        v-on:click.prevent="apiCheck()"
                      >
                      CONNEXION
                      </a>
                    </div>
                    <div class="my-2 d-flex justify-content-between align-items-center">
                      <div class="form-check">
                        <label class="form-check-label text-muted">
                          <input 
                            type="checkbox" 
                            class="form-check-input"
                          >
                          Mémoriser
                        </label>
                      </div>
                      <a 
                        href="#" 
                        class="auth-link text-black"
                      >
                      Mot de passe oublié ?
                      </a>
                    </div>
                  </form>

                  <div class="align-center justify-center row fill-height">
                    <a href="http://www.fyle-group.com/">
                      <img 
                        class="logo-bottom" 
                        src="../../../public/images/fyle-group.jpg" 
                        alt="logo"
                      >
                    </a>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </div>
        <!-- content-wrapper ends -->
      </div>
    <!-- page-body-wrapper ends -->
  </div>
  </div>
</template>

<style scoped>
@import url(./style.css);
</style>

<script>
import apiConfig from "../../plugins/apiConfig";
import loaderComponent from "../../components/loaders/loader";
export default {
  components: {
    loaderComponent
  },
  data() {
    return {
      loader: false
    };
  },
  methods: {
    // API CHECK
    apiCheck() {
      this.loader = true;
      let data = "test";
      // this.axios
      //   .get(apiConfig.baseURL + 'test/api/' + data, {
      //     headers: apiConfig.headers
      //   }).then(response => {
      //     console.log(response)
      // this.loader = false
      this.$router.push("/tableau-de-bord");
      // }).catch(error => {
      //   console.log(error)
      // })
    }
  },
  mounted() {
    // Chargement des style pour les champs checkbox and radios
    $(".form-check label,.form-radio label").append(
      '<i class="input-helper"></i>'
    );
  }
};
</script>
