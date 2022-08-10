<template>
  <div class="container">
    <header-custom />
    <h1>Menú Admin</h1>
    <div class="sectionsAdmin">
      <router-link to="/admin/panelproductos">
        <hr>
        <button class="btn col-sm">Ver el panel de productos!</button>
        <hr>
      </router-link>

      <router-link to="/admin/panelpedidos">
        <hr>
        <button class="btn col-sm">Ver panel de pedidos</button>
        <hr>
      </router-link>

      <router-link to="/productos">
        <hr>
        <button class="btn col-sm">Vista de usuario</button>
        <hr>
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderCustom from "../components/HeaderCustom.vue";

export default {
  components: { HeaderCustom },
};
</script>

<style scoped>
.sectionsAdmin {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  align-content: center;
}
button {
  width: max-content;
}
h1 {
  margin-top: 2%;
}
</style>
