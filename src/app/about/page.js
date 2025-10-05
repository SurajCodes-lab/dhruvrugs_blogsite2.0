import Header from '@/components/Header'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <main>
      <Header />
      
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16 space-y-6">
            <div className="inline-block glass-accent px-6 py-3 rounded-full">
              <span className="text-sm font-bold text-[#8b2635] uppercase tracking-widest">Our Story</span>
            </div>
            
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-[#1a1d29] tracking-tight">
              About DHRUV Rugs International
            </h1>
            
            <p className="text-lg text-[#2d3142] max-w-2xl mx-auto">
              Crafting Excellence Since 2020 - Second generation manufacturer and exporter of premium handcrafted rugs
            </p>
            
            <div className="flex items-center justify-center gap-4 pt-4">
              <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#8b2635] to-transparent"></div>
              <div className="w-2 h-2 rounded-full bg-[#d4a574]"></div>
              <div className="h-px w-20 bg-gradient-to-r from-transparent via-[#8b2635] to-transparent"></div>
            </div>
          </div>

          {/* Story Section */}
          <div className="mb-16">
            <div className="glass-card rounded-3xl p-12 md:p-16 max-w-5xl mx-auto shadow-xl">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1a1d29] mb-8 text-center">Our Story</h2>
              <div className="space-y-6 text-[#2d3142] text-lg leading-relaxed">
                <p>
                  It is our proud pleasure to present you our good designs with eye catching colour scheme. Dhruv Rugs International was established in 2020, and since then we've been crafting excellence in every thread.
                </p>
                <p>
                  Dhruv Rugs International is running by Mr. Pawan Maurya with Mrs. Babita Maurya. We are second generation of manufacturer and exporter of Hand knots, Handloom & Hand tufted and Woolen Carpets in India. We specialized in natural dyes carpets.
                </p>
                <p>
                  We get our carpets weaved by expert weavers and always use qualitative raw materials including good wool, viscose, silk etc. Our organization believes in making new ways and creating new products, striving to provide the best quality and most competitive rates in the industry.
                </p>
                <p>
                  Our company is moving towards the advancement in the path of prosperity, making an indelible mark in the industry by the virtue of its optimum quality products, which have a vivid and striking potential. We have always strived to provide the best product possible and most competitive rates in the industry.
                </p>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="glass-card rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#8b2635] to-[#c1666b] rounded-full mx-auto mb-6 flex items-center justify-center text-white text-3xl shadow-lg group-hover:scale-110 transition-transform">
                🎯
              </div>
              <h3 className="font-playfair text-2xl font-bold text-[#1a1d29] mb-4">Innovation</h3>
              <p className="text-[#2d3142] leading-relaxed">
                Our organization believes in making new ways and creating new products. We constantly strive to innovate while maintaining traditional craftsmanship techniques.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#d4a574] to-[#e6c79c] rounded-full mx-auto mb-6 flex items-center justify-center text-white text-3xl shadow-lg group-hover:scale-110 transition-transform">
                ⭐
              </div>
              <h3 className="font-playfair text-2xl font-bold text-[#1a1d29] mb-4">Quality Selection</h3>
              <p className="text-[#2d3142] leading-relaxed">
                We specialize in natural dyes carpets and always use qualitative raw materials including premium wool, viscose, and silk to ensure superior quality.
              </p>
            </div>

            <div className="glass-card rounded-2xl p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-20 h-20 bg-gradient-to-br from-[#8b2635] to-[#d4a574] rounded-full mx-auto mb-6 flex items-center justify-center text-white text-3xl shadow-lg group-hover:scale-110 transition-transform">
                🚀
              </div>
              <h3 className="font-playfair text-2xl font-bold text-[#1a1d29] mb-4">Prompt Service</h3>
              <p className="text-[#2d3142] leading-relaxed">
                We pride ourselves on supplying independent home furnishing retailers, chain stores & internet vendors with prompt and reliable service worldwide.
              </p>
            </div>
          </div>

          {/* Global Presence */}
          <div className="glass-card rounded-3xl p-12 mb-16 text-center shadow-xl">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1a1d29] mb-8">Global Presence</h2>
            <p className="text-lg text-[#2d3142] mb-8 max-w-4xl mx-auto leading-relaxed">
              We pride ourselves on supplying independent home furnishing retailers, chain stores & internet vendors throughout the US, Canada, Europe, Japan & Australia. Our range of offerings consists of the highest quality rugs with the most current fashion trends.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {["Germany", "U.A.E", "U.S.A", "U.K", "Australia", "Japan", "Italy", "Netherlands"].map((country) => (
                <div key={country} className="glass rounded-xl p-4 hover:glass-accent transition-all duration-300 hover:-translate-y-1">
                  <span className="text-[#1a1d29] font-semibold">{country}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Mission */}
          <div className="glass-card rounded-3xl p-12 mb-16 shadow-xl">
            <div className="text-center mb-8">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1a1d29]">Our Mission</h2>
            </div>
            <p className="text-lg text-[#2d3142] leading-relaxed text-center max-w-4xl mx-auto">
              Our mission is to develop a secured community that grows with changing times and to deliver every customer the skill sets of each craftsman. We operate as an extended family and welcome each talent that showcases creativity, leadership and commitment. Every moment, we live a dream of each artisan and connect them to million hearts worldwide.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-[#1a1d29] mb-8">Ready to Find Your Perfect Rug?</h2>
            <p className="max-w-4xl mx-auto text-lg text-[#2d3142] leading-relaxed mb-8">
              Explore our collection of Hand knots, Handloom & Hand tufted carpets crafted with natural dyes and premium materials.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#8b2635] to-[#c1666b] text-white font-semibold tracking-wider uppercase text-sm transition-all duration-300 hover:shadow-2xl hover:shadow-[#8b2635]/30 hover:-translate-y-1 rounded-lg"
            >
              Get in Touch
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}