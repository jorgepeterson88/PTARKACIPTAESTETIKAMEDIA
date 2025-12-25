import { NextRequest, NextResponse } from 'next/server';
import ZAI from 'z-ai-web-dev-sdk';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name } = body;

    // Validation
    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Initialize ZAI SDK
    const zai = await ZAI.create();

    // Create welcome message using AI
    let welcomeMessage = 'Terima kasih telah berlangganan newsletter kami!';
    
    try {
      const aiResponse = await zai.chat.completions.create({
        messages: [
          {
            role: 'system',
            content: 'You are a helpful assistant for PT ARKACIPTA ESTETIKA MEDIA, a digital marketing company specializing in Meta Marketing, WhatsApp Automation, and Business Growth solutions. Create a warm, professional welcome message for a new newsletter subscriber in Indonesian.'
          },
          {
            role: 'user',
            content: `Create a welcome message for ${name || 'pengguna'} who just subscribed to our newsletter. Keep it under 100 words and mention our services.`
          }
        ],
        model: 'gpt-3.5-turbo',
        max_tokens: 150
      });

      welcomeMessage = aiResponse.choices[0].message.content || welcomeMessage;
    } catch (aiError) {
      console.log('AI welcome message generation failed, using default');
    }

    // Log the subscription
    console.log('Newsletter subscription:', {
      email,
      name: name || 'Anonymous',
      timestamp: new Date().toISOString(),
      source: 'PT ARKACIPTA ESTETIKA MEDIA Website'
    });

    // In a real implementation, you would:
    // 1. Save to database
    // 2. Add to email marketing service (Mailchimp, SendGrid, etc.)
    // 3. Send confirmation email
    // 4. Track analytics

    return NextResponse.json({
      success: true,
      message: welcomeMessage,
      data: {
        email,
        name: name || 'Subscriber',
        subscribedAt: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'PT ARKACIPTA ESTETIKA MEDIA Newsletter API',
    description: 'Subscribe to our newsletter for digital marketing insights and updates',
    company: 'PT ARKACIPTA ESTETIKA MEDIA',
    focus: ['Meta Marketing', 'WhatsApp Automation', 'Business Growth Strategy'],
    endpoints: {
      'POST /api/newsletter': 'Subscribe to newsletter',
      'GET /api/newsletter': 'API information'
    }
  });
}