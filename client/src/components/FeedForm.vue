<template>
    <form  method="post" class="">
        <div class="">  
            <textarea  class="p-4 w-full bg-gray-100 rounded-lg" placeholder="What are you thinking about?"></textarea>

            <label>
                <input type="checkbox" > Private
            </label>

            <div id="preview" >
                <img class="w-[100px] mt-3 rounded-xl" />
            </div>
        </div>

        <div class="p-4 border-t border-gray-100 flex justify-between">
            <label class="inline-block py-4 px-6 bg-gray-600 text-white rounded-lg">
                <input type="file"  >
                Attach image
            </label>

            <button class="inline-block py-4 px-6 bg-lime-400 text-white rounded-lg">Post</button>
        </div>
    </form>
</template>

<script>
export default {
    name:"FeedForm"
}
</script>

