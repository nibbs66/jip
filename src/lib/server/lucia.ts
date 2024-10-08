import { lucia } from "lucia";
import { sveltekit } from "lucia/middleware";
import { dev } from "$app/environment";
import { prisma } from "@lucia-auth/adapter-prisma";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

// @ts-ignore
export const auth = lucia({
	env: dev ? 'DEV' : 'PROD',
	middleware: sveltekit(),
	adapter: prisma(client, {
        user: "user", // model User {}
        key: "key", // model Key {}
        session: "session" // model Session {}
    }),

    // @ts-ignore
    getUserAttributes: (user) => {
		return {
			userId: user.id,
			role: user.role
		};
	}
});

