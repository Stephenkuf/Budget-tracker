<template>
  
<div id="page-top">

  <div class="wrapper">

  
    <header>
      <nav class="navbar navbar-expand navbar-dark bg-d-purple static-top">

        <a class="navbar-brand mr-1" href="index.html">Budget Tracker</a>
        <!-- Navbar -->
        <div class="ml-auto">
          <router-link to='/login'><button  class="cta-button">
          Get Started
        </button></router-link>
        </div>
        

      </nav>
    </header>

    <main class="page-main">
      <div class="image-holder">
        <img src="../assets/undraw_Calculator_0evy.svg" alt="Finance">
      </div>

      <div class="text-holder">
        <h3>Welcome</h3>
        <p>This system helps with the submission, tracking and management of budgets submitted in the College of Medicine(University of Ibadan)</p>
        <router-link to='/login'><button  class="cta-button">
          Get Started
        </button></router-link>
      </div>
    </main>

    <footer class="page-footer">
      <div class="copyright">
        All rights Reserved. Budget Tracker - 2020
      </div>
    </footer>

  </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>