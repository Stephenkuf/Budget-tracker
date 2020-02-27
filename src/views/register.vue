<template>

<div class="bg-login">

  <div class="container">
    <div class="card card-register mx-auto" style="margin-top: 8rem;">
      <div class="card-header text-uppercase">Register an Account</div>
      <div class="card-body">
        <form @submit.prevent="validate()" novalidate>
          <div class="form-group">
            <div class="form-row">
              <div class="col-md-6">
                <div class="form-label-group">
                  <input v-model="user.firstName" type="text" id="firstName" class="form-control" placeholder="First name" required="required" autofocus="autofocus">
                  <label for="firstName">First name</label>
                </div>
              <span v-if="error.firstName" class="text-danger">First name is required!</span>

              </div>
              <div class="col-md-6">
                <div class="form-label-group">
                  <input v-model="user.lastName" type="text" id="lastName" class="form-control" placeholder="Last name" required="required">
                  <label for="lastName">Last name</label>
                </div>
                <span v-if="error.lastName" class="text-danger">last name is required!</span>
              </div>
            </div>
          </div>
          <div class="form-group">
            <div class="form-label-group">
              <input v-model="user.email" type="email" id="inputEmail" class="form-control" placeholder="Email address" required="required">
              <label for="inputEmail">Email address</label>
            </div>
            <span v-if="error.email" class="text-danger">Email address is required!</span>
          </div>
          <div class="form-group">
            <div class="form-row">
              <div class="col-md-6">
                <label  style="font-size:12px" for="faculty">Choose Faculty</label>
                <div class="form-label-group">                   
                  <select id="" class="form-control" >
                     <!-- v-model="user.faculty"  -->
                    <!-- <option disabled selected>Choose Faculty</option> -->
                    <option v-for="faculty in faculties" :key="faculty">{{faculty}}</option>
                  </select>
                </div>
               <span v-if="error.faculty" class="text-danger">First name is required!</span>
              </div>
              <div class="col-md-6">
                <label style="font-size:12px" for="faculty">Choose Department</label>
                <div class="form-label-group">
                  <!-- v-model="user.firstName" -->
                  <select class="form-control" >
                     <!-- v-model="user.department" -->
                    <!-- <option disabled selected>Choose Department</option> -->
                    <option v-for="department in departments" :key="department">{{department}}</option>
                  </select>
                </div>
              <span v-if="error.department" class="text-danger">Department is required!</span>

              </div>
            </div>
          </div>

          <div class="form-group">
            <div class="form-row">
              <div class="col-md-12">
                <div class="form-label-group">
                  <input v-model="user.password" type="password" id="inputPassword" class="form-control" placeholder="Password" required="required">
                  <label for="inputPassword">Password</label>
                </div>
                <span v-if="error.password" class="text-danger">Password is required!</span>
                <!-- <span class="text-danger" v-if="!error.password">ecjwrec kjrec </span> -->

                
              </div>
              <!-- <div class="col-md-6">
                <div class="form-label-group">
                  <input type="password" id="confirmPassword" class="form-control" placeholder="Confirm password" required="required">
                  <label for="confirmPassword">Confirm password</label>
                </div>
              </div> -->
            </div>
          </div>
          <button  class="btn btn-register btn-block" type="submit" href="#">Register</button>
        </form>
        <div class="text-center">
          <a class="d-block small mt-3" href="login.html">Login Page</a>
          <a class="d-block small" href="forgot-password.html">Forgot Password?</a>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  import axios from 'axios';

export default {
  data:function(){
    return{
    //   headers: {
    //   'Access-Control-Allow-Origin': '*',
    //   'Content-Type': 'application/json',
    // },


      error:{
        firstName:false,
        lastName:false,
        email:false,
        password:false,
        faculty:false,
        department:false,
        // passMatch:false
      },
      user: {
          "id":0,
          "firstName": "",
          "lastName":"",
          "email":"",
          "password":"",
          "verificationCode": "string",
          "isAuditor": true,
          "salt": "string",
          "key": "string",
          "dateCreated": "2020-02-13T20:54:17.525Z",
          "isActive": true,
          "departmentId":0,
          "facultyId": 0
        },
      departments:[
        "MATHEMATICS",
        "ENGLISH",
        "PSYCHOLOGY"
      ],
      faculties:[
        "SCIENCE",
        "LAW",
        "SOCIAL SCIENCES"
      ]
    }
  },
    created:function(){
    
        //  axios.post('https://budget-tracking-system.azurewebsites.net/api/Users/register', this.example)
        //   .then(function (response) {
        //     // handle success
        //   //      this.users = res.data;
        //            console.log(response);
        //   })
        //  .catch(function (error) {
        //     // handle error
        //     console.log(error);
        //   })
        //   .then(function () {
        //     // always executed
        //   });
          
        

        // post request as gotten from axios

      //   axios.post('/user',
      //   {
      //     "id": 0,
      //     "firstName": this.user.firstName,
      //     "lastName": this.user.lastName,
      //     "email": this.user.email,
      //     "password": this.user.password,
      //     "verificationCode": "string",
      //     "isAuditor": true,
      //     "salt": "string",
      //     "key": "string",
      //     "dateCreated": "2020-02-13T20:54:17.525Z",
      //     "isActive": true,
      //     "departmentId":0,
      //     "facultyId": 0
      //   })
      // .then(function (response) {
      //   console.log(response);
      // })
      // .catch(function (error) {
      //   console.log(error);
      // });
      
      },
  methods:{
    validate(){
    
        if(this.user.firstName === "" || this.user.lastName === "" || this.user.email === "" || this.user.password === "" || this.user.faculty === "" ){
          if (this.user.firstName === ""){
            this.error.firstName = true;
          }
          if (this.user.lastName === ""){
            this.error.lastName = true;
          }
          if (this.user.email === ""){
            this.error.email = true;
          }
          if (this.user.password === ""){
            this.error.password = true;
          }
         }
        else{
          //   {
          //   // GET /someUrl
          //   this.$http.post('https://budget-tracking-system.azurewebsites.net/api/Users/register', this.user , 
          //        {
          //             headers: {
          //                 mode:'cors'
          //             }
          //         }         )
          //         .then(response => {
          //     // success callback
          //     console.log(response)
          //   }, response => {
          //     // error callback
          //   });
          // }

          // Example POST method implementation:
            async function postData(url = '', data = {}) {
              // Default options are marked with *
              const response = await fetch(url, {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'no-cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                  'Content-Type': 'application.json'
                  // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                
                redirect: 'follow', // manual, *follow, error
                referrerPolicy: 'no-referrer', // no-referrer, *client
                body: JSON.stringify(data) // body data type must match "Content-Type" header
              });
              return await response.json(); // parses JSON response into native JavaScript objects
            }

            postData('https://budget-tracking-system.azurewebsites.net/api/Users/register', this.user )
              .then((data) => {
                console.log(data); // JSON data parsed by `response.json()` call
              });
        }
      },
    
  }
}

</script>

<style scoped>
.text-danger{
  color: red;
  font-size:13px;
  font-weight: 100;
  text-align: center;
  padding: 30px 0;
}
 .btn-register {
    background: #24103c !important;
    color: #fff !important;
}
.bg-login{
  background-color: #24103c;
  padding: 40px;
  height: 100vh
  }
</style>