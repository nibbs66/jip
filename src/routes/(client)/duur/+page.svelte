<script lang="ts">
  import Duurzaamheid from "$lib/components/HeroImages/Duurzaamheid.svelte";
  import {goals, left} from './data'
  import { backOut } from "svelte/easing";
  import Animate from "$lib/components/Animate.svelte";

</script>

<div class=" space-y-4 md:space-y-12">
<Duurzaamheid/>
  <div class="px-6 grid md:grid-cols-2 space-x-4">
    <div>
      <h2 class="text-center text-gray-600 text-lg md:text-2xl text-semibold mb-4">Bijvoorbeeld:</h2>
      <ul class="flex flex-col  items-start text-left  w-full space-y-6">
        {#each left as goal, i}

            <li
              class="text-gray-600 flex text-start font-semibold">
              {goal}
            </li>

        {/each}
      </ul>
    </div>
    <div>
      <h2 class="text-center text-gray-600 text-2xl text-semibold mb-4">Bijvoorbeeld:</h2>
      <ul class="flex flex-col  items-start text-left w-full space-y-6">
        {#each goals as goal, i}
          <Animate>
            <li
                 class="text-gray-600 flex text-start  font-semibold">
              {goal}
            </li>
          </Animate>
        {/each}
      </ul>
    </div>

  </div>
</div>
