const headerEl = document.querySelector(".header");

headerEl.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-dark">
            <div class="header-container section-container">
                <a class="navbar-brand" href="index.html">
                    <img src="header-img.png" alt="" class="navbar-logo">
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
                            <a class="nav-link  dropdown-toggle" href="#" data-bs-toggle="dropdown"> Services </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="accounting.html"> Accounting </a></li>
                                <li><a class="dropdown-item" href="audit.html"> Audit & Assurance </a></li>
                                <li><a class="dropdown-item" href="management.html"> Management Consultancy </a></li>
                                <li><a class="dropdown-item" href="business.html"> Business Advisory </a></li>
                                <li><a class="dropdown-item" href="it.html"> IT Consulting Service </a></li>
                                <li><a class="dropdown-item" href="tax.html"> Tax Compliance & Advisory </a></li>
                            </ul>
                        </li>

                        <li class="nav-item"><a href="contact.html" class="nav-link">Contact</a></li>


                    </ul>
                </div>
            </div>
        </nav>

`;
