<script>
    import firepit from '$lib/img/JipsPhotos/firepit.png'
    import Modal from '$lib/components/Modal.svelte'
    export let form;

    let showModal = !!form?.success || true;
    let show_button = true;

</script>

<div class="space-y-4  md:space-y-12 ">
    <Modal bind:showModal bind:show_button>
        <div class="py-5">
            <p class="text-jip-800 text-2xl text-center ">Succes!!</p>
            <p class="text-jip-800 text-2xl text-center ">{form?.success}</p>

        </div>
    </Modal>
    <div class="bg-jip-400  py-20 rounded-2xl shadow-2xl px-5 lg:px-0 lg:pr-10">
        <div class="relative ">
            <div class="lg:absolute lg:inset-0 lg:left-1/2 ">

                   <img
                           class="h-auto  w-full rounded-lg  object-cover  lg:absolute lg:h-full  shadow-white/50 shadow-2xl"
                           src={firepit}
                           alt=""
                   />

            </div>
            <div class="pb-24 pt-16 sm:pb-32 sm:pt-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-32">
                <div class="px-6 lg:px-8">
                    <div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
                        <h2 class="text-3xl font-bold tracking-tight text-jip-800">Contact Formulier</h2>

                        <form  method="POST" class="mt-16">
                            <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">

                                <div class="sm:col-span-2">
                                    <label for="naam" class="block text-sm font-semibold leading-6 text-jip-800">
                                        Naam
                                    </label>
                                    <div class="mt-2.5">
                                        <input
                                                id="naam"
                                                name="naam"
                                                type="text"
                                                autoComplete="subject"
                                                class="block w-full rounded-md border-0 px-3.5 py-2 text-jip-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div class="sm:col-span-2">
                                    <label for="email" class="block text-sm font-semibold leading-6 text-jip-800">
                                        Email
                                    </label>
                                    <div class="mt-2.5">
                                        <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                autoComplete="email"
                                                class="block w-full rounded-md border-0 px-3.5 py-2 text-jip-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>




                                <div class="sm:col-span-2">
                                    <div class="flex justify-between text-sm leading-6">
                                        <label for="message" class="block text-sm font-semibold leading-6 text-jip-800">
                                            Bericht
                                        </label>

                                    </div>
                                    <div class="mt-2.5">
                    <textarea
                            id="body"
                            name="body"
                            rows={4}
                            aria-describedby="body"
                            class="block w-full rounded-md border-0 px-3.5 py-2 text-jip-800 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                    />
                                    </div>
                                </div>

                            </div>
                            <div class="mt-10 flex justify-end border-t border-gray-900/10 pt-8">
                                <button
                                        type="submit"
                                        class="rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition duration-700 hover:duration-500"
                                >
                                    Bericht vesturen
                                </button>
                            </div>
                        </form>

                    </div>

                </div>
            </div>
        </div>
    </div>
</div>

