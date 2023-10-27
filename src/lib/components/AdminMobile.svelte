<script lang="ts">
    import {page} from "$app/stores";
    export let data;
    export let hide;
    export let navigation;

</script>

<div class="relative">
    <div class="absolute right-0 bg-white py-1 px-2 rounded-md shadow-2xl">
        <ul class="space-y-2">
            {#each navigation as item}
                <li   class="hover:text-jip-400 text-jip-800 text-sm transition duration-700 hover:duration-500" aria-current={$page.url.pathname === `${item.href}` ? 'page' : undefined}>
                    <a on:click={hide} href="{item.href}" class="">{item.name}</a>
                </li>

            {/each}

            {#if data.user}
                <form method="POST" >
                    <button class="hover:text-jip-400 text-jip-800 text-sm transition duration-700 hover:duration-500" formaction="/logout">Uitloggen</button>
                </form>
            {/if}
        </ul>

    </div>
</div>


