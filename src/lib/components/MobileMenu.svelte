<script lang="ts">
    import {page} from "$app/stores";
 export let data;
 export let hide;
    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'Wie ben ik', href: '/wie_ben_ik' },
        { name: 'Duurzaamheid', href: '/duurzaamheid' },
        { name: 'School At Sea', href: '/school_at_sea' },
        { name: 'Sponsoring', href: '/sponsoring' },
        { name: 'Contact', href: '/contact_formulieren' },

    ]

</script>

    <div class="relative">
        <div class="absolute right-0 bg-white py-1 px-2 rounded-md shadow-2xl">
            <ul class="space-y-2">
                {#each navigation as item}
                    <li   class="hover:text-jip-400 text-jip-800 text-sm transition duration-700 hover:duration-500" aria-current={$page.url.pathname === `${item.href}` ? 'page' : undefined}>
                        <a on:click={hide} href="{item.href}" class="">{item.name}</a>
                    </li>

                {/each}
            </ul>

        </div>
    </div>


