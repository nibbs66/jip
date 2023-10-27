<script lang="ts">
    import school from '$lib/img/cropped-School_at_Sea_Logo_RGB_BLUE.png'
    import insta from '$lib/img/icons8-instagram.svg'
    import {page} from "$app/stores";
    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'Wie ben ik', href: '/wie_ben_ik' },
        { name: 'Duurzaamheid', href: '/duurzaamheid' },
        { name: 'School At Sea', href: '/school_at_sea' },
        { name: 'Sponsoring', href: '/sponsoring' },
        { name: 'Contact', href: '/contact_formulieren' },

    ]

</script>

<footer class="footer  max-w-7xl rounded-lg p-10 pt-28 bg-gradient-to-b from-transparent from-5% via-black/40 to-black/60  text-jip-50">
   <div class="flex w-full items-center justify-between">
       <a href="https://schoolatsea.com/" class="flex flex-col items-center">
           <img src={school} class="w-10 sm:w-28" alt="">
           <p class="text-xs sm:text-sm">School at Sea</p>
       </a>
       <nav class="flex flex-col space-y-2 text-xs sm:text-sm">
           <header class="footer-title"></header>
           {#each navigation as item}
           <span  class="hover:text-jip-400" aria-current={$page.url.pathname === `${item.href}` ? 'page' : undefined}>
                <a href="{item.href}" class="">{item.name}</a>
           </span>

           {/each}

       </nav>

       <nav class="hidden sm:block">
           <a class=" tooltip tooltip-left" data-tip="Follow me on Instagram" href="https://www.instagram.com/jip_atsea">
               <img src={insta} alt="Instagram"/>
           </a>

       </nav>
   </div>
</footer>
