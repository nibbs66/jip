<script lang="ts">
import {Icon, ArrowUpOnSquare} from "svelte-hero-icons";
let files;

function handleFiles(e) {
    e.preventDefault()
    files = e.target.files[0]
}
function handleDrop(e) {
    e.preventDefault()

   files = e.dataTransfer.files[0];
}

</script>

<form method = 'POST' on:drop={(e)=>handleDrop(e)} on:dragover={(e)=>e.preventDefault()} class="mx-auto max-w-md">

   <div  class="mx-auto w-full max-w-md h-44 flex flex-col py-5 items-center border-dashed border-2 border-indigo-600 rounded-2xl bg-gray-200 ">

            <Icon src="{ArrowUpOnSquare}" class="w-10 h-10 text-indigo-600" />
            <p on:drop={(e)=>handleDrop(e)} on:dragover={(e)=>e.preventDefault()}    class="text-gray-600 text-sm mt-2">Drag and drop your files here</p>
            <p class="text-gray-600 text-sm">or</p>
            <label for="fileUpload" class="bg-indigo-600 text-white text-sm px-4 py-2 rounded-md mt-2 cursor-pointer">Browse files</label>
            <input id="fileUpload" on:change={(e)=>handleFiles(e)} type="file" name="upload" class="hidden" bind:value={files} />
   </div>
</form>
