import { NextResponse } from "next/server";

export async function POST(request: Request) {
  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const honeypot = typeof data.company_website === "string" && data.company_website.length > 0;
  if (honeypot) {
    return NextResponse.json({ ok: true, reference: "MRD-XXXX" });
  }

  const required = ["type", "location", "name", "email", "message"];
  const missing = required.filter((k) => !data[k]);
  if (missing.length > 0) {
    return NextResponse.json(
      { ok: false, missing },
      { status: 422 }
    );
  }

  const year = new Date().getFullYear();
  const serial = Math.floor(1000 + Math.random() * 9000);
  const reference = `MRD-${year}-${serial}`;

  console.log("[commission]", { reference, ...data });

  return NextResponse.json({ ok: true, reference });
}
