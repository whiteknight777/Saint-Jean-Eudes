<template>
  <div class="Content-home">
      <div class="content-wrapper">
            <div class="row">
              <div class="col-md-6 col-lg-3 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h1 class="font-weight-light mb-4">Paramètres</h1>
                    <div class="d-flex flex-wrap align-items-center">
                      <div>
                        <h4 class="font-weight-normal">Customers</h4>
                        <p class="text-muted mb-0 font-weight-light">800 New customers</p>
                      </div>
                      <i class="mdi mdi-account-multiple icon-lg text-primary ml-auto"></i>
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
                        <h4 class="font-weight-normal">Orders</h4>
                        <p class="text-muted mb-0 font-weight-light">1600 Daily orders</p>
                      </div>
                      <i class="mdi mdi-chart-pie icon-lg text-danger ml-auto"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-3 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h1 class="font-weight-light mb-4">28534</h1>
                    <div class="d-flex flex-wrap align-items-center">
                      <div>
                        <h4 class="font-weight-normal">Delivery</h4>
                        <p class="text-muted mb-0 font-weight-light">760 New items</p>
                      </div>
                      <i class="mdi mdi-car icon-lg text-info ml-auto"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-3 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h1 class="font-weight-light mb-4">59450</h1>
                    <div class="d-flex flex-wrap align-items-center">
                      <div>
                        <h4 class="font-weight-normal">Verified</h4>
                        <p class="text-muted mb-0 font-weight-light">540 Verified users</p>
                      </div>
                      <i class="mdi mdi-verified icon-lg text-success ml-auto"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-7 grid-margin stretch-card">
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
              <div class="col-md-5 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <div class="d-flex align-items-start justify-content-between">
                      <h4 class="card-title">Traffic types</h4>
                      <div class="dropdown">
                        <button class="btn btn-sm btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuTraffic" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                          Yearly
                        </button>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuTraffic">
                          <a class="dropdown-item" href="#">Monthly</a>
                          <div class="dropdown-divider"></div>
                          <a class="dropdown-item" href="#">Weekly</a>
                          <div class="dropdown-divider"></div>
                          <a class="dropdown-item" href="#">Daily</a>
                          <div class="dropdown-divider"></div>
                          <a class="dropdown-item" href="#">Hourly</a>
                        </div>
                      </div>
                    </div>
                    <canvas id="traffic-chart" class="mt-2"></canvas>
                    <div class="d-flex mt-5 align-items-center">
                      <div id="traffic-legend" class="chartjs-legend traffic-legend mr-4"></div>
                      <h3 class="mb-0 font-weight-normal">43909</h3>
                    </div>
                    <p class="mb-0 mt-4 font-weight-light">
                      There is no denying the fact that the success of an advertisement lies mostly 
                      in the headline. The headline should attract the reader and make him read the 
                      rest.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <div class="d-flex align-items-start justify-content-between">
                      <h4 class="card-title">User tickets</h4>
                      <div class="dropdown">
                        <button class="btn p-0" type="button" id="dropdownMenuButton1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                          <i class="mdi mdi-dots-horizontal text-primary"></i>
                        </button>
                        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton1">
                          <a class="dropdown-item" href="#">Settings</a>
                          <div class="dropdown-divider"></div>
                          <a class="dropdown-item" href="#">Details</a>
                          <div class="dropdown-divider"></div>
                          <a class="dropdown-item" href="#">Export</a>
                        </div>
                      </div>
                    </div>
                    <div class="preview-list">
                      <div class="preview-item pt-0">
                        <div class="preview-thumbnail">
                          <img src="../../../public/images/faces/face7.jpg" alt="image" class="rounded-circle">
                        </div>
                        <div class="preview-item-content flex-grow-1">
                          <h6>Franklin Anderson</h6>
                          <p class="text-muted font-weight-light mb-0">6 Powerful Tips To Creating Testimonials</p>
                        </div>
                        <p class="mb-0">19 Jan 2018</p>
                      </div>
                    </div>
                    <div class="preview-list">
                      <div class="preview-item">
                        <div class="preview-thumbnail">
                          <img src="../../../public/images/faces/face6.jpg" alt="image" class="rounded-circle">
                        </div>
                        <div class="preview-item-content flex-grow-1">
                          <h6>Louise Horton</h6>
                          <p class="text-muted font-weight-light mb-0">Research In Advertising</p>
                        </div>
                        <p class="mb-0">27 Feb 2018</p>
                      </div>
                    </div>
                    <div class="preview-list">
                      <div class="preview-item">
                        <div class="preview-thumbnail">
                          <img src="../../../public/images/faces/face9.jpg" alt="image" class="rounded-circle">
                        </div>
                        <div class="preview-item-content flex-grow-1">
                          <h6>Eric Garcia</h6>
                          <p class="text-muted font-weight-light mb-0">Create a successful adevertisement</p>
                        </div>
                        <p class="mb-0">03 Feb 2018</p>
                      </div>
                    </div>
                    <div class="preview-list">
                      <div class="preview-item">
                        <div class="preview-thumbnail">
                          <img src="../../../public/images/faces/face10.jpg" alt="image" class="rounded-circle">
                        </div>
                        <div class="preview-item-content flex-grow-1">
                          <h6>Amy Cole</h6>
                          <p class="text-muted font-weight-light mb-0">Why Do You Need To Join Marketing Network</p>
                        </div>
                        <p class="mb-0">25 Sep 2018</p>
                      </div>
                    </div>
                    <div class="preview-list">
                      <div class="preview-item">
                        <div class="preview-thumbnail">
                          <img src="../../../public/images/faces/face8.jpg" alt="image" class="rounded-circle">
                        </div>
                        <div class="preview-item-content flex-grow-1">
                          <h6>Russell Rodriquez</h6>
                          <p class="text-muted font-weight-light mb-0">Effective Forms Of Advertising</p>
                        </div>
                        <p class="mb-0">29 Sep 2018</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Analysis</h4>
                    <canvas id="analysis-chart"></canvas>                  
                    <div class="d-lg-flex justify-content-around mt-5">
                      <div class="text-center mb-3 mb-lg-0">
                        <h3 class="font-weight-light text-success">+40.02%</h3>
                        <p class="text-muted mb-0">Growth</p>
                      </div>
                      <div class="text-center mb-3 mb-lg-0">
                        <h3 class="font-weight-light text-danger">2.5%</h3>
                        <p class="text-muted mb-0">Refund</p>
                      </div>
                      <div class="text-center">
                        <h3 class="font-weight-light text-primary">+23.65%</h3>
                        <p class="text-muted mb-0">Online</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Latest projects</h4>
                    <div class="table-responsive">
                      <table class="table table-hover">
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Start date</th>
                            <th>End date</th>
                            <th>Status</th>
                            <th>Assigned to</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <h6 class="font-weight-normal">Be Single Minded</h6>
                              <p class="mb-0 text-muted">Advertising Outdoors</p>
                            </td>
                            <td>
                              13 May 2018
                            </td>
                            <td>
                              19 Jun 2018
                            </td>
                            <td>
                              <label class="badge badge-success">Done</label>
                            </td>
                            <td>
                              Betty Howard
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h6 class="font-weight-normal">Buy Youtube Views</h6>
                              <p class="mb-0 text-muted">Promote With Postcards</p>
                            </td>
                            <td>
                              30 Oct 2018
                            </td>
                            <td>
                              17 Sep 2018
                            </td>
                            <td>
                              <label class="badge badge-primary">On hold</label>
                            </td>
                            <td>
                              Calvin Wood
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h6 class="font-weight-normal">The Importance Of Human Life</h6>
                              <p class="mb-0 text-muted">Illustration In Marketing Materials</p>
                            </td>
                            <td>
                              06 Dec 2018
                            </td>
                            <td>
                              31 Jul 2018
                            </td>
                            <td>
                              <label class="badge badge-warning">In progress</label>
                            </td>
                            <td>
                              Carl Dennis
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h6 class="font-weight-normal">Enlightenment Is Not Just One State</h6>
                              <p class="mb-0 text-muted">Promotional Advertising Specialty You Ve Waited Long Enough</p>
                            </td>
                            <td>
                              15 Jul 2018
                            </td>
                            <td>
                              19 Nov 2018
                            </td>
                            <td>
                              <label class="badge badge-danger">Cancelled</label>
                            </td>
                            <td>
                              Florence Holland
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <h6 class="font-weight-normal">Feedback Management</h6>
                              <p class="mb-0 text-muted">Characteristics Of A Successful Advertisement</p>
                            </td>
                            <td>
                              04 Sep 2018
                            </td>
                            <td>
                              20 Jul 2018
                            </td>
                            <td>
                              <label class="badge badge-success">Done</label>
                            </td>
                            <td>
                              Abbie Hughes
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div class="d-flex mt-4">
                        <nav class="ml-auto">
                          <ul class="pagination pagination-flat pagination-primary">
                            <li class="page-item"><a class="page-link" href="#"><i class="mdi mdi-chevron-left"></i></a></li>
                            <li class="page-item active"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item"><a class="page-link" href="#">4</a></li>
                            <li class="page-item"><a class="page-link" href="#">5</a></li>
                            <li class="page-item"><a class="page-link" href="#"><i class="mdi mdi-chevron-right"></i></a></li>
                          </ul>
                        </nav>
                      </div>
                    </div>
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
  data () {
    return {
      snackbar: false,
      color: 'info',
      mode: '',
      timeout: 6000,
      text: ''
    }
  },
  methods: {
    JqueryDashboardFonctions () {
      $(function() {
        if ($("#statistics-chart").length) {
          var areaData = {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
            datasets: [{
                data: [0, 205, 75, 150, 100, 150, 50, 100],
                backgroundColor: [
                  'rgba(68, 81, 158, .78)'
                ],
                borderColor: [
                  'rgba(68, 81, 158, .78)'
                ],
                borderWidth: 1,
                fill: 'origin',
                label: "purchases"
              },
              {
                data: [0, 100, 160, 100, 180, 75, 200, 50],
                backgroundColor: [
                  '#fc5661'
                ],
                borderColor: [
                  '#fc5661'
                ],
                borderWidth: 1,
                fill: 'origin',
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
              xAxes: [{
                display: true,
                ticks: {
                  display: true
                },
                gridLines: {
                  display: false,
                  drawBorder: false,
                  color: 'transparent',
                  zeroLineColor: '#eeeeee'
                }
              }],
              yAxes: [{
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
              }]
            },
            legend: {
              display: false
            },
            tooltips: {
              enabled: true
            },
            elements: {
              line: {
                tension: .25
              },
              point: {
                radius: 0
              }
            }
          }
          var salesChartCanvas = $("#statistics-chart").get(0).getContext("2d");
          var salesChart = new Chart(salesChartCanvas, {
            type: 'line',
            data: areaData,
            options: areaOptions
          });
          document.getElementById('statistics-legend').innerHTML = salesChart.generateLegend();
        }
        if ($("#traffic-chart").length) {
          var trafficData = {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
            datasets: [{
                data: [0, 205, 75, 150, 100, 150, 50, 100],
                backgroundColor: [
                  '#fc5661'
                ],
                borderColor: [
                  '#fc5661'
                ],
                borderWidth: 3,
                fill: 'false',
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
              xAxes: [{
                display: true,
                ticks: {
                  display: true
                },
                gridLines: {
                  display: false,
                  drawBorder: false,
                  color: 'transparent',
                  zeroLineColor: '#eeeeee'
                }
              }],
              yAxes: [{
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
              }]
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
          }
          var trafficChartCanvas = $("#traffic-chart").get(0).getContext("2d");
          var trafficChart = new Chart(trafficChartCanvas, {
            type: 'line',
            data: trafficData,
            options: trafficOptions
          });
          document.getElementById('traffic-legend').innerHTML = trafficChart.generateLegend();
        }
        if ($("#statistics-chart-dark").length) {
          var areaData = {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
            datasets: [{
                data: [0, 185, 75, 150, 100, 150, 50, 100],
                backgroundColor: [
                  'rgba(108, 80, 243, .78)'
                ],
                borderColor: [
                  'rgba(108, 80, 243, .78)'
                ],
                borderWidth: 1,
                fill: 'origin',
                label: "purchases"
              },
              {
                data: [0, 100, 160, 100, 150, 75, 200, 50],
                backgroundColor: [
                  'rgba(255, 255, 255, .3)'
                ],
                borderColor: [
                  'rgba(255, 255, 255, .3)'
                ],
                borderWidth: 1,
                fill: 'origin',
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
              xAxes: [{
                display: true,
                ticks: {
                  display: true
                },
                gridLines: {
                  display: false,
                  drawBorder: false,
                  color: 'transparent',
                  zeroLineColor: '#eeeeee'
                }
              }],
              yAxes: [{
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
                  color: '#4a4a4a'
                }
              }]
            },
            legend: {
              display: false
            },
            tooltips: {
              enabled: true
            },
            elements: {
              line: {
                tension: .25
              },
              point: {
                radius: 0
              }
            }
          }
          var salesChartCanvas = $("#statistics-chart-dark").get(0).getContext("2d");
          var salesChart = new Chart(salesChartCanvas, {
            type: 'line',
            data: areaData,
            options: areaOptions
          });
          document.getElementById('statistics-legend').innerHTML = salesChart.generateLegend();
        }
        if ($("#analysis-chart").length) {
          var CurrentChartCanvas = $("#analysis-chart").get(0).getContext("2d");
          var CurrentChart = new Chart(CurrentChartCanvas, {
            type: 'bar',
            data: {
              labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
              datasets: [{
                  label: 'Profit',
                  data: [280, 330, 370, 410, 290, 400, 309, 530, 340, 420, 380, 240],
                  backgroundColor: '#44519e'
                },
                {
                  label: 'Target',
                  data: [380, 540, 600, 480, 370, 500, 450, 590, 540, 480, 510, 300],
                  backgroundColor: '#e7eaed'
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
                yAxes: [{
                  display: true,
                  gridLines: {
                    drawBorder: false
                  },
                  ticks: {
                    display: false
                  }
                }],
                xAxes: [{
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
                }]
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
  mounted () {
    // Au chargement du composant déclenche l'ensemble des scripts du template
    this.JqueryDashboardFonctions()
    // Open snackbar
    this.snackbar = true
    this.text = 'Bienvenue, dans votre interface'
  },
}
</script>
