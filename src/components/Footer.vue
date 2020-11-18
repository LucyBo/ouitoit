<template>
  <div id="footer" class="container-fluid">
    <b-container class="bv-example-row">
        <p class="brand">Oui to it</p>
        <p>Get daily tips and tricks for improve your skills!</p>
        <div class="input-group">
        <b-form-input v-model="text" placeholder="Enter your e-mail"></b-form-input><b-button variant="outline-light">This button doesn't do anything yet!</b-button></div>
      <p class="social">
        Folow us: <a href="/"><img alt="facebook logo" src="../assets/facebook.png"></a><a href="/"><img alt="facebook logo" src="../assets/instagram.png"></a><a href="/"><img alt="facebook logo" src="../assets/github.png"></a>
      </p>
    </b-container>
    <div class="about-author container-fluid">
      <b-container>
        <p> This website was handcrafted by Lucyna Borkowska </p>
        <p> Oui to it - part of the LucyBo publishing family </p>
        <p>Beautiful free photos contributed by talented community of <a href="https://www.pexels.com/">Pexels</a> and <a href="https://www.unsplash.com/">Unsplash</a>
        </p>
        <p>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
        </p>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      text: ''
    }
  }
}
</script>

<style scoped lang="scss">
#footer {
  // background: #3E76D5;
  background: linear-gradient(180deg, #3E76D5 17%, #4481eb 55%);
  padding: 2rem 0 0 0;
  font-family: Lato;
  input {
    max-width: 315px;
    border-radius: 0;
  }
  button {
    border-radius: 0;
  }
  .brand {
    font-family: Sacramento;
    font-size: 2.3rem;
    color: white;
    &:hover {
      text-shadow: 10px 12px rgba(50, 50, 50, 0.2);
    }
  }
  .social {
    margin-top: 1rem;
    margin-bottom: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  img {
    height: 24px;
    margin: 5px 8px;
    &:hover {
      box-shadow: 8px 12px 5px rgba(50, 50, 50, 0.2);
    }
  }
  .about-author {
    border-top: 3px dashed lightgray;
    border-bottom: 3px dashed lightgray;
    p {
      font-size: 13px;
      margin: 8px 0;
      a {
        color: white;
        &:hover {
          text-shadow: 10px 12px rgba(50, 50, 50, 0.2);
          text-decoration: none;
        }
      }
    }
  }
}

</style>
