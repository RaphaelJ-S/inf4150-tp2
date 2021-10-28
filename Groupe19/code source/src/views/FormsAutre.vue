<template>
  <v-container>
    <v-form ref="form" v-model="valid">
      <v-row>
        <v-col cols="12" md="3">
          <v-menu
            v-model="menu2"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="other.occupationDate"
                label="Date d'occupation *"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
                :rules="[required]"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="other.occupationDate"
              @input="menu2 = false"
            ></v-date-picker>
          </v-menu>
        </v-col>
      </v-row>

      <v-combobox
        class="mt-5 mb-5"
        v-model="other.included"
        :items="[
          'Stores',
          'Luminaires',
          'Four',
          'Lave vaisselle',
          'Machine à laver',
          'Sèche linge',
        ]"
        label="Inclus dans la vente"
        hint="Vous pouvez ajouter des éléments en les écrivant simplement dans le champ."
        multiple
        clearable
        small-chips
        persistent-hint
        deletable-chips
      >
        <template v-slot:no-data>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                Appuyer sur <kbd>entrer</kbd> pour créer un nouveau choix.
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-combobox>

      <fieldset class="pa-3">
        <legend>
          <v-subheader>
            <v-icon class="mr-2">mdi-map-marker-distance</v-icon> Proximité
          </v-subheader>
        </legend>

        <v-row>
          <v-col cols="12" md="3">
            <v-text-field
              v-model="other.proximity.work"
              label="Travail"
              type="number"
              suffix="km"
              prepend-icon="mdi-briefcase"
              required
            />
          </v-col>

          <v-col cols="12" md="3">
            <v-text-field
              v-model="other.proximity.husbandWork"
              label="Travail du conjoint"
              type="number"
              prepend-icon="mdi-briefcase-outline"
              suffix="km"
              required
            />
          </v-col>

          <v-col cols="12" md="3">
            <v-text-field
              v-model="other.proximity.school"
              label="Ecoles"
              type="number"
              prepend-icon="mdi-school"
              suffix="km"
              required
            />
          </v-col>

          <v-col cols="12" md="3">
            <v-text-field
              v-model="other.proximity.publicTransport"
              label="Transports en commun"
              type="number"
              prepend-icon="mdi-bus"
              suffix="km"
              required
            />
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="3">
            <v-text-field
              v-model="other.proximity.grocery"
              label="Epicerie"
              type="number"
              prepend-icon="mdi-fruit-watermelon"
              suffix="km"
              required
            />
          </v-col>

          <v-col cols="12" md="3">
            <v-text-field
              v-model="other.proximity.shoppongMall"
              label="Centre commercial"
              type="number"
              prepend-icon="mdi-cart"
              suffix="km"
              required
            />
          </v-col>

          <v-col cols="12" md="3">
            <v-text-field
              v-model="other.proximity.amusment"
              label="Centre récréatif"
              type="number"
              prepend-icon="mdi-gamepad-variant"
              suffix="km"
              required
            />
          </v-col>

          <v-col cols="12" md="3">
            <v-text-field
              v-model="other.proximity.church"
              label="Lieux de culte"
              type="number"
              prepend-icon="mdi-church"
              suffix="km"
              required
            />
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="3">
            <v-text-field
              v-model="other.proximity.police"
              label="Police"
              type="number"
              prepend-icon="mdi-police-badge"
              suffix="km"
              required
            />
          </v-col>

          <v-col cols="12" md="3">
            <v-text-field
              v-model="other.proximity.firefighter"
              label="Pompiers"
              type="number"
              prepend-icon="mdi-fire-truck"
              suffix="km"
              required
            />
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="3">
            <v-text-field
              v-model="other.proximity.doctor"
              label="Médecin"
              type="number"
              prepend-icon="mdi-needle"
              suffix="km"
              required
            />
          </v-col>

          <v-col cols="12" md="3">
            <v-text-field
              v-model="other.proximity.hospital"
              label="Hôpital"
              type="number"
              prepend-icon="mdi-hospital-building"
              suffix="km"
              required
            />
          </v-col>

          <v-col cols="12" md="3">
            <v-text-field
              v-model="other.proximity.dentist"
              label="Dentiste"
              type="number"
              prepend-icon="mdi-tooth"
              suffix="km"
              required
            />
          </v-col>

          <v-col cols="12" md="3">
            <v-text-field
              v-model="other.proximity.veterinary"
              label="Vétérinaire"
              type="number"
              prepend-icon="mdi-cat"
              suffix="km"
              required
            />
          </v-col>
        </v-row>
      </fieldset>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data: () => ({ valid: false, menu2: false }),
  computed: {
    other: {
      get: function () {
        return this.$store.getters.formsData.other;
      },
    },
  },
  watch: {
    other: {
      handler: function (value) {
        this.$store.commit("setFormsData", ["other", value]);
      },
      deep: true,
    },
    valid: function (value) {
      this.$emit("valid", 6, value);
    },
  },
  methods: {
    required: (v) => !!v || v != "" || "Ce champ ne peut pas être vide",
  },
};
</script>

<style>
</style>