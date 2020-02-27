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
=            <!-- <img src="../img/undraw_coding.png" class="user-profile"/> -->
          </a>
          <div class="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
            <a class="dropdown-item" href="!#">Auditor</a>
            <div class="dropdown-divider"></div>
          </div>
        </li>
        <li>
        <router-link to="/login"> <button class="btn btn-danger btn-small">Logout</button></router-link>
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

        <!-- DataTables Example -->
        <div id="no-border" class="card mb-3 mt-5">
          <div id="no-border" class="card-header">
            <i class="mdi mdi-library-books"></i>
            All Budget Submitted
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
                    <th>status</th>
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
                        <i class="fa fa-check text-success" aria-hidden="true" style="font-size: 1rem;"></i>
                        <span class="mx-1">{{budget.status}}</span>
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

  

</div>

</template>

<script>
export default {
  data:function(){
      return{
               isDropdown:  false,    

            budgets:this.$store.getters.budgets
            

      }

  }

}
</script>

<style>

</style>