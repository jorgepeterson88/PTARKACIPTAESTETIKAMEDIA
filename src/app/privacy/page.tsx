'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Shield, Eye, Lock, Database } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
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
            <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Privacy Policy
              </span>
            </h1>
            <p className="text-xl text-gray-600">
              Kebijakan Privasi <span className="font-semibold text-blue-600">PT ARKACIPTA ESTETIKA MEDIA</span>
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
                  Selamat datang di <span className="font-semibold text-blue-600">PT ARKACIPTA ESTETIKA MEDIA</span>. 
                  Kami sangat memperhatikan privasi dan keamanan data pribadi Anda. Kebijakan Privasi ini menjelaskan 
                  bagaimana kami mengumpulkan, menggunakan, melindungi, dan membagikan informasi pribadi Anda saat 
                  menggunakan layanan kami, termasuk Meta Marketing, WhatsApp Automation, dan solusi pertumbuhan bisnis lainnya.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Dengan menggunakan layanan kami, Anda setuju dengan praktik yang dijelaskan dalam kebijakan ini.
                </p>
              </CardContent>
            </Card>

            {/* Data Collection */}
            <Card className="p-8 bg-white shadow-lg">
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <Database className="w-6 h-6 text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Pengumpulan Data</h2>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Informasi yang Kami Kumpulkan</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span><strong>Data Identitas:</strong> Nama, email, nomor telepon, alamat perusahaan</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span><strong>Data Bisnis:</strong> Informasi perusahaan, industri, ukuran perusahaan</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span><strong>Data Penggunaan:</strong> Interaksi dengan website, layanan, dan kampanye marketing</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span><strong>Data Teknis:</strong> IP address, browser, device ID, cookies</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span><strong>Data Komunikasi:</strong> Isi pesan WhatsApp, email, dan bentuk komunikasi lainnya</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">Cara Pengumpulan</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Formulir pendaftaran dan kontak di website kami</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Interaksi dengan kampanye Meta Marketing</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Penggunaan layanan WhatsApp Automation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>Analytics dan tracking technologies</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Usage */}
            <Card className="p-8 bg-white shadow-lg">
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <Eye className="w-6 h-6 text-purple-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Penggunaan Data</h2>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-4">
                  Kami menggunakan data pribadi Anda untuk:
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Layanan & Support</h4>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• Menyediakan layanan Meta Marketing</li>
                      <li>• Mengelola WhatsApp Automation</li>
                      <li>• Memberikan support teknis</li>
                      <li>• Mengoptimalkan kampanye</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-purple-900 mb-2">Marketing & Komunikasi</h4>
                    <ul className="text-sm text-purple-800 space-y-1">
                      <li>• Mengirim newsletter dan update</li>
                      <li>• Memberikan penawaran khusus</li>
                      <li>• Menginformasikan produk baru</li>
                      <li>• Personalisasi konten</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-2">Analisis & Improvement</h4>
                    <ul className="text-sm text-green-800 space-y-1">
                      <li>• Menganalisis tren penggunaan</li>
                      <li>• Meningkatkan layanan</li>
                      <li>• Research & development</li>
                      <li>• Quality assurance</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-orange-50 rounded-lg">
                    <h4 className="font-semibold text-orange-900 mb-2">Kepatuhan & Keamanan</h4>
                    <ul className="text-sm text-orange-800 space-y-1">
                      <li>• Memenuhi kewajiban hukum</li>
                      <li>• Melindungi dari fraud</li>
                      <li>• Enforce terms of service</li>
                      <li>• Keamanan sistem</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Protection */}
            <Card className="p-8 bg-white shadow-lg">
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <Lock className="w-6 h-6 text-green-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Keamanan Data</h2>
                </div>
                
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-semibold text-blue-600">PT ARKACIPTA ESTETIKA MEDIA</span> 
                    berkomitmen untuk melindungi data pribadi Anda dengan implementasi:
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-green-600 font-bold text-sm">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">Enkripsi Data</h4>
                        <p className="text-gray-600 text-sm">Data dienkripsi selama transmisi dan penyimpanan</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-green-600 font-bold text-sm">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">Access Control</h4>
                        <p className="text-gray-600 text-sm">Hanya personil berwenang yang dapat mengakses data</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-green-600 font-bold text-sm">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">Regular Security Audits</h4>
                        <p className="text-gray-600 text-sm">Audit keamanan berkala untuk identifikasi vulnerability</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-green-600 font-bold text-sm">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">Compliance Standards</h4>
                        <p className="text-gray-600 text-sm">Mematuhi standar keamanan industri terkini</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* User Rights */}
            <Card className="p-8 bg-white shadow-lg">
              <CardContent className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Hak Anda Sebagai Pengguna</h2>
                
                <div className="space-y-4">
                  <div className="p-4 border-l-4 border-blue-600 bg-blue-50">
                    <h4 className="font-semibold text-blue-900 mb-2">Hak Akses</h4>
                    <p className="text-blue-800 text-sm">Anda berhak mengetahui data pribadi yang kami simpan tentang Anda</p>
                  </div>
                  
                  <div className="p-4 border-l-4 border-purple-600 bg-purple-50">
                    <h4 className="font-semibold text-purple-900 mb-2">Hak Koreksi</h4>
                    <p className="text-purple-800 text-sm">Anda dapat memperbarui atau mengkoreksi data yang tidak akurat</p>
                  </div>
                  
                  <div className="p-4 border-l-4 border-green-600 bg-green-50">
                    <h4 className="font-semibold text-green-900 mb-2">Hak Penghapusan</h4>
                    <p className="text-green-800 text-sm">Anda dapat meminta penghapusan data pribadi dalam kondisi tertentu</p>
                  </div>
                  
                  <div className="p-4 border-l-4 border-orange-600 bg-orange-50">
                    <h4 className="font-semibold text-orange-900 mb-2">Hak Pembatasan</h4>
                    <p className="text-orange-800 text-sm">Anda dapat membatasi pemrosesan data pribadi Anda</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="p-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <CardContent className="space-y-4">
                <h2 className="text-2xl font-bold mb-4">Hubungi Kami untuk Privasi</h2>
                <p className="text-blue-100 leading-relaxed mb-6">
                  Jika Anda memiliki pertanyaan tentang kebijakan privasi kami atau ingin melaksanakan hak Anda, 
                  silakan hubungi kami:
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-semibold mb-1">Email Privasi:</p>
                    <p className="text-blue-100">privacy@arkacipta.co.id</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Telepon:</p>
                    <p className="text-blue-100">082382466378</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Alamat:</p>
                    <p className="text-blue-100 text-sm">
                      Jalan Rawa Buntu Nomor 39, Kel. Rawabuntu, Kec. Serpong, 
                      Kota Tangerang Selatan, Prov. Banten 15318
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Waktu Respons:</p>
                    <p className="text-blue-100">14 hari kerja</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Footer Note */}
            <div className="text-center text-gray-600 text-sm">
              <p>
                Kebijakan Privasi ini berlaku untuk semua layanan <span className="font-semibold text-blue-600">PT ARKACIPTA ESTETIKA MEDIA</span> 
                dan dapat diperbarui dari waktu ke waktu untuk mencerminkan perubahan dalam praktik kami atau 
                persyaratan hukum yang berlaku.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}