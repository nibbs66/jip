import { GOOGLE_EMAIL } from "$env/static/private";
import transporter from "$lib/server/email.js";

export const actions = {
    default: async ({ request }) => {
        try {
            const { naam, email, body } = Object.fromEntries(await request.formData());


            let html = `<h2>From: ${naam}</h2><h3>${email}</h3><pre>${body}</pre>`;
          console.log(naam);
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
