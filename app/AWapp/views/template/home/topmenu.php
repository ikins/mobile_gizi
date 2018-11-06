<header class="main-header">
    <nav class="navbar navbar-static-top">
      <div class="container">
        <div class="navbar-header">
          <a href="<?php echo base_url(); ?>" class="navbar-brand"><b>GIZI</b></a>
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse">
            <i class="fa fa-bars"></i>
          </button>
        </div>

        
        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse pull-left" id="navbar-collapse">
          <ul class="nav navbar-nav">
            <li>
              <a href="#"><i class="fa fa-fw fa-calendar-plus-o"></i> Jadwal</a>
            </li>
          </ul>
        </div>
        <!-- /.navbar-collapse -->
        <?php if (!isset($name)) { ?>
        <!-- Navbar Right Menu -->
        <div class="navbar-custom-menu">
          <ul class="nav navbar-nav">
            
            <li class="dropdown <?php if(($this->uri->segment(1)=="register") || ($this->uri->segment(1)=="login")){echo "active";}?>">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="fa fa-users"></i> User <span class="caret"></span></a>
              <ul class="dropdown-menu" role="menu">
                <li><a href="<?php echo base_url(); ?>register">Register</a></li>
                <li><a href="<?php echo base_url(); ?>login">Login</a></li>
              </ul>
            </li>
            <?php if($this->session->userdata('is_admin_logged_in')) : ?>
            <li>
              <a href="<?php echo base_url(); ?>admins">Admin Page</a>
            </li>
          <?php endif; ?>
          </ul>
        </div>
        <!-- /.navbar-custom-menu -->
        <?php } else { ?>
        <!-- Navbar Right Menu -->
        <div class="navbar-custom-menu">
          <ul class="nav navbar-nav">
            <!-- User Account Menu -->
            <li class="dropdown user user-menu <?php if($this->uri->segment(1)=="users"){echo "active";}?>">
              <!-- Menu Toggle Button -->
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                <!-- The user image in the navbar-->
                <i class="fa fa-user"></i>
                <!-- hidden-xs hides the username on small devices so only the image appears. -->
                <span class="hidden-xs">Hi, <?php echo $name; ?></span>
              </a>
              <ul class="dropdown-menu">
                <!-- The user image in the menu -->
                <li class="user-header">
                  <p>
                    <?php echo $name; ?>
                  </p>
                </li>
                <!-- Menu Footer-->
                <li class="user-footer">
                  <div class="pull-left">
                    <a href="<?php echo base_url(); ?>users/profil" class="btn btn-default btn-flat">Dashboard</a>
                  </div>
                  <div class="pull-right">
                    <a href="<?php echo base_url(); ?>users/logout" class="btn btn-default btn-flat">Sign out</a>
                  </div>
                </li>
              </ul>
            </li>

          </ul>
        </div>
        <!-- /.navbar-custom-menu -->
        <?php } ?>
      </div>
      <!-- /.container-fluid -->
    </nav>
  </header>