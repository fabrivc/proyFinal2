<template>
  <v-app>
    <v-app-bar app color="secondary" dark>
      <v-spacer></v-spacer>
    </v-app-bar>
  </v-app>
</template>

  <script>
export default {
  name: "HeaderLogin",
};
</script>

<style lang="scss">
ul {
  width: 15vw;
  list-style: none;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 0;
  > li {
    cursor: pointer;

    &:hover {
      color: rgb(171, 243, 243);
      border-bottom: 1px solid;
    }
  }
}
.v-application--wrap {
  min-height: 5vh !important;
}
</style>