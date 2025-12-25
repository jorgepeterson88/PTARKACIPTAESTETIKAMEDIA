'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  MessageSquare, 
  TrendingUp, 
  Users, 
  Zap,
  ChevronRight,
  Menu,
  X,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Linkedin
} from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setNotification(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactForm),
      });

      const data = await response.json();

      if (response.ok) {
        setNotification({ type: 'success', message: data.message });
        setContactForm({ name: '', email: '', phone: '', company: '', message: '' });
      } else {
        setNotification({ type: 'error', message: data.error || 'Terjadi kesalahan' });
      }
    } catch (error) {
      setNotification({ type: 'error', message: 'Terjadi kesalahan koneksi' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;

    setIsLoading(true);
    setNotification(null);

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: newsletterEmail }),
      });

      const data = await response.json();

      if (response.ok) {
        setNotification({ type: 'success', message: data.message });
        setNewsletterEmail('');
      } else {
        setNotification({ type: 'error', message: data.error || 'Terjadi kesalahan' });
      }
    } catch (error) {
      setNotification({ type: 'error', message: 'Terjadi kesalahan koneksi' });
    } finally {
      setIsLoading(false);
    }
  };

  const services = [
    {
      icon: <Facebook className="w-8 h-8 text-blue-600" />,
      title: 'Meta Marketing',
      description: 'Strategi pemasaran terpadu di platform Meta untuk maksimalkan reach dan engagement',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-green-600" />,
      title: 'WhatsApp Automation',
      description: 'Otomatisasi komunikasi WhatsApp untuk customer service yang efisien',
      gradient: 'from-green-500 to-teal-600'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-orange-600" />,
      title: 'Business Growth',
      description: 'Solusi pertumbuhan bisnis berkelanjutan dengan data-driven approach',
      gradient: 'from-orange-500 to-red-600'
    }
  ];

  const stats = [
    { value: '500+', label: 'Klien Puas' },
    { value: '10M+', label: 'Impressions' },
    { value: '95%', label: 'Success Rate' },
    { value: '24/7', label: 'Support' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Notification */}
      {notification && (
        <div className={`fixed top-20 right-6 z-50 p-4 rounded-lg shadow-lg ${
          notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'
        } text-white max-w-sm`}>
          <div className="flex items-center justify-between">
            <p>{notification.message}</p>
            <button 
              onClick={() => setNotification(null)}
              className="ml-4 text-white hover:text-gray-200"
            >
              ×
            </button>
          </div>
        </div>
      )}
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                ARKACIPTA ESTETIKA MEDIA
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Beranda</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Layanan</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">Tentang</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Kontak</a>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Konsultasi Gratis
              </Button>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="container mx-auto px-6 py-4 space-y-3">
              <a href="#home" className="block text-gray-700 hover:text-blue-600">Beranda</a>
              <a href="#services" className="block text-gray-700 hover:text-blue-600">Layanan</a>
              <a href="#about" className="block text-gray-700 hover:text-blue-600">Tentang</a>
              <a href="#contact" className="block text-gray-700 hover:text-blue-600">Kontak</a>
              <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600">
                Konsultasi Gratis
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Transformasi Digital
                  </span>
                  <br />
                  <span className="text-gray-900">Bisnis Anda</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  <span className="font-semibold text-blue-600">PT ARKACIPTA ESTETIKA MEDIA</span> - 
                  Solusi terpadu Meta Marketing, WhatsApp Automation, dan strategi pertumbuhan bisnis berkelanjutan untuk era digital.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-6">
                  Mulai Sekarang
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2">
                  Lihat Portfolio
                </Button>
              </div>

              <div className="flex gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl transform rotate-3"></div>
              <Card className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="p-8">
                  <img 
                    src="/logo.png" 
                    alt="ARKACIPTA ESTETIKA MEDIA" 
                    className="w-full h-64 object-contain rounded-lg"
                  />
                  <div className="mt-6 space-y-4">
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <span className="text-sm font-medium">Meta Campaigns</span>
                      <span className="text-green-600 font-bold">+245%</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <span className="text-sm font-medium">WhatsApp Response</span>
                      <span className="text-green-600 font-bold">98%</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                      <span className="text-sm font-medium">Client Retention</span>
                      <span className="text-green-600 font-bold">92%</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Layanan Unggulan
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Solusi digital terintegrasi untuk mengakselerasi pertumbuhan bisnis Anda
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 bg-gradient-to-br from-gray-50 to-white">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    Pelajari Lebih Lanjut
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Mengapa Memilih
                </span>
                <br />
                <span className="text-gray-900">ARKACIPTA ESTETIKA MEDIA?</span>
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Inovasi Berkelanjutan</h3>
                    <p className="text-gray-600">Selalu update dengan teknologi terkini untuk memberikan solusi terbaik</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Tim Profesional</h3>
                    <p className="text-gray-600">Expert team dengan pengalaman bertahun-tahun di digital marketing</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Result-Driven</h3>
                    <p className="text-gray-600">Fokus pada hasil yang terukur dan ROI yang maksimal</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-white rounded-3xl shadow-2xl p-8">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">Company Profile</h3>
                  <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="font-semibold">Nama Perusahaan:</span>
                    <span className="text-blue-600 font-bold">PT ARKACIPTA ESTETIKA MEDIA</span>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                    <div>
                      <span className="font-semibold">Alamat:</span>
                      <p className="text-gray-600 mt-1">
                        Jalan Rawa Buntu Nomor 39, Kel. Rawabuntu, Kec. Serpong, 
                        Kota Tangerang Selatan, Prov. Banten 15318
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="font-semibold">Telepon:</span>
                    <span className="text-gray-600">082382466378</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="font-semibold">Spesialisasi:</span>
                    <span className="text-gray-600">Meta Marketing, WhatsApp Automation, Business Growth Strategy</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Hubungi Kami
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Siap untuk transformasi digital bisnis Anda?
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="p-8 bg-gradient-to-br from-blue-50 to-purple-50">
              <h3 className="text-2xl font-bold mb-6">Kirim Pesan</h3>
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Nama Lengkap</label>
                  <input 
                    type="text" 
                    value={contactForm.name}
                    onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    value={contactForm.email}
                    onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Perusahaan</label>
                  <input 
                    type="text" 
                    value={contactForm.company}
                    onChange={(e) => setContactForm({...contactForm, company: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    placeholder="PT Contoh"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Telepon</label>
                  <input 
                    type="tel" 
                    value={contactForm.phone}
                    onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                    placeholder="08123456789"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Pesan</label>
                  <textarea 
                    value={contactForm.message}
                    onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all h-32 resize-none"
                    placeholder="Ceritakan tentang proyek Anda..."
                    required
                  ></textarea>
                </div>
                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 py-3"
                >
                  {isLoading ? 'Mengirim...' : 'Kirim Pesan'}
                </Button>
              </form>
            </Card>

            <div className="space-y-8">
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-6">Informasi Kontak</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold">Telepon</p>
                      <p className="text-gray-600">082382466378</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-gray-600">info@arkacipta.co.id</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-semibold">Alamat</p>
                      <p className="text-gray-600">
                        Jalan Rawa Buntu Nomor 39, Kel. Rawabuntu, Kec. Serpong, 
                        Kota Tangerang Selatan, Prov. Banten 15318
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-6">Ikuti Kami</h3>
                <div className="flex space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                    <Facebook className="w-6 h-6 text-white" />
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center hover:from-purple-700 hover:to-pink-700 transition-colors cursor-pointer">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <div className="w-12 h-12 bg-sky-500 rounded-lg flex items-center justify-center hover:bg-sky-600 transition-colors cursor-pointer">
                    <Twitter className="w-6 h-6 text-white" />
                  </div>
                  <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center hover:bg-blue-800 transition-colors cursor-pointer">
                    <Linkedin className="w-6 h-6 text-white" />
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-blue-900 text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">A</span>
                </div>
                <span className="font-bold text-lg">ARKACIPTA ESTETIKA MEDIA</span>
              </div>
              <p className="text-gray-300">
                Solusi digital terpadu untuk pertumbuhan bisnis berkelanjutan di era modern.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#" className="hover:text-white transition-colors">Meta Marketing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">WhatsApp Automation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Business Growth</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Digital Strategy</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#about" className="hover:text-white transition-colors">Tentang Kami</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Layanan</a></li>
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Terms & Conditions</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Newsletter</h4>
              <p className="text-gray-300 mb-4">Dapatkan insight terbaru tentang digital marketing</p>
              <div className="flex space-x-2">
                <input 
                  type="email" 
                  placeholder="Email Anda" 
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-white/40"
                  required
                />
                <Button 
                  onClick={handleNewsletterSubmit}
                  disabled={isLoading || !newsletterEmail}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  {isLoading ? '...' : 'Subscribe'}
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center text-gray-300">
            <p>&copy; 2024 PT ARKACIPTA ESTETIKA MEDIA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}