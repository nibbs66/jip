<script lang="ts">
    import Countdown from "$lib/components/Countdown.svelte";
    import '$lib/app.css'
    import Header from "$lib/components/Header.svelte";
    import Bar from "$lib/components/Bar.svelte";
    import Footer from "$lib/components/Footer.svelte";
    export let data;


</script>

<div class=" px-2 py-5 mx-auto max-w-screen-2xl bg-jip-200">
  <div class="mx-auto max-w-7xl">
      <div class="flex justify-center py-2">
          <Countdown />
      </div>
      <Header data={data} />
      <div class={` p-5`}>

          <slot />
      </div>
     <Footer />
  </div>
</div>
