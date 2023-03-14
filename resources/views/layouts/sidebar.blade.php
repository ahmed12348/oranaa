  <!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="index3.html" class="brand-link">
      <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3"
           style="opacity: .8">
      <span class="brand-text font-weight-light">Shopping Cart</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <li class="nav-item">

{{--              <nav class=" ">--}}
{{--                  <i class="nav-icon fas fa-th"></i>  <router-link class="mr-5 hover:text-gray-900" :to="{name: 'products.index'}">Products</router-link>--}}
{{--              </nav>--}}

            <a class="nav-link"><i class="nav-icon fas fa-th"></i><p><router-link class="mr-5 hover:text-gray-900" :to="{name: 'products.index'}">Products</router-link></p></a>
            <a class="nav-link"><i class="nav-icon fas fa-th"></i><p>
                    <router-link
                        class=""
                        :to="{name: 'order.checkout'}">
                        CheckOut
{{-- <span class="inline-block ml-1" v-text="'(' + $store.state.cart.length + ' items)'"></span>--}}
                    </router-link></p></a>
          </li>
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
