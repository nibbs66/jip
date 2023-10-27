<script lang="ts">
import {Splide} from "@splidejs/svelte-splide";
import {SplideSlide, SplideTrack} from "@splidejs/svelte-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import '@splidejs/svelte-splide/css/skyblue';
import {generateSlides} from '$lib/utils/testphotos'
    import { onMount } from "svelte";
    import "@splidejs/svelte-splide/css";
    const slides = generateSlides();
const options = {
    rewind  : true,
    gap     : '0rem',
    autoplay: true,
    arrows  : true,
    height  : '15rem',



}
    export let data;
    let carousel;
    onMount(()=>{
    if(carousel){
        console.log(carousel)

    }

    })

</script>

<div>
    <Splide options={ options } hasTrack={ true } aria-labelledby="autoplay-example-heading" >




                {#each slides as item}
                    <SplideSlide>
                        <img src={item.url} alt={item.url} />
                    </SplideSlide>
                {/each}



    </Splide>
</div>
