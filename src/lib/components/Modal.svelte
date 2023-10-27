<script lang="ts">
    import {Icon, XCircle} from "svelte-hero-icons";

    export let showModal: Boolean;
    export let show_button: Boolean;
    let dialog;
    $: if (dialog && showModal) {
        dialog.showModal();
    }
</script>
<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog
    bind:this={dialog}
    on:close={() => showModal = false}
    on:click|self={() => dialog.close()}
        class={`p-4 block opacity-0 translate-y-40 transition-[opacity, transform] inset-0
            [&[open]]:opacity-100 [&[open]]:translate-y-0
            duration-500  [&:not([open])]:pointer-events-none w-1/2  rounded-xl px-6 py-5 sm:max-w-xl lg:max-w-4xl shadow-2xl
            backdrop:bg-blue-500/50 dark:shadow-white/50 shadow-blue-500  bg-gray-200`}
>
<button on:click={() => dialog.close()} >
    <Icon  src="{XCircle}" class="text-gray-400 h-7 w-7 absolute right-0 top-0.5 cursor-pointer"/>

</button>
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div on:click|stopPropagation >
 <div class={`mt-1 text-center flex justify-center  `}>

     <slot/>

     <!-- svelte-ignore a11y-autofocus -->
     <button class={`${ show_button ? 'inline-flex ' : 'hidden' } w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
             autofocus
             on:click={() => dialog.close()}
     >Close

     </button>
 </div>
    </div>

</dialog>
