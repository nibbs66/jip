import {fail, redirect} from "@sveltejs/kit";
import {auth} from "$lib/server/lucia.ts"
import {storage} from "$lib/server/appwrite.js";
import prisma from "$lib/server/prisma";
import { PUBLIC_BUCKET_ID } from "$env/static/public";
export const POST = async ({request, locals}) => {

    const session = await locals.auth.validate()

    if (!session) {
        throw redirect(302, '/')
    }
    const {id, host_id} = Object.fromEntries(await request.formData());
    const promise = storage.deleteFile(PUBLIC_BUCKET_ID, host_id);

    promise.then(async function (response) {
       const delete_file = await prisma.sponsor.delete({
            where: {
                id
            }
        })
        console.log(delete_file)
    }, function (error) {
        console.log('error', error); // Failure
    });

      return  new Response(JSON.stringify({success: true, message: 'Image Deleted.'}) )
}
