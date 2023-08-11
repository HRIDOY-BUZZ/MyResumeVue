<script>
    export default {
        computed: {
            window() {
                return window;
            }
        }
    }
</script>
<template>
    <main class="hb-experince" id="hb-experience">
            <div class="bolor-overlay">
                <div class="container section-separator">
                    <h1 class="text-center wow fadeInUp" :class="{ 'fs-3': window.innerWidth < 440 }" data-wow-duration="0.8s" data-wow-delay="0.2s">
                        Professional Experiences
                    </h1>
                    <div class="row pt-5">
                        <div class="col-lg-12 col-xl-6">
                            <div class="hb-work">
                                <div class="hb-experience-deatils">
                                    <!-- Workplace-->
                                    <div class="hb-work-item dark-bg wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.4s">
                                        <h4>Full Stack Web Developer @ <a href="http://xitsolution.com/">XiT Solution</a></h4>
                                        <div class="hb-eduyear">August 2021 - Present</div>
                                        <span>Responsibilities :</span>
                                        <ul class="work-responsibility">
                                            <li><i class="fa fa-circle"></i>Web Back-end Development (Laravel, PHP)</li>
                                            <li><i class="fa fa-circle"></i>Front-end Development (Bootstrap, JQuery)</li>
                                            <li><i class="fa fa-circle"></i>Legacy Web Projects Maintenance (PHP, Wordpress, CSS, JQuery)</li>
                                            <li><i class="fa fa-circle"></i>Creating and Fixing Custom Scripts (PHP)</li>
                                            <li><i class="fa fa-circle"></i>Managing Linux Dedicated/Private Web Servers (SSH, WHM, CPanel)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12 col-xl-6">
                            <div class="hb-work">
                                <div class="hb-experience-deatils">
                                    <!-- Workplace-->
                                    <div class="hb-work-item dark-bg wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.4s">
                                        <h4>Project Manager (Part-time) @ <a href="http://ebuzz-it.com/">eBuzz-IT</a></h4>
                                        <div class="hb-eduyear">October 2021 - Present</div>
                                        <span>Responsibilities :</span>
                                        <ul class="work-responsibility">
                                            <li><i class="fa fa-circle"></i>Making Work plans and Timeline for projects</li>
                                            <li><i class="fa fa-circle"></i>Maintaining the whole Developer Team and Tasks</li>
                                            <li><i class="fa fa-circle"></i>Maintaining both front-end and Backend features (Laravel, Bootstrap)</li>
                                            <li><i class="fa fa-circle"></i>Verifying and Merging codebases (Github)</li>
                                            <li><i class="fa fa-circle"></i>Database Management (MySQL)</li>
                                            <li><i class="fa fa-circle"></i>Bug Fixes for both Front-end and Backend Functionalities</li>
                                            <li><i class="fa fa-circle"></i>Web Server Management (CPanel)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12 col-xl-6" :style="window.innerWidth > 1199 ? { position: 'relative', top: '-52px' } : {}">
                            <div class="hb-work">
                                <div class="hb-experience-deatils">
                                    <!-- Workplace-->
                                    <div class="hb-work-item dark-bg wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.4s">
                                        <h4>Full Stack Web Developer @ <a href="http://oxdoraitech.com/">Oxdora I Tech</a></h4>
                                        <div class="hb-eduyear">January 2021 - July 2021</div>
                                        <span>Responsibilities :</span>
                                        <ul class="work-responsibility">
                                            <li><i class="fa fa-circle"></i>Web Front-end Development</li>
                                            <li><i class="fa fa-circle"></i>Web Back-end Development</li>
                                            <li><i class="fa fa-circle"></i>Project Management</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12 col-xl-6">
                            <div class="hb-work">
                                <div class="hb-experience-deatils">
                                    <!-- Workplace-->
                                    <div class="hb-work-item dark-bg wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.4s">
                                        <h4>Web Back-end Developer (Part-time) @ <a href="https://bmssystems.org/">BMS Systems</a></h4>
                                        <div class="hb-eduyear">June 2021 - Present</div>
                                        <span>Responsibilities :</span>
                                        <ul class="work-responsibility">
                                            <li><i class="fa fa-circle"></i>Web Back-end Development</li>
                                            <li><i class="fa fa-circle"></i>App Back-end Development</li>
                                            <li><i class="fa fa-circle"></i>Web Front-end Support</li>
                                            <li><i class="fa fa-circle"></i>Generating necessary REST APIs</li>
                                            <li><i class="fa fa-circle"></i>API Testing Documentation</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12 col-xl-6"  :style="window.innerWidth > 1199 ? { position: 'relative', top: '-103px' } : {}">
                            <div class="hb-work">
                                <div class="hb-experience-deatils">
                                    <!-- Workplace-->
                                    <div class="hb-work-item dark-bg wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.6s">
                                        <h4>Campus Ambassador @ <a href="https://creativeitinstitute.com/">Creative It Institute</a></h4>
                                        <div class="hb-eduyear">January 2020 - January 2021</div>
                                        <span>Responsibilities :</span>
                                        <ul class="work-responsibility">
                                            <li><i class="fa fa-circle"></i>Let everyone know about the importance and benefits of IT courses</li>
                                            <li><i class="fa fa-circle"></i>Let everyone know about the Latest course offers</li>
                                            <li><i class="fa fa-circle"></i>Attending Free sessions and Demo classes</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
</template>