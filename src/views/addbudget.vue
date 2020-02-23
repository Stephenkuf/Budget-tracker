<template>
  <div id="page-top">

  <nav class="navbar navbar-expand navbar-dark bg-d-purple static-top">

     <router-link to='/adminHome'> <a class="navbar-brand mr-1" href="index.html">Budget Tracker</a></router-link>

    <button class="btn btn-link text-white order-1 order-sm-0" id="sidebarToggle" href="#">
      <i class="mdi mdi-segment"></i>
    </button>


    <!-- Navbar -->
    <div class="ml-auto">
      <ul class="navbar-nav ml-auto ml-md-0">
        <li class="nav-item dropdown no-arrow">
          <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span class="text-white hidden-xs">Adebola Ogunwusi</span>
            <!-- <img src="../img/undraw_coding.png" class="user-profile"/> -->
          </a>
          <div class="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
            <a class="dropdown-item" href="!#">Adebola Ogunwusi</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal"> <i class="mdi mdi-logout" style="display: inline-block;"></i> Logout</a>
          </div>
        </li>
      </ul> 
    </div>
    

  </nav>

  <div id="wrapper">

    <!-- Sidebar -->
      <ul class="sidebar navbar-nav">
      <li class="nav-item active mt-5">
       <router-link to='/home' >
        <a class="nav-link" href="#">
          <i class="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </a>
      </router-link>
      </li>
      <li class="nav-item dropdown"
           @click = "isDropdown = !isDropdown"  
      >
        <a class="nav-link dropdown-toggle" href="#" id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i class="fas fa-fw fa-folder"></i>
          <span>Budgets</span>
        </a>
        <div class="" v-if="isDropdown" aria-labelledby="pagesDropdown">
          <router-link to="/all" ><a class="dropdown-item text-white" href="#">View Budgets</a></router-link>
        </div>
      </li> 
    </ul>

    <div id="content-wrapper">

      <div class="container-fluid">




        <!-- ADD BUDGET FORM -->
        <div class="row ">
          
          <div class="col-6 add-budget my-4">
            <div class="card">
              <div class="card-header text-uppercase">Add A Budget</div>

              <form @submit.prevent="addItem">                
                <div class="field-toAdd my-2">
                  <div class="each-field">
                      <div class="single-field form-row">
                        <div class="col">
                          <label for="item-title">Title</label>
                          <input v-model="title" type="text" name="title[]" class="form-control" placeholder="item">
                          <span v-if="error.title" class="text-danger">Title cannot be empty!</span>

                        </div>
                        <div class="col">
                          <label for="item-units">Unit</label>
                          <input v-model="units"  type="number" name="unit[]" class="form-control" placeholder="unit">
                           <span v-if="error.unit" class="text-danger">Units cannot be empty!</span>
                        </div>
                        <div class="col">
                          <label for="item-price">Price</label>
                          <input v-model="price"  type="number" name="price[]" class="form-control" placeholder="price">
                          <span v-if="error.price" class="text-danger">Price cannot be empty!</span>
                        </div>
                        
                        <!-- <div class="" style="padding: 28px 0">
                          <button type="button" class="btn btn-sm btn-primary addNewItem"><i class="fa fa-plus" aria-hidden="true"></i></button>
                          <button type="button" class="btn btn-sm btn-danger remove-field"><i class="fa fa-trash" aria-hidden="true"></i></button>
                        </div>   -->
                      </div>
                  </div>
                </div>
  
                <div class="">
                  <button type="submit" class="btn btn-sm btn-budget my-2">ADD ITEM</button>
                </div>
                 <!-- <div class="">
                  <button type="submit" class="btn btn-sm btn-budget my-2">Submit Budget</button>
                </div> -->
              </form>
            </div>
          </div>
          <!-- end of first half of add budget view -->
          <div class="col-6">
              <div style="padding:40px" class="card-header text-center text-uppercase">ITEMS ADDED </div>
           <table id="customers">
            <tr>
              <th>TITLES</th>
              <th>UNITS</th>
              <th>PRICES</th>
            </tr>
            <tr v-for="item in budget.items" :key="item">
              <td>{{item.title}}</td>
              <td>{{item.units}}</td>
              <td>{{item.price}}</td>
            </tr>
           
          </table>
           <div @click="submitBudget" class="btn btn-budget float-right text-uppercase mt-2">submit budget</div>
          </div>
          
        </div>
        



        <!-- <h2>items entered: {{budget.items}}</h2> -->

        <!-- DataTables Example -->
        <div id="no-border" class="card mb-3 mt-5">
          <div id="no-border" class="card-header">
            <i class="mdi mdi-library-books" style="font-size: 1.3rem;"></i>
            Pending Budgets
          </div>
 
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-striped" id="dataTable" width="100%" cellspacing="0">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>BUDGET YEAR</th>
                    <th>DEPARTMENT</th>
                    <th>FACULTY</th>
                    <th>STATUS</th>
                  </tr>
                </thead>
                
                <tbody>
                  <tr v-for="budget in budgets" :key="budget">
                    <td>{{budget.id}}</td>
                    <td>{{budget.budgetYear}}</td>
                    <td>{{budget.department}}</td>
                    <td>{{budget.faculty}}</td>

                    <td>
                      <div style="display: block;">
                        
                        <!-- <i class="fa fa-check text-success" aria-hidden="true" style="font-size: 1rem;"></i>
                        <span class="mx-1"> (Approved) </span> -->

                        <i class="fas fa-sync text-default"></i>
                        <span class="mx-1"> (Pending) </span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <router-link to="/budgetSingle" > <button> </button> </router-link>
        </div>

      </div>
      <!-- /.container-fluid -->

      <!-- Sticky Footer -->
      <footer class="sticky-footer">
        <div class="container my-auto">
          <div class="copyright text-center my-auto">
            <span>Copyright © BUDGET TRACKER 2020</span>
          </div>
        </div>
      </footer>

    </div>
    <!-- /.content-wrapper -->

  </div>
  <!-- /#wrapper -->

  <!-- Scroll to Top Button-->
  <a class="scroll-to-top rounded" href="#page-top">
    <i class="fas fa-angle-up"></i>
  </a>
  </div>
</template>

<script>
import swal from 'sweetalert';


export default {
    data:function(){
      return{
        isDropdown:  false,    

        title:'',units:0,price:0,
        budgets:this.$store.getters.budgets,
        budget:{
          id:'',
          user:'',
          faculty:'',
          department:'',
          budgetYear:'',
          items:[],
          status:'pending'

        },
        error:{
          title:false,
          unit:false,
          price:false,
        }
      }
    },
    methods:{
      addItem(){
          if(this.title === "" || this.units <= 0 || this.price <= 0 ){
              if (this.title === ""){
                this.error.title = true;
              }
              if (this.units <= 0){
                this.error.unit = true;
              }
              if (this.price <= 0 ){
                this.error.price = true;
              }
          }
          else{
              var randomVal = Math.random().toString(36).substring(7);
              
              var totalPrice  = 0
              // var docId= Math.random().toString(36).substr(2, 5);
              //                 console.log("random", docId);
              var obj  = {}
                    
                // :
                obj = {
                                  // id:docId,
                                  title:this.title,
                                  units:this.units,
                                  price:this.price
                            } ;


              this.budget.items.push(obj);
              console.log(this.budget.items)              
              // console.log(totalPrice)
              }
        },
        submitBudget(){
          if(this.budget.items.length > 0){
            swal("Good job!", "Budget Submitted!", "success");

           this.$store.dispatch('addBudget',this.budget)
          }
        // console.log(this.budget.items.length);
        
        }

    }, 
    mounted(){
      
    }
}
</script>

<style scoped >
.btn-budget {
    background: #24103c;
    color: #fff;
    letter-spacing: 1.5px;
    width: 50%;
    text-transform: uppercase;
    border: none;   
    border-radius: 4;
    
    -webkit-border-radius: 4;
    -moz-border-radius: 4;
    -ms-border-radius: 4;
    -o-border-radius: 4;
}
#customers {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#customers td, #customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(even){background-color: #f2f2f2;}

#customers tr:hover {background-color: #ddd;}

#customers th {
  
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: rgb(32, 2, 46);
  color: white;
}
</style>