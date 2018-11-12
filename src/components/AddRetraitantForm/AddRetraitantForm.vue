<template>
  <div id="add-retraitant-form">
    <!-- Ajouter un retraitant -->
    <v-layout row justify-center>
      <v-dialog v-model="open" persistent max-width="800">
        <v-toolbar dark color="green">
          <v-btn icon dark flat @click.native="closeForm">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title class="title-size-default">Nouveau retraitant</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark flat class="text-size-default" @click.native="closeForm">ENREGISTRER</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-card flat>
          <v-card-text>
            <v-container grid-list-md>

            <v-layout wrap>
              <v-flex xs12 sm6 md6>
                <v-switch
                label="Amis du centre"
                color="green"
                v-model="amisCentre"
                ></v-switch>
              </v-flex>
              <v-flex xs12 sm6 md6>
                <v-radio-group v-model="radioGroup">
                  <v-radio
                    key="0"
                    color="green"
                    label="Masculin"
                    value="0"
                  ></v-radio>
                  <v-radio
                    key="1"
                    color="green"
                    label="Feminin"
                    value="1"
                  ></v-radio>
                </v-radio-group>
              </v-flex>
              <v-flex xs12 sm6 md6>
                <v-autocomplete
                  class="select-combo-mod"
                  :items="typePieces"
                  label="Titre"
                  prepend-icon="title"
                  single
                ></v-autocomplete>
              </v-flex>
              <v-flex xs12 sm6 md6>
              <v-text-field label="Nom*" required prepend-icon="person_pin"></v-text-field>
              </v-flex>
              <v-flex xs12>
              <v-text-field label="Prénom(s)" hint="example of helper text only on focus" prepend-icon="horizontal_split"></v-text-field>
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
              
              <v-flex xs12>
                
                <v-text-field
                  slot="activator"
                  v-model="selectedDate"
                  label="Picker in dialog"
                  prepend-icon="event"
                  readonly
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
                <v-btn color="green" block dark @click.native="">ENREGISTRER</v-btn>
              </v-flex>
            </v-layout>
            </v-container>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-layout>
    <!--  -->
  </div>
</template>

<style scoped>
@import url(./style.css);
</style>

<script>
export default {
  props: {
    open: Boolean
  },
  data() {
    return {
      dialog: true,
      modal: false,
      overlay: false,
      selectedDate: "",
      date: new Date().toISOString().substr(0, 10),
      dateFormatted: this.formatDate(new Date().toISOString().substr(0, 10)),
      menu1: false,
      menu2: false,
      checkbox: true,
      active: 0,
      genre: "1",
      switch1: true,
      email: "",
      tabs: null,
      nbData: 10,
      snackbar: false,
      drawer: null,
      color: "info",
      amisCentre: false,
      radioGroup: 1,
      mode: "",
      timeout: 6000,
      text: "",
      typePieces: [
        "Attestation d'identité",
        "Carte consulaire",
        "Carte nationale d'identité",
        "Passeport",
        "Permis de conduire"
      ]
    };
  },
  methods: {
    closeForm() {
      this.$emit("closeForm");
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
  watch: {
    date(v) {
      this.selectedDate = this.formatDate(v);
    }
  }
};
</script>
