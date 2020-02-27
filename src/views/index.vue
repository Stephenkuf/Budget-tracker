<template>
  
<div id="page-top">

  <div class="wrapper">

  
    <header>
      <nav class="navbar navbar-expand navbar-dark bg-d-purple static-top">

        <a class="navbar-brand mr-1" href="index.html">Budget Tracker</a>


        <!-- Navbar -->
        <div class="ml-auto">
          <a href="register.html" class="cta-button">
            Get Started
          </a>
        </div>
        

      </nav>
    </header>
     <main class="page-main" >
    <div class="row">      
       
        <div class="col-2"></div>

            <div class="col-8">
                  <div class="text-holder">
                    <h3>Welcome</h3>
                    <p>This system helps with the submission, tracking and management of budgets submitted in the College of Medicine(University of Ibadan)</p>
                   <router-link to='/login'> 
                      <a href="#" class="cta-button size-50">
                      login as Financial Manager
                       </a>
                    </router-link>

                   <router-link to="/login2">
                      <a href="#" class="cta-button size-50">
                        login as an Auditor
                      </a>
                   </router-link>
                  </div>
              </div>

           <div class="col-2"></div>

    
       
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

<style scoped >
  body {
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
    font-family: Poppins, 'san-serif';
}

.wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.bg-transparent {
    background-color: transparent;
}

.bg-d-purple {
    background-color: #331e4d;
}


.cta-button {
    display: block;
    background-color: #9984D4;
    color: #fff;
    text-transform: uppercase;
    border: none;
    padding: .5rem 1.2rem;
    margin: 5px 0;
    font-weight: 500;
    font-size: .76rem;
    border-radius: 3px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    -ms-border-radius: 3px;
    -o-border-radius: 3px;
}

.size-50 {
    width: 240px;
}
   
.page-main {
  background: #331E4D;
  display: flex;
  flex-flow: row wrap;
  min-height: 350px;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
}



.page-main .image-holder > img {
    width: 40%;
    background-blend-mode: multiply;
}

.page-main .text-holder {
    width: 30%;
    color: #fff;
}

.page-main .text-holder h3 {
    font-weight: 600;
}


/* Footer  */
.page-footer {
    background: #9984D4;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.page-footer .copyright {
    padding: 20px;
    color: #ccc;
    font-size: 1.0rem;
}


/* LOGIN SCREEN */
.bg-login, .bg-register {
    background: #24103c  url('/img/black-calculator.jpg') no-repeat;
    background-size: cover;
    background-blend-mode: multiply;
}

.bg-login a,
.bg-register a {
    color: #24103c;
}

.bg-login form input.form-control,
.bg-register form input.form-control,
.bg-register form select.form-control {
    color: #24103c;
    border: 1px solid #24103c;
    border-radius: 0;
    -webkit-border-radius: 0;
    -moz-border-radius: 0;
    -ms-border-radius: 0;
    -o-border-radius: 0;
    font-size: 13px;
    text-transform: uppercase;
}

.bg-register form select.form-control {
    max-height: 100%;
}

.bg-login .form-label-group > label,
.bg-register .form-label-group > label {
    color: #24103c;
    font-size: 13px;
    text-transform: uppercase;
}

.btn-login, .btn-register {
    background: #24103c;
    color: #fff !important;
}

.bg-login span.checkbox-label {
    font-size: 13px;
    line-height: 1.4;
}   

</style>