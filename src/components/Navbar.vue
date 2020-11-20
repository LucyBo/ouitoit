<template>
  <div class="container-fluid" id="navbar">
    <b-navbar class="container" toggleable="md" type="light">
      <img id="logo-left" alt="logo" src="../assets/croissant.png">
      <b-navbar-brand href="#">Oui to it <img alt="logo" src="../assets/baguette.png"> <img id="logo-right" alt="logo" src="../assets/croissant.png"></b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <router-link to="/">Home  |</router-link>
        </b-navbar-nav>

        <b-navbar-nav>
          <router-link to="/flashcards">Flashcards  |</router-link>
        </b-navbar-nav>

        <b-navbar-nav>
          <router-link to="/about">About  |</router-link>
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

 #logo-left {
    transform: rotate(45deg);
}
 #logo-right {
    transform: rotate(225deg);
}

img {
  height: 30px;
}

.navbar-brand {
    font-family: "Sacramento", Helvetica, Arial;
    color: black;
    font-size: 1.6rem;
    margin: 0 1rem 0 0;
    color: #FFB335;
      &:hover {
      color: black;
      text-decoration: none;
      // text-shadow: 10px 12px rgba(50, 50, 50, 0.2);
    }
}

a {
  font-family: Alice;
  color: #3E76D5;
  margin:  0 1rem;
    &:hover {
      color: black;
      text-decoration: none;
      // text-shadow: 10px 12px rgba(50, 50, 50, 0.2);
    }

}

}

</style>
