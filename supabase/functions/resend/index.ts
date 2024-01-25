// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
// import { createClient } from "https://esm.sh/@supabase/supabase-js@2.7.1";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const handler = async (_request: Request): Promise<Response> => {
  const payload = await _request.json();
  console.log(JSON.stringify(payload, null, 2));

  if (payload.table === "contact-us") {
    const fullname = payload.record.firstname + " " + payload.record.lastname;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: `Contact Us < contactus@ic8.co.uk >`,
        to: [`Contact Us < info@ic8.co.uk >`],
        subject: `New Message from ${fullname}: ${payload.record.email}`,
        html: `
          <p>You have received a massges from ${payload.record.email}</p>
          <p>${fullname} says:</p>
          <p>${payload.record.message}</p>
          <p>and can be contacted on: <a href:"tel:${payload.record.telephone}">${payload.record.telephone}</a></p>
          `,
      }),
    });

    const data = await res.json();

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  if (payload.table === "upload-cv") {
    const fullname = payload.record.firstname + " " + payload.record.lastname;
    const documentUrls = payload.record.file_url;
    const documentLinks = documentUrls.map((document, index) => {
      return {
        filename: document.split("/").pop(),
        path: `https://cgkeklzwqnlrzmsdcliw.supabase.co/storage/v1/object/public/upload-cv/${document}`,
      };
    });

    console.log(documentLinks);

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: `Upload CV < uploadcv@ic8.co.uk >`,
        to: [`Upload CV < info@ict8.co.uk >`],
        subject: `New CV from ${fullname}: ${payload.record.email}`,
        attachments: documentLinks,
        html: `
      <p>You have received a CV from ${payload.record.email}</p>
      <p>${fullname} can also be contacted on: <a href:"tel:${payload.record.telephone}">${payload.record.telephone}</a></p>`,
      }),
    });

    const data = await res.json();

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
};

serve(handler);

/* To invoke locally:

  1. Run `supabase start` (see: https://supabase.com/docs/reference/cli/supabase-start)
  2. Make an HTTP request:

  curl -i --location --request POST 'http://127.0.0.1:54321/functions/v1/resend' \
    --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0' \
    --header 'Content-Type: application/json' \
    --data '{"name":"Functions"}'

*/
