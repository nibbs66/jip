<script lang="ts">
    import boat from '$lib/img/JipsPhotos/boat.png'
    import classroom from '$lib/img/JipsPhotos/classroom.png'
    import School from "$lib/components/HeroImages/School.svelte";
</script>

<div class="space-y-4   md:space-y-12">
    <School />
    <div class="px-5">
        <div class="bg-jip-400 max-w-7xl py-20 rounded-2xl">
            <div class="grid lg:grid-cols-2 lg:gap-6">
                <div class="mx-auto aspect-w-3 aspect-h-2 sm:float-left w-full px-5 object-center">
                    <img src={boat} alt="in sailboat" class=" rounded-xl bg-gray-900/5 md:object-contain shadow-lg ">
                </div>
                <div class="m-5 text-center md:text-start sm:text-xl text-jip-800 ">
                    <p class="leading-10"> School at Sea is een ontwikkelingsprogramma waarin je leert door te doen.
                        Door uit je comfortzone te treden en zelf dingen te gaan ervaren en onderzoeken wordt jouw leren
                        gestimuleerd. Fouten maken mag; daar leer je van. Stap voor stap word je zelfstandiger en
                        verantwoordelijker.

                    </p>
                </div>
                <div class="m-5 space-y-8 sm:text-xl text-jip-800">
                    <p class="leading-10">Voor dat je op reis gaat start je met het voortraject, wat je mentaal en financieel voorbereid. Je leert doelen stellen, met tegenslagen omgaan, presenteren en nog veel meer.
                        Wil je meer weten over School at Sea? Neem een kijkje op hun website: <a class="text-jip-50 hover:text-jip-700 transition duration-700 hover:duration-500" href="https://schoolatsea.com/">www.schoolatsea.com</a>
                    </p>
                </div>
                <div class="mx-auto aspect-w-3 aspect-h-2 sm:float-left w-full px-5 object-center">
                    <img src={classroom} alt="in classroom" class=" rounded-xl bg-gray-900/5 md:object-contain shadow-lg ">
                </div>
            </div>
        </div>
    </div>

</div>
