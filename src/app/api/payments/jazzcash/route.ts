import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Mock JazzCash HMAC-secured payRequest redirection signature
    // In production, you would calculate HMAC SHA256 signature using your merchant salt:
    // const hashString = `${salt}&${amount}&${billNumber}&...`;
    // const secureHash = crypto.createHmac("sha256", salt).update(hashString).digest("hex");

    const secureHash = "mock_hash_" + Math.random().toString(36).substring(7);

    return NextResponse.json({
      postUrl: "https://sandbox.jazzcash.com.pk/CustomerPortal/transactionPage",
      merchantId: process.env.JAZZCASH_MERCHANT_ID || "MC_TEST",
      secureHash,
      body,
    }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
