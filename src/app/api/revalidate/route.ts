import { parseBody } from "next-sanity/webhook";
import { revalidateTag } from "next/cache";
import type { NextRequest } from "next/server";

type WebhookPayload = { _type?: string };

export async function POST(req: NextRequest) {
  try {
    const { body, isValidSignature } = await parseBody<WebhookPayload>(
      req,
      process.env.SANITY_WEBHOOK_SECRET,
    );

    if (isValidSignature !== true) {
      return new Response("Invalid signature", { status: 401 });
    }

    if (!body?._type) {
      return new Response("Bad request: missing _type", { status: 400 });
    }

    revalidateTag(body._type, "max");

    return Response.json({ revalidated: true, type: body._type });
  } catch (err) {
    console.error("Revalidation webhook error:", err);
    return new Response("Internal server error", { status: 500 });
  }
}
