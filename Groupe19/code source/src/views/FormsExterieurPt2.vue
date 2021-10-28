<template>
  <v-container>
    <v-form ref="form" v-model="valid">
      <Divider name="Terrain" icon="mdi-sprout" />
      <v-row class="exterior">
        <v-col cols="12" md="5">
          <v-combobox
            v-model="exterior.landscapingLand"
            :items="[
              'Boisé',
              'Cabanon',
              'Clôture',
              'Gloriette (Gazebo)',
              'Haie',
              'Pelouse',
              'Terrasse (patio) couverte',
              'Terrasse (patio) non couverte',
            ]"
            label="Aménagement du terrain"
            multiple
            persistent-hint
            hint="Vous pouvez ajouter des éléments en les écrivant simplement dans le champ."
            clearable
            small-chips
            deletable-chips
          >
          </v-combobox>
        </v-col>

        <v-col cols="12" md="3">
          <v-select
            :items="['Petit', 'Moyen', 'Grand']"
            v-model="exterior.exteriorSize.size"
            label="Taille du terrain"
            required
            :rules="[required]"
          />
        </v-col>

        <v-col cols="12" md="2">
          <v-text-field
            v-model="exterior.exteriorSize.dimension"
            label="Dimension"
            v-if="exterior.exteriorSize.size"
            type="number"
            suffix="m²"
            required
            min="0"
            :rules="[required, positive]"
          />
        </v-col>
      </v-row>

      <Divider name="Piscine" icon="mdi-pool" />

      <v-row class="pool">
        <v-col cols="12" md="3">
          <v-select
            :items="['Non', 'De surface', 'Creusée', 'Semi-creusée']"
            v-model="exterior.pool"
            label="Type de piscine"
            required
            :rules="[required]"
          />
        </v-col>

        <v-col cols="12" md="3">
          <v-select
            :items="['Aucun', 'Électrique', 'Au gaz naturel']"
            v-model="exterior.poolHeater"
            v-if="exterior.pool != 'Non'"
            label="Chauffe-piscine"
            required
            :rules="[required]"
          />
        </v-col>
      </v-row>

      <Divider name="Accès" icon="mdi-car" />

      <v-row>
        <v-col cols="12" md="3">
          <v-select
            :items="['Asphalte', 'Terre', 'Pavé de béton ', 'Gravier']"
            v-model="exterior.driveway"
            label="Entrée"
            required
            :rules="[required]"
          />
        </v-col>

        <v-col cols="12" md="3">
          <v-text-field
            type="number"
            min="0"
            v-model="exterior.parkingSpace"
            label="Nombre de stationnement *"
            required
            :rules="[required, positive]"
          />
        </v-col>

        <v-col cols="12" md="3">
          <v-select
            :items="['Couvert', 'Non couvert', 'Garage']"
            v-if="exterior.parkingSpace != 0"
            v-model="exterior.parkingType"
            label="Type de stationnement"
            required
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
      this.$emit("valid", 3, value);
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