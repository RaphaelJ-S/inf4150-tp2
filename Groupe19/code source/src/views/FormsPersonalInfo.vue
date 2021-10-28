<template>
  <v-container>
    <v-form ref="form" v-model="valid">
      <v-row class="address">
        <v-col cols="12" md="4">
          <v-text-field
            v-model="personalInfo.address.address"
            prepend-icon="mdi-home"
            label="Adresse *"
            required
            :rules="[required]"
          />
        </v-col>

        <v-col cols="12" md="2">
          <v-text-field
            v-model="personalInfo.address.city"
            label="Ville *"
            required
            :rules="[required]"
          />
        </v-col>

        <v-col cols="12" md="2">
          <v-select
            :items="province"
            v-model="personalInfo.address.province"
            label="Province *"
            required
            :rules="[required]"
          ></v-select>
        </v-col>

        <v-col cols="12" md="2">
          <v-text-field
            v-model="personalInfo.address.postalCode"
            label="Code postal *"
            required
            :rules="[required, postal]"
          />
        </v-col>

        <v-col cols="12" md="2">
          <v-text-field
            v-model="personalInfo.address.country"
            label="Pays *"
            required
            :rules="[required]"
          />
        </v-col>
      </v-row>

      <v-row class="broker">
        <v-col cols="12" md="3">
          <v-text-field
            v-model="personalInfo.broker"
            label="Courtier *"
            prepend-icon="mdi-account-circle"
            dense
            required
            :rules="[required]"
          />
        </v-col>
      </v-row>

      <v-row class="personalInfo">
        <v-col cols="12" md="3">
          <v-text-field
            v-model="personalInfo.phoneNumber.cell"
            label="Cellulaire *"
            prepend-icon="mdi-phone"
            dense
            required
            type="tel"
            :rules="[required, phone]"
          />
        </v-col>

        <v-col cols="12" md="3">
          <v-text-field
            v-model="personalInfo.phoneNumber.home"
            label="Téléphone fixe"
            type="tel"
            dense
            :rules="[phone]"
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="personalInfo.email"
            label="Courriel *"
            prepend-icon="mdi-email"
            type="email"
            dense
            required
            :rules="[required, email]"
          /> </v-col
      ></v-row>

      <v-row class="amount">
        <v-col cols="12" md="3">
          <v-text-field
            v-model="personalInfo.municipalAssessment"
            label="Evaluation municipale "
            prepend-icon="mdi-star"
          />
        </v-col>

        <v-col cols="12" md="2">
          <v-text-field
            v-model="personalInfo.askingPrice"
            label="Prix demandé *"
            prefix="$"
            required
            type="number"
            min="0"
            :rules="[required, positive]"
          />
        </v-col>

        <v-col cols="12" md="3">
          <v-text-field
            v-model="personalInfo.schoolTax"
            label="Montant de la taxe scolaire *"
            prefix="$"
            required
            type="number"
            min="0"
            :rules="[required, positive]"
          />
        </v-col>

        <v-col cols="12" md="3">
          <v-text-field
            v-model="personalInfo.municipalTax"
            label="Montant de la taxe municipale *"
            prefix="$"
            required
            type="number"
            min="0"
            :rules="[required, positive]"
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

    model: true,
    province: [
      "Alberta",
      "Colombie-Britannique",
      "Île-du-Prince-Édouard",
      "Manitoba",
      "Nouveau-Brunswick",
      "Nouvelle-Écosse",
      "Nunavut",
      "Ontario",
      "Québec",
      "Saskatchewan",
      "Terre-Neuve-et-Labrador",
      "Territoires du Nord-Ouest",
      "Yukon",
    ],
    required: (v) => !!v || v != "" || "Ce champ ne peut pas être vide",
    postal: (v) =>
      v.replace(/(\s|-)+/g, "").length <= 6 ||
      "Le code postal doit faire 6 caractères",
    phone: (v) =>
      v.length == 0 ||
      /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(
        v.replace(/\s+/g, "")
      ) ||
      "Format de numéro de téléphone invalide",
    email: (v) =>
      /^\S+@\S+\.\S+$/.test(v) ||
      "L'email doit être de la forme toto@gmail.com",
    positive: (v) => v >= 0 || "Ce champ doit être positif",
  }),
  computed: {
    personalInfo: {
      get: function () {
        return this.$store.getters.formsData.personalInfo;
      },
    },
  },
  watch: {
    personalInfo: {
      handler: function (value) {
        this.$store.commit("setFormsData", ["personalInfo", value]);
      },
      deep: true,
    },
    valid: function (value) {
      this.$emit("valid", 0, value);
    },
  },
};
</script>

<style>
</style>