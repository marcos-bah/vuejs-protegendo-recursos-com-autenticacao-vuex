<template>
  <div class="container">
    <div class="jumbotron mt-2">
      <h1 class="display-4">Bem-vindo!</h1>
      <p>Aplição disponível para listagem dos gerentes do nosso banco.</p>
      <button class="btn btn-danger" @click="efetuarLogout">Sair</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  methods: {
    efetuarLogout() {
      this.$store.commit("SET_DESLOGADO");
      this.$router.push({ name: "login" });
    },
  },
};
</script>
