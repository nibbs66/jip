<script lang="ts">
    import {page} from "$app/stores";
    import school from '$lib/img/cropped-School_at_Sea_Logo_RGB_BLUE.png'
    export let data;
    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'Admin', href: '/admin' },
        { name: 'Files', href: '/admin/files' },


    ]
</script>

<div class="flex items-center justify-between px-10 py-2 bg-jip-700/60 shadow-2xl rounded-full text-jip-50">
    <div class="z-50 pl-2 ">
        <a class="tooltip tooltip-right" data-tip="Klik op het pictogram om naar de School At Sea-website te gaan." href="https://schoolatsea.com/">
            <img src={school} alt="School at Sea" class={` h-8 w-auto mt-1 lg:h-16 lg:w-auto`}/>
        </a>
    </div>
    <div class="hidden sm:flex space-x-8 text-sm tracking-tighter  z-50">
        {#each navigation as item}
           <span  class="hover:text-jip-400 transition duration-700 hover:duration-500" aria-current={$page.url.pathname === `${item.href}` ? 'page' : undefined}>
                <a href="{item.href}" class="">{item.name}</a>
           </span>

        {/each}
    </div>
    <div class="space-x-4">
        {#if !data.user}
    <span aria-current={$page.url.pathname === '/login' ? 'page' : undefined}>
        <a href="/login">login</a>
    </span>
            <span aria-current={$page.url.pathname === '/register' ? 'page' : undefined}>
        <a href="/register">register</a>
    </span>
        {:else}
            <form method="POST" >
                <button class="text-sm border px-3 py-2 rounded-md hover:bg-jip-300 hover:text-jip-700 transition duration-700 hover:duration-500" formaction="/logout">Uitloggen</button>
            </form>
        {/if}

    </div>
</div>
