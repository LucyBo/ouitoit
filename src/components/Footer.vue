<template>
  <div id="footer" class="container-fluid text-left">
    <b-container>
        <p class="brand">Si to it</p>
        <p>Get daily tips and tricks for improve your skills!</p>
        <div class="input-group">
        <b-form-input v-model="text" placeholder="Enter your e-mail"></b-form-input><b-button variant="outline-secondary">This button doesn't do anything yet!</b-button></div>
      <p class="social">
        Folow us:
        <a href="https://www.facebook.com/Si-to-it-103776771570270">
        <img alt="facebook logo" src="../assets/facebook.png">
        </a>
        <a href="https://www.instagram.com/si_to_it/">
        <img alt="instagram logo" src="../assets/instagram.png">
        </a>
        <a href="https://github.com/lucybo">
        <img alt="github logo" src="../assets/github.png">
        </a>
      </p>
    </b-container>
    <div class="about-author container-fluid">
      <b-container>
        <p> This website was handcrafted by Lucyna Borkowska </p>
        <p> Si to it - part of the LucyBo publishing family </p>
        <p>Beautiful free photos contributed by talented community of <a href="https://www.pexels.com/">Pexels</a> and <a href="https://www.unsplash.com/">Unsplash</a>
        </p>
        <p>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
        </p>
        <p>Photo by Andrea Piacquadio from Pexels</p>
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
  background: #FFEB5A;
  padding: 2rem 0;
  font-family: Lato;
  font-weight: 700;
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
    color:black;
    &:hover {
      color: white;
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
  }
  .about-author {
    p {
      font-size: 13px;
      margin: 8px 0;
      a {
        color: white;
        &:hover {
          text-decoration: none;
        }
      }
    }
  }
}

  @media (max-width: 575.98px) {
    #footer {
      padding: 1rem;
      .about-author {
        padding: 0 0 0 0;
      }
    }
 }

</style>
