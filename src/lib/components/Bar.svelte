
<script>
    import {page} from "$app/stores";
    import insta from '$lib/img/icons8-instagram.svg'
    import school from '$lib/img/cropped-School_at_Sea_Logo_RGB_BLUE.png'
    import {Bars3, Icon} from "svelte-hero-icons";
    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'Wie ben ik', href: '/wie_ben_ik' },
        { name: 'Duurzaamheid', href: '/duurzaamheid' },
        { name: 'School At Sea', href: '/school_at_sea' },
        { name: 'Sponsoring', href: '/sponsoring' },
        { name: 'Contact', href: '/contact_formulieren' },

    ]
</script>


    <nav class="flex px-5 py-2 justify-between items-center">
        <div>
            <img src={school} alt="School at Sea" class={` w-10 lg:h-12 lg:w-auto`}/>
        </div>
        <div class="hidden sm:flex space-x-6 text-sm text-gray-700">
            {#each navigation as item}
           <span aria-current={$page.url.pathname === `${item.href}` ? 'page' : undefined}>
                <a href="{item.href}" class="">{item.name}</a>
           </span>

            {/each}
        </div>
        <div>
            <img src={insta} alt="Instagram"/>
            <button class="sm:hidden btn btn-square btn-ghost">
                <Icon src="{Bars3}" class="w-6 h-6" />
            </button>
        </div>

    </nav>

