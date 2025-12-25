import { NextRequest, NextResponse } from 'next/server';
import ZAI from 'z-ai-web-dev-sdk';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message, phone, company } = body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
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

    // Initialize ZAI SDK for potential AI processing
    const zai = await ZAI.create();

    // Create contact notification message
    const contactMessage = `
New Contact Form Submission from PT ARKACIPTA ESTETIKA MEDIA Website:

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Company: ${company || 'Not provided'}

Message:
${message}

---
Submitted at: ${new Date().toLocaleString('id-ID', { 
  timeZone: 'Asia/Jakarta',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit'
})}
    `.trim();

    // Optional: Use AI to categorize or analyze the message
    let category = 'general';
    let priority = 'normal';
    
    try {
      const analysis = await zai.chat.completions.create({
        messages: [
          {
            role: 'system',
            content: 'Analyze this contact form message and categorize it into one of these categories: "sales", "support", "partnership", "general", "complaint". Also assign priority: "high", "normal", or "low". Respond in JSON format: {"category": "...", "priority": "..."}'
          },
          {
            role: 'user',
            content: message
          }
        ],
        model: 'gpt-3.5-turbo',
        max_tokens: 100
      });

      const analysisResult = JSON.parse(analysis.choices[0].message.content || '{}');
      category = analysisResult.category || 'general';
      priority = analysisResult.priority || 'normal';
    } catch (aiError) {
      console.log('AI analysis failed, using default categorization');
    }

    // Log the contact submission
    console.log('Contact submission received:', {
      name,
      email,
      phone,
      company,
      category,
      priority,
      timestamp: new Date().toISOString()
    });

    // In a real implementation, you would:
    // 1. Save to database
    // 2. Send email notification
    // 3. Create ticket in CRM
    // 4. Send auto-reply to customer

    // For now, we'll simulate success and return the data
    return NextResponse.json({
      success: true,
      message: 'Thank you for your message! We will contact you soon.',
      data: {
        name,
        email,
        phone,
        company,
        category,
        priority,
        submittedAt: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'PT ARKACIPTA ESTETIKA MEDIA Contact API',
    endpoints: {
      'POST /api/contact': 'Submit contact form',
      'GET /api/contact': 'API information'
    },
    company: {
      name: 'PT ARKACIPTA ESTETIKA MEDIA',
      services: ['Meta Marketing', 'WhatsApp Automation', 'Business Growth'],
      contact: {
        phone: '082382466378',
        address: 'Jalan Rawa Buntu Nomor 39, Kel. Rawabuntu, Kec. Serpong, Kota Tangerang Selatan, Prov. Banten 15318'
      }
    }
  });
}