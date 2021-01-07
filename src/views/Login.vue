<template>
  <section id="login">
        <form v-on:submit="onSubmit()">
            <h3>Sign in</h3>
            <div class="form-group">
                <label>Username</label>
                <input type="text" v-model="username" name="username" class="form-control form-control-lg" />
            </div>

            <div class="form-group">
                <label>Password</label>
                <input type="password" v-model="password" name="password" class="form-control form-control-lg" />
            </div>
            <button
              type="submit"
            > Login</button>
        </form>
  </section>
</template>

<script>

export default {
  data () {
    return {
      username: '',
      password: '',
      loggedIn: false
    }
  },
  methods: {
    onSubmit () {
      fetch('/api/login', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: this.username,
          password: this.password
        })
      }).then(response => response.json()).then(zzzzz => console.log(zzzzz))
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
