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
                <form class="space-y-6">
                    <div>
                        <label>Username</label><br>
                        <input type="text"  placeholder="Your full name" class="w-full mt-2 py-4 px-6 border border-gray-200 rounded-lg">
                    </div>

                    <div>
                        <label>E-mail</label><br>
                        <input type="email"  placeholder="Your e-mail address" class="w-full mt-2 py-4 px-6 border border-gray-200 rounded-lg">
                    </div>

                    <div>
                        <label>Password</label><br>
                        <input type="password" placeholder="Your password" class="w-full mt-2 py-4 px-6 border border-gray-200 rounded-lg">
                    </div>

                    <div>
                        <label>Confirm Password</label><br>
                        <input type="password"  placeholder="Confirm your password" class="w-full mt-2 py-4 px-6 border border-gray-200 rounded-lg">
                    </div>

                    <!-- <template v-if="errors.length > 0">
                        <div class="bg-red-300 text-white rounded-lg p-6">
                            <p v-for="error in errors" v-bind:key="error">{{ error }}</p>
                        </div>
                    </template> -->

                    <div>
                        <button class="py-4 px-6 w-full bg-lime-500 text-white rounded-lg">Sign up</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"Register"
}
</script>