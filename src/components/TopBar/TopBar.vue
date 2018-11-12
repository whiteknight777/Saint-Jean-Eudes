<template>
  <div id="TopBar">

    <!--==========================================-->
    <!--  HEADERS  -->
    <!--==========================================-->
    <!-- partial:partials/_horizontal-navbar.html -->
    <div class="horizontal-menu">
      <nav class="navbar top-navbar col-lg-12 col-12 p-0">
        <div class="container">
          <div class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
            <a class="navbar-brand brand-logo" href="index.html">
              <img src="../../../public/images/logo1-mini.png" alt="logo"/>
              <span class="text-white title-logo">Centre Saint Jean Eudes</span>
            </a>
            <a class="navbar-brand brand-logo-mini" href="index.html">
              <img src="../../../public/images/logo1-mini.png" alt="logo"/>
              <span class="text-white title-logo-mobile">Saint Jean Eudes</span>
            </a>
          </div>
          <div class="navbar-menu-wrapper d-flex align-items-center justify-content-end">
            <ul class="navbar-nav mr-lg-2">
              <li class="nav-item nav-search d-none d-lg-block">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text" id="search">
                      <i class="mdi mdi-magnify"></i>
                    </span>
                  </div>
                  <input type="text" class="form-control" placeholder="search" aria-label="search" aria-describedby="search">
                </div>
              </li>
            </ul>
            <ul class="navbar-nav navbar-nav-right">
              
              <li class="nav-item nav-profile dropdown">
                <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" id="profileDropdown">
                  <img src="../../../public/images/faces/face5.jpg" alt="profile"/>
                  <span class="nav-profile-name">Evan Morales</span>
                </a>
                <div class="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
                  <a class="dropdown-item">
                    <i class="mdi mdi-settings text-primary"></i>
                    Paramètres
                  </a>
                  <div class="dropdown-divider"></div>
                  <a @click="logout" class="dropdown-item">
                    <i class="mdi mdi-logout text-primary"></i>
                    Déconnexion
                  </a>
                </div>
              </li>
            </ul>
            <button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="horizontal-menu-toggle">
              <span class="mdi mdi-menu"></span>
            </button>
          </div>
        </div>
      </nav>
      <nav class="bottom-navbar">
        <div class="container">
          <ul class="nav page-navigation">
            <li class="nav-item">
              <router-link to="/tableau-de-bord" class="nav-link">  
                <i class="mdi mdi-view-dashboard-outline menu-icon"></i>
                <span class="menu-title">Tableau de bord</span>
              </router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link">
                <i class="mdi mdi-account-multiple menu-icon"></i>
                <span class="menu-title">Retraitants</span>
                <i class="menu-arrow"></i>
              </a>
              <div class="submenu">
                <ul class="submenu-item">
                  <li class="nav-item">
                    <a class="nav-link" @click="openRetraitantForm">
                    Ajouter un retraitant
                    </a>
                  </li>
                  <li class="nav-item"> 
                    <router-link to="/retraitants" class="nav-link">
                        Liste des retraitants
                    </router-link>
                  </li>
                  <!-- <li class="nav-item"><a class="nav-link">Amis du centre</a></li> -->
                </ul>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link">
                <i class="material-icons menu-icon">date_range</i>
                <span class="menu-title">Réservations</span>
                <i class="menu-arrow"></i>
              </a>
              <div class="submenu">
                <ul class="submenu-item">
                  <li class="nav-item">
                     <router-link to="/nouvelle-reservation" class="nav-link">
                        Ajouter une réservation
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/reservations" class="nav-link">
                        Historique des réservations
                    </router-link>
                  </li>
                </ul>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link">
                <i class="material-icons menu-icon">attach_money</i>
                <span class="menu-title">Règlements</span>
                <i class="menu-arrow"></i>
              </a>
              <div class="submenu">
                <ul class="submenu-item">
                  <li class="nav-item"><a class="nav-link">Ajouter un règlement</a></li>
                  <li class="nav-item">
                    <router-link to="/reglements" class="nav-link">
                        Historique des règlements
                    </router-link>
                  </li>
                </ul>
              </div>
            </li>

             <li class="nav-item">
              <a class="nav-link">
                <i class="material-icons menu-icon">local_offer</i>
                <span class="menu-title">Espaces</span>
                <i class="menu-arrow"></i>
              </a>
              <div class="submenu">
                <ul class="submenu-item">
                  <li class="nav-item"><a class="nav-link">Ajouter un espace</a></li>
                  <li class="nav-item">
                    <router-link to="/espaces" class="nav-link">
                        Liste des espaces
                    </router-link>
                  </li>
                </ul>
              </div>
            </li>
            <!-- <li class="nav-item">
              <a class="nav-link">
                <i class="mdi mdi-file-document-box-outline menu-icon"></i>
                <span class="menu-title">Employés</span>
                <i class="menu-arrow"></i>
              </a>
              <div class="submenu">
                <ul class="submenu-item">
                  <li class="nav-item"><a class="nav-link">Ajouter un employé</a></li>
                  <li class="nav-item">
                    <router-link to="/employes" class="nav-link">
                        Liste des employés
                    </router-link>
                  </li>
                </ul>
              </div>
            </li> -->
            <li class="nav-item">
              <router-link to="/parametres" class="nav-link">  
                <i class="material-icons menu-icon">settings</i>
                <span class="menu-title">Paramètres</span>
              </router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <!--  -->
  </div>
</template>

<style scoped>
@import url(./style.css);
</style>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    logout() {
      this.$router.replace("/");
    },
    ToggleMenu() {
      //Horizontal menu in mobile
      $('[data-toggle="horizontal-menu-toggle"]').on("click", function() {
        $(".horizontal-menu .bottom-navbar").toggleClass("header-toggled");
      });
      // Horizontal menu navigation in mobile menu on click
      var navItemClicked = $(".horizontal-menu .page-navigation >.nav-item");
      navItemClicked.on("click", function(event) {
        if (window.matchMedia("(max-width: 991px)").matches) {
          if (!$(this).hasClass("show-submenu")) {
            navItemClicked.removeClass("show-submenu");
          }
          $(this).toggleClass("show-submenu");
        }
      });
    },
    openRetraitantForm() {
      this.$emit("openAddRetraitantForm");
    }
  },
  mounted() {
    // Horizontal menu on mobile
    this.ToggleMenu();

    // Réduisons le titre selon les dimensions du phone
    if (window.matchMedia("(max-width: 360px)").matches) {
      $(".title-logo-mobile").html("Saint Jean...");
    } else {
      let defaultTitle = $(".title-logo").html();
      $(".title-logo-mobile").html(defaultTitle);
    }
  }
};
</script>
