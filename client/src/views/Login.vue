<template>
    <div class="max-w-6xl mt-12 mx-auto grid md:grid-cols-2 grid-cols-1 gap-4">
        <div class="main-left">
            <div class="p-12 bg-white border border-lime-200 rounded-lg">
                <h1 class="mb-6 text-2xl text-lime-500 font-extrabold">Log in</h1>

                <p class="mb-6 text-gray-500">
                    Lorem ipsum dolor sit mate. Lorem ipsum dolor sit mate. Lorem ipsum dolor sit mate.
                    Lorem ipsum dolor sit mate. Lorem ipsum dolor sit mate. Lorem ipsum dolor sit mate.
                </p>

                <p class="font-bold">
                    Don't Have An Account? <router-link :to="{name:'register'}" class="underline text-lime-500">Click Here</router-link> To Create One!
                </p>
            </div>
        </div>

        <div class="main-right">
            <div class="p-12 bg-white border border-lime-200 rounded-lg">
                <form class="space-y-6" v-on:submit.prevent="submitForm" >
                    <div>
                        <label>E-mail</label><br>
                        <input type="email" v-model="form.email"  placeholder="Your e-mail address" class="w-full mt-2 py-4 px-6 border border-gray-200 rounded-lg">
                    </div>

                    <div>
                        <label>Password</label><br>
                        <input  placeholder="Your password" v-model="form.password" class="w-full mt-2 py-4 px-6 border border-gray-200 rounded-lg">
                    </div>

                    <template v-if="errors.length > 0">
                        <div class="bg-red-500 text-white rounded-lg p-6">
                            <p v-for="error in errors" v-bind:key="error">{{ error }}</p>
                        </div>
                    </template>

                    <div>
                        <button class="py-4 px-6 bg-lime-400 w-full text-white rounded-lg">Log in</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>


<script>

import axios from 'axios';
import { useUserStore } from '../store/userStore';

export default {
    name: "Login", 

    setup() {
        const userStore = useUserStore();

        return {
            userStore
        }
    },

    data() {
        return {
            form: {
                email: "", 
                password: ""
            }, 
            errors: []
        }
    }, 

    methods: {
        async submitForm() {
            this.errors = [];
            // console.log(this.form.email, this.form.email)

            if (this.form.email === "") {
                this.errors.push("E-mail is Required");
            }
            if (this.form.password === "") {
                this.errors.push("Password is Required");
            }   
            
            if (this.errors.length === 0) {
                try {
                    // Attempt to log in
                    const loginResponse = await axios.post("/api/account/login/", this.form);
                    this.userStore.setToken(loginResponse.data);
                    axios.defaults.headers.common["Authorization"] = "Bearer " + loginResponse.data.access;

                    // Fetch user info
                    const userResponse = await axios.get("/api/account/me/");
                    this.userStore.setUserInfo(userResponse.data);
                    this.$router.push("/feed");
                } catch (error) {
                    // Handle login errors
                    console.log("Error in logging in user: ", error);
                    if (error.response && error.response.data) {
                        // You might want to display the error message from the response
                        this.errors.push(error.response.data.detail || "Login failed. Please try again.");
                    } else {
                        this.errors.push("An unexpected error occurred. Please try again later.");
                    }
                }
            }
        }
    }
}

</script>