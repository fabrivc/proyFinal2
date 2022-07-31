<template>
  <v-app >
    <v-app-bar app color="secondary" dark>
      <v-container fluid>
        <v-row>
          <v-col sm="9" md="9" lg="9">
            <div v-if="$store.state.user.role === 'ADMIN'">
              <router-link to="/admin">
                <v-img
                  alt="Home"
                  class="shrink mr-2"
                  contain
                  src="../assets/logovuedrink.png"
                  width="40"
                />
              </router-link>
            </div>
            <div v-else>
              <router-link to="/productos">
                <v-img
                  alt="Home"
                  class="shrink mr-2"
                  contain
                  src="../assets/logovuedrink.png"
                  width="40"
                />
              </router-link>
            </div>
          </v-col>
          <v-col sm="1" md="1" lg="1">
            <button class="logout btn btn-danger" @click="logout">
              Logout
            </button>
          </v-col>
          <v-col sm="1" md="1" lg="1">
            <carrito-compra class="carritoCompra" />
          </v-col>

          <v-col sm="1" md="1" lg="1" id="usernameContainer">
            <a id="username">{{ user.username }}</a>
          </v-col>
        </v-row>
      </v-container>

      <v-spacer></v-spacer>
    </v-app-bar>
  </v-app>
</template>

  <script>
import CarritoCompra from "./CarritoCompra.vue";
import { mapState } from "vuex";
export default {
  name: "HeaderCustom",
  components: { CarritoCompra },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/");
    },
    
  },
  computed: {
    ...mapState(["user"]),
  },
};
</script>

<style lang="scss" scoped>
.logout {
  height: 5vh;
  width: min-content;
}


.carritoCompra {
  padding-top: 5%;
}

#username {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

#usernameContainer {
  display: flex !important;
  flex-direction: column !important;
  justify-content: center !important;
}

a {
  width: min-content;
}

a:hover {
  border-bottom: 2px solid white;
}

</style>