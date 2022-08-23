<?php
include 'components/header.php';
include 'components/navbar.php';
?>
    <div class="container-fluid">
      <div class="massage_show"></div>
      <form action="">
        <div class="form-group">
          <label for="">email</label>
          <input
            type="email"
            class="form-control"
            name="email"
            id="email"
            aria-describedby="helpId"
            placeholder=""
          />
        </div>
        <button type="submit" class="btn btn-primary" id="forget">reset</button>
      </form>
    </div>

<?php
include 'components/footer.php';
?>


