import {writable, readable} from "svelte/store";
import {getTime, intervalToDuration, isBefore, formatDuration} from "date-fns";


let start = new Date()
let end = new Date('2024-10-13T00:00:00')
export let countdown_complete = writable(false)
export let timer = writable(Math.floor(end - start / 60000));

export let timer_duration;
let running_interval = setInterval(()=>{
    let now = new Date();
    let duration = intervalToDuration({
        start: now,
        end: end,
    });
    if(isBefore(end, now)){
        countdown_complete.set(true)
        clearInterval(running_interval)
    } else {
        timer_duration = writable(formatDuration(duration))
    }

}, 1000)


