<template>
  <div class="about">
    <b-container>
    <div class="project">
    <h1><span id="brand">Si to it</span> - joyful concept inspired by flashcards and mnemonics!</h1>
      <p>✔ born in pandemic, </p>
      <p>✔ set in the IT industry,</p>
      <p>✔ for expressing stereotypes in frontend related languages and libraries,</p>
      <p>✔ with the mission of make JavaScript Avant-garde again!</p>
      <p>(the project is under constant development)</p>
  </div>
  <img class="img-fluid" src="../assets/doggo.png">
    </b-container>
  <p class="action">
    Say <span>-Si!</span> to our flashacrds and learn with us!
  </p>
  </div>

</template>

<style scoped lang="scss">
.about {
    padding: 6rem 0 0 0;
  .container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  .project {
  #brand {
    font-family: Sacramento;
    font-size: 3rem;;
  }
  font-family: Lato;
  h1 {
    font-size: 1.5rem;
  }
  p {
    margin-top: 1rem;
    font-size: 1.2rem;
  }
  }
  }
    .action{
    background-color: rgb(53, 51, 51);
    color: white;
    width: 100vw;
    padding: 2rem;
    margin: 0 0 0 0;
    font-size: 2rem;
    span {
      font-style: italic;
      font-family: Sacramento;
      font-size: 2rem;
    }
  }
}

 @media (min-width: 992px) and (max-width: 1199.98px) {
}

  @media (min-width: 768px) and (max-width: 991.98px) {
}

  @media (min-width: 576px) and (max-width: 767.98px) {

}

  @media (max-width: 575.98px) {
    .about {
      padding-top: 10rem;
      padding-bottom: 3rem;
      #brand {
        font-family: Sacramento;
        font-size: 2rem;;
      }
      font-family: Lato;
      h1 {
        font-size: 1.5rem;
      }
      p {
        padding: 0.5rem 0;
        font-size: 1.3rem;
      }
    }

 }

</style>
