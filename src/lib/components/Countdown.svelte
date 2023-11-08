<script lang="ts">

    import {

        intervalToDuration,
        endOfDay,

        formatDuration, isBefore
    } from 'date-fns';

import Loader from '$lib/components/Loader.svelte'
    let now = new Date();
    let endOfToday = endOfDay(now);
    let end = new Date('2024-10-13T00:00:00')
    let countdown_complete = false
 let timer_duration;
    let other = {}
    let running_interval = setInterval(()=>{
        let now = new Date();
        let duration = intervalToDuration({
            start: now,
            end: end,
        });

        if(isBefore(end, now)){
            countdown_complete = true
            clearInterval(running_interval)
        } else {
           timer_duration = (formatDuration(duration))
            other = (intervalToDuration({
                start: now,
                end: end,
            }))
        }
    }, 1000)

</script>
{#if timer_duration === undefined }
    <Loader />
    {:else}
<span class="
    text-xs
    background-animate
    bg-gradient-to-br
    from-sky-500
    via-jip-700
    to-yellow-200
    sm:text-lg
    md:text-xl
    xl:text-3xl
    md:font-bold

    bg-clip-text text-transparent">Aftellen: {timer_duration}</span>


    {/if}



<style>
    .background-animate {
        background-size: 400%;

        -webkit-animation: AnimationName 5s ease infinite;
        -moz-animation: AnimationName 5s ease infinite;
        animation: AnimationName 5s ease infinite;
    }

    @keyframes AnimationName {
        0%,
        100% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
    }
</style>


