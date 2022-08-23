<?php
include 'components/header.php';
include 'components/navbar.php';
?>
<div class="container mt-2">
  <div class="massage_show"></div>
      <form action="" method="post">
        <div class="form-group">
          <label for="">Full Name</label>
          <input
          type="text"
          name="fullName"
          id="fullName"
          class="form-control"
          placeholder=""
          />
        </div>
        <div class="form-group">
          <label for="">mobile Number</label>
          <input
          type="text"
          name="mobileNumber"
          id="mobileNumber"
          class="form-control"
          placeholder=""
          />
        </div>
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
          <input
          type="hidden"
          name="role"
          value="USER"
          id="role"
          class="form-control"
          placeholder=""
          />
          <input
          type="hidden"
          name="status"
          value="0"
          id="status"
          class="form-control"
          placeholder=""
          />
          <button
          type="submit"
          name="submit"
          id="register"
          class="btn btn-primary"
          >
          submit
        </button>
      </form>
<?php
include 'components/footer.php';
?>
      
      