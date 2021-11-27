<template>
  <v-btn @click.stop="userLogin"> Login </v-btn>
</template>

<script>
export default {
  auth: 'guest',
  methods: {
    async userLogin() {
      try {
        await this.$auth.loginWith('auth0')
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>

<style>
</style>