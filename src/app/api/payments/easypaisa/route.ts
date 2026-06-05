import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Mock Easypaisa dynamic API payload creation
    // In production, you would make an HTTP request to Easypaisa system, or generate
    // the redirect URL signature based on merchant credentials.

    const paymentToken = "mock_token_" + Math.random().toString(36).substring(7);

    return NextResponse.json({
      redirectUrl: "https://easypay.easypaisa.com.pk/easypay/Index.jsf",
      paymentToken,
      body,
    }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
