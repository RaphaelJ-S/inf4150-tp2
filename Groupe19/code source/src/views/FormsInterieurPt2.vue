<template>
  <v-container>
    <v-form ref="form" v-model="valid">
      <Divider name="Nombre de chambre à coucher par étage" icon="mdi-bed" />
      <v-row>
        <v-col cols="12" md="3">
          <v-text-field
            v-model="interior.bedrooms.basement"
            label="Sous-sol *"
            type="number"
            required
            min="0"
            :rules="[required, positive]"
          />
        </v-col>

        <v-col cols="12" md="3">
          <v-text-field
            v-model="interior.bedrooms.firstFloor"
            label="Rez-de-chaussée *"
            type="number"
            required
            min="0"
            :rules="[required, positive]"
          />
        </v-col>

        <v-col cols="12" md="3">
          <v-text-field
            v-model="interior.bedrooms.otherFloor"
            label="Étage *"
            type="number"
            required
            min="0"
            :rules="[required, positive]"
          />
        </v-col>
      </v-row>

      <Divider name="Pièce principale" icon="mdi-sofa" />
      <v-row>
        <v-col cols="12" md="3">
          <v-select
            :items="['Séparée', ' Jumelée à la cuisine', ' Jumelée au salon']"
            v-model="interior.diningRoom"
            label="Salle à manger *"
            required
            :rules="[required]"
          />
        </v-col>
        <v-col cols="12" md="3">
          <v-select
            :items="[
              'Séparé',
              'Jumelé à la cuisine',
              'Jumelé à la salle à manger',
            ]"
            v-model="interior.livingRoom"
            label="Salon / séjour *"
            required
            :rules="[required]"
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="5">
          <v-row class="pl-3 pt-4">
            <v-switch
              v-model="interior.masterBedroomWithBathroom.exist"
              label="Chambre à coucher principale avec salle de bain : "
            />
            <v-icon
              color="success"
              v-if="interior.masterBedroomWithBathroom.exist"
              >mdi-check</v-icon
            >
            <v-icon color="red" v-else>mdi-close</v-icon>
          </v-row>
        </v-col>
        <!-- TODO : Passer à 2 checkbox -->
        <v-col cols="12" md="4" v-if="interior.masterBedroomWithBathroom.exist">
          <v-select
            :items="['Douche', 'Baignore']"
            v-model="interior.masterBedroomWithBathroom.type"
            label="Type de salle de bain dans la chambre à coucher *"
            multiple
            required
            :rules="[required]"
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="6">
          <v-row class="pl-3 pt-4">
            <v-switch v-model="interior.officeSpace" label="Espace de bureau" />
            <v-icon color="success" v-if="interior.officeSpace"
              >mdi-check</v-icon
            >
            <v-icon color="red" v-else>mdi-close</v-icon>
          </v-row>
        </v-col>
      </v-row>

      <Divider name="Sous-sol" icon="mdi-stairs-down" />
      <v-row>
        <v-col cols="12" md="4">
          <v-radio-group
            label="Etat du sous-sol"
            v-model="interior.basement.status"
            row
            :rules="[required]"
          >
            <v-radio label="Non fini" value="nonFini" color="error"></v-radio>
            <v-radio label="Fini" value="fini" color="success"></v-radio>
          </v-radio-group>
        </v-col>
        <v-col cols="12" md="3">
          <v-select
            :items="['Salle de jeu (enfants)', 'Salle familiale', 'Rangement']"
            v-model="interior.basement.type"
            label="Sous-sol *"
            required
          />
        </v-col>
      </v-row>

      <Divider name="Salle d'eau" icon="mdi-shower" />
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="interior.powderRooms.bathRoom"
            label="Salle de toilette (toilette + lavabo)"
            type="number"
            required
            min="0"
            :rules="[required, positive]"
          />
        </v-col>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="interior.powderRooms.toiletRoom"
            label="Salle de bains (toilette + baignoire ou douche)"
            type="number"
            required
            min="0"
            :rules="[required, positive]"
          />
        </v-col>
        <v-col cols="12" md="4">
          <v-select
            :items="['Indépendante', 'Jumelée à salle de toilette']"
            v-model="interior.powderRooms.laundry"
            label="Laverie"
            required
            :rules="[required]"
          />
        </v-col>
      </v-row>

      <v-row>
        <fieldset class="pa-5">
          <legend>
            <v-subheader
              ><v-icon class="mr-2">mdi-cupboard</v-icon> Rangement
              suffisant</v-subheader
            >
          </legend>
          <v-row>
            <v-col cols="12" md="4">
              <v-row class="pl-3 pt-4">
                <v-switch
                  v-model="interior.sufficientStorageSpace.firstFloor"
                  label="Rez-de-chaussée"
                />
                <v-icon
                  color="success"
                  v-if="interior.sufficientStorageSpace.firstFloor"
                  >mdi-check</v-icon
                >
                <v-icon color="red" v-else>mdi-close</v-icon>
              </v-row>
            </v-col>

            <v-col cols="12" md="4">
              <v-row class="pl-3 pt-4">
                <v-switch
                  v-model="interior.sufficientStorageSpace.kitchen"
                  label="Cuisine"
                />
                <v-icon
                  color="success"
                  v-if="interior.sufficientStorageSpace.kitchen"
                  >mdi-check</v-icon
                >
                <v-icon color="red" v-else>mdi-close</v-icon>
              </v-row>
            </v-col>

            <v-col cols="12" md="4">
              <v-row class="pl-3 pt-4">
                <v-switch
                  v-model="interior.sufficientStorageSpace.secondFloor"
                  label="1er étage"
                />
                <v-icon
                  color="success"
                  v-if="interior.sufficientStorageSpace.secondFloor"
                  >mdi-check</v-icon
                >
                <v-icon color="red" v-else>mdi-close</v-icon>
              </v-row>
            </v-col>

            <v-col cols="12" md="4">
              <v-row class="pl-3 pt-4">
                <v-switch
                  v-model="interior.sufficientStorageSpace.thirdFloor"
                  label="2e étage"
                />
                <v-icon
                  color="success"
                  v-if="interior.sufficientStorageSpace.thirdFloor"
                  >mdi-check</v-icon
                >
                <v-icon color="red" v-else>mdi-close</v-icon>
              </v-row>
            </v-col>

            <v-col cols="12" md="4">
              <v-row class="pl-3 pt-4">
                <v-switch
                  v-model="interior.sufficientStorageSpace.basement"
                  label="Sous-sol"
                />
                <v-icon
                  color="success"
                  v-if="interior.sufficientStorageSpace.basement"
                  >mdi-check</v-icon
                >
                <v-icon color="red" v-else>mdi-close</v-icon>
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
  }),
  computed: {
    interior: {
      get: function () {
        return this.$store.getters.formsData.interior;
      },
    },
  },
  watch: {
    interior: {
      handler: function (value) {
        this.$store.commit("setFormsData", ["interior", value]);
      },
      deep: true,
    },
    valid: function (value) {
      this.$emit("valid", 5, value);
    },
  },
  methods: {
    required: (v) => !!v || v != "" || "Ce champ ne peut pas être vide",
    positive: (v) => v >= 0 || "Ce champ doit être positif",
    max: (m) => (v) => v <= m || "Ce champ de doit pas dépassé " + m,
  },
};
</script>

<style>
</style>
