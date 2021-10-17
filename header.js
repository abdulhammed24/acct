const headerEl = document.querySelector(".header");

headerEl.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-dark">
            <div class="header-container section-container">
                <a class="navbar-brand" href="index.html">
                    <img src="https://pkf-ng.com/content/images/logo.png" alt="" class="navbar-logo">
                </a>

                <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#main_nav" aria-controls="navbarNav" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <div class="collapse navbar-collapse" id="main_nav">
                    <ul class="navbar-nav">

                    <li class="nav-item"><a href="about.html" class="nav-link">About Us</a></li>

                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"> Company </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#"> Submenu item 1</a></li>
                                <li><a class="dropdown-item" href="#"> Submenu item 2 </a></li>
                                <li><a class="dropdown-item" href="#"> Submenu item 3 </a></li>
                            </ul>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link  dropdown-toggle" href="#" data-bs-toggle="dropdown"> Products </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#"> Submenu item 1</a></li>
                                <li><a class="dropdown-item" href="#"> Submenu item 2 </a></li>
                                <li><a class="dropdown-item" href="#"> Submenu item 3 </a></li>
                            </ul>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-link  dropdown-toggle" href="#" data-bs-toggle="dropdown"> Services </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#"> Submenu item 1</a></li>
                                <li><a class="dropdown-item" href="#"> Submenu item 2 </a></li>
                                <li><a class="dropdown-item" href="#"> Submenu item 3 </a></li>
                            </ul>
                        </li>

                        <li class="nav-item"><a href="publication.html" class="nav-link">Publications</a></li>

                        <li class="nav-item"><a href="contact.html" class="nav-link">Contact</a></li>


                    </ul>
                </div>
            </div>
        </nav>

`;
