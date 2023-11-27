<script lang="ts">
    import {Icon, ArrowUpOnSquare} from "svelte-hero-icons";
    import {PUBLIC_INSTANCE_URL, PUBLIC_PROJECT_ID, PUBLIC_BUCKET_ID} from "$env/static/public";
    import {onMount} from "svelte";
    import Input from "$lib/components/Input.svelte";


    import { enhance } from '$app/forms';
    import { Client, Storage, ID } from "appwrite";
    const client = new Client();

    const storage = new Storage(client);

    client
        .setEndpoint(PUBLIC_INSTANCE_URL)
        .setProject(PUBLIC_PROJECT_ID)


    const authorizedExtensions = ['.jpg', '.jpeg', '.png', '.webp'];
    let upload;
    let image;
    let website;

    async function handleSubmit(event) {


        const data = new FormData(event.currentTarget);

 const promise =  storage.createFile(PUBLIC_BUCKET_ID, ID.unique(), upload );
    promise.then(function (result) {
         image = storage.getFilePreview(PUBLIC_BUCKET_ID, result.$id)

        image = image.href

        data.append('url', image as any);
        data.append('host_id', result.$id as any)


        const res = fetch('/admin', {
            method: 'POST',
            body: data
        })
        res.then((res) => res.json()).then((res) => {
            console.log(res)
        })




    }, function (error) {
        console.log(error);
    });






}

</script>



   <div  class="h-screen overflow-y-hidden py-24">

       <form method="POST"  enctype="multipart/form-data" use:enhance on:submit|preventDefault={handleSubmit}  class="mx-auto max-w-md">

           <div  class="mx-auto w-full max-w-md h-44 flex flex-col py-5 items-center border-dashed border-2 border-indigo-600 rounded-2xl bg-gray-200 ">

               <Icon src="{ArrowUpOnSquare}" class="w-10 h-10 text-indigo-600" />
               <p    class="text-gray-600 text-sm mt-2">Select Image to Upload</p>
               <p class="text-gray-600 text-sm">jpeg, svg, png, gif </p>
               <label for="upload" class="bg-indigo-600 text-white text-sm px-4 py-2 rounded-md mt-2 cursor-pointer">Browse files</label>
                   <input  id="upload"  on:change={async (e)=>upload = e.target.files[0]}
                      accept={authorizedExtensions.join(',')}
                      type="file" name="upload" class="hidden"  />

           </div>
           <div class=" px-5 gap-x-4 pt-10">

              <Input id="website" name="website" type="text" placeholder="Sponsor website" />
          </div>
          <div class="flex justify-center gap-x-8 pt-10">
              <button
                      class="bg-indigo-600 text-white text-sm px-4 py-2 rounded-md mt-2 shadow-2xl"
                      type="submit"
              >
                  Submit
              </button>

          </div>
           {#if !!upload}
              <div class="flex justify-center pt-10 ">
                  <img src="{URL.createObjectURL(upload)}" alt="" class="w-1/2 h-1/2 p-5 rounded-xl shadow-2xl bg-gray-300"/>
                </div>
              {/if}

       </form>
   </div>

