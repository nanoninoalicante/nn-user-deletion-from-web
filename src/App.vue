<script setup lang="ts">
import { RouterView } from "vue-router";
import { useFormData } from "./composables/form";
const { loading } = useFormData();
</script>

<template>
    <div
        class="container mx-auto mt-24 px-4 flex flex-col justify-center items-center"
    >
        <RouterView />
    </div>
</template>
<style>
body {
    background-color: #f3f4f6;
}
</style>
```
