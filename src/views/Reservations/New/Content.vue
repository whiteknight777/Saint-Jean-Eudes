<template>
	<div class="Content-retraitant">
      <div class="content-wrapper" style="padding-top: 15px;padding-bottom: 15px">
			<div class="row">
              <div class="col-md-12" style="padding-right: 5px;padding-left: 5px;">
                <v-breadcrumbs style="padding-left: 0;padding-right: 0px;">
                  <router-link to="/tableau-de-bord" class="v-breadcrumbs__item" style="font-size: 14px;">Tableau de bord </router-link>
                  <v-icon>chevron_right</v-icon>
				  <router-link to="/reservations" class="v-breadcrumbs__item" style="font-size: 14px;">Historique Réservations </router-link>
                  <v-icon>chevron_right</v-icon>
                  <a class="v-breadcrumbs__item" style="font-size: 14px;">Nouvelle Réservation </a>

				  
				  <v-spacer></v-spacer>

                </v-breadcrumbs>

              </div>
            </div>
				<v-layout row>
					

					<div class="p-t-20 p-b-20 xs12 sm12 md12 lg12" style="width:100%">
						
						<v-stepper v-model="step" non-linear v-if="client == 0">
							<v-stepper-header>
							<v-stepper-step :complete="step > 1" :editable="step > 1" step="1">Informations générales</v-stepper-step>

							<v-divider></v-divider>

							<v-stepper-step :complete="step > 2" :editable="step > 2" step="2">Liste Retraitant </v-stepper-step>

							<v-divider></v-divider>

							<v-stepper-step :complete="step > 3" :editable="step > 3" step="3">Chambres | Salles | Espaces </v-stepper-step>

							<v-divider></v-divider>

							<v-stepper-step :complete="step > 4" :editable="step > 4" step="4">Restauration</v-stepper-step>
							
							<v-divider></v-divider>

							<v-stepper-step :complete="step > 5" :editable="step > 5" step="5">Remises</v-stepper-step>

							<v-divider></v-divider>

							<v-stepper-step :editable="step > 5" step="6">Reglèments</v-stepper-step>
							</v-stepper-header>

							<v-stepper-items>
							<v-stepper-content step="1">
								<v-card
								class="mb-5"
								height="200px"
								>
								<v-card-text>
										<v-container grid-list-md>
										<v-layout wrap>
											<v-flex xs12>
												<v-switch
												:label="client ? 'Retraitant' : 'Groupe'"
												color="#44519e"
												v-model="client"
												></v-switch>
											</v-flex>
										</v-layout>
										</v-container>
								</v-card-text>
								</v-card>

								<v-btn
								color="primary"
								@click="step = 2"
								>
								Continue
								</v-btn>

								<!-- <v-btn flat>Cancel</v-btn> -->
							</v-stepper-content>

							<v-stepper-content step="2">
								<v-card
								class="mb-5"
								color="grey lighten-1"
								height="200px"
								></v-card>

								<v-btn
								color="primary"
								@click="step = 3"
								>
								Continue
								</v-btn>

								<v-btn 
								flat
								@click="step = 1"
								>retour</v-btn>
							</v-stepper-content>

							<v-stepper-content step="3">
								<v-card
								class="mb-5"
								color="grey lighten-1"
								height="200px"
								></v-card>

								<v-btn
								color="primary"
								@click="step = 4"
								>
								Continue
								</v-btn>

								<v-btn 
								flat
								@click="step = 2"
								>retour</v-btn>
							</v-stepper-content>

							<v-stepper-content step="4">
								<v-card
								class="mb-5"
								color="grey lighten-1"
								height="200px"
								></v-card>

								<v-btn
								color="primary"
								@click="step = 5"
								>
								Continue
								</v-btn>

								<v-btn 
								flat
								@click="step = 3"
								>retour</v-btn>
							</v-stepper-content>
							
							<v-stepper-content step="5">
								<v-card
								class="mb-5"
								color="grey lighten-1"
								height="200px"
								></v-card>

								<v-btn
								color="primary"
								@click="step = 6"
								>
								Continue
								</v-btn>

								<v-btn 
								flat
								@click="step = 4"
								>retour</v-btn>
							</v-stepper-content>

							<v-stepper-content step="6">
								<v-card
								class="mb-5"
								color="grey lighten-1"
								height="200px"
								></v-card>

								<v-btn
								color="primary"
								>
								Terminer
								</v-btn>

								<v-btn 
								flat
								@click="step = 5"
								>retour</v-btn>
							</v-stepper-content>


							</v-stepper-items>
						</v-stepper>

						<v-stepper v-model="step" non-linear v-if="client == 1">
							<v-stepper-header>
							<v-stepper-step :complete="step > 1" :editable="step > 1" step="1">Informations générales</v-stepper-step>

							<v-divider></v-divider>

							<v-stepper-step :complete="step > 2" :editable="step > 2" step="2">Chambres | Salles | Espaces </v-stepper-step>

							<v-divider></v-divider>

							<v-stepper-step :complete="step > 3" :editable="step > 3" step="3">Restauration</v-stepper-step>
							
							<v-divider></v-divider>

							<v-stepper-step :complete="step > 4" :editable="step > 4" step="4">Remises</v-stepper-step>

							<v-divider></v-divider>

							<v-stepper-step :editable="step > 5" step="5">Reglèments</v-stepper-step>
							</v-stepper-header>

							<v-stepper-items>
							<v-stepper-content step="1">
								<v-card
								class="mb-5"
								height="200px"
								>
								<v-card-text>
										<v-container grid-list-md>
										<v-layout wrap>
											<v-flex xs12>
												<v-switch
												:label="client ? 'Retraitant' : 'Groupe'"
												color="#44519e"
												v-model="client"
												></v-switch>
											</v-flex>
										</v-layout>
										</v-container>
								</v-card-text>
								</v-card>

								<v-btn
								color="primary"
								@click="step = 2"
								>
								Continue
								</v-btn>

							</v-stepper-content>

							<v-stepper-content step="2">
								<v-card
								class="mb-5"
								color="grey lighten-1"
								height="200px"
								></v-card>

								<v-btn
								color="primary"
								@click="step = 3"
								>
								Continue
								</v-btn>

								<v-btn 
								flat
								@click="step = 1"
								>retour</v-btn>
							</v-stepper-content>

							<v-stepper-content step="3">
								<v-card
								class="mb-5"
								color="grey lighten-1"
								height="200px"
								></v-card>

								<v-btn
								color="primary"
								@click="step = 4"
								>
								Continue
								</v-btn>

								<v-btn 
								flat
								@click="step = 2"
								>retour</v-btn>
							</v-stepper-content>
							
							<v-stepper-content step="4">
								<v-card
								class="mb-5"
								color="grey lighten-1"
								height="200px"
								></v-card>

								<v-btn
								color="primary"
								@click="step = 5"
								>
								Continue
								</v-btn>

								<v-btn 
								flat
								@click="step = 3"
								>retour</v-btn>
							</v-stepper-content>

							<v-stepper-content step="5">
								<v-card
								class="mb-5"
								color="grey lighten-1"
								height="200px"
								></v-card>

								<v-btn
								color="primary"
								>
								Terminer
								</v-btn>

								<v-btn 
								flat
								@click="step = 4"
								>retour</v-btn>
							</v-stepper-content>


							</v-stepper-items>
						</v-stepper>
						
					</div>

				</v-layout>


				<v-snackbar
				v-model="snackbar"
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
	</div>
</template>

<style scoped>
@import url(./style.css);
</style>

<script>
export default {
  data() {
    return {
      step: 1,
      client: 1,
      mode: "",
      timeout: 6000,
      snackbar: false,
      text: "test"
    };
  },
  methods: {
    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${day}/${month}/${year}`;
    },
    parseDate(date) {
      if (!date) return null;

      const [day, month, year] = date.split("/");
      return `${day.padStart(2, "0")}-${month.padStart(2, "0")}-${year}`;
    }
  },
  mounted() {
    // Open snackbar
    // this.snackbar = true;
    // this.text = "Bienvenue, dans votre interface";
  }
};
</script>
