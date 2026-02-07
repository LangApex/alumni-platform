import Image from 'next/image';

const studyResources = {
  title: 'Study Resources',
  description: 'Comprehensive study materials for IELTS, SAT, and college applications. Practice tests, essay templates, guides, and expert tips all in one place.'
};

export default function WorkshopPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
          Educational Resources
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          {studyResources.description}
        </p>
      </div>

      {/* Partner Resources Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Partner Resources</h2>
        
        {/* Maeda Card */}
        <div className="max-w-sm mx-auto">
          <div className="bg-white/50 backdrop-blur-sm rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative h-40 w-full bg-gray-100">
              <Image
                src="/images/resources/maeda.jpg"
                alt="Maeda - Alumni-run Consulting for Japanese College Applications"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">Maeda</h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                Alumni-run consulting for Japanese college applications. Expert guidance from those who've been through it.
              </p>
              <a
                href="https://t.me/maeda_japan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-white bg-[#c41e3a] hover:bg-[#a31830] rounded-md transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.535.223l.19-2.712 4.94-4.465c.215-.19-.047-.297-.332-.107L9.65 13.95l-2.66-.83c-.58-.183-.594-.582.124-.86l10.38-4c.504-.184.94.126.77.83z"/>
                </svg>
                Contact on Telegram
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-white/50 backdrop-blur-sm rounded-lg shadow-sm p-8">
        <h2 className="text-2xl font-semibold mb-4">Need Help with Your Studies?</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          Contact us for personalized guidance on IELTS preparation, SAT training, or college applications. Our experienced team is here to help you succeed.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://t.me/LangapexDombitNamangan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#0088cc] hover:bg-[#0077b3] gap-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.535.223l.19-2.712 4.94-4.465c.215-.19-.047-.297-.332-.107L9.65 13.95l-2.66-.83c-.58-.183-.594-.582.124-.86l10.38-4c.504-.184.94.126.77.83z"/>
            </svg>
            Contact Us on Telegram
          </a>
          <a
            href="tel:+998953035509"
            className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Us
          </a>
        </div>
      </div>
    </div>
  );
}