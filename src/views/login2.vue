<template >
<div class="bg-login" >
    <div class="container">
    <div class="card card-login mx-auto mt-5" >
      <div class="card-header text-uppercase">Login</div>
      <div class="card-body">
        <form @submit.prevent="validate()" novalidate>
          <div class="form-group">
            <div class="form-label-group">
              <input v-model="user.email" type="text" id="inputID" class="form-control text-lowercase"  required="required" autofocus="autofocus">
              <label for="inputEmail">ID</label>
            </div>
          <span v-if="error.email" class="text-danger">ID is required!</span>
          </div>
          <div class="form-group">
            <div class="form-label-group">
              <input v-model="user.password"  type="password" id="inputPassword" class="form-control text-lowercase" placeholder="Password" required="required">
              <label for="inputPassword">Password</label>
            </div>
           <span v-if="error.password" class="text-danger">Password is required!</span>
           <span v-if="error.cred" class="text-danger">Username or password are wrong!</span>

          </div>
          <!-- <div class="form-group">
            <div class="checkbox">
              <label>
                <input type="checkbox" value="remember-me">
                <span class="checkbox-label">Remember Password</span>
              </label>
            </div>
          </div> -->
          <button class="btn btn-primary btn-block" type="submit" href="#">Login</button>
        </form>
        <div class="text-center">
          <!-- <router-link to='/register' ><div class="d-block small mt-3" >Register an Account</div></router-link> -->
          <!-- <a class="d-block small" href="forgot-password.html">Forgot Password?</a> -->
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>

export default {
  data:function(){
    return{
      user:{
        email:"",
        password:""
      },
      error:{
        email:false,
        password:false,
        cred:false
      }
    }
  },
  methods :{
       validate(){    
        if(this.user.email === "" || this.user.password === ""){
          if (this.user.email === ""){
            this.error.email= true;
          }
          if (this.user.password === ""){
            this.error.password = true;
          }
        }
        else{

          if (this.user.email == 'adebola' && this.user.password === 'adebola' ||this.user.email === 'adams' && this.user.password === 'adams'){
                 this.$router.replace("/adminHome")
          }else{
                this.error.cred = true;
          }

        }
      }    
  }
}
</script>

<style scoped>
.bg-login{
  background-color: #24103c;
  padding: 40px;
  height: 100vh
  }
</style>