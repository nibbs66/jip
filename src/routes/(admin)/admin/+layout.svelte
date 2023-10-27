<script lang="ts">
    import "$lib/app.css"
    import AdminHeader from "$lib/components/AdminHeader.svelte"
    export let data;

</script>

<div class=" px-2 py-5 mx-auto max-w-screen-2xl bg-jip-200">
    <div class="mx-auto max-w-7xl">
    <AdminHeader data={data} />
        <div class={` p-5`}>

            <slot />
        </div>
    </div>
</div>
