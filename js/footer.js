const footerEl = document.querySelector(".footer");

footerEl.innerHTML = `
 <div class="section-container">
            <div class="section-row footer-row">
                <div class="section-column footer-column footer-column-1">
                    <a href="index.html" class="footer-logo">
                        <img src="img/header-img.png"
                            alt="footer-logo" class="footer-logo">
                    </a>
                    <div class="footer-content">
                        <ul class="social-icon">
                            <li><a title="Facebook" class="facebook"><i class="fab fa-facebook-f"></i></a></li>
                            <li><a title="Twitter" class="twitter"><i class="fab fa-twitter"></i></a></li>
                            <li><a title="Linkedin" class="linkedin"><i class="fab fa-linkedin-in"></i></a></li>
                            </li>
                        </ul>
                    </div>
                </div>



                <div class="section-column footer-column footer-column-2">
                    <div class="inner-column">
                        <h3 class="title">Quick Link</h3>
                        <ul>
                            <li><a href="about.html">About Us</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </div>

                    <div class="inner-column">
                        <h3 class="title">Services</h3>
                        <ul>
                            <li><a href="accounting.html"> Accounting </a></li>
                            <li><a href="trm.html"> Tax and Regulatory Matters </a></li>
                            <li><a href="frm.html"> Fraud Risk Management </a></li>
                            <li><a href="forensic.html"> Forensic Accounting/Audit </a></li>
                            <li><a href="oia.html"> Outsourced Internal Audit</a></li>
                        </ul>
                    </div>
                </div>




            </div>
        </div>



        <div class="hr"></div>

        <div class="footer-bottom ">
            <div class="copy-right-bg">
                <div class="section-container">
                    <div class="section-row-2">
                        <div class="copy-right ">© 2021 All Rights Reserved.
                        </div>
                    </div>
                </div>
            </div>
        </div>


`;
