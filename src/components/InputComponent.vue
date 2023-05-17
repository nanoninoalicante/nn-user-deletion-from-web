<script setup lang="ts">
const props = defineProps(["inputName", "inputLabel", "validation"]);
const inputLabel = props.inputLabel;
defineEmits(["update:inputName", "update:validation"]);
</script>
<template>
    <div class="flex flex-col">
        <label for="name" class="ml-4 mb-1 text-sm text-gray-600">{{
            inputLabel
        }}</label>
        <input
            :id="inputName"
            :value="inputName"
            @blur="validation.$touch"
            @input="
                $emit(
                    'update:inputName',
                    ($event.target as HTMLInputElement).value,
                )
            "
            type="text"
            class="py-4 px-4 rounded-3xl bg-white border-2 border-gray-100 w-full"
            :class="{
                'border-red-500': validation?.$error,
                'border-green-500': validation?.$dirty && !validation?.$error,
            }"
        />
    </div>
</template>
