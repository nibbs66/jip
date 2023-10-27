<script lang="ts">
    import Sponsoring from "$lib/components/HeroImages/Sponsoring.svelte";
    import GoFundMe from "$lib/components/GoFundMe.svelte";

    import C2 from "./C2.svelte";

    export let data;

</script>

<div class="space-y-4  md:space-y-12">
<Sponsoring />
    <div class="bg-jip-400  py-20 rounded-2xl ">
        <div class="grid md:grid-cols-2 place-items-center px-10 gap-10 sm:text-xl text-jip-900 ">
        <p class="leading-10">Meereizen met School at Sea komt natuurlijk met een prijskaartje, maar dit is het meer dan waard. In ruil daarvoor doe ik veel ervaring op, krijg ik bijzondere scholing en ontwikkel ik mezelf enorm op persoonlijke gebied.
        </p>
          <div class="row-span-2 rounded-xl shadow-2xl p-5 bg-[ghostwhite]">
              <GoFundMe class="text-green-600 hover:text-green-700 transition duration-700 hover:duration-500 h-44 lg:h-72 w-auto" />
          </div>
        <p class="leading-10">Ik ben begonnen met geld in te zamelen op allerlei verschillende manieren, o.a. werken bij een restaurant, oppassen, een loterij organiseren en langs bedrijven gaan voor sponsoring.
        </p>
        <p class="leading-10">Wil je mij helpen met het waarmaken van mijn droom om met School at Sea mee te varen? Dan kun je mijn <a
                class="text-jip-50 hover:text-jip-700 transition duration-700 hover:duration-500" href="https://www.gofundme.com/f/jip-at-sea-x-the-ocean-cleanup">GoFundMe</a>  pagina bekijken voor particuliere sponsoring.
        </p>
        <p class="leading-10">Ben je geïnteresseerd om officiële sponsor te worden? Dan bespreek ik graag de mogelijkheden! Je kunt met mij contact opnemen via e-mail of via het
            <a   class="text-jip-50 hover:text-jip-700 transition duration-700 hover:duration-500" href="/contact_formulieren">contactformulier.</a>
        </p>


        </div>
       <div class=" py-10 ">

           <C2 data={data.data} />
           <h2 class="text-center pt-5 text-jip-800 lg:text-2xl font-bold lg:font-normal">Dank je wel naar mijn sponsoren!!</h2>
       </div>
    </div>

</div>
