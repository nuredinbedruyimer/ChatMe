import {defineStore} from "pinia"

import axios from "axios";


const useUserStore = defineStore({
    id:"user", 
    state:()=>({
        user:{
            isAuthenticated:false,
            id:null, 
            name:null, 
            email:null, 
            access:null, 
            refresh:null, 
        }
    }),
    actions:{
        initStore(){
            if (localStorage.getItem("user.access")){
                this.user.access = localStorage.getItem("user.access")
                this.user.refresh = localStorage.getItem("user.refresh")
                this.user.id = localStorage.getItem("user.id")
                this.user.name = localStorage.getItem("user.name")
                this.user.email = localStorage.getItem("user.email")
                this.user.isAuthenticated = true

                this.refreshToken()
                console.log("Intial User : ", this.user)


            }
        },
        setToken(data){
            console.log("Set Token : ",data )
            this.user.access = data.access
            this.user.refresh = data.refresh
            this.user.isAuthenticated = true
            localStorage.setItem("user.access", data.access)
            localStorage.setItem("user.refresh", data.refresh)

        },
    removeToken(){
        console.log("Remove Token")
        this.user.id = null
        this.user.name = null
        this.user.email = null
        this.isAuthenticated = false
        this.user.refresh = null
        this.user.access = null

        localStorage.removeItem("user.access", "")
        localStorage.removeItem("user.refresh", "")
        localStorage.removeItem("user.id", "")
        localStorage.removeItem("user.name", "")
        localStorage.removeItem("user.email", "")
        localStorage.removeItem("user.access", "")


    }, 
    setUserInfo(user){
        console.log("SetUserInfo", user)
        this.user.id = user.id
        this.user.name  = user.name
        this.user.email = user.email

        localStorage.setItem("user.id", this.user.id)
        localStorage.setItem("user.name", this.user.name)
        localStorage.setItem("user.access", this.user.access)
        console.log("User : ", this.user)
    }, 
    refreshToken(){
        axios.post("api/account/refresh", {
            refresh:this.user.refresh
        }).then((response)=>{
            this.user.access = response.data.access
            localStorage.setItem("user.access", response.data.access)
            axios.defaults.headers.common["Authorization"]  = "Bearer " + response.data.access
        }).catch(error=>{
            console.log("Error In Refresh The Page : ", error)
            this.removeToken()
        })
    }
    
    }
})