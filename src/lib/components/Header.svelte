<script lang="ts">
    import school from '$lib/img/cropped-School_at_Sea_Logo_RGB_BLUE.png'
    import insta from '$lib/img/icons8-instagram.svg'
    import {page} from "$app/stores";
    import MobileMenu from "$lib/components/MobileMenu.svelte";
    let show_menu = false;
    export let data;

    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'Wie ben ik', href: '/wie_ben_ik' },
        { name: 'Duurzaamheid', href: '/duurzaamheid' },
        { name: 'School At Sea', href: '/school_at_sea' },
        { name: 'Sponsoring', href: '/sponsoring' },
        { name: 'Contact', href: '/contact' },

    ]
function hide () {
        show_menu = !show_menu;
}
</script>

<div class="lg:px-12">
    <div class="relative flex px-5 py-2 justify-between items-center bg-jip-700 rounded-full shadow-2xl  text-jip-50">

        <div class="z-50 pl-2 ">
            <a class="tooltip tooltip-right" data-tip="Klik op het pictogram om naar de School At Sea-website te gaan." href="https://schoolatsea.com/">
                <img src={school} alt="School at Sea" class={` h-8 w-auto mt-1 lg:h-16 lg:w-auto`}/>
            </a>
        </div>
        <div class="hidden sm:flex space-x-3  lg:space-x-8 text-xs lg:text-sm tracking-tighter  ">
            {#each navigation as item}
           <span  class="hover:text-jip-400 transition duration-700 hover:duration-500" aria-current={$page.url.pathname === `${item.href}` ? 'page' : undefined}>
                <a href="{item.href}" class="">{item.name}</a>
           </span>

            {/each}
        </div>
        <div  class="flex items-center space-x-6 z-50">
            {#if data.user?.role ==='admin'}
                <div class="hidden sm:flex text-xs lg:text-sm border px-3 py-2 rounded-md hover:bg-jip-300 hover:text-jip-700 transition duration-700 hover:duration-500">
                    <a href="/admin">Admin</a>
                </div>
            {/if}
            {#if data.user}
                <form class="hidden sm:flex" method="POST" >
                    <button class="text-xs lg:text-sm border px-3 py-2 rounded-md hover:bg-jip-300 hover:text-jip-700 transition duration-700 hover:duration-500" formaction="/logout">Uitloggen</button>
                </form>
            {/if}
            <a class="hidden sm:block tooltip tooltip-left" data-tip="Follow me on Instagram" href="https://www.instagram.com/jip_atsea">
                <img src={insta} alt="Instagram"/>
            </a>
            <div>
                <button on:click={()=>show_menu = !show_menu} class="sm:hidden text-white">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>

                </button>
                {#if show_menu}
                    <MobileMenu hide={hide} data={data} {navigation}/>
                {/if}
            </div>
        </div>
    </div>
</div>
