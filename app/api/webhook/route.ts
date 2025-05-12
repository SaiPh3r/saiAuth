import { NextRequest } from 'next/server';
import { verifyWebhook } from '@clerk/nextjs/webhooks';

export async function POST(req: NextRequest) {
  try {
    const evt = await verifyWebhook(req);
    const { id } = evt.data;
    const eventType = evt.type;

    if(eventType === 'user.created') {
      console.log('User created:', id);
    }

    if(eventType === 'user.updated') {
      console.log('User updated:', id);
    }

    console.log('Received webhook:', eventType, id);

    return new Response('Webhook received', { status: 200 });
  } catch (err) {
    console.error('Error verifying webhook', err);
    return new Response('Error', { status: 400 });
  }
}