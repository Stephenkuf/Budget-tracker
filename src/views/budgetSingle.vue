<template>
 
<div id="page-top">

  <nav class="navbar navbar-expand navbar-dark bg-d-purple static-top">

     <router-link to='/home'> <a class="navbar-brand mr-1" href="#">Budget Tracker</a></router-link>

    <button class="btn btn-link text-white order-1 order-sm-0" id="sidebarToggle" href="#">
      <i class="mdi mdi-segment"></i>
    </button>


    <!-- Navbar -->
    <div class="ml-auto">
      <ul class="navbar-nav ml-auto ml-md-0">
        <li class="nav-item dropdown no-arrow">
          <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span class="text-white hidden-xs">Auditor </span>
            <!-- <img src="../img/undraw_coding.png" class="user-profile"/> -->
          </a>
          <div class="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
            <a class="dropdown-item" href="!#">Auditor</a>
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
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="pagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i class="fas fa-fw fa-folder"></i>
          <span>Budgets</span>
        </a>
        <div class="dropdown-menu" aria-labelledby="pagesDropdown">
          <h6 class="dropdown-header">Budgets</h6>
          <a class="dropdown-item" href="all-budgets.html">View All Budgets</a>
        </div>
      </li>
    </ul>

    <div id="content-wrapper">

      <div class="container-fluid">

        <!-- DataTables Example -->
        <div id="no-border" class="card mb-3 mt-5">
          <div id="no-border" class="card-header">
            <i class="mdi mdi-library-books"></i>
            2020 Budget list 

            <div class="fa-pull-right">
              <a  @click="approved" class="btn btn-sm bg-primary text-white" href="#"> Approve <i class="fas fa-check    "></i></a>
              <a  @click="rejected" class="btn btn-sm bg-danger text-white" href="#"> Reject <i class="fas fa-times    "></i></a>
            </div>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-striped" id="dataTable" width="100%" cellspacing="0">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Unit</th>
                    <th>Price</th>
                    
                  </tr>
                </thead>
             
                <tbody>
                  <tr v-for="item in budgets.items" :key="item">
                    <td>{{item.title}}</td>
                    <td>{{item.units}}</td>
                    <td>{{item.price}}</td>


                  </tr>
                  
                </tbody>
              </table>
            </div>
          </div>
        </div>

      <!-- {{budgets}} -->
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
// import swal from 'sweetalert';


export default {
  data:function(){
    return{
      // budgets:this.$store.getters.budgets ,
      budgets:this.$store.getters.selectedBudget
    
    }
  },
  methods:{
    approved(){
      this.budget.status = 'approved'
      alert('budget has been approved')
      // swal("Done!", "Budget Approved!", "success")

    },
    rejected(){
      this.budget.status = 'rejected'
      alert('budget has been Rejected')
      // swal("Done!", "Budget rejected!", "failure")

    }
                // swal("Good job!", "Budget Submitted!", "success");

    // getItems(){
    //   this.budgets.forEach(element => console.log(element.items));
    // }
   
  },
  // mounted(){
  //   this.getItems()
  // }
}
</script>

<style>

</style>