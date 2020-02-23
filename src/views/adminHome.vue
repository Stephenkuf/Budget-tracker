<template>
  
<div id="page-top">

  <nav class="navbar navbar-expand navbar-dark bg-d-purple static-top">

     <router-link to='/home'> <a class="navbar-brand mr-1" href="#">Budget Tracker</a></router-link>

    <button class="btn btn-link text-white order-1 order-sm-0" id="sidebarToggle" href="#">
      <i class="mdi mdi-segment"></i>
    </button>
``

    <!-- Navbar -->
    <div class="ml-auto">

    <ul class="navbar-nav ml-auto ml-md-0">
        <li class="nav-item dropdown no-arrow">
          <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span class="text-white hidden-xs">Adebola Ogunwusi</span>
            <!-- <img src="../img/undraw_coding.png" class="user-profile"/> -->
          </a>
          <div class="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
            <a class="dropdown-item" href="!#">{{user.name}}</a>
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
        <router-link to='/adminHome' >
        <a class="nav-link" href="#">
          <i class="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </a>
         </router-link>
      </li>
      <li class="nav-item dropdown"
           @click = "isDropdown = !isDropdown" >
        <a class="nav-link dropdown-toggle" href="#" id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i class="fas fa-fw fa-folder"></i>
          <span>Budgets</span>
        </a>
        <div class="" v-if="isDropdown" aria-labelledby="pagesDropdown">
          <h6 class="dropdown-header">Budgets Details</h6>
          <a class="dropdown-item" href="addbudget.html">Add Budget</a>
          <a class="dropdown-item" href="budgets.html">Details</a>
        </div>
      </li>
    </ul>

    <div id="content-wrapper">

      <div class="container-fluid">

        <!-- Icon Cards-->
        <div class="row">
          <div class="col-xl-6 col-sm-6 mb-3">
            <div id="rm_border" class="card text-white bg-success o-hidden h-100">
              <div class="card-body">
                <div class="card-body-icon">
                  <i class="fas fa-fw fa-user"></i>
                </div>
                <div class="mr-5 welcome">
                  <h4>Hello, <br/> {{user.name}}</h4>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-3 col-sm-6 mb-3">
            <div id="rm_border" class="card text-white bg-primary o-hidden h-100">
              <div class="card-body">
                <div class="card-body-icon">
                  <i class="mdi mdi-library-books"></i>
                </div>
                <div class="mr-5 stats"><span class="budget-count">{{budgetsPassed}}</span> <h5>Budgets Accepted</h5></div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-sm-6 mb-3">
            <div id="rm_border" class="card text-white bg-warning o-hidden h-100">
              <div class="card-body">
                <div class="card-body-icon">
                  <i class="fas fa-fw fa-list"></i>
                </div>
                <div class="mr-5 stats"><span class="budget-count">{{newBudgets}}</span> <h5>Budgets Submitted</h5></div>
              </div>
            </div>
          </div>
          
        </div>


        <!-- ADD BUDGET FORM -->
        <div class="row">
          <div class="col-xl-12 col-sm-12 mb-3">

          </div>
        </div>


        <!-- DataTables Example -->
        <div id="no-border" class="card mb-3 mt-5">
          <div id="no-border" class="card-header">
            <i class="mdi mdi-library-books" style="font-size: 1.3rem;"></i>
            Pending Budgets
            
            <div class="btn btn-sm bg-d-purple text-white fa-pull-right">
              <a class="text-white" href="addbudget.html">Add New Budget</a>
            </div>
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
                  

  <tr  v-for="budget in budgets" :key="budget">
                    <td>{{budget.id}}</td>
                    <td>{{budget.budgetYear}}</td>
                    <td>{{budget.department}}</td>
                    <td>{{budget.faculty}}</td>
                    <td>
                      <div style="display: block;">
                        <!-- <router-link to="/budgetSingle" @click="renderB(budget)"><a href="#" class="btn btn-sm my-2 btn-success">View</a></router-link> -->
                        <router-link to="/budgetSingle" ><a href="#"  @click="renderB(budget)" class="btn btn-sm my-2 btn-success">ViewNow</a></router-link>

                      </div>
                    </td>
                  </tr>        





                </tbody>
              </table>
            </div>
          </div>
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

  <!-- Logout Modal-->
  <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
          <button class="close" type="button" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
        <div class="modal-footer">
          <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
          <a class="btn btn-primary" href="login.html">Logout</a>
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
          isDropdown:false,
           budgetsPassed:0,
           newBudgets:0,
           user:{
               name:'Adebola'
           }
        }
    }

}
</script>

<style>

</style>