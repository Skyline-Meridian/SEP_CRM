<nav class="navbar navbar-expand-md navbar-light bg-light">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavId">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0" id="navData">

        </ul>
    </div>
</nav>
<script>
    const pathname = window.location.pathname.split("/");
    console.log(pathname);
    const url = pathname[pathname.length - 1];
    console.log(url);

    switch (url) {
        case "user.php":
            document.getElementById("navData").innerHTML = `
            <li class="nav-item ">
                    <a class="nav-link" href="user.php">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link active" href="show.php">Show</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="index.php">logOut</a>
                </li>
    `
            break;
        case "show.php":
            document.getElementById("navData").innerHTML = `
    <li class="nav-item ">
                    <a class="nav-link" href="user.php">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link active" href="show.php">Show</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="index.php">logOut</a>
                </li>
    `
            break;
        case "showData.php":
            document.getElementById("navData").innerHTML = `
    <li class="nav-item ">
                    <a class="nav-link " href="user.php">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="show.php">Show</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="index.php">logOut</a>
                </li>
    `
    break;
    case "login.php":
            document.getElementById("navData").innerHTML = `
            <li class="nav-item ">
                    <a class="nav-link" href="index.php">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="login.php">login</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="register.php">register</a>
                </li>
    `
    break;
    case "register.php":
            document.getElementById("navData").innerHTML = `
            <li class="nav-item ">
                    <a class="nav-link" href="index.php">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item ">
                    <a class="nav-link" href="login.php">login</a>
                </li>
                <li class="nav-item active">
                    <a class="nav-link" href="register.php">register</a>
                </li>
    `
    break;
        default:
            document.getElementById("navData").innerHTML = `
    <li class="nav-item active">
                    <a class="nav-link" href="index.php">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="login.php">login</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="register.php">register</a>
                </li>
    `
            break;
    }

    
</script>