<script>
    import {Icon, ExclamationTriangle} from "svelte-hero-icons";
    import Input from "$lib/components/Input.svelte";
  import {data} from "./data.js";
    import User from "$lib/components/User.svelte";
    export let form;

</script>

<div class="max-w-md mx-auto bg-white p-10 -mt-10 lg:mt-0 rounded-lg shadow-2xl">
    <div class="flex flex-col items-center">
        <User class="h-16 w-auto  text-jip-700 align-center"/>
        <h2 class="text-jip-800 text-lg">Register</h2>
    </div>
    {#if form?.incorrect}
        <div class="alert alert-error rounded-lg my-5">
            <Icon src="{ExclamationTriangle}" class="w-6 text-white" />
            <p class="text-white">{form?.message}</p>

        </div>
    {/if}
    <form method = 'POST' class="flex flex-col gap-6 my-6">
        <Input type="email" name="email"  id="email" />
        <Input type="password" name="password"  id="password" />
        <button
                class="rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition duration-700 hover:duration-500"
                type="submit"
        >
            Register
        </button>
    </form>
</div>
