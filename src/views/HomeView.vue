<script setup lang="ts">
import InputComponent from "../components/InputComponent.vue";
import { useFormData } from "../composables/form";
import { useVuelidate } from "@vuelidate/core";
import { required, email, numeric } from "@vuelidate/validators";
const { name, userEmail, phone, requestType } = useFormData();
const phoneNumberRegex =
    /^(\+|\d{1,3}\s?)?(\d{1,3})?\s?\(?\d{1,4}\)?\s?\d{1,4}[-\s]?\d{1,9}$/;

const phoneNumber = (value: any) => phoneNumberRegex.test(value);

const rules = {
    name: { required },
    userEmail: { required, email },
    phone: { required, phoneNumber },
};
const v$ = useVuelidate(rules, { name, userEmail, phone, requestType });

const submit = () => {
    if (v$.$invalid) {
        v$.$touch();
        return;
    }
    alert("Form submitted!");
};
</script>

<template>
    <main class="bg-white rounded-3xl lg:w-2/3 w-full p-6 md:p-12 lg:p-24">
        <div class="flex flex-col justify-center items-center space-y-4 mb-12">
            <h1 class="text-2xl font-medium">Account Deletion</h1>
            <p class="text-md">
                Exercise your privacy rights under local law. If you want to
                make a request to our Data Protection Office, go to the
                "Personal data access request form" tab. To oppose specific data
                processing activities, go to "Preferences". If your request
                relates to a taxi or rental car reservation, you may also
                receive a response from us.
            </p>
        </div>
        <div class="flex flex-col space-y-4 justify-center items-center">
            <form
                id="userDeletionForm"
                class="flex w-full flex-col space-y-6 justify-center items-stretch"
                netlify
            >
                <InputComponent
                    v-model:input-name="name"
                    :input-label="'Name'"
                    :validation="v$?.name"
                ></InputComponent>
                <InputComponent
                    v-model:input-name="userEmail"
                    :input-label="'Email'"
                    :validation="v$?.userEmail"
                ></InputComponent>
                <InputComponent
                    v-model:input-name="phone"
                    :input-label="'Phone Number'"
                    :validation="v$?.phone"
                ></InputComponent>
                <button
                    :disabled="v$.$invalid"
                    type="submit"
                    class="p-4 w-full md:w-56 bg-blue-900 border-2 border-gray-200 text-white hover:bg-blue-700 active:bg-blue-600 hover:text-white my-4 rounded-3xl disabled:bg-gray-100 disabled:text-gray-200 disabled:cursor-not-allowed"
                >
                    Submit Request
                </button>
            </form>
        </div>
    </main>
</template>
