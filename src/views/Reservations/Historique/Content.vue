<template>
	<div class="Content-retraitant">
      <div class="content-wrapper" style="padding-top: 5px;">
			<div class="row">
              <div class="col-md-12" style="padding-right: 5px;padding-left: 5px;">
                <v-breadcrumbs style="padding-left: 0;padding-right: 0px;">
                  <router-link to="/tableau-de-bord" class="v-breadcrumbs__item" style="font-size: 14px;">Tableau de bord </router-link>
                  <v-icon>chevron_right</v-icon>
                  <a class="v-breadcrumbs__item" style="font-size: 14px;">Historique Réservations </a>

				  
				  <v-spacer></v-spacer>

				   <v-btn 
				  	dark
					color="green"
					@click="addNewReservation"
					style="margin-right:0px"
					>
					<v-icon
				  	icon
					style="padding-right: 5px;font-size: 29px;"  
					>event</v-icon>
					Nouvelle réservation 
				  </v-btn>


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
							@click="labelSearch = 'Rechercher une réservation'"
							>
							Retraitants
							</v-tab>
							<v-tab
							key="1"
							@click="labelSearch = 'Rechercher une réservation de groupe'"
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
											<td class="text-xs-left">{{ props.item.periode }}</td>
											<td class="text-xs-left">{{ props.item.montant }}</td>
											<td class="text-xs-left">
												<v-btn icon color="orange" v-if="props.item.etatreglement === 0">
													<v-icon 
													color="white"
													>
													loop
													</v-icon>
												</v-btn>
												<v-btn icon color="green" v-if="props.item.etatreglement === 1">
													<v-icon 
													color="white"
													>
													check
													</v-icon>
												</v-btn>
											</td>
											<td class="text-xs-left">{{ props.item.datecreation }}</td>
											<td class="text-xs-left">
												<v-chip small v-if="props.item.etat === 'En attente'">
													<v-avatar class="teal">
														<i class="material-icons text-white" style="font-size: 16px">loop</i>
													</v-avatar>
													{{props.item.etat}}
												</v-chip>
												<v-chip small v-else-if="props.item.etat === 'En cours'">
													<v-avatar class="orange">
														<i class="material-icons text-white" style="font-size: 16px">loop</i>
													</v-avatar>
													{{props.item.etat}}
												</v-chip>
												<v-chip small v-else-if="props.item.etat === 'Annulé'">
													<v-avatar class="red">
														<i class="material-icons text-white" style="font-size: 16px">clear</i>
													</v-avatar>
													{{props.item.etat}}
												</v-chip>
												<v-chip small v-else-if="props.item.etat === 'Confirmé'">
													<v-avatar class="teal">
														<i class="material-icons text-white" style="font-size: 16px">check</i>
													</v-avatar>
													{{props.item.etat}}
												</v-chip>
												<v-chip small v-else-if="props.item.etat === 'Clôturé'">
													<v-avatar class="green">
														<i class="material-icons text-white" style="font-size: 16px">check_circle</i>
													</v-avatar>
													{{props.item.etat}}
												</v-chip>
											</td>
											<td class="text-xs-left d-flex">
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
												
												<v-btn
												icon
												dark
												color="red"
												>
												<v-icon
												icon
												>remove
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
											<td class="text-xs-left">{{ props.item.periode }}</td>
											<td class="text-xs-left">{{ props.item.montant }}</td>
											<td class="text-xs-left">
												<v-btn icon color="orange" v-if="props.item.etatreglement === 0">
													<v-icon 
													color="white"
													>
													loop
													</v-icon>
												</v-btn>
												<v-btn icon color="green" v-if="props.item.etatreglement === 1">
													<v-icon 
													color="white"
													>
													check
													</v-icon>
												</v-btn>
											</td>
											<td class="text-xs-left">{{ props.item.datecreation }}</td>
											<td class="text-xs-left">
												<v-chip small v-if="props.item.etat === 'En attente'">
													<v-avatar class="teal">
														<i class="material-icons text-white" style="font-size: 16px">loop</i>
													</v-avatar>
													{{props.item.etat}}
												</v-chip>
												<v-chip small v-else-if="props.item.etat === 'En cours'">
													<v-avatar class="orange">
														<i class="material-icons text-white" style="font-size: 16px">loop</i>
													</v-avatar>
													{{props.item.etat}}
												</v-chip>
												<v-chip small v-else-if="props.item.etat === 'Annulé'">
													<v-avatar class="red">
														<i class="material-icons text-white" style="font-size: 16px">clear</i>
													</v-avatar>
													{{props.item.etat}}
												</v-chip>
												<v-chip small v-else-if="props.item.etat === 'Confirmé'">
													<v-avatar class="teal">
														<i class="material-icons text-white" style="font-size: 16px">check</i>
													</v-avatar>
													{{props.item.etat}}
												</v-chip>
												<v-chip small v-else-if="props.item.etat === 'Clôturé'">
													<v-avatar class="green">
														<i class="material-icons text-white" style="font-size: 16px">check_circle</i>
													</v-avatar>
													{{props.item.etat}}
												</v-chip>
											</td>
											<td class="text-xs-left d-flex">
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
												
												<v-btn
												icon
												dark
												color="red"
												>
												<v-icon
												icon
												>remove
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
							<img src="../../../../public/images/lg.png" alt="">
							<v-spacer></v-spacer>
							<v-flex shrink>
								<div class="subheading">Jonathan Lee</div>
								<div class="body-1">heyfromjonathan@gmail.com</div>
								<div class="body-1 etat-reglement">
									<v-chip 
									color="green"
									label
									class="text-white toUpper">
										<i class="material-icons text-white" style="font-size: 16px; padding-right:5px">check</i>
										Réservation Soldée
									</v-chip>
								</div>
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
								Historique règlements
							</v-tab>
							<v-tab :key="2">
								Détails Remises
							</v-tab>

							<v-tab-item :key="0">
								<v-card flat class="sidebar-height"> 
									<v-card-text>
										<v-container grid-list-md>

										<!-- IDENTIFICATION -->
										<v-card-title style="padding: 0px;">
											<!-- <span class="headline title-size-default toUpper"> - Identification</span> -->
										</v-card-title>
										<!-- <hr> -->
										<v-layout wrap>

											

											<v-flex xs12 sm6 md6>
												<v-spacer></v-spacer>
												<v-subheader style="text-transform: uppercase;padding-left:0">
													Réservation : 
													<v-chip small>
													<v-avatar class="teal">
														<i class="material-icons text-white" style="font-size: 15px">loop</i>
													</v-avatar>
													En attente
												</v-chip>
												</v-subheader>
												
											</v-flex>

											<v-flex xs12 sm6 md6 d-flex>
												<v-btn
												color="red"
												small 
												dark
												>
												<i class="material-icons text-white" style="font-size: 15px">clear</i>
												Annuler réservation
												</v-btn>
												<v-btn
												color="orange"
												small 
												dark
												>
												<i class="material-icons text-white" style="font-size: 15px">create</i>
												modifier réservation
												</v-btn>
											</v-flex>

											<v-flex xs12 sm6 md6>
												<v-text-field disabled label="Nom*" required prepend-icon="person_pin" value="Retraitant 1"></v-text-field>
											</v-flex>
											<v-flex xs12 sm6 md6>
												<v-text-field disabled label="Prénom(s)" value="Prenom retraitant" prepend-icon="horizontal_split"></v-text-field>
											</v-flex>
											<v-flex xs12 sm6 md6>
												<v-text-field disabled label="Période*" required prepend-icon="event" value="Du 21/01/2018 au 21/01/2018"></v-text-field>
											</v-flex>
											<v-flex xs12 sm6 md6>
												<v-text-field disabled label="Motif*" value="Retraite" required prepend-icon="bookmarks"></v-text-field>
											</v-flex>
											<v-flex xs12>
												<v-combobox
												v-model="chambres"
												:items="chambres"
												label="Chambre(s) attribué(es) :"
												multiple
												disabled
												chips
												>
												<template slot="selection" slot-scope="data">
													<v-chip>
														<v-avatar class="teal">
															A{{ data.item.id }}
														</v-avatar>
														{{ data.item.libelle }}
													</v-chip>
												</template>
												</v-combobox>
											</v-flex>
											<v-flex xs12>
												<v-combobox
												v-model="salles"
												:items="salles"
												label="Salle(s) attribué(es) :"
												multiple
												disabled
												chips
												>
												<template slot="selection" slot-scope="data">
													<v-chip>
														<v-avatar class="orange">
															S{{ data.item.id }}
														</v-avatar>
														{{ data.item.libelle }}
													</v-chip>
												</template>
												</v-combobox>
											</v-flex>
											<v-flex xs12>
												<v-combobox
												v-model="espaces"
												:items="espaces"
												label="Espace(s) attribué(s) :"
												multiple
												disabled
												chips
												>
												<template slot="selection" slot-scope="data">
													<v-chip>
														<v-avatar class="blue">
															E{{ data.item.id }}
														</v-avatar>
														{{ data.item.libelle }}
													</v-chip>
												</template>
												</v-combobox>
											</v-flex>

											<v-flex xs12>
												<v-spacer></v-spacer>
												<v-subheader style="text-transform: uppercase;padding-left:0">
													Service restauration : 
													<v-chip small>
														<v-avatar class="teal">
															<i class="material-icons text-white" style="font-size: 15px">local_cafe</i>
														</v-avatar>
														Oui
													</v-chip>
													<span> à raison de 4 jour(s) de service</span>
												</v-subheader>
											</v-flex>

											<v-flex xs12>
												<v-spacer></v-spacer>
												<v-subheader style="text-transform: uppercase;padding-left:0">
													Premier jour :  
													<b style="padding-left: 6px;font-size: 13px;"><em> [ 2 repas ] Déjeuner, Diner </em></b>
												</v-subheader>
											</v-flex>

											<v-flex xs12>
												<v-spacer></v-spacer>
												<v-subheader style="text-transform: uppercase;padding-left:0">
													Autres jours :  
													<b style="padding-left: 6px;font-size: 13px;"><em> [ 3 repas ] Petit déjeuner, Déjeuner, Diner</em></b>
												</v-subheader>
											</v-flex>

											<v-flex xs12>
												<v-spacer></v-spacer>
												<v-subheader style="text-transform: uppercase;padding-left:0">
													Dernier jour : 
													<b style="padding-left: 6px;font-size: 13px;"><em> [ 2 repas ] Petit déjeuner, Déjeuner</em></b>
												</v-subheader>
											</v-flex>
											
											<div class="flex xs12 separator"></div>
											
											<v-flex xs12>
												<v-spacer></v-spacer>
												<v-subheader style="text-transform: uppercase;padding-left:0">
													<em>
														<b style="text-decoration: underline;">Montant Réservation</b> : 
														<b class="text-warning" style="padding-left: 6px;font-size: 18px;"> 110,000 FCFA</b>
													</em>
												</v-subheader>
											</v-flex>

											<v-flex xs12>
												<v-spacer></v-spacer>
												<v-subheader style="text-transform: uppercase;padding-left:0">
													<em>
														<b style="text-decoration: underline;">Remises</b> : 
														<b class="text-danger" style="padding-left: 6px;font-size: 18px;">15,000 FCFA</b>
													</em>
												</v-subheader>
											</v-flex>

											<v-flex xs12>
												<v-spacer></v-spacer>
												<v-subheader style="text-transform: uppercase;padding-left:0">
													<em>
														<b style="text-decoration: underline;">Montant versés</b> : 
														<b class="text-success" style="padding-left: 6px;font-size: 18px;">40,000 FCFA</b>
													</em>
												</v-subheader>
											</v-flex>

											<v-flex xs12>
												<v-subheader style="text-transform: uppercase;padding-left:0">
													<em>
														<b style="text-decoration: underline;">Reste à payer</b> : 
														<b class="text-info" style="padding-left: 6px;font-size: 18px;">55,000 FCFA</b>
													</em>
												</v-subheader>
											</v-flex>

											<v-flex xs12>
												<v-spacer></v-spacer>
												<v-subheader style="text-transform: uppercase;padding-left:0">
													<i class="material-icons" style="padding-right:5px">info</i> commentaire: 
													<b style="padding-left: 6px;font-size: 13px;"><em> Commentaire sur la réservationCommentaire sur la réservationCommentaire sur la réservation</em></b>
												</v-subheader>
											</v-flex>


										</v-layout>

										<v-layout>
											<v-flex xs12 style="padding-top:50px">
												<v-btn color="teal" block dark @click.native="">CONFIRMER RESERVATION</v-btn>
											</v-flex>
										</v-layout>
										</v-container>
									</v-card-text>
								</v-card>
							</v-tab-item>
							
							<v-tab-item :key="1">
								<v-card flat class="sidebar-height">
								   <v-card width=100%>
										<v-card-title style="background: #eee;">
											<v-btn
											dark
											small
											color="green"
											>
											<v-icon
											small
											style="padding-right:5px"
											>control_point
											</v-icon>
											Nouveau règlement
											</v-btn>

											<v-spacer></v-spacer>
											<!-- AJOUTER UN REGLEMENT -->
											<v-text-field
												v-model="searchReglement"
												append-icon="search"
												flat
												label="Rechercher un règlement"
											></v-text-field>

											<v-spacer></v-spacer>
											<v-subheader style="text-transform: uppercase;padding-left:0">
												<!-- <em> -->
													<b style="text-decoration: underline;">Montant Versés</b> : 
													<b class="text-primary" style="padding-left: 6px;font-size: 16px;">40,000 FCFA</b>
												<!-- </em> -->
											</v-subheader>

										</v-card-title>
										<v-data-table
										:headers="headersReglement"
										:items="reglements"
										:search="searchReglement"
										>
											<template slot="items" slot-scope="props">
											<tr>
												<td class="text-xs-left">
													{{ props.item.id }}
												</td>
												<td class="text-xs-left">{{ props.item.libelle }}</td>
												<td class="text-xs-left">{{ props.item.montant }}</td>
												<td class="text-xs-left">{{ props.item.mode }}</td>
												<td class="text-xs-left">{{ props.item.datecreation }}</td>
												<td class="text-xs-right">
													<!-- DESACTIVER RETRAITANT -->
													<v-btn
													icon
													dark
													small
													color="orange"
													>
													<v-icon
													icon
													small
													>create
													</v-icon>
													</v-btn>

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
								</v-card>
							</v-tab-item>

							<v-tab-item :key="2">
								<v-card flat class="sidebar-height">
									<v-card-text>
										<v-container grid-list-md>
										<!-- <hr> -->
											<v-layout wrap>
												<v-flex xs12 sm6 md6>
													<v-spacer></v-spacer>
													<v-subheader style="text-transform: uppercase;padding-left:0">
														Type remise : 
														<v-chip small>
														<v-avatar class="teal">
															<i class="material-icons text-white" style="font-size: 15px">attach_money</i>
														</v-avatar>
														Globale
													</v-chip>
													</v-subheader>
													
												</v-flex>
												<v-flex xs12 sm6 md6 d-flex>
												</v-flex>

												<v-flex xs12>
													<v-spacer></v-spacer>
													<v-subheader style="text-transform: uppercase;padding-left:0">
														<!-- <em> -->
															<b style="text-decoration: underline;">Montant Total Remises</b> : 
															<b class="text-danger" style="padding-left: 6px;font-size: 18px;">15,000 FCFA</b>
														<!-- </em> -->
													</v-subheader>
												</v-flex>
											</v-layout>
										</v-container>
									</v-card-text>
								</v-card>
							</v-tab-item>

						</v-tabs>
					</v-card>
				
				</v-navigation-drawer>

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
							<img src="../../../../public/images/lg2.png" alt="">
							<v-spacer></v-spacer>
							<v-flex shrink>
								<div class="subheading">Fyle Group</div>
								<div class="subheading">Entreprise</div>
								<div class="body-1">15 Membres</div>
								<div class="body-1 etat-reglement">
									<v-chip 
									color="red"
									label
									class="text-white toUpper">
										<i class="material-icons text-white" style="font-size: 16px; padding-right:5px">loop</i>
										Réservation non Soldée
									</v-chip>
								</div>
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
								Historique règlements
							</v-tab>
							<v-tab :key="2">
								Détails Remises
							</v-tab>

							<v-tab-item :key="0">
								<v-card flat class="sidebar-height">
									<v-card-text>
										<v-container grid-list-md>

										<!-- IDENTIFICATION -->
										<v-card-title style="padding: 0px;">
											<!-- <span class="headline title-size-default toUpper"> - Identification</span> -->
										</v-card-title>
										<!-- <hr> -->
										<v-layout wrap>

											<v-flex xs12 sm6 md6>
												<v-spacer></v-spacer>
												<v-subheader style="text-transform: uppercase;padding-left:0">
													Réservation : 
													<v-chip small>
													<v-avatar class="teal">
														<i class="material-icons text-white" style="font-size: 15px">loop</i>
													</v-avatar>
													En attente
												</v-chip>
												</v-subheader>
												
											</v-flex>
											<v-flex xs12 sm6 md6 d-flex>
												<v-btn
												color="red"
												small 
												dark
												>
												<i class="material-icons text-white" style="font-size: 15px">clear</i>
												Annuler réservation
												</v-btn>
												<v-btn
												color="orange"
												small 
												dark
												>
												<i class="material-icons text-white" style="font-size: 15px">create</i>
												modifier réservation
												</v-btn>
											</v-flex>

											<v-flex xs12 sm6 md6>
												<v-text-field disabled label="Nom*" required prepend-icon="style" value="Fyle Group"></v-text-field>
											</v-flex>
											<v-flex xs12 sm6 md6>
												<v-text-field disabled label="Effectif" value="15" prepend-icon="exposure"></v-text-field>
											</v-flex>
											<v-flex xs12 sm6 md6>
												<v-text-field disabled label="Période*" required prepend-icon="event" value="Du 21/01/2018 au 21/01/2018"></v-text-field>
											</v-flex>
											<v-flex xs12 sm6 md6>
												<v-text-field disabled label="Motif*" value="Retraite" required prepend-icon="bookmarks"></v-text-field>
											</v-flex>
											<v-flex xs12>
												<v-combobox
												v-model="retraitants"
												:items="retraitants"
												label="Retraitants :"
												multiple
												disabled
												chips
												>
												<template slot="selection" slot-scope="data">
													<v-chip>
														<v-avatar class="teal">
															<i class="material-icons">person_pin</i>
														</v-avatar>
														{{ data.item.nomprenoms }}
													</v-chip>
												</template>
												</v-combobox>
											</v-flex>
											<v-flex xs12>
												<v-combobox
												v-model="chambres"
												:items="chambres"
												label="Chambre(s) attribué(es) :"
												multiple
												disabled
												chips
												>
												<template slot="selection" slot-scope="data">
													<v-chip>
														<v-avatar class="teal">
															A{{ data.item.id }}
														</v-avatar>
														{{ data.item.libelle }}
													</v-chip>
												</template>
												</v-combobox>
											</v-flex>
											<v-flex xs12>
												<v-combobox
												v-model="salles"
												:items="salles"
												label="Salle(s) attribué(es) :"
												multiple
												disabled
												chips
												>
												<template slot="selection" slot-scope="data">
													<v-chip>
														<v-avatar class="orange">
															S{{ data.item.id }}
														</v-avatar>
														{{ data.item.libelle }}
													</v-chip>
												</template>
												</v-combobox>
											</v-flex>
											<v-flex xs12>
												<v-combobox
												v-model="espaces"
												:items="espaces"
												label="Espace(s) attribué(s) :"
												multiple
												disabled
												chips
												>
												<template slot="selection" slot-scope="data">
													<v-chip>
														<v-avatar class="blue">
															E{{ data.item.id }}
														</v-avatar>
														{{ data.item.libelle }}
													</v-chip>
												</template>
												</v-combobox>
											</v-flex>

											<v-flex xs12>
												<v-spacer></v-spacer>
												<v-subheader style="text-transform: uppercase;padding-left:0">
													Service restauration : 
													<v-chip small>
														<v-avatar class="teal">
															<i class="material-icons text-white" style="font-size: 15px">local_cafe</i>
														</v-avatar>
														Oui
													</v-chip>
													<span> à raison de 4 jour(s) de service</span>
												</v-subheader>
											</v-flex>

											<v-flex xs12>
												<v-spacer></v-spacer>
												<v-subheader style="text-transform: uppercase;padding-left:0">
													Premier jour :  
													<b style="padding-left: 6px;font-size: 13px;"><em> [ 2 repas ] Déjeuner, Diner </em></b>
												</v-subheader>
											</v-flex>

											<v-flex xs12>
												<v-spacer></v-spacer>
												<v-subheader style="text-transform: uppercase;padding-left:0">
													Autres jours :  
													<b style="padding-left: 6px;font-size: 13px;"><em> [ 3 repas ] Petit déjeuner, Déjeuner, Diner</em></b>
												</v-subheader>
											</v-flex>

											<v-flex xs12>
												<v-spacer></v-spacer>
												<v-subheader style="text-transform: uppercase;padding-left:0">
													Dernier jour : 
													<b style="padding-left: 6px;font-size: 13px;"><em> [ 2 repas ] Petit déjeuner, Déjeuner</em></b>
												</v-subheader>
											</v-flex>

											<div class="flex xs12 separator"></div>
											
											<v-flex xs12>
												<v-spacer></v-spacer>
												<v-subheader style="text-transform: uppercase;padding-left:0">
													<em>
														<b style="text-decoration: underline;">Montant Réservation</b> : 
														<b class="text-warning" style="padding-left: 6px;font-size: 18px;"> 110,000 FCFA</b>
													</em>
												</v-subheader>
											</v-flex>

											<v-flex xs12>
												<v-spacer></v-spacer>
												<v-subheader style="text-transform: uppercase;padding-left:0">
													<em>
														<b style="text-decoration: underline;">Remises</b> : 
														<b class="text-danger" style="padding-left: 6px;font-size: 18px;">15,000 FCFA</b>
													</em>
												</v-subheader>
											</v-flex>

											<v-flex xs12>
												<v-spacer></v-spacer>
												<v-subheader style="text-transform: uppercase;padding-left:0">
													<em>
														<b style="text-decoration: underline;">Montant versés</b> : 
														<b class="text-success" style="padding-left: 6px;font-size: 18px;">40,000 FCFA</b>
													</em>
												</v-subheader>
											</v-flex>

											<v-flex xs12>
												<v-subheader style="text-transform: uppercase;padding-left:0">
													<em>
														<b style="text-decoration: underline;">Reste à payer</b> : 
														<b class="text-info" style="padding-left: 6px;font-size: 18px;">55,000 FCFA</b>
													</em>
												</v-subheader>
											</v-flex>

											<v-flex xs12>
												<v-spacer></v-spacer>
												<v-subheader style="text-transform: uppercase;padding-left:0">
													<i class="material-icons" style="padding-right:5px">info</i> commentaire: 
													<b style="padding-left: 6px;font-size: 13px;"><em> Commentaire sur la réservationCommentaire sur la réservationCommentaire sur la réservation</em></b>
												</v-subheader>
											</v-flex>


										</v-layout>

										<v-layout>
											<v-flex xs12 style="padding-top:50px">
												<v-btn color="teal" block dark @click.native="">CONFIRMER RESERVATION</v-btn>
											</v-flex>
										</v-layout>
										</v-container>
									</v-card-text>
								</v-card>
							</v-tab-item>
							
							<v-tab-item :key="1">
								<v-card flat class="sidebar-height">
								   <v-card width=100%>
										<v-card-title style="background: #eee;">
											<v-btn
											dark
											small
											color="green"
											>
											<v-icon
											small
											style="padding-right:5px"
											>control_point
											</v-icon>
											Nouveau règlement
											</v-btn>

											<v-spacer></v-spacer>
											<!-- AJOUTER UN REGLEMENT -->
											<v-text-field
												v-model="searchReglement"
												append-icon="search"
												flat
												label="Rechercher un règlement"
											></v-text-field>

											<v-spacer></v-spacer>
											<v-subheader style="text-transform: uppercase;padding-left:0">
												<!-- <em> -->
													<b style="text-decoration: underline;">Montant Versés</b> : 
													<b class="text-primary" style="padding-left: 6px;font-size: 16px;">40,000 FCFA</b>
												<!-- </em> -->
											</v-subheader>

										</v-card-title>
										<v-data-table
										:headers="headersReglementsGroupe"
										:items="reglementsGroupe"
										:search="searchReglement"
										>
											<template slot="items" slot-scope="props">
											<tr>
												<td class="text-xs-left">
													{{ props.item.id }}
												</td>
												<td class="text-xs-left">{{ props.item.libelle }}</td>
												<td class="text-xs-left">{{ props.item.montant }}</td>
												<td class="text-xs-left">{{ props.item.mode }}</td>
												<td class="text-xs-left">{{ props.item.datecreation }}</td>
												<td class="text-xs-right">
													<!-- DESACTIVER RETRAITANT -->
													<v-btn
													icon
													dark
													small
													color="orange"
													>
													<v-icon
													icon
													small
													>create
													</v-icon>
													</v-btn>

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
								</v-card>
							</v-tab-item>

							<v-tab-item :key="2">
								<v-card flat class="sidebar-height">
									<v-card-text>
										<v-container grid-list-md>
										<!-- <hr> -->
											<v-layout wrap>
												<v-flex xs12 sm6 md6>
													<v-spacer></v-spacer>
													<v-subheader style="text-transform: uppercase;padding-left:0">
														Type remise : 
														<v-chip small>
														<v-avatar class="teal">
															<i class="material-icons text-white" style="font-size: 15px">attach_money</i>
														</v-avatar>
														Détaillée
													</v-chip>
													</v-subheader>
													
												</v-flex>
												<v-flex xs12 sm6 md6 d-flex>
												</v-flex>

												<v-flex 
												xs12 sm6 md6 
												v-for="remise in remises"
												:key="remise.id"
												>
													<v-text-field disabled :label="remise.libelle" required prepend-icon="attach_money" v-model="remise.montant"></v-text-field>
												</v-flex>

												<v-flex xs12>
													<v-spacer></v-spacer>
													<v-subheader style="text-transform: uppercase;padding-left:0">
														<em>
															<b style="text-decoration: underline;">Montant Total Remises</b> : 
															<b class="text-danger" style="padding-left: 6px;font-size: 18px;">15,000 FCFA</b>
														</em>
													</v-subheader>
												</v-flex>
											</v-layout>
										</v-container>
									</v-card-text>
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
      labelSearch: "Rechercher une réservation",
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
      searchReglement: "",
      snackbar: false,
      drawer: null,
      color: "info",
      amisCentre: false,
      radioGroup: 1,
      mode: "",
      timeout: 6000,
      text: "test",
      remises: [
        { id: 1, libelle: "Chambre A1", montant: "2000" },
        { id: 2, libelle: "Chambre A2", montant: "1500" },
        { id: 3, libelle: "Chambre A3", montant: "2000" },
        { id: 4, libelle: "Chambre A4", montant: "500" },
        { id: 5, libelle: "Salle S1", montant: "1500" },
        { id: 6, libelle: "Salle S4", montant: "2000" },
        { id: 7, libelle: "Espace E4", montant: "1000" }
      ],
      chambres: [
        { id: 1, libelle: "Chambre A1" },
        { id: 2, libelle: "Chambre A2" },
        { id: 3, libelle: "Chambre A3" },
        { id: 4, libelle: "Chambre A4" }
      ],
      salles: [{ id: 1, libelle: "Salle S1" }, { id: 2, libelle: "Salle S2" }],
      espaces: [{ id: 1, libelle: "Espace E1" }],
      titres: [
        "Attestation d'identité",
        "Carte consulaire",
        "Carte nationale d'identité",
        "Passeport",
        "Permis de conduire"
      ],
      headersRetraitants: [
        { text: "#", value: "icon", sortable: false },
        { text: "Retraitant", align: "left", value: "nomprenoms" },
        { text: "Période", align: "left", value: "periode" },
        { text: "Montant", value: "montant" },
        { text: "Etat reg.", value: "etatreglement" },
        { text: "Date création", value: "datecreation" },
        { text: "Etat Réservation", value: "etat" },
        { text: "Actions", value: "action", sortable: false }
      ],
      retraitants: [
        {
          value: false,
          id: 1,
          nomprenoms: "SIRIDJA Yao Etien",
          periode: "Du 21/01/2018 au 21/01/2018",
          montant: "40,000 FCFA",
          etatreglement: 0,
          datecreation: "21/01/2018",
          etat: "En attente",
          utilisateur: "manel"
        },
        {
          value: false,
          id: 2,
          nomprenoms: "Retraitant 2",
          periode: "Du 21/01/2018 au 21/01/2018",
          montant: "40,000 FCFA",
          etatreglement: 0,
          datecreation: "21/01/2018",
          etat: "En cours",
          utilisateur: "manel"
        },
        {
          value: false,
          id: 3,
          nomprenoms: "Retraitant 3",
          periode: "Du 21/01/2018 au 21/01/2018",
          montant: "40,000 FCFA",
          etatreglement: 1,
          datecreation: "21/01/2018",
          etat: "Annulé",
          utilisateur: "manel"
        },
        {
          value: false,
          id: 4,
          nomprenoms: "Retraitant 4",
          periode: "Du 21/01/2018 au 21/01/2018",
          montant: "40,000 FCFA",
          etatreglement: 1,
          datecreation: "21/01/2018",
          etat: "Clôturé",
          utilisateur: "manel"
        }
      ],
      headersReglementsGroupe: [
        { text: "#", value: "icon", sortable: false },
        { text: "Libelle", align: "left", value: "libelle" },
        { text: "Montant", value: "montant" },
        { text: "Mode Reg.", value: "mode" },
        { text: "date Reg.", value: "datecreation" },
        { text: "Actions", value: "action", align: "right", sortable: false }
      ],
      reglementsGroupe: [
        {
          value: false,
          id: 1,
          libelle: "RG-R20-YAO-JEAN",
          montant: "59 000 FCFA",
          mode: "Orange money",
          datecreation: "21/01/2018",
          utilisateur: "manel"
        },
        {
          value: false,
          id: 2,
          libelle: "RG-R26-YAO-JEAN",
          montant: "15 000 FCFA",
          mode: "Orange money",
          datecreation: "21/01/2018",
          utilisateur: "manel"
        },
        {
          value: false,
          id: 3,
          libelle: "RG-R450-YAO-JEAN",
          montant: "69 000 FCFA",
          mode: "Orange money",
          datecreation: "21/01/2018",
          utilisateur: "manel"
        }
      ],
      headersReglement: [
        { text: "#", value: "icon", sortable: false },
        { text: "Libelle", align: "left", value: "libelle" },
        { text: "Montant", value: "montant" },
        { text: "Mode Reg.", value: "mode" },
        { text: "date Reg.", value: "datecreation" },
        { text: "Actions", value: "action", align: "right", sortable: false }
      ],
      reglements: [
        {
          value: false,
          id: 1,
          libelle: "RG-R20-YAO-JEAN",
          montant: "59 000 FCFA",
          mode: "Orange money",
          datecreation: "21/01/2018",
          utilisateur: "manel"
        },
        {
          value: false,
          id: 2,
          libelle: "RG-R26-YAO-JEAN",
          montant: "15 000 FCFA",
          mode: "Orange money",
          datecreation: "21/01/2018",
          utilisateur: "manel"
        },
        {
          value: false,
          id: 3,
          libelle: "RG-R450-YAO-JEAN",
          montant: "69 000 FCFA",
          mode: "Orange money",
          datecreation: "21/01/2018",
          utilisateur: "manel"
        }
      ],
      headersGroupes: [
        { text: "#", value: "icon", sortable: false },
        { text: "Groupe", align: "left", value: "libelle" },
        { text: "Période", align: "left", value: "periode" },
        { text: "Montant", value: "montant" },
        { text: "Etat reg.", value: "etatreglement" },
        { text: "Date création", value: "datecreation" },
        { text: "Etat Réservation", value: "etat" },
        { text: "Actions", value: "action", sortable: false }
      ],
      groupes: [
        {
          value: false,
          id: 1,
          libelle: "Polinova",
          periode: "Du 21/01/2018 au 21/01/2018",
          montant: "40,000 FCFA",
          etatreglement: 1,
          datecreation: "21/01/2018",
          etat: "En attente",
          utilisateur: "manel"
        },
        {
          value: false,
          id: 2,
          libelle: "groupe 2",
          periode: "Du 21/01/2018 au 21/01/2018",
          montant: "40,000 FCFA",
          etatreglement: 1,
          datecreation: "21/01/2018",
          etat: "En cours",
          utilisateur: "manel"
        },
        {
          value: false,
          id: 3,
          libelle: "groupe 3",
          periode: "Du 21/01/2018 au 21/01/2018",
          montant: "40,000 FCFA",
          etatreglement: 0,
          datecreation: "21/01/2018",
          etat: "Annulé",
          utilisateur: "manel"
        },
        {
          value: false,
          id: 4,
          libelle: "groupe 4",
          periode: "Du 21/01/2018 au 21/01/2018",
          montant: "40,000 FCFA",
          etatreglement: 0,
          datecreation: "21/01/2018",
          etat: "Clôturé",
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
    addNewReservation() {
      this.$router.push("/nouvelle-reservation");
    },
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
