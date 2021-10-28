<template>
  <v-container>
    <v-form ref="form" v-model="valid">
      <Divider name="Général" icon="mdi-home" />
      <v-row class="general">
        <v-col cols="12" md="3">
          <v-text-field
            v-model="interior.livingArea"
            label="Superficie habitable *"
            type="number"
            suffix="m²"
            required
            min="0"
            :rules="[required, positive]"
          />
        </v-col>

        <v-col cols="12" md="3">
          <v-text-field
            v-model="interior.numberRooms"
            label="Nombre total de piece *"
            type="number"
            required
            min="0"
            :rules="[required, positive]"
          />
        </v-col>

        <v-col cols="12" md="3">
          <v-combobox
            :items="[
              {
                text: 'Vous pouvez ecrire une valeur autre que celles indiqué',
                disabled: true,
              },
              '100 ampères',
              '200 ampères',
              'Disjoncteurs',
              'Fusibles',
            ]"
            v-model="interior.electricSystem"
            label="Système électrique"
            required
          />
        </v-col>

        <v-col cols="12" md="3">
          <v-select
            :items="['Alarmes', 'Détecteurs de fumée', 'Extincteurs']"
            v-model="interior.safetyDevices"
            label="Dispositifs de sécurité"
            multiple
            required
            small-chips
            clearable
            deletable-chips
          />
        </v-col>
      </v-row>

      <Divider name="chauffage" icon="mdi-fire-circle" />
      <v-row>
        <v-col cols="12" md="3">
          <v-select
            :items="['Gaz', 'Bois', 'Électricité', 'Granules', 'Mazout']"
            v-model="interior.heatingSystemType"
            label="Type de chauffage *"
            required
            :rules="[required]"
          />
        </v-col>

        <v-col cols="12" md="3">
          <v-select
            :items="['Louée', 'Achetée']"
            v-model="interior.furnace"
            label="Fournaise *"
            required
            :rules="[required]"
          />
        </v-col>

        <v-col cols="12" md="6" class="pt-7">
          <v-row>
            <v-switch
              v-model="interior.heatRecoveryVentilator"
              label="Ventilateur-récupérateur de chaleur *:"
            />
            <v-icon color="success" v-if="interior.heatRecoveryVentilator"
              >mdi-check</v-icon
            >
            <v-icon color="red" v-else>mdi-close</v-icon>
          </v-row>
        </v-col>

        <v-col cols="12" md="3">
          <v-select
            :items="['Foyer', 'Bois', 'Gaz']"
            v-model="interior.fireplace"
            label="Foyer *"
            required
            :rules="[required]"
          />
        </v-col>

        <v-col cols="12" md="3">
          <v-select
            :items="['Aucun', 'Bois', 'Granules']"
            v-model="interior.stove"
            label="Poêle *"
            required
            :rules="[required]"
          />
        </v-col>
      </v-row>

      <Divider name="Chauffe-eau" icon="mdi-water-boiler" />

      <v-row>
        <v-col cols="12" md="3">
          <v-select
            :items="['Louée', 'Achetée']"
            v-model="interior.waterHeater.buyOrRent"
            label="Possession du chauffe-eau *"
            required
            :rules="[required]"
          />
        </v-col>

        <v-col cols="12" md="3">
          <v-select
            :items="['Gaz', 'Électricité', 'Mazout']"
            v-model="interior.waterHeater.type"
            label="Type de chauffe-eau *"
            required
            :rules="[required]"
          />
        </v-col>
      </v-row>

      <divider name="Indice d’isolation" icon="mdi-snowflake" />
      <v-row>
        <v-col cols="12" md="3">
          <v-text-field
            v-model="interior.insulationRating.basement"
            label="Sous-sol *"
            type="number"
            hint="0 à 10"
            max="10"
            min="0"
            persistent-hint
            required
            :rules="[required, positive, max(10)]"
          />
        </v-col>

        <v-col cols="12" md="3">
          <v-text-field
            v-model="interior.insulationRating.wall"
            label="Murs *"
            type="number"
            hint="0 à 10"
            max="10"
            min="0"
            persistent-hint
            required
            :rules="[required, positive, max(10)]"
          />
        </v-col>

        <v-col cols="12" md="3">
          <v-text-field
            v-model="interior.insulationRating.roof"
            label="Plafonds *"
            type="number"
            hint="0 à 10"
            max="10"
            min="0"
            persistent-hint
            required
            :rules="[required, positive, max(10)]"
          />
        </v-col>
      </v-row>

      <Divider name="Air climatisé" icon="mdi-air-filter" />
      <v-row>
        <v-col cols="12" md="3">
          <v-select
            :items="['Aucune', 'Système central', 'Fenêtre']"
            v-model="interior.airConditioning"
            label="Climatisation *"
            required
            :rules="[required]"
          />
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    valid: false,
    electricSystem: ["100 ampères", "Disjoncteurs", "200 ampères", "Fusibles"],
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
      this.$emit("valid", 4, value);
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