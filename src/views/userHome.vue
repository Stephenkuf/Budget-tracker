<template>

<div id="page-top">

  <nav class="navbar navbar-expand navbar-dark bg-d-purple static-top">

     <router-link to='/home'> <a class="navbar-brand mr-1" href="index.html">Budget Tracker</a></router-link>

    <button class="btn btn-link text-white order-1 order-sm-0" id="sidebarToggle" href="#">
      <i class="mdi mdi-segment"></i>
    </button>


    <!-- Navbar -->
    <div class="ml-auto">
      <ul class="navbar-nav ml-auto ml-md-0">
        <li class="nav-item dropdown no-arrow">
          <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span class="text-white hidden-xs">Editor </span>
            <!-- <img src="../img/undraw_coding.png" class="user-profile"/> -->
          </a>
          

          <!-- <div class="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
            <a class="dropdown-item" href="!#">Editor</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal"> <i class="mdi mdi-logout" style="display: inline-block;"></i> Logout</a>
          </div> -->
        </li>
        <li>
        <router-link to="/login"> <button class="btn btn-danger btn-small">Logout </button></router-link>
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

        <!-- Icon Cards-->
        <div class="row">
          <div class="col-xl-3 col-sm-6 mb-3">
            <div id="rm_border" class="card text-white bg-primary o-hidden h-100">
              <div class="card-body">
                <div class="card-body-icon">
                  <i class="mdi mdi-library-books"></i>
                </div>
                <div class="mr-5 stats"><span class="budget-count">{{budgetsPassed}}</span> <h5>Budgets Passed</h5></div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-sm-6 mb-3">
            <div id="rm_border" class="card text-white bg-warning o-hidden h-100">
              <div class="card-body">
                <div class="card-body-icon">
                  <i class="fas fa-fw fa-list"></i>
                </div>
                <div class="mr-5 stats"><span class="budget-count">{{departments}}</span> <h5>Departments</h5></div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-sm-6 mb-3">
            <div id="rm_border" class="card text-white bg-success o-hidden h-100">
              <div class="card-body">
                <div class="card-body-icon">
                  <i class="fas fa-fw fa-shopping-cart"></i>
                </div>
                <div class="mr-5 stats"><span class="budget-count">{{faculties}}</span> <h5>Faculties</h5></div>
              </div>
            </div>
          </div>
          <div class="col-xl-3 col-sm-6 mb-3">
            <div id="rm_border" class="card text-white bg-danger o-hidden h-100">
              <div class="card-body">
                <div class="card-body-icon">
                  <i class="fas fa-fw fa-life-ring"></i>
                </div>
                <div class="mr-5 stats"> <span class="budget-count">{{newBudgets}}</span> <h5>New Budgets</h5></div>
              </div>
            </div>
          </div>
        </div>

        <!-- DataTables Example -->
        <div id="no-border" class="card mb-3 mt-5">
          <div id="no-border" class="card-header">
            <i class="mdi mdi-library-books"></i>
            Pending Budgets

            
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-striped" id="dataTable" width="100%" cellspacing="0">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Budget Year</th>
                    <th>Department</th>
                    <th>Faculty</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
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
      <!-- <h1>answer is :{{info}}</h1> -->

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
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data:function(){
    return{
       isDropdown:  false,    
      budgetsPassed:0,
      newBudgets:this.$store.getters.budgetsNo,
      faculties:2,
      departments:3,
      info: null,
      budgets: this.$store.getters.budgets
      
  
    }
  },
  methods:{
    renderB(budget){
      this.$store.dispatch('displayBudget', budget)     
      console.log(budget) 
    }
  },
      
  mounted() {
    
  }  
}
</script>
