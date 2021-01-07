<template>
  <section id="login">
        <form @submit.prevent="login">
            <h3>Sign in</h3>
            <div class="form-group">
                <label>Email</label>
                <input type="text" v-model="email" name="email" class="form-control form-control-lg" />
            </div>

            <div class="form-group">
                <label>Password</label>
                <input type="password" v-model="password" name="password" class="form-control form-control-lg" />
            </div>
            <button type="submit">Login</button>
        </form>
  </section>
</template>

<script>

export default {
  data () {
    return {
      email: '',
      password: '',
      loggedIn: false
    }
  },
  methods: {
    login () {
      const email = this.email
      const password = this.password
      this.$store.dispatch('login', { email, password })
        .then(() => this.$router.push('/'))
        .catch(err => console.log(err))
    }
  }
}

</script>

<style scoped lang="scss">
  #login {
    padding-top: 8rem;
    padding-bottom: 4rem;
    form {
      width: 70%;
      margin: auto;
    }
    button {
      width: 40%;
      margin: auto;
    }
  }

</style>
