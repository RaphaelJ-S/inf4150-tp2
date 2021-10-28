<template>
  <v-container>
    <v-row align="center">
      <v-col
        class="formsProgress"
        v-for="(form, index) in $store.getters.allForms"
        :key="form"
      >
        <v-row justify="center">
          <p v-bind:class="{ active: $store.getters.page == index }">
            {{ form.toUpperCase() }}
          </p>
        </v-row>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="progressBar" cols="12">
        <v-progress-linear color="success" rounded :value="progressBar" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    page: Number,
  },
  data: () => ({
    progressBar: 0,
  }),
  watch: {
    page: function (val) {
      this.progressBar = 100 * (val / this.$store.getters.allForms.length);
    },
  },
};
</script>

<style scoped>
/* Move progress bar closer to forms text  */

.progressBar {
  padding-top: 0;
  padding-bottom: 0;
}

.formsProgress {
  padding-bottom: 5px;
}

.active {
  font-weight: bold;
}
</style>
