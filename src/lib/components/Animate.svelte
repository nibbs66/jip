<script lang="ts">
    import { onMount, tick } from 'svelte'

    let play = false

    onMount(() => {
        play = true
    })

    async function replay() {
        play = false
        await tick()
        play = true
    }
</script>

{#if play}
    <slot />
{/if}



<style >
  button {
    position: absolute;
    bottom: 4%;
    right: 4%;
    height: 24px;
    width: 24px;
    border-radius: 50%;
    padding: 1.4rem;
    transition: background 1s ease;
  }

  button:hover {
    background-color: aquamarine;
  }
</style>
