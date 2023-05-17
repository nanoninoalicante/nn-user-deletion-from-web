import type { Config, Context } from "https://edge.netlify.com";

export default async (request: Request, context: Context) => {
    const formResponse = await request.formData();
    const formInputs = Object.fromEntries(formResponse.entries());
    return new Response(JSON.stringify({ message: "success", formInputs }), {
        headers: {
            "content-type": "application/json",
            "access-control-allow-origin": "*",
        },
    });
};
export const config = { path: "/submit" };
