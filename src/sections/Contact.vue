<template>
    <main class="hb-footer" id="hb-contact">
        <div class="map-image image-bg">
            <div class="container section-separator">
                <h1 class="text-center wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s">
                    Contact Me
                </h1>
                <div class="row pt-5">
                    <!-- 
                    ====================
                        Contact Form
                    ====================
                    -->
                    <div class="col-xl-6 col-lg-5 col-md-12 wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">
                        <form id="contactForm" class="single-form quate-form wow fadeInUp" method="POST">
                            <div id="msgSubmit" class="h3 text-center hidden"></div>
                            <div class="row">
                                <div class="col-md-6 col-sm-12">
                                    <input name="fname" class="contact-name form-control" id="name" type="text" pattern="([a-zA-Z]([\w -]*[a-zA-Z])?){3,30}" placeholder="First Name" required>
                                </div>
                                <div class="col-md-6 col-sm-12">
                                    <input name="lname" class="contact-email form-control" id="L_name" type="text" pattern="([a-zA-Z]([\w -]*[a-zA-Z])?){3,30}" placeholder="Last Name" required>
                                </div>
                                <div class="col-sm-12">
                                    <input name="email" class="contact-subject form-control" id="email" type="email" placeholder="Your Email Address" required>
                                </div>
                                <div class="col-sm-12">
                                    <textarea name="message" class="contact-message" id="message" rows="6" placeholder="Write Something to Me!" required></textarea>
                                </div>
                                <div class="btn-form col-sm-12">
                                    <button type="submit" class="btn btn-fill btn-block" name="submit" id="form-submit">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <!-- 
                    ====================
                        Contact Cards
                    ====================
                    -->
                    <div class="col-xl-6 col-lg-7 col-md-12 wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.5s">
                        <div class="row hb-footer-address mt-5">
                            <div class="col-md-12 col-lg-6">
                                <div class="hb-address-footer-item dark-bg shadow-1 wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">
                                    <div class="each-icon">
                                        <i class="fa fa-location-arrow"></i>
                                    </div>
                                    <div class="each-info">
                                        <h4>Address</h4>
                                        <address>
                                            Madartek, Bashabo, Shabujbag, Dhaka-1214, Bangladesh.
                                        </address>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12 col-lg-6">
                                <div class="hb-address-footer-item dark-bg shadow-1 wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.5s">
                                    <div class="each-icon">
                                        <i class="fa fa-envelope"></i>
                                    </div>
                                    <div class="each-info">
                                        <h4>Email</h4>
                                        <a href="mailto:hridoy.ewu16@email.com">hridoy.ewu16@gmail.com</a><br>
                                        <a href="mailto:alaminislamhridoy@email.com">alaminislamhridoy@gmail.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>