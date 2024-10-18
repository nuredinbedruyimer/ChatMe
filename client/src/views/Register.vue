<template>
    <div class="max-w-6xl mx-auto grid md:grid-cols-2  grid-cols-1  gap-4 mt-12">
        <div class="main-left">
            <div class="p-12 bg-white border border-lime-200 rounded-lg">
                <h1 class="mb-6 text-2xl font-extrabold text-lime-500">Sign up</h1>

                <p class="mb-6 text-gray-500">
                    Lorem ipsum dolor sit mate. Lorem ipsum dolor sit mate. Lorem ipsum dolor sit mate.
                    Lorem ipsum dolor sit mate. Lorem ipsum dolor sit mate. Lorem ipsum dolor sit mate.
                </p>

                <p class="font-bold">
                    Already Have An Account? <router-link :to="{name:'login'}" class="underline text-lime-500">Click Here</router-link> To Log In!
                </p>
            </div>
        </div>

        <div class="main-right">
            <div class="p-12 bg-white border border-lime-200 rounded-lg">
                <form class="space-y-6" v-on:submit.prevent="submitForm">
                    <div>
                        <label>Username</label><br>
                        <input type="text" v-model="form.name"  placeholder="Your full name" class="w-full mt-2 py-4 px-6 border border-gray-200 rounded-lg">
                    </div>

                    <div>
                        <label>E-mail</label><br>
                        <input type="email"  v-model="form.email" placeholder="Your e-mail address" class="w-full mt-2 py-4 px-6 border border-gray-200 rounded-lg">
                    </div>

                    <div>
                        <label>Password</label><br>
                        <input type="password" v-model="form.password1" placeholder="Your password" class="w-full mt-2 py-4 px-6 border border-gray-200 rounded-lg">
                    </div>

                    <div>
                        <label>Confirm Password</label><br>
                        <input type="password" v-model="form.password2"  placeholder="Confirm your password" class="w-full mt-2 py-4 px-6 border border-gray-200 rounded-lg">
                    </div>

                    <template v-if="errors.length > 0">
                        <div class="bg-red-300 text-white rounded-lg p-6">
                            <p v-for="error in errors" v-bind:key="error">{{ error }}</p>
                        </div>
                    </template>

                    <div>
                        <button class="py-4 px-6 w-full bg-lime-500 text-white rounded-lg">Sign up</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { useToastStore } from '../store/toast';
export default {
    name:"Register",
    setup(){
        const toastStore = useToastStore()
        return {
            toastStore
        }
    }, 
    data(){
        return {
            form:{
            email:"", 
            name : "",
            password1:"", 
            password2:""
        }, 
        errors:[],
        }

    }, 
    methods:{
        submitForm(){
            this.errors = []

            if (this.form.email === ""){
                this.errors.push("E-mail is Required")
            }
            if (this.form.name === ""){
                this.errors.push("Name is Required")
            }     
            if (this.form.password1 === ""){
                this.errors.push("Password is Required")
            }

            if (this.form.password1 !== this.form.password2){
                this.errors.push("Your Password Does Not Match")
            }
            if (this.errors.length === 0){
                axios.post("/api/account/signup/", this.form)
                .then((response)=>{
                    if (response.data.message === "Success"){
                        console.log("Ok!!! Here")
                        this.toastStore.showToast(5000, " Registered Successfully , You Can Login Now !!", "bg-lime-400")
                        this.form.email = ""
                        this.form.name = ""
                        this.form.password1 = ""
                        this.form.password2 = ""


                    }
                    else{
                        this.toastStore.showToast(5000, " Something Went Wrong , Please Try Again !!", "bg-red-400")

                    }
                })
                .catch(error=>{
                    console.log("Error In Registering User !!! : ", error)
                })
            }
        }
    }
}
</script>