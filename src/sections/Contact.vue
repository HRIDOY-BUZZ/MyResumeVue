<script setup>
import { ref } from 'vue';
import axios from 'axios';
import { HollowDotsSpinner } from 'epic-spinners';

const firstName = ref('');
const lastName = ref('');
const email = ref('');
const messageText = ref('');
const message = ref('');
const loading = ref(false);

const getUserData = async () => {
    try {
        const response = await axios.get('https://api.ipify.org?format=json');
        return response.data.ip;
    } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch IP address');
    }
};

const submitForm = async () => {
    loading.value = true;
    const ip = await getUserData();
    const formData = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        message: messageText.value,
        ip,
    };
    try {
        const response = await fetch('https://api.hridoybuzz.me/resume/submit.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
        console.log(JSON.stringify(formData));

        if (response.ok) {
            const responseMessage = await response.text();
            message.value = responseMessage;
        } else {
            message.value = 'There was a problem submitting your message. Please try again.';
        }
    } catch (error) {
        console.error(error);
        message.value = 'There was a problem submitting your message. Please try again.2';
    }

    // Clear form fields
    firstName.value = '';
    lastName.value = '';
    email.value = '';
    messageText.value = '';
    loading.value = false;
};
</script>

<template>
    <main class="hb-footer" id="hb-contact">
        <div class="map-image image-bg">
            <div class="container section-separator">
                <h1 class="text-center wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.2s">
                    Contact Me
                </h1>
                <div class="row pt-5 px-2">
                    <!-- 
                    ====================
                        Contact Form
                    ====================
                    -->
                    <div class="col-xl-6 col-lg-5 col-md-12 wow fadeInUp" data-wow-duration="0.8s" data-wow-delay="0.3s">
                        <form id="contactForm" class="single-form quate-form wow fadeInUp" @submit.prevent="submitForm">
                            
                            <div v-if="loading" id="msgSubmit" class="h3 text-center">
                                <hollow-dots-spinner
                                    :dot-size="15"
                                    :dots-num="4"
                                    color="#FFFFFF"
                                />
                            </div>
                            <div v-else id="msgSubmit" class="h3 text-center hidden">
                                {{ message }}
                            </div>
                            <div class="row">
                                <div class="col-md-6 col-sm-12">
                                    <input v-model="firstName" name="fname" class="contact-name form-control" id="name" type="text" pattern="([a-zA-Z]([\w \-]*[a-zA-Z])?){3,30}" placeholder="First Name" required>
                                </div>
                                <div class="col-md-6 col-sm-12">
                                    <input v-model="lastName" name="lname" class="contact-email form-control" id="L_name" type="text" pattern="([a-zA-Z]([\w \-]*[a-zA-Z])?){3,30}" placeholder="Last Name" required>
                                </div>
                                <div class="col-sm-12">
                                    <input v-model="email" name="email" class="contact-subject form-control" id="email" type="email" placeholder="Your Email Address" required>
                                </div>
                                <div class="col-sm-12">
                                    <textarea v-model="messageText" name="message" class="contact-message" id="message" rows="6" placeholder="Write Something to Me!" required></textarea>
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
                                            Cardiff, United Kingdom
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
                                        <a href="mailto:hridoy.usw25@gmail.com">hridoy.usw25@gmail.com</a><br>
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

<style>
#msgSubmit .hollow-dots-spinner{
    margin-left: auto;
    margin-right: auto;
}
</style>