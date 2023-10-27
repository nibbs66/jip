<script lang="ts">
    import {generateSlides} from '$lib/utils/testphotos'
    import { onMount, tick } from "svelte";
    import logo from '$lib/img/cropped-School_at_Sea_Logo_RGB_BLUE.png'
    let logos;
    let ul;
    export let data;
    onMount(async ()=>{
        await tick();
        logos = true;
        ul = document.querySelector('ul');
        ul.insertAdjacentHTML('afterend', ul.outerHTML);
        ul.nextSibling.setAttribute('aria-hidden', 'true');



    })




</script>

<div class={` mx-auto max-w-7xl mt-2 px-20 `}>
    <div
            class="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
    >
        <ul bind:this={logos} class="flex  h-44 items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
            {#each data as slide}
                <li>
                    <a href={slide.website}>
                        <img src={slide.url} class="w-28 lg:w-44 object-contain" alt='pic'/>
                    </a>
                </li>
            {/each}


            <li>
                <img src={logo} alt='pic' class="w-28 lg:w-44 object-contain"/>
            </li>
        </ul>
        <ul bind:this={logos} class="flex  h-44 items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
            {#each data as slide}
                <li>
                    <a href={slide.website}>
                        <img src={slide.url} class="w-28 lg:w-44 object-contain" alt='pic'/>
                    </a>
                </li>
            {/each}


            <li>
                <img src={logo} alt='pic' class="w-28 lg:w-44 object-contain"/>
            </li>
        </ul>

    </div>
</div>
