import { GOOGLE_EMAIL } from "$env/static/private";
import transporter from "$lib/server/email.js";

export const actions = {
    default: async ({ request }) => {
        try {
            const formData = await request.formData();
            const email = formData.get("email");
            const naam =formData.get("naam")
            const body = formData.get("body");
                console.log(email)
            let html = `<h2>From: ${naam}</h2><h3>${email}</h3><pre>${body}</pre>`;

           const message = {
                from: email,
                to: GOOGLE_EMAIL,
                bcc: "jipvandenbroek08@gmail.com",
                subject: 'Nieuw bericht',
                text: body,
                html: html,
            };

            const sendEmail = async (message) => {
                await new Promise((resolve, reject) => {
                    transporter.sendMail(message, (err, info) => {
                        if (err) {
                            console.error(err);
                            reject(err);
                        } else {
                            resolve(info);
                        }
                    });
                });
            };

            await sendEmail(message);

            return {
                success: "Je bericht is verzonden.",
            };


        } catch (error) {
            console.error(error);
        }


    }
};
