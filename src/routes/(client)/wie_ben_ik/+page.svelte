<script lang="ts">
import sailboat from '$lib/img/JipsPhotos/sailboat.png'
import windsurf from '$lib/img/JipsPhotos/windsurf.png'
import WiebenIk from "$lib/components/HeroImages/WiebenIk.svelte";
</script>

<div class="space-y-4  md:space-y-12">
 <WiebenIk/>
    <div class="bg-jip-400  py-20 rounded-2xl">
        <div class="grid md:grid-cols-2 px-5 gap-10">
          <div>
              <img src={sailboat} alt="in sailboat" class=" sm:m-5 aspect-[2/3]  rounded-xl bg-gray-900/5 object-cover shadow-lg ">
              <p class="text-gray-800 text-center text-xs font-semibold">Kijk eens hoe schattig! Kleine Jip voor het eerst in een optimist op het Veerse meer.
              </p>
          </div>
            <div class="m-5 space-y-8 sm:text-xl text-jip-800">
             <p>Tegenwoordig woon in Bavel met mijn ouders, broertje en zusje en zit ik in 3 VWO op het Mencia de Mendoza Lyceum in Breda.
             </p>
                <p>Ik vind het ontzettend leuk om creatief bezig te zijn, zoals: schilderen, muziek maken, tekenen, koken etc.
                </p>
                <p>Ook ben ik dol op watersport. Mij kan je in de zomer altijd op een surfplank of in een zeilboot vinden.
                </p>
            </div>
            <div class="m-5 space-y-8 sm:text-xl text-jip-800">
                <h2 class="text-xl md:text-2xl font-semibold">
                    Waarom wil ik mee met School at Sea?

                </h2>
                <p>Ik heb er altijd al van gedroomd om op wereldreis te gaan. School at Sea maakt dit mogelijk. Ik houd er enorm van om andere culturen te leren kennen. Dit komt mede doordat ik in het buitenland opgegroeid ben. Ik vond het superleuk om vrienden te hebben die een andere levenswijze hebben. Met School at Sea kom je in aanraking met allerlei verschillende culturen uit midden Amerika.
                </p>
                <p>Ook houd ik van uitdagingen, het beste uit mijzelf halen en ontwikkelen, dat geeft me een voldaan gevoel.
                </p>
                <p>Het mooiste van dit avontuur is dat het een geweldige ervaring wordt om een leven lang op terug te kijken. </p>
            </div>
            <div>
                <img src={windsurf} alt="in sailboat" class="lg:-mt-[20rem] xl:-mt-[36rem] aspect-[2/3] rounded-xl bg-gray-900/5 object-cover shadow-lg ">

            </div>

        </div>

    </div>

</div>
