export default function About() {
  return (
    <div className="min-h-screen bg-[#111722] text-white">
      <div className="px-4 sm:px-10 lg:px-40 flex justify-center py-5">
        <div className="max-w-[960px] flex-1">
          {/* Breadcrumb */}
          <div className="flex flex-wrap gap-2 p-4">
            <a className="text-[#93a6c8] text-base font-medium leading-normal" href="#">Home</a>
            <span className="text-[#93a6c8] text-base font-medium leading-normal">/</span>
            <span className="text-white text-base font-medium leading-normal">About Us</span>
          </div>

          {/* Header Section */}
          <div className="flex flex-wrap justify-between gap-3 p-4">
            <div className="flex min-w-72 flex-col gap-3">
              <p className="text-white tracking-light text-[32px] font-bold leading-tight">About Us</p>
              <p className="text-[#93a6c8] text-sm font-normal leading-normal">
                Learn more about our mission, values, and the team dedicated to providing comprehensive financial and tax solutions.
              </p>
            </div>
          </div>

          {/* Our Story Section */}
          <div className="@container">
            <div className="flex flex-col gap-6 px-4 py-10 @[480px]:gap-8 @[864px]:flex-row">
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl @[480px]:h-auto @[480px]:min-w-[400px] @[864px]:w-full"
                style={{
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCrZfxVVkfsxAsRagv4jwGWg7MJWkkRwSprQgaREP2Qz0kn0aRXCrKlPA7n5UUzC2tt_biN4txA8Ygp6jUe5zzFdsCqBnxM3WQzEeQ8YjxiXCgLiaHa4LZO_Fb2aG8NjDkro_mpvJBVKkLqyLOgdpJLz0yFVhVabqnY8nDSEp1_UDVhxndjh7cGVpm-BtAV-AnuUbf5Ad7jL30D0yW1brh8fPwf8ZDOm-7Se5XmORE5nb7nvNj1vqDDJTXJGICrzH7vM0JaP5HmNwMW")`
                }}
              ></div>
              <div className="flex flex-col gap-6 @[480px]:min-w-[400px] @[480px]:gap-8 @[864px]:justify-center">
                <div className="flex flex-col gap-2 text-left">
                  <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                    Our Story
                  </h1>
                  <h2 className="text-white text-sm font-normal leading-normal @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal">
                    Founded with a vision of professional financial excellence, FinTax Solutions has established itself as a comprehensive partner for GST compliance, tax planning, audit services, and complete financial management solutions. With over 10 years of experience, we have proudly served 500+ happy clients with a 99% success rate. Our team of certified professionals is dedicated to providing personalized service, ensuring timely delivery, and maintaining the highest standards of data security while offering 24/7 support for all your financial needs.
                  </h2>
                </div>
                <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#1650bb] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em]">
                  <span className="truncate">Meet Our Team</span>
                </button>
              </div>
            </div>
          </div>

          {/* Why Choose Us Section */}
          <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Why Choose Us</h2>
          <div className="flex flex-col gap-10 px-4 py-10 @container">
            <div className="flex flex-col gap-4">
              <h1 className="text-white tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
                Our Core Values
              </h1>
              <p className="text-white text-base font-normal leading-normal max-w-[720px]">
                At FinTax Solutions, we are guided by a set of core values that ensure we deliver the best possible service to our clients.
              </p>
            </div>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-0">
              <div className="flex flex-1 gap-3 rounded-lg border border-[#344565] bg-[#1a2332] p-4 flex-col">
                <div className="text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M208,40H48A16,16,0,0,0,32,56v58.78c0,89.61,75.82,119.34,91,124.39a15.53,15.53,0,0,0,10,0c15.2-5.05,91-34.78,91-124.39V56A16,16,0,0,0,208,40Zm0,74.79c0,78.42-66.35,104.62-80,109.18-13.53-4.51-80-30.69-80-109.18V56H208ZM82.34,141.66a8,8,0,0,1,11.32-11.32L112,148.68l50.34-50.34a8,8,0,0,1,11.32,11.32l-56,56a8,8,0,0,1-11.32,0Z" />
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-white text-base font-bold leading-tight">Timely Delivery</h2>
                  <p className="text-[#93a6c8] text-sm font-normal leading-normal">
                    All financial deadlines met with precision, ensuring your business stays compliant and on track.
                  </p>
                </div>
              </div>
              <div className="flex flex-1 gap-3 rounded-lg border border-[#344565] bg-[#1a2332] p-4 flex-col">
                <div className="text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z" />
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-white text-base font-bold leading-tight">Expert Team</h2>
                  <p className="text-[#93a6c8] text-sm font-normal leading-normal">
                    Certified professionals with years of experience in financial management and compliance.
                  </p>
                </div>
              </div>
              <div className="flex flex-1 gap-3 rounded-lg border border-[#344565] bg-[#1a2332] p-4 flex-col">
                <div className="text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M244.8,150.4a8,8,0,0,1-11.2-1.6A51.6,51.6,0,0,0,192,128a8,8,0,0,1-7.37-4.89,8,8,0,0,1,0-6.22A8,8,0,0,1,192,112a24,24,0,1,0-23.24-30,8,8,0,1,1-15.5-4A40,40,0,1,1,219,117.51a67.94,67.94,0,0,1,27.43,21.68A8,8,0,0,1,244.8,150.4ZM190.92,212a8,8,0,1,1-13.84,8,57,57,0,0,0-98.16,0,8,8,0,1,1-13.84-8,72.06,72.06,0,0,1,33.74-29.92,48,48,0,1,1,58.36,0A72.06,72.06,0,0,1,190.92,212ZM128,176a32,32,0,1,0-32-32A32,32,0,0,0,128,176ZM72,120a8,8,0,0,0-8-8A24,24,0,1,1,87.24,82a8,8,0,1,0,15.5-4A40,40,0,1,0,37,117.51,67.94,67.94,0,0,0,9.6,139.19a8,8,0,1,0,12.8,9.61A51.6,51.6,0,0,1,64,128,8,8,0,0,0,72,120Z" />
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-white text-base font-bold leading-tight">Growth Focused</h2>
                  <p className="text-[#93a6c8] text-sm font-normal leading-normal">
                    Strategic advice for business growth and profitability, tailored to your specific needs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Our Achievements Section */}
          <h2 className="text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Our Achievements</h2>
          <div className="flex flex-wrap gap-4 p-4">
            <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-[#243047]">
              <p className="text-white text-base font-medium leading-normal">Happy Clients</p>
              <p className="text-white tracking-light text-2xl font-bold leading-tight">500+</p>
              <p className="text-[#0bda5e] text-base font-medium leading-normal">Growing</p>
            </div>
            <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-[#243047]">
              <p className="text-white text-base font-medium leading-normal">Years Experience</p>
              <p className="text-white tracking-light text-2xl font-bold leading-tight">10+</p>
              <p className="text-[#0bda5e] text-base font-medium leading-normal">Proven</p>
            </div>
            <div className="flex min-w-[158px] flex-1 flex-col gap-2 rounded-xl p-6 bg-[#243047]">
              <p className="text-white text-base font-medium leading-normal">Success Rate</p>
              <p className="text-white tracking-light text-2xl font-bold leading-tight">99%</p>
              <p className="text-[#0bda5e] text-base font-medium leading-normal">Excellence</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="@container">
            <div className="flex flex-col justify-end gap-6 px-4 py-10 @[480px]:gap-8 @[480px]:px-10 @[480px]:py-20">
              <div className="flex flex-col gap-2 text-center">
                <h1 className="text-white tracking-light text-[32px] font-bold leading-tight @[480px]:text-4xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em] max-w-[720px]">
                  Ready to Experience Professional Financial Excellence?
                </h1>
                <p className="text-white text-base font-normal leading-normal max-w-[720px]">
                  Contact us today to schedule your free consultation and discover how FinTax Solutions can help achieve your financial goals.
                </p>
              </div>
              <div className="flex flex-1 justify-center">
                <div className="flex justify-center">
                  <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-[#1650bb] text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base @[480px]:font-bold @[480px]:leading-normal @[480px]:tracking-[0.015em] grow">
                    <span className="truncate">Schedule Free Consultation</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
