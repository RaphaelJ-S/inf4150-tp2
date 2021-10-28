<template>
  <v-container>
    <v-form ref="form" v-model="valid">
      <Divider name="Général" icon="mdi-home" />
      <v-row>
        <v-col cols="12" md="3">
          <v-select
            :items="['Existante', 'Neuve']"
            v-model="houseInfo.construction"
            label="Construction *"
            required
            :rules="[required]"
          />
        </v-col>

        <v-col cols="12" md="3">
          <v-select
            :items="[
              'Copropriété',
              'Duplex',
              'Maison en rangée',
              'Maison individuelle',
              'Maison jumelée',
              'Petit immeuble',
              'Plain-pied (bungalow)',
              'Tour d’habitation',
              'Triplex',
            ]"
            v-model="houseInfo.houseType"
            label="Type d’habitation *"
            required
            :rules="[required]"
          />
        </v-col>

        <v-col cols="12" md="3">
          <v-select
            :items="['Résidentiel', 'Commercial ou industriel', 'Rural']"
            v-model="houseInfo.neighborhood"
            label="Quartier *"
            required
            :rules="[required]"
          />
        </v-col>

        <v-col cols="12" md="3">
          <v-text-field
            v-model="houseInfo.houseAge"
            label="Âge de l’immeuble *"
            required
            type="number"
            min="0"
            :rules="[required, positive]"
          />
        </v-col>
      </v-row>

      <v-row class="income">
        <v-col cols="12" md="3">
          <v-row class="pl-3 pt-4 mb-2">
            <v-switch
              v-model="houseInfo.incomeHouse.bool"
              :label="`Propriété à revenu: `"
            />
            <v-icon color="success" v-if="houseInfo.incomeHouse.bool"
              >mdi-check</v-icon
            >
            <v-icon color="red" v-else>mdi-close</v-icon>
          </v-row>
        </v-col>

        <v-col v-if="houseInfo.incomeHouse.bool" cols="12" md="3">
          <v-text-field
            v-model="houseInfo.incomeHouse.income"
            label="Revenu mensuel *"
            prefix="$"
            type="number"
            min="0"
            :rules="[required, positive]"
          />
        </v-col>
      </v-row>

      <v-subheader
        ><v-icon class="mr-3">mdi-volume-high</v-icon> Bruit</v-subheader
      >
      <v-divider></v-divider>

      <v-row>
        <v-col cols="12" md="6">
          <v-radio-group
            label="Bruit ambiant * :"
            v-model="houseInfo.ambientNoise"
            row
            :rules="[required]"
          >
            <v-radio label="Irritant" value="irritant" color="error"></v-radio>
            <v-radio
              label="Acceptable"
              value="acceptable"
              color="orange"
            ></v-radio>
            <v-radio label="Aucun" value="aucun" color="success"></v-radio>
          </v-radio-group>
        </v-col>
        <v-col cols="12" md="3">
          <v-select
            :items="['Voie principale', 'Rue tranquille', 'Cul-de-sac']"
            v-model="houseInfo.traffic"
            label="Circulation *"
            required
            :rules="[required]"
          />
        </v-col>
      </v-row>

      <v-subheader
        ><v-icon class="mr-3">mdi-water-outline</v-icon> Eau</v-subheader
      >
      <v-divider></v-divider>

      <v-row>
        <v-col cols="12" md="3">
          <v-select
            :items="['Municipalité', 'Puits']"
            v-model="houseInfo.water"
            label="Eau *"
            required
            :rules="[required]"
          />
        </v-col>
        <v-col cols="12" md="3">
          <v-select
            :items="['Municipal', 'Fosse septique']"
            v-model="houseInfo.sewer"
            label="Égout *"
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
  }),
  computed: {
    houseInfo: {
      get: function () {
        return this.$store.getters.formsData.houseInfo;
      },
    },
  },
  watch: {
    houseInfo: {
      handler: function (value) {
        this.$store.commit("setFormsData", ["houseInfo", value]);
      },
      deep: true,
    },
    valid: function (value) {
      this.$emit("valid", 1, value);
    },
  },
  methods: {
    required: (v) => !!v || v != "" || "Ce champ ne peut pas être vide",
    positive: (v) => v >= 0 || "Ce champ doit être positif",
  },
};
</script>

<style>
</style>