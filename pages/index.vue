<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      {{
        $auth.user
          ? `Welcome, ${$auth.user.name}!`
          : 'Welcome home! please login to gain access'
      }}
      <hr />
      <div v-if="$auth.user">
        <h2 style="color: yellowgreen">your token is:</h2>
        <br />
        <h3 class="text">{{ token }}</h3>
        <hr />
        <h2 style="color: yellowgreen">your refresh token is:</h2>
        <br />
        <h3 class="text">{{ refreshToken }}</h3>
        <hr />
        <br /><br /><br />
        <v-btn @click.stop="refresh">refresh</v-btn>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  methods: {
    refresh() {
      this.$auth.refreshTokens()
    },
  },
  computed: {
    token() {
      return this.$auth.strategy.token.get()
    },

    refreshToken() {
      return this.$auth.strategy.refreshToken.get()
    },
  },
}
</script>

<style scoped>
.text {
  width: 500px;
  overflow-wrap: break-word;
}
</style>
