<template>
  <div class="Content-home">
      <div class="content-wrapper" style="padding-top: 5px;">
            <div class="row">
              <div class="col-md-12">
                <v-breadcrumbs style="padding-left: 0;">
                  <a class="v-breadcrumbs__item" style="font-size: 14px;">Tableau de bord </a>
                  <!-- <v-icon>chevron_right</v-icon>
                  <a class="v-breadcrumbs__item" style="font-size: 14px;">Test </a> -->
                </v-breadcrumbs>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 col-lg-3 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h1 class="font-weight-light mb-4">253</h1>
                    <div class="d-flex flex-wrap align-items-center">
                      <div>
                        <h4 class="font-weight-normal">Retraitants</h4>
                        <p class="text-muted mb-0 font-weight-light text-smaller">35 Retraitants inactifs</p>
                      </div>
                      <span class="bg-icon-style bg-primary">
                      <i class="mdi mdi-account-multiple icon-lg text-white ml-auto"></i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-3 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h1 class="font-weight-light mb-4">5757</h1>
                    <div class="d-flex flex-wrap align-items-center">
                      <div>
                        <h4 class="font-weight-normal">Réservations</h4>
                        <p class="text-muted mb-0 font-weight-light text-smaller">Mois de Novembre</p>
                      </div>
                      <span class="bg-icon-style bg-danger">
                      <i class="material-icons icon-lg text-white ml-auto">date_range</i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-3 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h1 class="font-weight-light mb-4">4</h1>
                    <div class="d-flex flex-wrap align-items-center">
                      <div>
                        <h4 class="font-weight-normal">Chambre(s) disponible</h4>
                        <p class="text-muted mb-0 font-weight-light text-smaller"><b>(10/14)</b> réservées</p>
                      </div>
                      <span class="bg-icon-style bg-info">
                      <i class="material-icons icon-lg text-white ml-auto">local_hotel</i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-3 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h1 class="font-weight-light mb-4">3</h1>
                    <div class="d-flex flex-wrap align-items-center">
                      <div>
                        <h4 class="font-weight-normal">Espaces & Salles disponibles</h4>
                        <p class="text-muted mb-0 font-weight-light text-smaller"><b>(2/2)</b> Espace(s) réservés</p>
                        <p class="text-muted mb-0 font-weight-light text-smaller"><b>(12/15)</b> Salle(s) réservées</p>
                      </div>
                      <span class="bg-icon-style bg-success">
                        <i class="material-icons icon-lg text-white ml-auto">local_offer</i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-9 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <div class="d-flex align-items-start justify-content-between">
                      <h4 class="card-title">Réservations de la semaine</h4>
                      <v-menu bottom auto offset-y>
                        <v-btn
                          slot="activator"
                          small
                          flat
                          icon
                        >
                         <v-icon class="material-icons">more_vert</v-icon>
                        </v-btn>
                        <v-list>
                          <v-list-tile
                            @click=""
                          >
                            <v-list-tile-title>Retraitants</v-list-tile-title>
                          </v-list-tile>
                          <v-list-tile
                            @click=""
                          >
                            <v-list-tile-title>Groupes</v-list-tile-title>
                          </v-list-tile>
                        </v-list>
                      </v-menu>
                    </div>
                    <div class="table-responsive">
                      <table class="table">
                        <thead>
                          <tr>
                            <th class="pt-1 pl-0">
                              Retraitants
                            </th>
                            <th class="pt-1">
                              Période
                            </th>
                            <th class="pt-1">
                              nb Jours
                            </th>
                            <th class="pt-1">
                              Motif
                            </th>
                            <th class="pt-1">
                              Etat
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td class="py-1 pl-0">
                              <div class="d-flex align-items-center">
                                <img src="../../../public/images/faces/face3.jpg" alt="profile"/>
                                <div class="ml-3">
                                  <p class="mb-2">Alexandre Chris <v-icon small color="red">favorite</v-icon></p>
                                  <p class="mb-0 text-muted text-small"> Monsieur</p>
                                </div>
                              </div>
                            </td>
                            <td>
                              Du 29/08/2018 Au 01/09/2018
                            </td>
                            <td>
                              4 Jours
                            </td>
                            <td>
                              Repos
                            </td>
                            <td>
                              <label class="badge badge-warning">En attente</label>
                            </td>
                          </tr>
                          <tr>
                            <td class="py-1 pl-0">
                              <div class="d-flex align-items-center">
                                <img src="../../../public/images/faces/face1.jpg" alt="profile"/>
                                <div class="ml-3">
                                  <p class="mb-2">Jean smith <v-icon small color="red">favorite</v-icon></p>
                                  <p class="mb-0 text-muted text-small"> Monsieur</p>
                                </div>
                              </div>
                            </td>
                            <td>
                              Du 12/09/2018 Au 14/09/2018
                            </td>
                            <td>
                              2 Jours
                            </td>
                            <td>
                              Repos
                            </td>
                            <td>
                              <label class="badge badge-warning">En attente</label>
                            </td>
                          </tr>
                          <tr>
                            <td class="py-1 pl-0">
                              <div class="d-flex align-items-center">
                                <img src="../../../public/images/faces/face6.jpg" alt="profile"/>
                                <div class="ml-3">
                                  <p class="mb-2">Jane Doe <v-icon small color="red">favorite</v-icon></p>
                                  <p class="mb-0 text-muted text-small"> Madame</p>
                                </div>
                              </div>
                            </td>
                            <td>
                              Du 20/09/2018 Au 25/09/2018
                            </td>
                            <td>
                              5 Jours
                            </td>
                            <td>
                              Retraite spirituelle
                            </td>
                            <td>
                              <label class="badge badge-warning">En attente</label>
                            </td>
                          </tr>
                          <tr>
                            <td class="py-1 pl-0">
                              <div class="d-flex align-items-center">
                                <img src="../../../public/images/faces/face4.jpg" alt="profile"/>
                                <div class="ml-3">
                                  <p class="mb-2">Marc Houston <v-icon small color="red">favorite</v-icon></p>
                                  <p class="mb-0 text-muted text-small"> Monsieur</p>
                                </div>
                              </div>
                            </td>
                            <td>
                              Du 27/09/2018 Au 31/09/2018
                            </td>
                            <td>
                              5 Jours
                            </td>
                            <td>
                              Repos
                            </td>
                            <td>
                              <label class="badge badge-warning">En attente</label>
                            </td>
                          </tr>
                          
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-3 grid-margin stretch-card">
                <v-date-picker locale="fr" width="100%" v-model="picker2" header-color="primary"></v-date-picker>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <div class="d-flex align-items-start justify-content-between">
                      <h4 class="card-title">Statistics</h4>
                      <div class="dropdown">
                        <button class="btn btn-sm btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuDate" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                          11 May 2018
                        </button>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuDate">
                          <a class="dropdown-item" href="#">12 May 2018</a>
                          <div class="dropdown-divider"></div>
                          <a class="dropdown-item" href="#">13 May 2018</a>
                          <div class="dropdown-divider"></div>
                          <a class="dropdown-item" href="#">14 May 2018</a>
                          <div class="dropdown-divider"></div>
                          <a class="dropdown-item" href="#">15 May 2018</a>
                        </div>
                      </div>
                    </div>
                    <div id="statistics-legend" class="chartjs-legend mt-2 mb-4"></div>
                    <canvas id="statistics-chart"></canvas>
                  </div>
                </div>
              </div>
            </div>
      </div>
    
    <v-snackbar
    v-model="snackbar"
    :color="color"
    :multi-line="mode === 'multi-line'"
    :timeout="timeout"
    :vertical="mode === 'vertical'"
    >
    {{ text }}
    <v-btn
      dark
      flat
      @click="snackbar = false"
    >
      Fermer
    </v-btn>
    </v-snackbar>

  </div>
</template>

<style scoped>
@import url(./style.css);
</style>

<script>
export default {
  data() {
    return {
      snackbar: false,
      color: "info",
      mode: "",
      timeout: 6000,
      text: "",
      picker: new Date().toISOString().substr(0, 10),
      picker2: new Date().toISOString().substr(0, 10)
    };
  },
  methods: {
    JqueryDashboardFonctions() {
      $(function() {
        if ($("#statistics-chart").length) {
          var areaData = {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
            datasets: [
              {
                data: [0, 205, 75, 150, 100, 150, 50, 100],
                backgroundColor: ["rgba(68, 81, 158, .78)"],
                borderColor: ["rgba(68, 81, 158, .78)"],
                borderWidth: 1,
                fill: "origin",
                label: "purchases"
              },
              {
                data: [0, 100, 160, 100, 180, 75, 200, 50],
                backgroundColor: ["#fc5661"],
                borderColor: ["#fc5661"],
                borderWidth: 1,
                fill: "origin",
                label: "services"
              }
            ]
          };
          var areaOptions = {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
              filler: {
                propagate: false
              }
            },
            scales: {
              xAxes: [
                {
                  display: true,
                  ticks: {
                    display: true
                  },
                  gridLines: {
                    display: false,
                    drawBorder: false,
                    color: "transparent",
                    zeroLineColor: "#eeeeee"
                  }
                }
              ],
              yAxes: [
                {
                  display: true,
                  ticks: {
                    display: true,
                    autoSkip: false,
                    maxRotation: 0,
                    stepSize: 100,
                    min: 0,
                    max: 300
                  },
                  gridLines: {
                    drawBorder: false
                  }
                }
              ]
            },
            legend: {
              display: false
            },
            tooltips: {
              enabled: true
            },
            elements: {
              line: {
                tension: 0.25
              },
              point: {
                radius: 0
              }
            }
          };
          var salesChartCanvas = $("#statistics-chart")
            .get(0)
            .getContext("2d");
          var salesChart = new Chart(salesChartCanvas, {
            type: "line",
            data: areaData,
            options: areaOptions
          });
          document.getElementById(
            "statistics-legend"
          ).innerHTML = salesChart.generateLegend();
        }
        if ($("#traffic-chart").length) {
          var trafficData = {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
            datasets: [
              {
                data: [0, 205, 75, 150, 100, 150, 50, 100],
                backgroundColor: ["#fc5661"],
                borderColor: ["#fc5661"],
                borderWidth: 3,
                fill: "false",
                label: "sales"
              }
            ]
          };
          var trafficOptions = {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
              filler: {
                propagate: false
              }
            },
            scales: {
              xAxes: [
                {
                  display: true,
                  ticks: {
                    display: true
                  },
                  gridLines: {
                    display: false,
                    drawBorder: false,
                    color: "transparent",
                    zeroLineColor: "#eeeeee"
                  }
                }
              ],
              yAxes: [
                {
                  display: true,
                  ticks: {
                    display: true,
                    autoSkip: false,
                    maxRotation: 0,
                    stepSize: 100,
                    min: 0,
                    max: 300
                  },
                  gridLines: {
                    drawBorder: false
                  }
                }
              ]
            },
            legend: {
              display: false
            },
            tooltips: {
              enabled: true
            },
            elements: {
              line: {
                tension: 0
              },
              point: {
                radius: 0
              }
            }
          };
          var trafficChartCanvas = $("#traffic-chart")
            .get(0)
            .getContext("2d");
          var trafficChart = new Chart(trafficChartCanvas, {
            type: "line",
            data: trafficData,
            options: trafficOptions
          });
          document.getElementById(
            "traffic-legend"
          ).innerHTML = trafficChart.generateLegend();
        }
        if ($("#statistics-chart-dark").length) {
          var areaData = {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
            datasets: [
              {
                data: [0, 185, 75, 150, 100, 150, 50, 100],
                backgroundColor: ["rgba(108, 80, 243, .78)"],
                borderColor: ["rgba(108, 80, 243, .78)"],
                borderWidth: 1,
                fill: "origin",
                label: "purchases"
              },
              {
                data: [0, 100, 160, 100, 150, 75, 200, 50],
                backgroundColor: ["rgba(255, 255, 255, .3)"],
                borderColor: ["rgba(255, 255, 255, .3)"],
                borderWidth: 1,
                fill: "origin",
                label: "services"
              }
            ]
          };
          var areaOptions = {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
              filler: {
                propagate: false
              }
            },
            scales: {
              xAxes: [
                {
                  display: true,
                  ticks: {
                    display: true
                  },
                  gridLines: {
                    display: false,
                    drawBorder: false,
                    color: "transparent",
                    zeroLineColor: "#eeeeee"
                  }
                }
              ],
              yAxes: [
                {
                  display: true,
                  ticks: {
                    display: true,
                    autoSkip: false,
                    maxRotation: 0,
                    stepSize: 50,
                    min: 0,
                    max: 250
                  },
                  gridLines: {
                    color: "#4a4a4a"
                  }
                }
              ]
            },
            legend: {
              display: false
            },
            tooltips: {
              enabled: true
            },
            elements: {
              line: {
                tension: 0.25
              },
              point: {
                radius: 0
              }
            }
          };
          var salesChartCanvas = $("#statistics-chart-dark")
            .get(0)
            .getContext("2d");
          var salesChart = new Chart(salesChartCanvas, {
            type: "line",
            data: areaData,
            options: areaOptions
          });
          document.getElementById(
            "statistics-legend"
          ).innerHTML = salesChart.generateLegend();
        }
        if ($("#analysis-chart").length) {
          var CurrentChartCanvas = $("#analysis-chart")
            .get(0)
            .getContext("2d");
          var CurrentChart = new Chart(CurrentChartCanvas, {
            type: "bar",
            data: {
              labels: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec"
              ],
              datasets: [
                {
                  label: "Profit",
                  data: [
                    280,
                    330,
                    370,
                    410,
                    290,
                    400,
                    309,
                    530,
                    340,
                    420,
                    380,
                    240
                  ],
                  backgroundColor: "#44519e"
                },
                {
                  label: "Target",
                  data: [
                    380,
                    540,
                    600,
                    480,
                    370,
                    500,
                    450,
                    590,
                    540,
                    480,
                    510,
                    300
                  ],
                  backgroundColor: "#e7eaed"
                }
              ]
            },
            options: {
              responsive: true,
              maintainAspectRatio: true,
              layout: {
                padding: {
                  left: 0,
                  right: 0,
                  top: 20,
                  bottom: 0
                }
              },
              scales: {
                yAxes: [
                  {
                    display: true,
                    gridLines: {
                      drawBorder: false
                    },
                    ticks: {
                      display: false
                    }
                  }
                ],
                xAxes: [
                  {
                    stacked: true,
                    ticks: {
                      beginAtZero: true,
                      fontColor: "#9fa0a2"
                    },
                    gridLines: {
                      color: "rgba(0, 0, 0, 0)",
                      display: true
                    },
                    barPercentage: 0.8
                  }
                ]
              },
              legend: {
                display: false
              },
              elements: {
                point: {
                  radius: 0
                }
              }
            }
          });
        }
      });
    }
  },
  mounted() {
    // Au chargement du composant déclenche l'ensemble des scripts du template
    this.JqueryDashboardFonctions();
    // Open snackbar
    this.snackbar = true;
    this.text = "Bienvenue, dans votre interface";
  }
};
</script>
