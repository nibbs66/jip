import {promise} from "$lib/server/appwrite";
import prisma from '$lib/server/prisma';
import {auth} from "$lib/server/lucia.ts"
import {redirect} from "@sveltejs/kit";
export const load = async () => {
   const data = await prisma.sponsor.findMany()
    return {
       data
    };

}

