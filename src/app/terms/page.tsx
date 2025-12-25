'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, FileText, AlertCircle, CheckCircle, Gavel } from 'lucide-react';
import Link from 'next/link';

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
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
            
            <Link href="/">
              <Button variant="outline" className="flex items-center space-x-2">
                <ArrowLeft className="w-4 h-4" />
                <span>Kembali</span>
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <FileText className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Terms and Conditions
              </span>
            </h1>
            <p className="text-xl text-gray-600">
              Syarat dan Ketentuan <span className="font-semibold text-purple-600">PT ARKACIPTA ESTETIKA MEDIA</span>
            </p>
            <p className="text-gray-500 mt-2">Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>

          {/* Content Cards */}
          <div className="space-y-8">
            {/* Introduction */}
            <Card className="p-8 bg-white shadow-lg">
              <CardContent className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Pendahuluan</h2>
                <p className="text-gray-700 leading-relaxed">
                  Selamat datang di <span className="font-semibold text-purple-600">PT ARKACIPTA ESTETIKA MEDIA</span>. 
                  Syarat dan Ketentuan ini mengatur penggunaan layanan kami, termasuk Meta Marketing, 
                  WhatsApp Automation, dan solusi pertumbuhan bisnis lainnya yang kami sediakan.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Dengan mengakses atau menggunakan layanan kami, Anda setuju untuk terikat oleh syarat dan ketentuan ini. 
                  Jika Anda tidak setuju dengan bagian mana pun dari syarat ini, Anda tidak boleh menggunakan layanan kami.
                </p>
              </CardContent>
            </Card>

            {/* Services */}
            <Card className="p-8 bg-white shadow-lg">
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Layanan Kami</h2>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Meta Marketing Services</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Pengelolaan kampanye iklan di platform Meta (Facebook, Instagram)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Optimasi audience targeting dan ad performance</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Analisis dan reporting kampanye</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">WhatsApp Automation Services</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Setup dan konfigurasi WhatsApp Business API</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Automated responses dan chatbot implementation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Broadcast messaging dan customer engagement</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">Business Growth Solutions</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Konsultasi strategi pertumbuhan bisnis</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Data analytics dan business intelligence</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Digital transformation consulting</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* User Responsibilities */}
            <Card className="p-8 bg-white shadow-lg">
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <AlertCircle className="w-6 h-6 text-orange-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Tanggung Jawab Pengguna</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900 mb-3">Kewajiban Anda:</h4>
                    <div className="space-y-3">
                      <div className="p-3 bg-orange-50 rounded-lg">
                        <p className="text-sm text-orange-800">
                          <strong>Informasi Akurat:</strong> Memberikan informasi yang benar dan terkini
                        </p>
                      </div>
                      <div className="p-3 bg-orange-50 rounded-lg">
                        <p className="text-sm text-orange-800">
                          <strong>Kepatuhan Hukum:</strong> Mematuhi semua hukum dan peraturan yang berlaku
                        </p>
                      </div>
                      <div className="p-3 bg-orange-50 rounded-lg">
                        <p className="text-sm text-orange-800">
                          <strong>Penggunaan Wajar:</strong> Menggunakan layanan sesuai tujuan yang ditentukan
                        </p>
                      </div>
                      <div className="p-3 bg-orange-50 rounded-lg">
                        <p className="text-sm text-orange-800">
                          <strong>Keamanan Akun:</strong> Menjaga kerahasiaan kredensial akses
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900 mb-3">Larangan:</h4>
                    <div className="space-y-3">
                      <div className="p-3 bg-red-50 rounded-lg">
                        <p className="text-sm text-red-800">
                          <strong>Spam:</strong> Mengirim pesan spam atau tidak diinginkan
                        </p>
                      </div>
                      <div className="p-3 bg-red-50 rounded-lg">
                        <p className="text-sm text-red-800">
                          <strong>Illegal Content:</strong> Mengunggah konten ilegal atau melanggar hak cipta
                        </p>
                      </div>
                      <div className="p-3 bg-red-50 rounded-lg">
                        <p className="text-sm text-red-800">
                          <strong>System Abuse:</strong> Mencoba merusak atau mengganggu sistem
                        </p>
                      </div>
                      <div className="p-3 bg-red-50 rounded-lg">
                        <p className="text-sm text-red-800">
                          <strong>Reselling:</strong> Menjual kembali layanan tanpa izin
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Terms */}
            <Card className="p-8 bg-white shadow-lg">
              <CardContent className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Syarat Pembayaran</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Struktur Harga</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <h4 className="font-semibold text-blue-900 mb-2">Setup Fee</h4>
                        <p className="text-sm text-blue-800">Biaya awal setup dan konfigurasi</p>
                      </div>
                      <div className="p-4 bg-purple-50 rounded-lg">
                        <h4 className="font-semibold text-purple-900 mb-2">Monthly Retainer</h4>
                        <p className="text-sm text-purple-800">Biaya bulanan untuk layanan berkelanjutan</p>
                      </div>
                      <div className="p-4 bg-green-50 rounded-lg">
                        <h4 className="font-semibold text-green-900 mb-2">Performance Based</h4>
                        <p className="text-sm text-green-800">Biaya berdasarkan hasil yang dicapai</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">Metode Pembayaran</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                        <span>Transfer Bank ke rekening perusahaan</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                        <span>Virtual Account (jika tersedia)</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                        <span>Payment Gateway (kartu kredit/debit)</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">Jadwal Pembayaran</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                        <span>Pembayaran di muka untuk layanan bulanan</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                        <span>Invoice diterbitkan pada tanggal 1 setiap bulan</span>
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                        <span>Batas pembayaran 14 hari sejak tanggal invoice</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Intellectual Property */}
            <Card className="p-8 bg-white shadow-lg">
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <Gavel className="w-6 h-6 text-purple-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Hak Kekayaan Intelektual</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-purple-900 mb-2">Hak Milik <span className="text-purple-600">ARKACIPTA ESTETIKA MEDIA</span></h4>
                    <ul className="text-sm text-purple-800 space-y-1">
                      <li>• Semua konten, desain, dan materi di website milik perusahaan</li>
                      <li>• Software, tools, dan teknologi yang dikembangkan secara internal</li>
                      <li>• Metodologi, proses, dan dokumentasi layanan</li>
                      <li>• Brand assets, logo, dan elemen visual perusahaan</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Lisensi Pengguna</h4>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• Penggunaan diberikan secara non-eksklusif dan tidak dapat dialihkan</li>
                      <li>• Berlaku selama periode kontrak atau layanan aktif</li>
                      <li>• Dapat dihentikan jika melanggar syarat dan ketentuan</li>
                      <li>• Tidak memberikan hak untuk memodifikasi atau mendistribusikan ulang</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-2">Hak Klien</h4>
                    <ul className="text-sm text-green-800 space-y-1">
                      <li>• Klien mempertahankan hak atas data dan konten yang disediakan</li>
                      <li>• Hasil kampanye dan reporting menjadi milik klien</li>
                      <li>• Custom developments dapat dinegosiasikan secara terpisah</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Limitation of Liability */}
            <Card className="p-8 bg-white shadow-lg">
              <CardContent className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Batasan Tanggung Jawab</h2>
                
                <div className="space-y-4">
                  <div className="p-4 border-l-4 border-orange-600 bg-orange-50">
                    <h4 className="font-semibold text-orange-900 mb-2">Force Majeure</h4>
                    <p className="text-orange-800 text-sm">
                      Kami tidak bertanggung jawab atas kegagalan layanan yang disebabkan oleh 
                      kejadian di luar kendali kami (bencana alam, gangguan jaringan global, dll).
                    </p>
                  </div>
                  
                  <div className="p-4 border-l-4 border-red-600 bg-red-50">
                    <h4 className="font-semibold text-red-900 mb-2">Service Availability</h4>
                    <p className="text-red-800 text-sm">
                      Kami berusaha untuk menjaga uptime 99%, namun tidak menjamin ketersediaan 
                      100% karena maintenance dan update berkala.
                    </p>
                  </div>
                  
                  <div className="p-4 border-l-4 border-blue-600 bg-blue-50">
                    <h4 className="font-semibold text-blue-900 mb-2">Third-Party Services</h4>
                    <p className="text-blue-800 text-sm">
                      Kami tidak bertanggung jawab atas masalah yang berasal dari platform pihak ketiga 
                      (Meta API, WhatsApp API, dll) di luar kendali kami.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Termination */}
            <Card className="p-8 bg-white shadow-lg">
              <CardContent className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Penghentian Layanan</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-red-600">Penghentian oleh Kami</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Pelanggaran syarat dan ketentuan</li>
                      <li>• Penggunaan layanan untuk aktivitas ilegal</li>
                      <li>• Tidak pembayaran selama 30 hari</li>
                      <li>• Aktivitas yang membahayakan sistem</li>
                      <li>• Pemberitahuan 30 hari untuk penghentian reguler</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-blue-600">Penghentian oleh Klien</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Pemberitahuan 30 hari sebelumnya</li>
                      <li>• Pembayaran untuk layanan yang sudah digunakan</li>
                      <li>• Proses transfer data dan migrasi</li>
                      <li>• Pengembalian biaya setup tidak berlaku</li>
                      <li>• Dokumentasi dan handover jika diperlukan</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="p-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
              <CardContent className="space-y-4">
                <h2 className="text-2xl font-bold mb-4">Hubungi Kami</h2>
                <p className="text-purple-100 leading-relaxed mb-6">
                  Untuk pertanyaan tentang Syarat dan Ketentuan ini, silakan hubungi tim legal kami:
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold mb-1">Email Legal:</p>
                    <p className="text-purple-100">legal@arkacipta.co.id</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Telepon:</p>
                    <p className="text-purple-100">082382466378</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Alamat Kantor:</p>
                    <p className="text-purple-100 text-sm">
                      Jalan Rawa Buntu Nomor 39, Kel. Rawabuntu, Kec. Serpong, 
                      Kota Tangerang Selatan, Prov. Banten 15318
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Jam Operasional:</p>
                    <p className="text-purple-100">Senin - Jumat, 09:00 - 18:00 WIB</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Footer Note */}
            <div className="text-center text-gray-600 text-sm p-6 bg-gray-50 rounded-lg">
              <p>
                Syarat dan Ketentuan ini merupakan kesepakatan hukum antara Anda dan 
                <span className="font-semibold text-purple-600"> PT ARKACIPTA ESTETIKA MEDIA</span>. 
                Dengan menggunakan layanan kami, Anda mengakui telah membaca, memahami, 
                dan menyetujui untuk terikat oleh syarat dan ketentuan ini.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}