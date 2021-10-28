<template>
  <v-container>
    <v-form ref="form" v-model="valid">
      <Divider icon="mdi-pillar" name="Construction" />

      <v-row>
        <v-col cols="12" md="3">
          <v-select
            :items="['Béton', 'Bloc de béton', 'Bois traité']"
            v-model="exterior.foundations"
            label="Fondations *"
            required
            :rules="[required]"
          />
        </v-col>
        <v-col cols="12" md="3">
          <v-select
            :items="[
              'Bois',
              'Brique',
              'Vinyle',
              'Aluminium',
              'Fibrociment',
              'Pierre',
              'Autre',
            ]"
            v-model="exterior.exteriorCladding"
            label="Revêtement extérieur *"
            required
            :rules="[required]"
          />
        </v-col>
        <v-col cols="12" md="3"
          ><v-text-field
            label="Précisez le revêtement *"
            v-if="exterior.exteriorCladding == 'Autre'"
            required
            :rules="[required]"
          ></v-text-field
        ></v-col>
      </v-row>

      <Divider icon="mdi-curtains" name="Fenêtres" />

      <v-row>
        <v-col cols="12" md="3">
          <v-select
            :items="['Simple', 'Double', 'Triple', 'Faible émissivité']"
            v-model="exterior.windows.glazing"
            label="Vitrage *"
            required
            :rules="[required]"
          />
        </v-col>
        <v-col cols="12" md="3">
          <v-select
            :items="['Bois', 'Vinyle/PVC', 'Aluminium']"
            v-model="exterior.windows.construction"
            label="Cadre *"
            required
            :rules="[required]"
          />
        </v-col>
      </v-row>

      <Divider icon="mdi-home-roof" name="Toiture" />

      <v-row>
        <v-col cols="12" md="3">
          <v-text-field
            v-model="exterior.roof"
            label="Age de la toiture *"
            type="number"
            required
            :rules="[required, positive]"
          >
          </v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <fieldset>
            <v-radio-group
              class="pl-3"
              v-model="exterior.roofCondition"
              label="Etat de la toiture * :"
              row
              :rules="[required]"
            >
              <v-radio label="Mauvais" value="mauvais" color="error"></v-radio>
              <v-radio label="Moyen" value="moyen" color="orange"></v-radio>
              <v-radio label="Bon" value="bon" color="success"></v-radio>
            </v-radio-group>
          </fieldset>
        </v-col>
      </v-row>

      <v-row>
        <fieldset class="pa-5">
          <legend>
            <v-subheader
              ><v-icon class="mr-2">mdi-compass</v-icon> Orientation
              (ensoleillement)</v-subheader
            >
          </legend>

          <v-row>
            <v-col cols="12" md="4">
              <Divider name="Intérieur" />

              <v-row>
                <v-col cols="12" md="3">
                  <v-checkbox
                    v-model="exterior.sunshineOrientation.interior.am"
                    label="AM"
                  ></v-checkbox>
                </v-col>

                <v-col cols="12" md="9">
                  <v-combobox
                    v-if="exterior.sunshineOrientation.interior.am"
                    v-model="exterior.sunshineOrientation.interior.amRooms"
                    :items="pieces"
                    label="Pièces éclairées"
                    multiple
                    persistent-hint
                    hint="Vous pouvez ajouter des éléments en les écrivant simplement dans le champ."
                    clearable
                    small-chips
                    deletable-chips
                  >
                  </v-combobox>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12" md="3">
                  <v-checkbox
                    v-model="exterior.sunshineOrientation.interior.pm"
                    label="PM"
                  ></v-checkbox>
                </v-col>
                <v-col cols="12" md="9">
                  <v-combobox
                    v-if="exterior.sunshineOrientation.interior.pm"
                    v-model="exterior.sunshineOrientation.interior.pmRooms"
                    :items="pieces"
                    label="Pièces éclairées"
                    multiple
                    persistent-hint
                    hint="Vous pouvez ajouter des éléments en les écrivant simplement dans le champ."
                    clearable
                    small-chips
                    deletable-chips
                  >
                  </v-combobox>
                </v-col>
              </v-row>
            </v-col>

            <v-col cols="12" md="4">
              <Divider name="Extérieur devant" />

              <v-row>
                <v-col cols="12" md="3">
                  <v-checkbox
                    v-model="exterior.sunshineOrientation.exterior.front.am"
                    label="AM"
                  ></v-checkbox>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12" md="3">
                  <v-checkbox
                    v-model="exterior.sunshineOrientation.exterior.front.pm"
                    label="PM"
                  ></v-checkbox>
                </v-col>
              </v-row>
            </v-col>

            <v-col cols="12" md="4">
              <Divider name="Extérieur dérrière" />

              <v-row>
                <v-col cols="12" md="3">
                  <v-checkbox
                    v-model="exterior.sunshineOrientation.exterior.back.am"
                    label="AM"
                  ></v-checkbox>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12" md="3">
                  <v-checkbox
                    v-model="exterior.sunshineOrientation.exterior.back.pm"
                    label="PM"
                  ></v-checkbox>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </fieldset>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    pieces: [
      { header: "Créer une nouvelle pièce en l'écrivant puis 'entrer'." },
      { text: "Salon", color: "orange" },
      { text: "Salle de bain", color: "blue" },
      { text: "Chambre", color: "pink" },
      "Cuisine",
    ],
  }),
  computed: {
    exterior: {
      get: function () {
        return this.$store.getters.formsData.exterior;
      },
    },
  },
  watch: {
    exterior: {
      handler: function (value) {
        this.$store.commit("setFormsData", ["exterior", value]);
      },
      deep: true,
    },
    valid: function (value) {
      this.$emit("valid", 2, value);
    },
  },
  methods: {
    required: (v) => !!v || v != "" || "Ce champ ne peut pas être vide",
    positive: (v) => v >= 0 || "Ce champ doit être positif",
  },
};
</script>

<style>
fieldset {
  width: 100%;
}
.v-subheader {
  height: 30px;
  font-weight: 600;
  font-size: 16px;
}
hr {
  margin-bottom: 10px;
}
</style>