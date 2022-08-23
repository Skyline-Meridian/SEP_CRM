<?php
include 'components/header.php';
include 'components/navbar.php';
?>

      <div class="container-fluid">
        <div class="massage_show"></div>
        <div id="form">
          <form action="">
            <div class="form-group">
              <label for="">email</label>
              <input type="email"
                class="form-control" name="email" id="emailupdate" readonly>
            </div>
              <div class="form-group">
                <label for="">password</label>
                <input type="password"
                  class="form-control" name="password" id="password" aria-describedby="helpId" placeholder="">
              </div>
              <button type="submit" class="btn btn-primary" id="updatePass">Update</button>
          </form>
        </div>
      </div>
<?php
include 'components/footer.php';
?>