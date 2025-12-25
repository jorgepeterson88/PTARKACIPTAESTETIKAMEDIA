import { NextRequest, NextResponse } from 'next/server';
import ZAI from 'z-ai-web-dev-sdk';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { service, name, email, company, phone, budget, timeline, description } = body;

    // Validation
    if (!service || !name || !email) {
      return NextResponse.json(
        { error: 'Service, name, and email are required' },
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

    // Validate service type
    const validServices = ['meta-marketing', 'whatsapp-automation', 'business-growth', 'consultation'];
    if (!validServices.includes(service)) {
      return NextResponse.json(
        { error: 'Invalid service type' },
        { status: 400 }
      );
    }

    // Initialize ZAI SDK
    const zai = await ZAI.create();

    // Generate service recommendation using AI
    let recommendation = '';
    try {
      const aiResponse = await zai.chat.completions.create({
        messages: [
          {
            role: 'system',
            content: 'You are a digital marketing consultant at PT ARKACIPTA ESTETIKA MEDIA. Based on the service request, provide a brief recommendation and next steps in Indonesian.'
          },
          {
            role: 'user',
            content: `Service Request:
Service: ${service}
Company: ${company || 'Not specified'}
Budget: ${budget || 'Not specified'}
Timeline: ${timeline || 'Not specified'}
Description: ${description || 'No description provided'}

Provide a concise recommendation and next steps.`
          }
        ],
        model: 'gpt-3.5-turbo',
        max_tokens: 200
      });

      recommendation = aiResponse.choices[0].message.content || '';
    } catch (aiError) {
      console.log('AI recommendation failed, using default');
      recommendation = 'Tim kami akan segera menghubungi Anda untuk diskusi lebih lanjut tentang kebutuhan bisnis Anda.';
    }

    // Create service request data
    const serviceRequest = {
      id: `SRV-${Date.now()}`,
      service,
      serviceName: getServiceName(service),
      name,
      email,
      company: company || 'Personal',
      phone: phone || 'Not provided',
      budget: budget || 'Not specified',
      timeline: timeline || 'Not specified',
      description: description || 'No description provided',
      recommendation,
      status: 'new',
      priority: determinePriority(budget, timeline),
      createdAt: new Date().toISOString(),
      expectedResponse: '2-3 business days'
    };

    // Log the service request
    console.log('New service request:', serviceRequest);

    // In a real implementation, you would:
    // 1. Save to database with proper schema
    // 2. Create ticket in project management system
    // 3. Notify relevant team members
    // 4. Send confirmation email to client
    // 5. Schedule consultation call

    return NextResponse.json({
      success: true,
      message: 'Service request received! Our team will contact you within 2-3 business days.',
      data: serviceRequest
    });

  } catch (error) {
    console.error('Service request error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'PT ARKACIPTA ESTETIKA MEDIA Services API',
    company: 'PT ARKACIPTA ESTETIKA MEDIA',
    services: [
      {
        id: 'meta-marketing',
        name: 'Meta Marketing',
        description: 'Comprehensive Facebook and Instagram marketing solutions',
        features: ['Campaign Management', 'Audience Targeting', 'Performance Analytics', 'A/B Testing']
      },
      {
        id: 'whatsapp-automation',
        name: 'WhatsApp Automation',
        description: 'Automated WhatsApp communication for customer engagement',
        features: ['Chatbot Implementation', 'Broadcast Messaging', 'Customer Support', 'CRM Integration']
      },
      {
        id: 'business-growth',
        name: 'Business Growth Strategy',
        description: 'Data-driven strategies for sustainable business growth',
        features: ['Market Analysis', 'Growth Planning', 'Performance Tracking', 'ROI Optimization']
      },
      {
        id: 'consultation',
        name: 'Digital Consultation',
        description: 'Expert consultation for digital transformation',
        features: ['Digital Audit', 'Strategy Development', 'Implementation Planning', 'Team Training']
      }
    ],
    endpoints: {
      'POST /api/services': 'Submit service request',
      'GET /api/services': 'Get available services information'
    },
    contact: {
      phone: '082382466378',
      email: 'info@arkacipta.co.id',
      responseTime: '2-3 business days'
    }
  });
}

function getServiceName(serviceId: string): string {
  const serviceNames: { [key: string]: string } = {
    'meta-marketing': 'Meta Marketing',
    'whatsapp-automation': 'WhatsApp Automation',
    'business-growth': 'Business Growth Strategy',
    'consultation': 'Digital Consultation'
  };
  return serviceNames[serviceId] || 'Unknown Service';
}

function determinePriority(budget?: string, timeline?: string): string {
  if (!budget && !timeline) return 'normal';
  
  const highBudgetKeywords = ['50jt+', '100jt+', '1m+'];
  const urgentTimelineKeywords = ['urgent', '1 minggu', '2 minggu', 'segera'];
  
  const hasHighBudget = budget && highBudgetKeywords.some(keyword => 
    budget.toLowerCase().includes(keyword)
  );
  const hasUrgentTimeline = timeline && urgentTimelineKeywords.some(keyword => 
    timeline.toLowerCase().includes(keyword)
  );
  
  if (hasHighBudget || hasUrgentTimeline) return 'high';
  return 'normal';
}