<script lang="ts">
    import { fly, crossfade } from 'svelte/transition'
    import { backOut, quintOut } from 'svelte/easing'
    import Animate from "$lib/components/Animate.svelte";
    import Duurzaamheid from "$lib/components/HeroImages/Duurzaamheid.svelte";
    import group from '$lib/img/JipsPhotos/group.png';
    import duurzaamheid from '$lib/img/duurzaamheid.jpeg'
    import firepit from '$lib/img/JipsPhotos/firepit.png';
    import fundraiser from '$lib/img/JipsPhotos/fundraiser.png';
    const goals = [
        ' Werken bij een duurzaam groenterestaurant.',
        ' Meedoen aan de Zero-Waste week: de singels in Breda opruimen, koken op kampvuur, meedoen met de zero-waste fietstour.',
        'Een loterij organiseren met duurzame producten.',
        'Zoveel mogelijk spullen tweedehands kopen.',
        'Veelal vegetarisch en veganistisch eten.',
        'Helpen met het opstarten van ECO-Schools bij mij op school.',
        ' 10% van mijn opbrengst voor School at Sea aan The Ocean Cleanup doneren.'
    ]
    const [send, receive] = crossfade({
        duration: 600,
        // when you remove an element
        fallback(node) {
            const style = getComputedStyle(node)
            const transform =
                style.transform === 'none' ? '' : style.transform

            return {
                duration: 600,
                easing: quintOut,
                css: (t) => `
          opacity: ${t}
          transform: ${transform} scale(${t});
        `
            }
        }
    })
</script>

<div class=" space-y-4 md:space-y-12">
    <Duurzaamheid/>
    <div class=" bg-jip-400 py-20 px-5 space-y-6 rounded-2xl">
        <div class="relative z-10    bg-jip-700 pb-20 rounded-2xl  sm:pb-24 xl:pb-0">
            <div class="absolute inset-0 overflow-hidden" aria-hidden="true">
                <div class="absolute left-[calc(50%-19rem)] top-[calc(50%-36rem)] transform-gpu blur-3xl">
                    <div
                            class="aspect-[1097/1023] w-[68.5625rem] bg-gradient-to-r from-jip-700 to-jip-500 opacity-25 "
                            style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
                    />
                </div>
            </div>
            <div class="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
                <div class="-mt-8 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
                    <div class="relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 ">
                        <img
                                class="absolute inset-0 h-full xl:w-full object-fit rounded-2xl bg-gray-800 xl:object-cover object-contain shadow-2xl"
                                src={duurzaamheid}
                                alt=""
                        />
                        <div class="hidden xl:block absolute inset-0 bg-black/60 mix-blend-multiply rounded-2xl" />
                    </div>
                </div>
                <div class="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-16 xl:py-24">
                    <figure class="-mt-16 relative isolate pt-6 sm:pt-12">
                        <svg
                                viewBox="0 0 162 128"
                                fill="none"
                                aria-hidden="true"
                                class="absolute left-0 top-0 -z-10 h-32 stroke-white/20"
                        >
                            <path
                                    id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
                                    d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
                            />
                            <use href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb" x={86} />
                        </svg>
                        <blockquote class=" text-lg font-semibold leading-8 text-white sm:text-xl sm:leading-10">
                            <p>
                                In mijn ogen kan je niet op aarde leven en je niet bekommeren over onze planeet en haar bewoners.
                                Ik ben van jongs af aan al bezig met duurzamer leven, omdat dit een belangrijk thema was op de basisschool.
                                Zo heb ik tot nu toe allerlei acties gedaan voor een duurzamere wereld.
                            </p>
                        </blockquote>

                    </figure>
                </div>
            </div>
        </div>
        <div class="mx-auto max-w-7xl pt-20">
            <h2 class="text-center text-white text-2xl text-semibold mb-4">Bijvoorbeeld:</h2>
            <ul class="flex flex-col  items-center text-left w-full space-y-6">
                {#each goals as goal, i}
                    <Animate>
                        <li  in:fly={{
            y: 100,
            delay: 800 * i,
            easing: backOut
          }}
                             class="text-white  flex text-center text-xl font-semibold">
                            {goal}
                        </li>
                    </Animate>
                {/each}
            </ul>
        </div>

    </div>
</div>
