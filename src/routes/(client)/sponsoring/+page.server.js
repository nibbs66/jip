import{promise} from "$lib/server/appwrite";
import prisma from '$lib/server/prisma';
export const load = async () => {
   const data = await prisma.sponsor.findMany()
    return {
       data
    };

}
