<template>
	<div class="Content-retraitant">
      <div class="content-wrapper" style="padding-top: 5px;">
			<div class="row">
              <div class="col-md-12" style="padding-right: 5px;padding-left: 5px;">
                <v-breadcrumbs style="padding-left: 0;padding-right: 0px;">
                  <router-link to="/tableau-de-bord" class="v-breadcrumbs__item" style="font-size: 14px;">Tableau de bord </router-link>
                  <v-icon>chevron_right</v-icon>
                  <a class="v-breadcrumbs__item" style="font-size: 14px;">Liste Retraitants </a>

				  
				  <v-spacer></v-spacer>

				  <v-btn 
				  	dark
					color="green"
					@click="openRetraitantForm"
					style="margin-right:0px"
					>
					<v-icon
				  	icon
					style="padding-right:5px"  
					>person_add</v-icon>
					Retraitant 
				  </v-btn>

				   <v-btn 
				  	dark
					color="red"
					@click="addGroupe = !addGroupe"
					style="margin-right:0px"
					>
					<v-icon
				  	icon
					style="padding-right: 5px;font-size: 29px;"  
					>group_add</v-icon>
					Groupe 
				  </v-btn>

				  <v-menu bottom auto offset-y>
					<v-btn
						slot="activator"
						color="#676c8e"
						dark
						icon
					>
						<v-icon class="material-icons">more_vert</v-icon>
					</v-btn>
					<v-list>
						<v-list-tile
						@click=""
						>
						<v-list-tile-title>Tout afficher</v-list-tile-title>
						</v-list-tile>
						<v-list-tile
						@click=""
						>
						<v-list-tile-title>Liste amis</v-list-tile-title>
						</v-list-tile>
					</v-list>
					</v-menu>


                </v-breadcrumbs>

              </div>
            </div>
				<v-layout row>
					

					<div class="p-t-20 p-b-20 xs12 sm12 md12 lg12" style="width:100%">
						<v-toolbar
						color="#676c8e"
						dark
						tabs
						style="padding-top: 30px;"
						>
						<v-text-field
							v-model="search"
							append-icon="mic"
							class="mx-3"
							flat
							:label="labelSearch"
							prepend-inner-icon="search"
							solo-inverted
						></v-text-field>

						<v-tabs
							slot="extension"
							v-model="tabs"
							centered
							color="transparent"
							slider-color="white"
						>
							<v-tab
							key="0"
							@click="labelSearch = 'Rechercher un retraitant'"
							>
							Retraitants
							</v-tab>
							<v-tab
							key="1"
							@click="labelSearch = 'Rechercher un groupe'"
							>
							Groupes
							</v-tab>
						</v-tabs>
						</v-toolbar>

						<v-tabs-items v-model="tabs">
							<v-tab-item key="0">
								<v-card width=100%>
									
									<v-data-table
									:headers="headersRetraitants"
									:items="retraitants"
									:search="search"
									>
										<template slot="items" slot-scope="props">
										<tr>
											<td class="text-xs-left">
												<v-icon medium class="material-icons">person_pin</v-icon>
											</td>
											<td class="text-xs-left">{{ props.item.nomprenoms }}</td>
											<td class="text-xs-left"><v-icon color="amber darkhen" medium icon>stars</v-icon></td>
											<td class="text-xs-left">{{ props.item.religion }}</td>
											<td class="text-xs-left">{{ props.item.contact }}</td>
											<td class="text-xs-left">{{ props.item.datecreation }}</td>
											<td class="text-xs-left">
												<v-chip v-if="props.item.etat == 'Actif'">
													<v-avatar class="green">
														<i class="material-icons text-white" style="font-size: 21px">check_circle</i>
													</v-avatar>
													{{props.item.etat}}
												</v-chip>
												<v-chip v-else>
													<v-avatar class="red">
														<i class="material-icons text-white" style="font-size: 21px">block</i>
													</v-avatar>
													{{props.item.etat}}
												</v-chip>
											</td>
											<td class="text-xs-left">
												<!-- PROFIL RETRAITANT -->
												<v-btn												
												icon
												dark
												color="green"
												@click="detailsRetraitant = !detailsRetraitant"
												>
												<v-icon
												icon
												>list</v-icon>
												</v-btn>

												<!-- EDITER RETRAITANT -->
												<v-btn												
												icon
												dark
												color="blue"
												>
												<v-icon
												icon
												>chat</v-icon>
												</v-btn>
												
												<!-- DESACTIVER RETRAITANT -->
												<v-btn
												icon
												dark
												color="red"
												v-if="props.item.etat === 'Actif'"
												>
												<v-icon
												icon
												>toggle_off
												</v-icon>
												</v-btn>

												<!-- ACTIVER RETRAITANT -->
												<v-btn
												icon
												dark
												color="green"
												v-else
												>
												<v-icon
												icon
												>toggle_on
												</v-icon>
												</v-btn>
											</td>
										</tr>	
										</template>
										<v-alert slot="no-results" :value="true" color="red" icon="warning">
											Aucun résultat ne correspond à cette recherche "{{ search }}".
										</v-alert>
									</v-data-table>
								</v-card>
							</v-tab-item>

							
							<v-tab-item key="1">
								<v-card width=100%>

									<v-data-table
									:headers="headersGroupes"
									:items="groupes"
									:search="search"
									>
										<template slot="items" slot-scope="props">
										<tr>
											<td class="text-xs-left">
												<v-icon medium class="material-icons">style</v-icon>
											</td>
											<td class="text-xs-left">{{ props.item.libelle }}</td>
											<td class="text-xs-left"><v-icon color="amber darkhen" medium icon>stars</v-icon></td>
											<td class="text-xs-left">{{ props.item.type }}</td>
											<td class="text-xs-left">{{ props.item.datecreation }}</td>
											<td class="text-xs-left">
												<v-chip v-if="props.item.etat === 'Actif'">
													<v-avatar class="green">
														<i class="material-icons text-white" style="font-size: 21px">check_circle</i>
													</v-avatar>
													{{props.item.etat}}
												</v-chip>
												<v-chip v-else>
													<v-avatar class="red">
														<i class="material-icons text-white" style="font-size: 21px">block</i>
													</v-avatar>
													{{props.item.etat}}
												</v-chip>
											</td>
											<td class="text-xs-left">
												<!-- PROFIL RETRAITANT -->
												<v-btn
												icon
												dark
												color="green"
												@click="detailsGroupe = !detailsGroupe"
												>
												<v-icon
												icon
												>list</v-icon>
												</v-btn>

												<!-- EDITER RETRAITANT -->
												<v-btn
												icon
												dark
												color="blue"
												>
												<v-icon
												icon
												>chat</v-icon>
												</v-btn>
												
												<!-- DESACTIVER RETRAITANT -->
												<v-btn
												icon
												dark
												color="red"
												v-if="props.item.etat === 'Actif'"
												>
												<v-icon
												icon
												>toggle_off
												</v-icon>
												</v-btn>

												<!-- ACTIVER RETRAITANT -->
												<v-btn
												icon
												dark
												color="green"
												v-else
												>
												<v-icon
												icon
												>toggle_on
												</v-icon>
												</v-btn>
											</td>
										</tr>	
										</template>
										<v-alert slot="no-results" :value="true" color="red" icon="warning">
											Aucun résultat ne correspond à cette recherche "{{ search }}".
										</v-alert>
									</v-data-table>
								</v-card>
							</v-tab-item>
						</v-tabs-items>
					</div>

				</v-layout>


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

				<!-- DETAILS RETRAITANTS -->
				<v-navigation-drawer
					v-model="detailsRetraitant"
					fixed
					right
					temporary
					width=800
					style="z-index: 9999;"
					id="right-nav"
				>
					<v-card>
						<v-layout pa-2 column fill-height class="lightbox white--text bg-sidebar" style="height: 150px;padding: 0px !important;">
							<img src="../../../public/images/lg.png" alt="">
							<v-spacer></v-spacer>
							<v-flex shrink>
								<div class="subheading">Jonathan Lee</div>
								<div class="body-1">heyfromjonathan@gmail.com</div>
							</v-flex>
						</v-layout>

						<v-tabs
						v-model="retraitantTabs"
						color="#44519e"
						dark
						slider-color="amber"
						>
							<v-tab :key="0">
								Informations générales
							</v-tab>
							<v-tab :key="1">
								Historique réservations
							</v-tab>
							<v-tab-item :key="0">
								<v-card flat>
									<v-card-text>
										<v-container grid-list-md>

										<!-- IDENTIFICATION -->
										<v-card-title style="padding: 0px;">
											<!-- <span class="headline title-size-default toUpper"> - Identification</span> -->
										</v-card-title>
										<!-- <hr> -->
										<v-layout wrap>
											<v-flex xs12 sm6 md6>
												<v-switch
												label="Amis du centre"
												color="#44519e"
												v-model="amisCentre"
												></v-switch>
											</v-flex>
											<v-flex xs12 sm6 md6>
												<v-radio-group v-model="radioGroup">
												<v-radio
													key="0"
													color="#44519e"
													label="Masculin"
													value="0"
												></v-radio>
												<v-radio
													key="1"
													color="#44519e"
													label="Feminin"
													value="1"
												></v-radio>
												</v-radio-group>
											</v-flex>
											
											<v-flex xs12 sm6 md6>
												<v-autocomplete
												class="select-combo-mod"
												:items="titres"
												label="Titre"
												prepend-icon="title"
												single
												></v-autocomplete>
											</v-flex>
											<v-flex xs12 sm6 md6>
											<v-text-field label="Nom*" required prepend-icon="person_pin"></v-text-field>
											</v-flex>
											<v-flex xs12 sm6 md6>
											<v-text-field label="Prénom(s)" hint="example of helper text only on focus" prepend-icon="horizontal_split"></v-text-field>
											</v-flex>
											
											<v-flex xs12 sm6 md6>

												<v-text-field
												slot="activator"
												v-model="selectedDate"
												label="Né le"
												hint="JJ/MM/AAAA format"
												persistent-hint
												prepend-icon="event"
												@click="modal = !modal"
												></v-text-field>

												<v-dialog
												ref="dialog"
												v-model="modal"
												v-if="modal"
												:return-value.sync="date"
												persistent
												lazy
												full-width
												width="290px"
												>
												<v-date-picker locale="fr" v-model="date" scrollable>
													<v-spacer></v-spacer>
													<v-btn flat color="primary" @click="modal = false">Annuler</v-btn>
													<v-btn flat color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
												</v-date-picker>
												</v-dialog>
											</v-flex>

											<v-flex xs12 sm6 md6>
												<v-autocomplete
													class="select-combo-mod"
													:items="typePieces"
													label="Types Pièces"
													prepend-icon="contacts"
													single
												></v-autocomplete>
											</v-flex>
											
											<v-flex xs12 sm6 md6>
											<v-text-field label="N° Pièce" prepend-icon="file_copy"></v-text-field>
											</v-flex>
											
											<v-flex xs12 sm6 md6>
												<v-text-field type="file" label="Joindre Pièce" prepend-icon="attach_file"></v-text-field>
											</v-flex>

											<v-flex xs12 sm6 md6>
												<v-autocomplete
													class="select-combo-mod"
													:items="typePieces"
													label="Nationalité"
													prepend-icon="flag"
													single
												></v-autocomplete>
											</v-flex>

											<v-flex xs12 sm6 md6>
												<v-autocomplete
													class="select-combo-mod"
													:items="typePieces"
													label="Réligion"
													prepend-icon="home"
													single
												></v-autocomplete>
											</v-flex>

											<v-flex xs12 sm6 md6>
												<v-autocomplete
													class="select-combo-mod"
													:items="typePieces"
													label="Régime"
													prepend-icon="swap_calls"
													single
												></v-autocomplete>
											</v-flex>

										</v-layout>

										<v-layout wrap>
											<v-flex xs12 sm6 md6>
											<v-text-field label="Contact 1*" required prepend-icon="phone"></v-text-field>
											</v-flex>
											<v-flex xs12 sm6 md6>
											<v-text-field label="Contact 2" required prepend-icon="phone"></v-text-field>
											</v-flex>
											<v-flex xs12 sm6 md6>
											<v-text-field label="Email*" required prepend-icon="alternate_email"></v-text-field>
											</v-flex>
											<v-flex xs12 sm6 md6>
											<v-text-field label="Domicile" prepend-icon="directions"></v-text-field>
											</v-flex>
										</v-layout>

										<v-layout>
											<v-flex xs12 style="padding-top:50px">
												<v-btn color="#44519e" block dark @click.native="">ENREGISTRER</v-btn>
											</v-flex>
										</v-layout>
										</v-container>
									</v-card-text>
								</v-card>
							</v-tab-item>
							
							<v-tab-item :key="1">
								<v-card flat>
								
										<div class="card-body">
										<h4 class="card-title">Chronologie</h4>
										<p class="card-description">des réservations</p>
										<div class="mt-5">
											<div class="timeline">
											<div class="timeline-wrapper timeline-wrapper-warning">
												<div class="timeline-badge"></div>
												<div class="timeline-panel">
												<div class="timeline-heading">
													<h6 class="timeline-title"><b>Période</b> : Du 15/08/2018 au 22/08/2018</h6>
												</div>
												<div class="timeline-body">
													<p><b>Motif</b> : Retraite.</p>
												</div>
												<div class="timeline-footer d-flex align-items-center">
													<span class="ml-auto font-weight-bold timeline-text">
														<i class="material-icons text-muted mr-1 timeline-icon">event</i>
														19 Oct 2017
													</span>
												</div>
												</div>
											</div>
											<div class="timeline-wrapper timeline-inverted timeline-wrapper-danger">
												<div class="timeline-badge"></div>
												<div class="timeline-panel">
												<div class="timeline-heading">
													<h6 class="timeline-title"><b>Période</b> : Du 15/08/2018 au 22/08/2018</h6>
												</div>
												<div class="timeline-body">
													<p><b>Motif</b> : Retraite.</p>
												</div>
												<div class="timeline-footer d-flex align-items-center">
													<span class="ml-auto font-weight-bold timeline-text">
														<i class="material-icons text-muted mr-1 timeline-icon">event</i>
														19 Oct 2017
													</span>
												</div>
												</div>
											</div>
											<div class="timeline-wrapper timeline-wrapper-success">
												<div class="timeline-badge"></div>
												<div class="timeline-panel">
												<div class="timeline-heading">
													<h6 class="timeline-title"><b>Période</b> : Du 15/08/2018 au 22/08/2018</h6>
												</div>
												<div class="timeline-body">
													<p><b>Motif</b> : Retraite.</p>
												</div>
												<div class="timeline-footer d-flex align-items-center">
													<span class="ml-auto font-weight-bold timeline-text">
														<i class="material-icons text-muted mr-1 timeline-icon">event</i>
														19 Oct 2017
													</span>
												</div>
												</div>
											</div>
											<div class="timeline-wrapper timeline-inverted timeline-wrapper-info">
												<div class="timeline-badge"></div>
												<div class="timeline-panel">
												<div class="timeline-heading">
													<h6 class="timeline-title"><b>Période</b> : Du 15/08/2018 au 22/08/2018</h6>
												</div>
												<div class="timeline-body">
													<p><b>Motif</b> : Retraite.</p>
												</div>
												<div class="timeline-footer d-flex align-items-center">
													<span class="ml-auto font-weight-bold timeline-text">
														<i class="material-icons text-muted mr-1 timeline-icon">event</i>
														19 Oct 2017
													</span>
												</div>
												</div>
											</div>
											</div>
										</div>
										</div>
									
								</v-card>
							</v-tab-item>
						</v-tabs>
					</v-card>
				
				</v-navigation-drawer>

				<!-- AJOUTER UN GROUPE -->
				<v-dialog v-model="addGroupe" v-show="addGroupe" persistent max-width="800">
					<v-toolbar dark color="red">
					<v-btn icon dark flat @click.native="addGroupe = false">
						<v-icon>close</v-icon>
					</v-btn>
					<v-toolbar-title class="title-size-default">Nouveau groupe</v-toolbar-title>
					<v-spacer></v-spacer>
					<v-toolbar-items>
						<v-btn dark flat class="text-size-default" @click.native="addGroupe = false">ENREGISTRER</v-btn>
					</v-toolbar-items>
					</v-toolbar>
					<v-card flat>
					<v-card-text>
						<v-container grid-list-md>

						<v-layout wrap>
							<v-flex xs12>
								<v-switch
								label="Amis du centre"
								color="red"
								v-model="amisCentre"
								></v-switch>
							</v-flex>

							<v-flex xs12 sm6 md6>
								<v-autocomplete
								class="select-combo-mod"
								:items="titres"
								label="Type"
								prepend-icon="style"
								single
								></v-autocomplete>
							</v-flex>
							<v-flex xs12 sm6 md6>
								<v-autocomplete
								class="select-combo-mod"
								:items="titres"
								label="Tranches"
								prepend-icon="filter_none"
								single
								></v-autocomplete>
							</v-flex>
							<v-flex xs12>
								<v-text-field label="Nom du groupe" prepend-icon="horizontal_split"></v-text-field>
							</v-flex>

							<v-flex xs12 sm6 md6>
								<v-text-field label="Effectif" type="number" prepend-icon="exposure"></v-text-field>
							</v-flex>

							<v-flex xs12 sm6 md6>
								<v-autocomplete
									class="select-combo-mod"
									:items="typePieces"
									label="Provenance"
									prepend-icon="public"
									single
								></v-autocomplete>
							</v-flex>

							<v-flex xs12 sm6 md6>
								<v-autocomplete
									class="select-combo-mod"
									:items="typePieces"
									label="Responsable Principal"
									prepend-icon="person"
									single
								></v-autocomplete>
							</v-flex>
							<v-flex xs12 sm6 md6>
								<v-autocomplete
									class="select-combo-mod"
									:items="typePieces"
									label="Responsable 2"
									prepend-icon="person"
									single
								></v-autocomplete>
							</v-flex>
							
							<v-flex xs12>
							<v-textarea
								name="input-7-1"
								label="Description"
								value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
								hint="Hint text"
								></v-textarea>
							</v-flex>
						</v-layout>

						<v-layout>
							<v-flex xs12 style="padding-top:50px">
								<v-btn color="red" block dark @click.native="">ENREGISTRER</v-btn>
							</v-flex>
						</v-layout>
						</v-container>
					</v-card-text>
					</v-card>
				</v-dialog>

				<!-- DETAILS GROUPES -->
				<v-navigation-drawer
					v-model="detailsGroupe"
					fixed
					right
					temporary
					width=800
					style="z-index: 9999;"
					id="right-nav"
				>
					<v-card>
						<v-layout pa-2 column fill-height class="lightbox white--text bg-sidebar" style="height: 150px;padding: 0px !important;">
							<img src="../../../public/images/lg2.png" alt="">
							<v-spacer></v-spacer>
							<v-flex shrink>
								<div class="subheading">Fyle Group</div>
								<div class="subheading">Entreprise</div>
								<div class="body-1">15 Membres</div>
							</v-flex>
						</v-layout>

						<v-tabs
						v-model="groupeTabs"
						color="#44519e"
						dark
						slider-color="amber"
						>
							<v-tab :key="0">
								Informations générales
							</v-tab>
							<v-tab :key="1">
								Retraitants du groupe
							</v-tab>
							<v-tab :key="2">
								Historique réservations
							</v-tab>

							<v-tab-item :key="0">
								<v-card flat>
									<v-card-text>
										<v-container grid-list-md>

										<!-- IDENTIFICATION -->
										<v-card-title style="padding: 0px;">
											<!-- <span class="headline title-size-default toUpper"> - Identification</span> -->
										</v-card-title>
										<!-- <hr> -->
										<v-layout wrap>

											<v-flex xs12>
												<v-switch
												label="Amis du centre"
												color="#44519e"
												v-model="amisCentre"
												></v-switch>
											</v-flex>

											<v-flex xs12 sm6 md6>
												<v-autocomplete
												class="select-combo-mod"
												:items="titres"
												label="Type"
												prepend-icon="style"
												single
												></v-autocomplete>
											</v-flex>
											<v-flex xs12 sm6 md6>
												<v-autocomplete
												class="select-combo-mod"
												:items="titres"
												label="Tranches"
												prepend-icon="filter_none"
												single
												></v-autocomplete>
											</v-flex>
											<v-flex xs12>
												<v-text-field label="Nom du groupe" prepend-icon="horizontal_split"></v-text-field>
											</v-flex>

											<v-flex xs12 sm6 md6>
												<v-text-field label="Effectif" type="number" prepend-icon="exposure"></v-text-field>
											</v-flex>

											<v-flex xs12 sm6 md6>
												<v-autocomplete
													class="select-combo-mod"
													:items="typePieces"
													label="Provenance"
													prepend-icon="public"
													single
												></v-autocomplete>
											</v-flex>

											<v-flex xs12 sm6 md6>
												<v-autocomplete
													class="select-combo-mod"
													:items="typePieces"
													label="Responsable Principal"
													prepend-icon="person"
													single
												></v-autocomplete>
											</v-flex>
											<v-flex xs12 sm6 md6>
												<v-autocomplete
													class="select-combo-mod"
													:items="typePieces"
													label="Responsable 2"
													prepend-icon="person"
													single
												></v-autocomplete>
											</v-flex>
											
											<v-flex xs12>
											<v-textarea
												name="input-7-1"
												label="Description"
												value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."
												hint="Hint text"
												></v-textarea>
											</v-flex>
											

										</v-layout>

										<v-layout>
											<v-flex xs12 style="padding-top:50px">
												<v-btn color="#44519e" block dark @click.native="">ENREGISTRER</v-btn>
											</v-flex>
										</v-layout>
										</v-container>
									</v-card-text>
								</v-card>
							</v-tab-item>
							
							<v-tab-item :key="1">
								<v-card width=100%>
									<v-card-title style="background: #eee;">
										<v-text-field
											v-model="searchGroupe"
											append-icon="search"
											flat
											label="Rechercher un membre du groupe"
										></v-text-field>

										<v-spacer></v-spacer>

										<!-- AJOUTER UN MEMBRE -->
										<v-btn
										icon
										dark
										color="#44519e"
										>
										<v-icon
										icon
										>person_add
										</v-icon>
										</v-btn>

										<!-- AFECTER UN RETRAITANT -->
										<v-btn
										icon
										dark
										color="#0acf97"
										>
										<v-icon
										icon
										>playlist_add
										</v-icon>
										</v-btn>
										
										<!-- AFECTER UN RETRAITANT -->
										<v-btn
										icon
										dark
										color="orange"
										>
										<v-icon
										icon
										>attach_file
										</v-icon>
										</v-btn>

									</v-card-title>
									<v-data-table
									:headers="headersRetraitantsGroupe"
									:items="retraitantsGroupe"
									:search="searchGroupe"
									>
										<template slot="items" slot-scope="props">
										<tr>
											<td class="text-xs-left">
												<v-icon medium class="material-icons">person_pin</v-icon>
											</td>
											<td class="text-xs-left">{{ props.item.nomprenoms }}</td>
											<td class="text-xs-left">{{ props.item.religion }}</td>
											<td class="text-xs-left">{{ props.item.contact }}</td>
											<td class="text-xs-right">
												<!-- DESACTIVER RETRAITANT -->
												<v-btn
												icon
												dark
												small
												color="red"
												>
												<v-icon
												icon
												small
												>remove
												</v-icon>
												</v-btn>
											</td>
										</tr>	
										</template>
										<v-alert slot="no-results" :value="true" color="red" icon="warning">
											Aucun résultat ne correspond à cette recherche "{{ searchGroupe }}".
										</v-alert>
									</v-data-table>
								</v-card>
							</v-tab-item>

							<v-tab-item :key="2">
								<v-card flat>
								
										<div class="card-body">
										<h4 class="card-title">Chronologie</h4>
										<p class="card-description">des réservations</p>
										<div class="mt-5">
											<div class="timeline">
											<div class="timeline-wrapper timeline-wrapper-warning">
												<div class="timeline-badge"></div>
												<div class="timeline-panel">
												<div class="timeline-heading">
													<h6 class="timeline-title"><b>Période</b> : Du 15/08/2018 au 22/08/2018</h6>
												</div>
												<div class="timeline-body">
													<p><b>Effectif</b> : 12</p>
													<p><b>Motif</b> : Retraite.</p>
												</div>
												<div class="timeline-footer d-flex align-items-center">
													<span class="ml-auto font-weight-bold timeline-text">
														<i class="material-icons text-muted mr-1 timeline-icon">event</i>
														19 Oct 2017
													</span>
												</div>
												</div>
											</div>
											<div class="timeline-wrapper timeline-inverted timeline-wrapper-danger">
												<div class="timeline-badge"></div>
												<div class="timeline-panel">
												<div class="timeline-heading">
													<h6 class="timeline-title"><b>Période</b> : Du 15/08/2018 au 22/08/2018</h6>
												</div>
												<div class="timeline-body">
													<p><b>Effectif</b> : 8</p>
													<p><b>Motif</b> : Retraite.</p>
												</div>
												<div class="timeline-footer d-flex align-items-center">
													<span class="ml-auto font-weight-bold timeline-text">
														<i class="material-icons text-muted mr-1 timeline-icon">event</i>
														19 Oct 2017
													</span>
												</div>
												</div>
											</div>
											<div class="timeline-wrapper timeline-wrapper-success">
												<div class="timeline-badge"></div>
												<div class="timeline-panel">
												<div class="timeline-heading">
													<h6 class="timeline-title"><b>Période</b> : Du 15/08/2018 au 22/08/2018</h6>
												</div>
												<div class="timeline-body">
													<p><b>Effectif</b> : 12</p>
													<p><b>Motif</b> : Retraite.</p>
												</div>
												<div class="timeline-footer d-flex align-items-center">
													<span class="ml-auto font-weight-bold timeline-text">
														<i class="material-icons text-muted mr-1 timeline-icon">event</i>
														19 Oct 2017
													</span>
												</div>
												</div>
											</div>
											<div class="timeline-wrapper timeline-inverted timeline-wrapper-info">
												<div class="timeline-badge"></div>
												<div class="timeline-panel">
												<div class="timeline-heading">
													<h6 class="timeline-title"><b>Période</b> : Du 15/08/2018 au 22/08/2018</h6>
												</div>
												<div class="timeline-body">
													<p><b>Effectif</b> : 8</p>
													<p><b>Motif</b> : Retraite.</p>
												</div>
												<div class="timeline-footer d-flex align-items-center">
													<span class="ml-auto font-weight-bold timeline-text">
														<i class="material-icons text-muted mr-1 timeline-icon">event</i>
														19 Oct 2017
													</span>
												</div>
												</div>
											</div>
											</div>
										</div>
										</div>
									
								</v-card>
							</v-tab-item>

						</v-tabs>
					</v-card>
				
				</v-navigation-drawer>

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
      selectedDate: "",
      modal: false,
      date: new Date().toISOString().substr(0, 10),
      dateFormatted: this.formatDate(new Date().toISOString().substr(0, 10)),
      labelSearch: "Rechercher un retraitant",
      menu1: false,
      detailsRetraitant: false,
      detailsGroupe: false,
      checkbox: true,
      retraitantTabs: 0,
      groupeTabs: 0,
      genre: "1",
      tabs: null,
      switch1: true,
      addGroupe: false,
      email: "",
      tabs: null,
      nbData: 10,
      search: "",
      searchGroupe: "",
      snackbar: false,
      drawer: null,
      color: "info",
      amisCentre: false,
      radioGroup: 1,
      mode: "",
      timeout: 6000,
      text: "test",
      typePieces: [
        "Attestation d'identité",
        "Carte consulaire",
        "Carte nationale d'identité",
        "Passeport",
        "Permis de conduire"
      ],
      titres: [
        "Attestation d'identité",
        "Carte consulaire",
        "Carte nationale d'identité",
        "Passeport",
        "Permis de conduire"
      ],
      headersRetraitants: [
        { text: "#", value: "icon", sortable: false },
        { text: "Retraitants", align: "left", value: "nomprenoms" },
        { text: "Amis", value: "amis" },
        { text: "Religion", value: "religion" },
        { text: "Contact", value: "contact" },
        { text: "Date création", value: "datecreation" },
        { text: "Etat", value: "etat" },
        { text: "Actions", value: "action", sortable: false }
      ],
      retraitants: [
        {
          value: false,
          id: 1,
          nomprenoms: "SIRIDJA Yao Etien",
          religion: "159",
          contact: "01001126",
          datecreation: "21/01/2018",
          etat: "Actif",
          utilisateur: "manel"
        },
        {
          value: false,
          id: 2,
          nomprenoms: "Yao Yao Wilfried",
          religion: "237",
          contact: "08789865",
          datecreation: "11/02/2018",
          etat: "Inactif",
          utilisateur: "37"
        },
        {
          value: false,
          id: 3,
          nomprenoms: "Arra Guy-Martial",
          religion: "262",
          contact: "08789909",
          datecreation: "16.0",
          etat: "Actif",
          utilisateur: "23"
        },
        {
          value: false,
          id: 4,
          nomprenoms: "KOKO Gaston",
          religion: "305",
          contact: "09897865",
          datecreation: "3.7",
          etat: "Actif",
          utilisateur: "67"
        },
        {
          value: false,
          id: 5,
          nomprenoms: "KOUAME Aimée",
          religion: "356",
          contact: "04345653",
          datecreation: "16.0",
          etat: "Inactif",
          utilisateur: "49"
        },
        {
          value: false,
          id: 6,
          nomprenoms: "TOUA MARTIN",
          religion: "375",
          contact: "78906543",
          datecreation: "0.0",
          etat: "Actif",
          utilisateur: "94"
        },
        {
          value: false,
          id: 7,
          nomprenoms: "KOFFI ALIKALI",
          religion: "392",
          contact: "07234561",
          datecreation: "0.2",
          etat: "Actif",
          utilisateur: "9"
        },
        {
          value: false,
          id: 8,
          nomprenoms: "MINETTE DECA",
          religion: "408",
          contact: "56098765",
          datecreation: "3.2",
          etat: "Inactif",
          utilisateur: "87"
        },
        {
          value: false,
          id: 9,
          nomprenoms: "OUREGA FLORA",
          religion: "452",
          contact: "05457899",
          datecreation: "25.0",
          etat: "Actif",
          utilisateur: "51"
        },
        {
          value: false,
          id: 10,
          nomprenoms: "MOSSA MORICETTE",
          religion: "518",
          contact: "90888564",
          datecreation: "26.0",
          etat: "Actif",
          utilisateur: "6"
        }
      ],
      headersRetraitantsGroupe: [
        { text: "#", value: "icon", sortable: false },
        { text: "Retraitants", align: "left", value: "nomprenoms" },
        { text: "Religion", value: "religion" },
        { text: "Contact", value: "contact" },
        { text: "Actions", value: "action", align: "right", sortable: false }
      ],
      retraitantsGroupe: [
        {
          value: false,
          id: 1,
          nomprenoms: "SIRIDJA Yao Etien",
          religion: "159",
          contact: "01001126",
          datecreation: "21/01/2018",
          etat: "Actif",
          utilisateur: "manel"
        },
        {
          value: false,
          id: 2,
          nomprenoms: "Yao Yao Wilfried",
          religion: "237",
          contact: "08789865",
          datecreation: "11/02/2018",
          etat: "Inactif",
          utilisateur: "37"
        },
        {
          value: false,
          id: 3,
          nomprenoms: "Arra Guy-Martial",
          religion: "262",
          contact: "08789909",
          datecreation: "16.0",
          etat: "Actif",
          utilisateur: "23"
        }
      ],
      headersGroupes: [
        { text: "#", value: "icon", sortable: false },
        { text: "Groupes", align: "left", value: "libelle" },
        { text: "Amis", value: "amis" },
        { text: "Type", value: "type" },
        { text: "Date création", value: "datecreation" },
        { text: "Etat", value: "etat" },
        { text: "Actions", value: "action", sortable: false }
      ],
      groupes: [
        {
          value: false,
          id: 1,
          libelle: "Polinova",
          type: "Entreprise",
          responsable: "M. Kipre Stephane",
          datecreation: "07/05/2018 à 18h47",
          etat: "Actif",
          utilisateur: "manel"
        },
        {
          value: false,
          id: 2,
          libelle: "Fyle Group",
          type: "Entreprise",
          responsable: "M. Yao Georges",
          datecreation: "07/05/2018 à 18h47",
          etat: "Actif",
          utilisateur: "manel"
        },
        {
          value: false,
          id: 3,
          libelle: "Reporter sans frontières",
          type: "ONG International",
          responsable: "Mme Carmen Widelton",
          datecreation: "07/05/2018 à 18h47",
          etat: "Actif",
          utilisateur: "manel"
        },
        {
          value: false,
          id: 4,
          libelle: "Frères de la Paroisse Saint-Ambroise",
          type: "Association",
          responsable: "Père Alexandre Boni",
          datecreation: "07/05/2018 à 18h47",
          etat: "Actif",
          utilisateur: "manel"
        }
      ]
    };
  },
  watch: {
    date(v) {
      this.selectedDate = this.formatDate(v);
    }
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
    },
    openRetraitantForm() {
      this.$emit("openAddRetraitantForm");
    }
  },
  mounted() {
    // Open snackbar
    this.snackbar = true;
    this.text = "Bienvenue, dans votre interface";
  }
};
</script>
