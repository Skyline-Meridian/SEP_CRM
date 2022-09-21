//Register
$("#register").click(function (e) {
  e.preventDefault();

  var fullName = $("#fullName").val();
  var mobileNumber = $("#mobileNumber").val();
  var email = $("#email").val();
  var password = $("#password").val();
  var role = $("#role").val();
  var status = $("#status").val();
  if (
    (fullName != "") &
    (mobileNumber != "") &
    (email != "") &
    (password != "") &
    (role != "") &
    (status != "")
  ) {
    $.ajax({
      type: "POST",
      url: "Service/InsertData.php",
      data: {
        fullName: fullName,
        mobileNumber: mobileNumber,
        email: email,
        password: password,
        role: role,
        status: status,
      },
      success: function (result) {
        // console.log(result);
        $(".massage_show").append(
          `<div class="alert alert-warning alert-dismissible fade show" role="alert">
              ${result}
              <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
              </button>
           </div>`
        );
        // window.location.replace("login.php");
      },
    });
  } else {
    alert("please enter all required fields");
  }
});

// login
$("#login").click(function (e) {
  e.preventDefault();
  var email = $("#email").val();
  var password = $("#password").val();
  $.ajax({
    type: "POST",
    url: "Service/Login.php",
    data: {
      email: email,
      password: password,
    },
    success: function (result) {
      console.log(result);
      switch (result) {
        case "USER":
          window.location.replace("user.php");
          break;
        case "ADMIN":
          window.location.replace("admin.html");
          break;
        default:
          $(".massage_show").append(
            `<div class="alert alert-warning alert-dismissible fade show" role="alert">
              ${result}
              <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
              </button>
            </div>`
          );
          break;
      }
    },
  });
});

// forget password
$(document).ready(function () {
  const rand = () => {
    return Math.random().toString(36).substr(2);
  };

  const token = () => {
    return rand() + rand();
  };

  var tokendata = token();

  $("#forget").click(function (e) {
    e.preventDefault();

    var email = $("#email").val();
    var token = tokendata;
    $.ajax({
      type: "POST",
      url: "Service/InsertToken.php",
      data: {
        // forget_password
        email: email,
        token: tokendata,
      },
      success: function (response) {
        console.log(response);
      },
    });
    $.ajax({
      type: "POST",
      url: "Service/emailVarification.php",
      data: {
        email: email,
      },
      success: function (result) {
        console.log(result);
        if (result == 1) {
          $.ajax({
            type: "POST",
            url: "Service/phpMailer/mail.php",
            // url: "Service/forget.php",
            data: {
              email: email,
              token: token,
            },
            success: function (result) {
              console.log(result);
              $(".massage_show").append(
                `<div class="alert alert-warning alert-dismissible fade show" role="alert">
                    ${result}
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                   </div>`
              );
            },
          });
        } else {
          $(".massage_show").append(
            `<div class="alert alert-warning alert-dismissible fade show" role="alert">
                  email not find: ${email}
                  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                  </button>
                  </div>`
          );
        }
      },
    });
  });
});

// update password
$(document).ready(function () {
  const path = window.location.search.split("=");
  console.log(path);
  const email = path[path.length - 2];
  const emailpath = email.split("&&");
  const emailvalue = emailpath[emailpath.length - 2];
  const tokenid = path[path.length - 1];

  $("#emailupdate").val(emailvalue);

  $.ajax({
    type: "POST",
    url: "Service/emailVarification.php",
    data: {
      email: emailvalue,
    },
    success: function (result) {
      if (result == 1) {
        $.ajax({
          type: "POST",
          url: "Service/tokenVarification.php",
          data: {
            token: tokenid,
          },
          success: function (response) {
            // console.log(response);
            if (response == 1) {
              $(".massage_show").append(
                `<div class="alert alert-warning alert-dismissible fade show" role="alert">
                   token id :${tokenid} is Vaild.
                   <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                   <span aria-hidden="true">&times;</span>
                   </button>
                 </div>`
              );
            } else {
              $("#form").remove();
              $(".massage_show").append(
                `<div class="alert alert-warning alert-dismissible fade show" role="alert">
                   token id :${tokenid} is Expire.
                   <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                   <span aria-hidden="true">&times;</span>
                   </button>
                 </div>`
              );
            }
          },
        });
      } else {
        $("#form").remove();
        $(".massage_show").append(
          `<div class="alert alert-warning alert-dismissible fade show" role="alert">
             email id :${emailvalue} is inVaild
             <button type="button" class="close" data-dismiss="alert" aria-label="Close">
             <span aria-hidden="true">&times;</span>
             </button>
           </div>`
        );
        // window.location.replace("index.html");
      }
    },
  });

  $("#updatePass").click(function (e) {
    e.preventDefault();

    var password = $("#password").val();

    $.ajax({
      type: "POST",
      url: "Service/forget.php",
      data: {
        email: emailvalue,
        password: password,
      },
      success: function (result) {
        console.log(result);
        $.ajax({
          type: "POST",
          url: "Service/tokenDelete.php",
          data: {
            email: emailvalue,
          },
          success: function (response) {
            console.log(response);
          },
        });
        $(".massage_show").append(
          `<div class="alert alert-warning alert-dismissible fade show" role="alert">
                ${result}
                 <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                 <span aria-hidden="true">&times;</span>
                 </button>
                 </div>`
        );
        // window.location.replace("login.html");
      },
    });
  });
});

//userInsertData
$(document).ready(function () {
  $("#userInsertData").click(function (e) {
    e.preventDefault();

    var categoryId = $("#categoryId").val();
    var eventType = $("#eventType").val();
    var eventName = $("#eventName").val();
    var eventDescription = $("#eventDescription").val();
    var eventAddress = $("#eventAddress").val();
    var startDateTime = $("#startDateTime").val();
    var endDateTime = $("#endDateTime").val();
    var eventDuration = $("#eventDuration").val();
    var targetPopulation = $("#targetPopulation").val();
    var websitePrices = $("#websitePrices").val();
    var eventLocationCode = $("#eventLocationCode").val();
    var theaterName = $("#theaterName").val();
    var providerWebsiteUrl = $("#providerWebsiteUrl").val();
    var image1 = $("image1").val();
    var image2 = $("image2").val();
    var image1Url = $("#image1Url").val();
    var image2Url = $("#image2Url").val();
    var latitude = $("#latitude").val();
    var longitude = $("#longitude").val();
    var eventExternalId = $("#eventExternalId").val();
    var IsActive = document.querySelector("#IsActive:checked") !== null;
    var isAccessible = document.querySelector("#isAccessible:checked") !== null;
    var isFreeActivity =
      document.querySelector("#isFreeActivity:checked") !== null;
    var isLocalActivity =
      document.querySelector("#isLocalActivity:checked") !== null;
    var isOnlineActivity =
      document.querySelector("#isOnlineActivity:checked") !== null;
    var isSeniorCitizenActivity =
      document.querySelector("#isSeniorCitizenActivity:checked") !== null;

    if (
      (categoryId != "") &
      (eventType != "") &
      (eventName != "") &
      (eventDescription != "") &
      (eventAddress != "") &
      (startDateTime != "") &
      (endDateTime != "") &
      (eventDuration != "") &
      (targetPopulation != "") &
      (websitePrices != "") &
      (eventLocationCode != "") &
      (theaterName != "") &
      (providerWebsiteUrl != "") &
      (image1 != "") &
      (image2 != "") &
      (image1Url != "") &
      (image2Url != "") &
      (latitude != "") &
      (longitude != "") &
      (eventExternalId != "")
    ) {
      var fd = new FormData();
      var files1 = $("#image1")[0].files[0];
      var files2 = $("#image2")[0].files[0];

      fd.append("categoryId", categoryId);
      fd.append("eventType", eventType);
      fd.append("eventName", eventName);
      fd.append("eventDescription", eventDescription);
      fd.append("eventAddress", eventAddress);
      fd.append("startDateTime", startDateTime);
      fd.append("endDateTime", endDateTime);
      fd.append("eventDuration", eventDuration);
      fd.append("targetPopulation", targetPopulation);
      fd.append("websitePrices", websitePrices);
      fd.append("eventLocationCode", eventLocationCode);
      fd.append("theaterName", theaterName);
      fd.append("providerWebsiteUrl", providerWebsiteUrl);
      fd.append("image1", files1);
      fd.append("image2", files2);
      fd.append("image1Url", image1Url);
      fd.append("image2Url", image2Url);
      fd.append("latitude", latitude);
      fd.append("longitude", longitude);
      fd.append("eventExternalId", eventExternalId);
      fd.append("IsActive", IsActive);
      fd.append("isAccessible", isAccessible);
      fd.append("isFreeActivity", isFreeActivity);
      fd.append("isLocalActivity", isLocalActivity);
      fd.append("isOnlineActivity", isOnlineActivity);
      fd.append("isSeniorCitizenActivity", isSeniorCitizenActivity);

      $.ajax({
        type: "POST",
        url: "Service/userInsertData.php",
        data: fd,
        contentType: false,
        processData: false,
        success: function (result) {
          console.log(result);
          if (result == 1) {
            alert("Registration successful");
            window.location = "show.php";
          } else {
            $(".massage_show").append(
              `<div class="alert alert-warning alert-dismissible fade show" role="alert">
              The categoryId already exist.
                  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                  </button>
               </div>`
            );
          }
        },
      });
    } else {
      alert("please enter all required fields");
    }
  });
});

//Show.php

$("#searchBar").click(function (e) {
  e.preventDefault();

  var search = $("#search").val();
  var select = $("#select").val();
  var form_date = $("#form_date").val();
  var to_date = $("#to_date").val();

  $.ajax({
    type: "POST",
    url: "Service/search.php",
    data: {
      search: search,
      select: select,
      form_date: form_date,
      to_date: to_date,
    },
    success: function (result) {
      console.log(result);
      if (result == "no") {
        $("#allData").remove();
        $(".pagination").remove();
        $("#all").append(
          `<div class="alert alert-warning alert-dismissible fade show" role="alert">
          no found data
        </div>`
        );
      } else {
        $("#allData").remove();
        $(".pagination").remove();
        $json = JSON.parse(result);

        console.log($json);

        $.each($json, function (key, value) {
          $("#all").append(`
                <div class="card m-2" style="width: 18rem;">
                <img class="card-img-top" src="./images/${value["image1"]}" alt="Card image cap">
                <div class="card-body">
                <h5 class="card-title">${value["categoryId"]} </h5>
                <p class="card-text">${value["eventDescription"]}</p>
                <p class="card-text">${value["startDateTime"]}</p>
                <p class="card-text">${value["endDateTime"]}</p>
                <a href="showData.php?id=${value["id"]}" class='btn btn-primary'>More</a>
  
                 </div>
                 </div>
                 `);
        });
      }
    },
  });
});

//pagination.php
$(document).ready(function () {
  const path = window.location.search.split("=");
  console.log(path);
  const email = path[path.length - 1];
  console.log(email);

  if (email == 0) {
    $.ajax({
      type: "GET",
      url: "Service/userShow.php",
      success: function (result) {
        // console.log(result);

        $json = JSON.parse(result);

        console.log($json);

        $.each($json, function (key, value) {
          $("#allData").append(`
              <div class="card m-2" style="width: 18rem;">
              <img class="card-img-top" src="./images/${value["image1"]}" alt="Card image cap">
              <div class="card-body">
              <h5 class="card-title">${value["categoryId"]} </h5>
              <p class="card-text">${value["eventDescription"]}</p>
              <p class="card-text">${value["startDateTime"]}</p>
              <p class="card-text">${value["endDateTime"]}</p>
              <a href="showData.php?id=${value["id"]}" class='btn btn-primary'>More</a>

               </div>
               </div>
               `);
        });
      },
    });
    $.ajax({
      type: "GET",
      url: "Service/pagination.php",
      success: function (result) {
        // <button type="button" class="btn btn-primary"  onclick="add(${i})" id="page"  value="${i}">${i}</button>

        console.log(result);
        for (var i = 1; i <= result; i++) {
          console.log(i);
          if (i == 1) {
            $(".pagination").append(`
            <li class='page-item active'><a class='page-link'  href='show.php?page=${i}'>${i}</a></li>
         `);
          } else {
            $(".pagination").append(`
            <li class='page-item'><a class='page-link' href='show.php?page=${i}'>${i}</a></li>
         `);
          }
        }
      },
    });
  } else {
    $.ajax({
      type: "GET",
      url: "Service/pagination.php",
      success: function (result) {
        // <button type="button" class="btn btn-primary"  onclick="add(${i})" id="page"  value="${i}">${i}</button>

        console.log(result);
        for (var i = 1; i <= result; i++) {
          console.log(i);
          if (i == email) {
            $(".pagination").append(`
          <li class='page-item active'><a class='page-link'  href='show.php?page=${i}'>${i}</a></li>
       `);
          } else {
            $(".pagination").append(`
          <li class='page-item'><a class='page-link' href='show.php?page=${i}'>${i}</a></li>
       `);
          }
        }
      },
    });

    $.ajax({
      type: "POST",
      url: "Service/userShow.php",
      data: {
        page: email,
      },
      success: function (result) {
        // console.log(result);

        $json = JSON.parse(result);

        console.log($json);

        $.each($json, function (key, value) {
          $("#all").append(`
            <div class="card m-2" style="width: 18rem;">
            <img class="card-img-top" src="./images/${value["image1"]}" alt="Card image cap">
            <div class="card-body">
            <h5 class="card-title">${value["categoryId"]} </h5>
            <p class="card-text">${value["eventDescription"]}</p>
            <p class="card-text">${value["startDateTime"]}</p>
            <p class="card-text">${value["endDateTime"]}</p>
            <a href="showData.php?id=${value["id"]}" class='btn btn-primary'>More</a>

             </div>
             </div>
             `);
        });
      },
    });
  }
});

// usershowData.php
const path = window.location.search.split("=");
console.log(path);
const id = path[path.length - 1];
console.log(id);

$.ajax({
  type: "POST",
  url: "Service/usershowData.php",
  data: {
    id: id,
  },
  success: function (result) {
    console.log(result);

    $json = JSON.parse(result);

    console.log($json);

    $.each($json, function (key, value) {
      console.log(value["id"]);
      $("#data").append(`

<td>${value["id"]}</td>
<td>${value["categoryId"]}</td>
<td>${value["eventType"]}</td>
<td>${value["eventName"]}</td>
<td>${value["eventDescription"]}</td>
<td>${value["eventAddress"]}</td>
<td>${value["startDateTime"]}</td>
<td>${value["endDateTime"]}</td>
<td>${value["eventDuration"]}</td>
<td>${value["IsActive"]}</td>
<td>${value["isAccessible"]}</td>
<td>${value["isFreeActivity"]}</td>
<td>${value["isLocalActivity"]}</td>
<td>${value["targetPopulation"]}</td>
<td>${value["websitePrices"]}</td>
<td>${value["eventLocationCode"]}</td>
<td>${value["theaterName"]}</td>
<td>${value["providerWebsiteUrl"]}</td>
<td><img src='./images/${value["image1"]}' alt='${value["image1"]}' width='100%' height='100%'/></td>
<td><img src='./images/${value["image2"]}' alt='${value["image1"]}' width='100%' height='100%'/></td>
<td><img src='${value["image1Url"]}' alt='${value["image1Url"]}' width='100%' height='100%'/></td>
<td><img src='${value["image2Url"]}' alt='${value["image2Url"]}' width='100%' height='100%'/></td>
<td>${value["latitude"]}</td>
<td>${value["longitude"]}</td>
<td>${value["isOnlineActivity"]}</td>
<td>${value["eventExternalId"]}</td>
<td>${value["isSeniorCitizenActivity"]}</td>

        `);
    });
  },
});
