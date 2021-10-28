<template>
  <v-app>
    <v-main :style="{ background: $vuetify.theme.themes[theme].primary }">
      <Forms />
    </v-main>
  </v-app>
</template>

<script>
import Forms from "@/views/Forms.vue";

export default {
  name: "App",
  components: {
    Forms,
  },
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    },
  },
  data: () => ({}),
};
</script>

<style>
.v-input--radio-group legend.v-label {
  font-size: 16px;
}

.income {
  margin-bottom: 10px;
}

::-webkit-scrollbar {
  width: 0.6em;
  background-color: rgb(71, 71, 71);
}

::-webkit-scrollbar-thumb {
  background: grey;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: grey;
}
</style>
