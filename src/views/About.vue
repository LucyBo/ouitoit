<template>
  <div class="about">
    <b-container>
      <b-row>
        <b-col cols="12" md="6">
        <div class="project text-left">
        <h1><span id="brand">Si to it</span> - joyful concept for improving skills</h1>
          <div>✓ born in pandemic, </div>
          <div>✓ set in the IT industry,</div>
          <div>✓ for expressing stereotypes in frontend related languages and libraries,</div>
          <div>✓ addressed to everyone who wants to stay in relationship with IT technologies</div>
          <div>✓ from the developer who love to dig into JS programming problems,</div>
          <div>✓ with the mission of make JavaScript understandable and avant-garde!</div>
          <div>(the project is under constant development)</div>
        </div>
        </b-col>
        <b-col cols="12" md="6">
          <div class="project text-left">
          <h1>Flashcards</h1>
          <p>Flashcards are a tried-and-true study tool. Whether you're preparing for an exam or interview, flashcards can help you memorize information, reinforce understanding, and retain details.</p>
          <p>Flashcards give your brain a very quick way to check if you got the answer correct and this kind of test is one of the most efficient way to study. Getting wrong answers with your engagement brings to you surprisingly good results in expanding knowledge.
          </p>
          <p>More information here: <a href="https://www.thoughtco.com/how-to-use-flash-cards-1857515" target="popup" onclick="window.open('https://www.thoughtco.com/how-to-use-flash-cards-1857515','name','width=600,height=400')" >Link!</a></p>
          </div>
        </b-col>
    </b-row>
            <img class="img-fluid" src="../assets/doggo.png">
    </b-container>
    <p class="action">
      Say <span>-Si!</span> to our flashacards and learn with us!
    </p>
  </div>
</template>

<script>

</script>

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
    font-size: 2rem;
  }
  h1 {
    font-size: 1.5rem;
    margin-top: 2rem;
  }
  p {
    margin-top: 1rem;
    font-size: 1rem;
  }
  a {
    color: black;
    text-decoration: none;
    &:hover {
      color: grey;
    }
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
