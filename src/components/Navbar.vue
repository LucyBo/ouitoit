<template>
  <div class="container-fluid" id="navbar">
    <b-navbar class="container" toggleable="md" type="light">
      <b-navbar-brand href="/">Si to it
        <img id="logo" alt="logo" src="../assets/parrot.png">
        </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <router-link to="/">Home |</router-link>
        </b-navbar-nav>

        <b-navbar-nav>
          <router-link to="/flashcards">Flashcards |</router-link>
        </b-navbar-nav>

        <b-navbar-nav>
          <router-link to="/about">About |</router-link>
        </b-navbar-nav>

         <b-navbar-nav>
          <router-link to="/login">Login |</router-link>
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
  background-color: rgba(0, 0, 0, 0.75);
  overflow: hidden;
  position: fixed;
  z-index: 1000 !important;

.b-navbar {
  color: #FFEB5A;
}

 #logo {
    margin-left: 10px;
}

img {
  height: 30px;
}

.navbar-brand {
    font-family: "Sacramento", Helvetica, Arial;
    color: white;
    font-size: 1.6rem;
    margin: 0 1rem 0 0;
    color: #FFEB5A;
    text-transform: none;
      &:hover {
      color: white;
      text-decoration: none;
    }
}

a {
  font-family: Lato;
  font-weight: 700;
  color: #FFEB5A;
  font-size: 1rem;
  text-transform: uppercase;
  margin:  0 1rem;
    &:hover {
      color: white;
      text-decoration: none;
    }

}
  .navbar-toggler  {
    background-color: #FFEB5A;
    }
}

  @media (max-width: 767.98px) {
      .container-fluid {
      padding-bottom: 3rem;
    }

}

</style>
