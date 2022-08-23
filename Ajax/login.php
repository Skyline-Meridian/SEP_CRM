<?php
include 'components/header.php';
include 'components/navbar.php';
?>
<div class="container mt-5">
  <div class="massage_show"></div>
  <form action="" method="post">
    <div class="form-group">
          <label for="">email</label>
          <input
          type="text"
          name="email"
            id="email"
            class="form-control"
            placeholder=""
          />

        </div>
        <div class="form-group">
          <label for="">password</label>
          <input
            type="text"
            name="password"
            id="password"
            class="form-control"
            placeholder=""
            />

          </div>
          <a href="forgotpassword.php" target="_blank" rel="noopener noreferrer">forget password</a>
          <br/><br/>
        <button
          type="submit"
          name="submit"
          id="login"
          class="btn btn-primary"
        >
          submit
        </button>
      </form>
    </div>

<?php
include 'components/footer.php';
?>
