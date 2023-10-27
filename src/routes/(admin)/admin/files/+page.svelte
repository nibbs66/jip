<script lang="ts">
    import { enhance } from '$app/forms';
    import { onMount } from 'svelte';
    import { invalidateAll } from '$app/navigation';
    import {Icon, ChevronDown, ChevronUp} from "svelte-hero-icons";
    import SpecialBadge from '$lib/components/Badges/SpecialBadge.svelte'
    import Modal from "$lib/components/Modal.svelte";
    export let data;
    export let form;
    let order = 'asc'
    let value;
    const columns = [
        { id: 'url', name: 'Logo', sort: 'url', viewAll: true },
        { id: 'website', name: 'Website', sort: 'website', viewAll: true },
    ]

    onMount(() => {
        const interval = setInterval(() => {
            invalidateAll();
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    });
    let showModal = false;
    let show_button = false;
    let display;
    function handleImgClick(data) {
        display = data;
        showModal = true;
    }
</script>
<div class="h-screen">
    <Modal bind:showModal bind:show_button>
        <div>
            <img src={display} alt="img"/>

        </div>
    </Modal>

    <div class="bg-white rounded-md py-5 px-10 ">
        {#if form?.success}
            <span>hello</span>
        {/if}
        <div class="rounded-t-md border border-b-0 bg-gradient-to-b from-gray-300 to-transparent px-5 py-4"/>

        <div class="border border-t-0 rounded-b-md px-4 sm:px-6 lg:px-8">
            <div class="-mx-4 sm:-mx-0">
                <table class="min-w-full divide-y divide-gray-300">
                    <tr>
                        {#each columns as column}
                            <th


                                    scope="col"
                                    class={` px-3 py-3.5 text-left text-sm font-semibold text-gray-900  ${
                                !column.viewAll && ' hidden  lg:table-cell'
                            }`}
                            >
          <span class={`flex cursor-pointer items-center`}>
            {column.name}
              {#if order ==='asc'}
              <Icon src="{ChevronDown}"
                      class={`ml-1 h-4 w-4`}
                      />

                  {:else}
                      <Icon src="{ChevronUp}"
                      class={`ml-1 h-4 w-4`}
                      />
                      {/if}
          </span>
                            </th>
                        {/each}


                        <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-0">
                            <span class="sr-only">Edit</span>
                        </th>
                    </tr>
                    <tbody class="divide-y divide-gray-200 bg-white">
                    {#each data.data as item}

                        <tr

                                class={`group hover:bg-nether-100/70 `}
                        >
                            <td class="w-full max-w-0 py-4 pl-4 pr-3  text-sm  font-medium text-gray-900  sm:w-auto sm:max-w-none sm:pl-2">
                                <button on:click={()=>handleImgClick(item.url)} class="bg-jip-200 flex items-center justify-center p-1 w-12 h-12 rounded-full cursor-pointer">
                                    <img src={item.url} alt="logos" class="w-12 h-12 object-contain">
                                </button>
                                <dl class="font-normal lg:hidden">
                                    <dt class="sr-only">Phone</dt>
                                    <dt class="sr-only sm:hidden">Email</dt>
                                    <dd class="mt-1 truncate text-gray-500 sm:hidden">
                                        {item.website}
                                    </dd>
                                    <dt class="sr-only sm:hidden">Phone</dt>

                                </dl>
                            </td>

                            <td class="hidden px-3 sm:table-cell  py-4 text-sm text-gray-500 ">
                                <a href={item.website}> {item.website}</a>
                            </td>


                            <td class="py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                <nav class="flex h-4  flex-col items-end justify-center   space-x-2 pr-1 sm:flex-row sm:items-center">
                                    <a
                                            href={'/admin'}
                                            title={'Show user ' + item.id + ' detail'}
                                    >
                                        <SpecialBadge text={`edit`} class="hidden inline-flex cursor-pointer items-center rounded-full px-2 py-1 text-xs font-medium  uppercase tracking-wide text-emerald-500 no-underline  transition duration-100  hover:bg-emerald-500 hover:text-white transition duration-700 hover:duration-500" />
                                    </a>

                                    <form method="POST" use:enhance>

                                        <button formaction="/admin/api/delete_file"
                                                type="submit"


                                        >
                                            <SpecialBadge  text={`delete`} class="inline-flex cursor-pointer items-center rounded-full px-2 py-1 text-xs font-medium  uppercase tracking-wide text-red-500 no-underline  transition duration-100  hover:bg-red-500 hover:text-white transition duration-700 hover:duration-500" />
                                        </button>
                                        <input type="text" name="id" value={item.id} class="hidden">
                                        <input type="text" name="host_id" value={item.host_id} class="hidden">
                                    </form>
                                </nav>
                            </td>
                        </tr>

                    {/each}
                    </tbody>
                </table>
            </div>
        </div>

    </div>
</div>
