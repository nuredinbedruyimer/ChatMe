<template>
<div class="p-4 bg-white border border-lime-200 rounded-lg">
        <h3 class="mb-6 text-xl">People you may know</h3>

        <div class="space-y-4">
            <div 
                class="flex items-center justify-between"
         
            >
                <div class="flex items-center space-x-2">
                    <img  class="w-[40px] rounded-full">
                    
                    <p class="text-xs"><strong>Name Here</strong></p>
                </div>

                <router-link to="" class="py-2 px-3 bg-lime-400 text-white text-xs rounded-lg">Show</router-link>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name:"People"
}
</script>