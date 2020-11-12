<template>
  <div class="container-fluid" id="navbar">
    <b-navbar class="container" toggleable="md" type="light">
      <b-navbar-brand href="#">Oui to it</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <router-link to="/">Home</router-link>
        </b-navbar-nav>

        <b-navbar-nav>
          <router-link to="/categories">Categories</router-link>
        </b-navbar-nav>

        <b-navbar-nav>
          <router-link to="/about">About</router-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped lang="scss">

#navbar {
  border-bottom: 3px lightgray;
  border-top: 3px lightgrey;
  border-right: white;
  border-left: white;
  border-style: dashed;

.b-navbar {
  color: black;
}

.navbar-brand {
    font-family: "Sacramento", Helvetica, Arial;
    color: black;
    font-size: 1.6rem;
    margin: 0 1rem 0 0;
    color: #FE1753;
      &:hover {
      color: #FE1753;
      text-decoration: none;
      text-shadow: 10px 12px rgba(50, 50, 50, 0.2);
    }
}

a {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #041125;
  margin:  0 1rem;
    &:hover {
      color: #FE1753;
      text-decoration: none;
      text-shadow: 10px 12px rgba(50, 50, 50, 0.2);
    }

}

}

</style>
