import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(req: Request) {
    console.log("come with new")
    try {
        const body = await req.json();
        const webhookUrl = process.env.NEXT_PUBLIC_WEBHOOK_URL;

        console.log('Zoho Webhook URL:', webhookUrl);
        console.log('Zoho Webhook Data:', body);

        // Send to Zoho
        const zohoResponse = await axios.post(webhookUrl!, body);

        return NextResponse.json(
            { message: 'Submitted to Zoho successfully', data: zohoResponse.data },
            { status: 200 }
        );
    } catch (error: any) {
        console.error('Zoho Webhook Error:', error?.response?.data || error.message);
        return NextResponse.json(
            { message: 'Failed to submit to Zoho', error: error?.response?.data || error.message },
            { status: 500 }
        );
    }
}
