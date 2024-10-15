<script setup>
import { useToastStore } from '@/stores/toast'

const store = useToastStore()
</script>

<template>
    <div
        class="transition ease-in-out delay-500 duration-500 px-6 py-6 fixed top-full right-8 rounded-xl shadow-xl"
    >
        Message Message Here
    </div>
</template>

<script>
export default {
    name:"Toast"
}
</script>