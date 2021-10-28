<template>
  <v-row class="divider">
    <v-col cols="12">
      <v-subheader
        ><v-icon v-if="icon" class="mr-3">{{ icon }}</v-icon
        >{{ title }}</v-subheader
      >
      <v-divider></v-divider>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    icon: String,
    name: String,
  },
  computed: {
    title: {
      get: function () {
        return this.name.charAt(0).toUpperCase() + this.name.slice(1);
      },
    },
  },
};
</script>

<style>
.theme--dark.v-subheader {
  color: rgba(255, 255, 255, 0.95);
}
</style>