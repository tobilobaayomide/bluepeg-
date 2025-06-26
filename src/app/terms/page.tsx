"use client";

import { useState, useEffect } from "react";
import Footer from "@/components/Footer";

export default function TermsOfService() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <div className={`inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2 mb-6 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-white">Legal Information</span>
          </div>

          <h1 className={`text-4xl md:text-5xl font-black text-white mb-6 leading-tight transition-all duration-1000 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Terms of Service
          </h1>

          <p className={`text-lg text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Please read these terms and conditions carefully before using our website or services.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="prose prose-lg max-w-none">
            
            {/* Last Updated */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-8">
              <p className="text-blue-700 font-semibold">Last Updated: December 2024</p>
            </div>

            {/* Introduction */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                By accessing and using this website or our services, you accept and agree to be bound by the terms and provision 
                of this agreement. These Terms of Service ("Terms") govern your use of the Bluepeg website and services.
              </p>
              <p className="text-gray-700 leading-relaxed">
                If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            {/* Use License */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Use License</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Permission is granted to temporarily access the materials on Bluepeg's website for personal, 
                non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                This license shall automatically terminate if you violate any of these restrictions and may be terminated 
                by Bluepeg at any time.
              </p>
            </section>

            {/* Services */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Our Services</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Bluepeg provides industrial engineering solutions including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Instrumentation & Control systems</li>
                <li>Industrial Automation solutions</li>
                <li>Panel Solutions and electrical services</li>
                <li>Power Solutions and energy optimization</li>
                <li>Manpower Development and training programs</li>
                <li>Consulting and project management services</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                All services are provided according to separate service agreements and project specifications.
              </p>
            </section>

            {/* User Responsibilities */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. User Responsibilities</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                When using our website or services, you agree to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Provide accurate and truthful information</li>
                <li>Use the services only for lawful purposes</li>
                <li>Respect the intellectual property rights of others</li>
                <li>Not interfere with or disrupt the services</li>
                <li>Not attempt to gain unauthorized access to our systems</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </section>

            {/* Intellectual Property */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Intellectual Property</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The materials on Bluepeg's website are owned by or licensed to Bluepeg and are protected by applicable 
                copyright and trademark law. All trademarks, service marks, and logos used on this website are trademarks 
                or registered trademarks of their respective owners.
              </p>
              <p className="text-gray-700 leading-relaxed">
                You may not use our trademarks, service marks, or logos without our prior written consent.
              </p>
            </section>

            {/* Disclaimers */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Disclaimers</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The information on this website is provided on an "as is" basis. To the fullest extent permitted by law, 
                Bluepeg excludes all representations, warranties, conditions, and terms, whether express or implied.
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>We do not guarantee the accuracy or completeness of website content</li>
                <li>We do not warrant that the website will be available or error-free</li>
                <li>We are not responsible for any loss or damage arising from your use of the website</li>
              </ul>
            </section>

            {/* Limitation of Liability */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                In no event shall Bluepeg or its suppliers be liable for any damages (including, without limitation, 
                damages for loss of data or profit, or due to business interruption) arising out of the use or inability 
                to use the materials on Bluepeg's website.
              </p>
              <p className="text-gray-700 leading-relaxed">
                This limitation applies even if Bluepeg or an authorized representative has been notified orally or in 
                writing of the possibility of such damage.
              </p>
            </section>

            {/* Governing Law */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Governing Law</h2>
              <p className="text-gray-700 leading-relaxed">
                These terms and conditions are governed by and construed in accordance with the laws of Nigeria, 
                and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
              </p>
            </section>

            {/* Service Agreements */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Service Agreements</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Professional services provided by Bluepeg are governed by separate service agreements that include:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Project scope and deliverables</li>
                <li>Timeline and milestones</li>
                <li>Payment terms and conditions</li>
                <li>Quality assurance and warranty provisions</li>
                <li>Confidentiality and data protection clauses</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                These website terms supplement but do not replace individual service agreements.
              </p>
            </section>

            {/* Contact Information */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>Email:</strong> legal@bluepeg.com</p>
                <p className="text-gray-700 mb-2"><strong>Phone:</strong> +234 800 000 0000</p>
                <p className="text-gray-700"><strong>Address:</strong> Lagos, Nigeria</p>
              </div>
            </section>

            {/* Changes to Terms */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                Bluepeg reserves the right to revise these terms of service at any time without notice. 
                By using this website, you are agreeing to be bound by the then-current version of these terms of service.
              </p>
            </section>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
