<template>
  <v-container>
    <v-row class="justify-center align-center">
      <v-card elevation="2" outlined shaped tile class="form">
        <v-container>
          <div style="position: absolute; z-index: 10; right: 5%">
            <v-switch
              v-model="$vuetify.theme.dark"
              id="theme-switcher"
              label="Contraste"
            ></v-switch>
          </div>

          <v-card-title class="justify-center title py-3">
            <h2 style="text-transform: uppercase">{{ title }}</h2>
          </v-card-title>

          <v-stepper v-model="$store.getters.page">
            <v-stepper-header>
              <template v-for="(form, index) in $store.getters.allForms">
                <v-stepper-step
                  :key="form"
                  :complete="$store.getters.page > index"
                  :editable="$store.getters.page > index"
                  edit-icon="mdi-check"
                  :step="index"
                  @click="
                    if ($store.getters.page > index)
                    // Comment this when dev mode
                    $store.commit('putPage', index)
                  "
                  v-if="index < $store.getters.allForms.length - 1"
                >
                  {{ form }}
                </v-stepper-step>

                <v-divider
                  :key="form + ' '"
                  v-if="index < $store.getters.allForms.length - 2"
                ></v-divider>
              </template>
            </v-stepper-header>

            <v-stepper-items>
              <v-stepper-content step="0">
                <FormsPersonalInfo @valid="validHandler" />
              </v-stepper-content>

              <v-stepper-content step="1">
                <FormsHouseInfo @valid="validHandler" />
              </v-stepper-content>

              <v-stepper-content step="2">
                <FormsExterieurPt1 @valid="validHandler" />
              </v-stepper-content>

              <v-stepper-content step="3">
                <FormsExterieurPt2 @valid="validHandler" />
              </v-stepper-content>

              <v-stepper-content step="4">
                <FormsInterieurPt1 @valid="validHandler" />
              </v-stepper-content>

              <v-stepper-content step="5">
                <FormsInterieurPt2 @valid="validHandler" />
              </v-stepper-content>

              <v-stepper-content step="6">
                <FormsAutre @valid="validHandler" />
              </v-stepper-content>

              <v-stepper-content step="7">
                <v-row>
                  <v-col cols="12" sm="12" md="7" lg="7">
                    <h1>Merci d'avoir rempli ce formulaire 👍</h1>
                  </v-col>
                  <v-spacer></v-spacer>
                  <v-col cols="4" sm="3" xl="1" lg="2" md="3">
                    <v-btn @click="printPage" color="primary"
                      ><v-icon class="mr-2">mdi-printer</v-icon> Imprimer</v-btn
                    >
                  </v-col>
                </v-row>
                <FormsResult />
              </v-stepper-content>
            </v-stepper-items>
          </v-stepper>

          <v-card-actions>
            <v-col cols="auto">
              <v-btn
                v-if="
                  $store.getters.page != 0 &&
                  $store.getters.page != $store.getters.allForms.length
                "
                text
                color="warning"
                elevation="3"
                @click="
                  $store.commit('setPage', -1);
                  scrollTop();
                "
              >
                {{ button.back }}
              </v-btn>
            </v-col>
            <v-spacer></v-spacer>

            <v-btn
              v-if="$store.getters.allForms.length > $store.getters.page + 1"
              color="primary"
              depressed
              elevation="3"
              @click="
                $store.commit('setPage', 1);
                scrollTop();
              "
              :disabled="!this.validation[this.$store.getters.page]"
            >
              {{ button.next }}
            </v-btn>
            <v-btn
              v-else-if="
                $store.getters.allForms.length == $store.getters.page + 1
              "
              color="success"
              depressed
              elevation="3"
              @click="submit()"
              :disabled="!this.validation[this.$store.getters.page]"
            >
              Soumettre
            </v-btn>
          </v-card-actions>
        </v-container>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import FormsPersonalInfo from "@/views/FormsPersonalInfo.vue";
import FormsHouseInfo from "@/views/FormsHouseInfo.vue";
import FormsExterieurPt1 from "@/views/FormsExterieurPt1.vue";
import FormsExterieurPt2 from "@/views/FormsExterieurPt2.vue";
import FormsInterieurPt1 from "@/views/FormsInterieurPt1.vue";
import FormsInterieurPt2 from "@/views/FormsInterieurPt2.vue";
import FormsAutre from "@/views/FormsAutre.vue";
import FormsResult from "@/views/FormsResult.vue";

export default {
  components: {
    FormsPersonalInfo,
    FormsHouseInfo,
    FormsExterieurPt1,
    FormsExterieurPt2,
    FormsInterieurPt1,
    FormsInterieurPt2,
    FormsAutre,
    FormsResult,
  },
  data: () => ({
    snackbar: false,
    button: {
      next: "Suivant",
      back: "Precedent",
    },
    validation: [false, false, false, false, false, false, false],
  }),
  computed: {
    title: {
      get: function () {
        return this.$store.getters.allForms[this.$store.getters.page];
      },
    },
    formsData: {
      get: function () {
        return this.$store.getters.formsData;
      },
    },
  },
  methods: {
    submit() {
      let confirmation = confirm(
        "Etes vous sur de vouloir soumettre ce formulaire ?"
      );
      if (confirmation) this.$store.commit("setPage", 1);
    },
    scrollTop() {
      document
        .getElementsByTagName("html")[0]
        .scroll({ top: 0, left: 0, behavior: "smooth" });
    },
    validHandler(formNumber, value) {
      // console.log("Parent thinks : ", formNumber, value);
      this.$set(this.validation, formNumber, value);
    },
    disable: function () {
      return !this.validation[this.$store.getters.page];
    },
    printPage() {
      window.print();
    },
  },
};
</script>

<style scoped>
.form {
  height: auto;
  /* overflow-y: scroll;
  scroll-behavior: smooth;
  max-height: 80vh; */
  margin-top: 10vh; /* max-height/2 */
  margin-bottom: 10vh;
  width: 99%;
}

/* ----- Scroll bar ----- */
::-webkit-scrollbar {
  width: 0.6em;
}

::-webkit-scrollbar-thumb {
  background: grey;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: grey;
}

.v-sheet.v-stepper {
  box-shadow: none !important;
}

.v-stepper__header {
  box-shadow: none !important;
}

.title {
  padding: 0;
}

#theme-switcher {
  position: absolute;
  top: 0;
  left: 0;
}
</style>

