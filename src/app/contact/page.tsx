export default function Contact() {
  return (
    <div className="min-h-screen bg-[#111722] text-white">
      <div className="px-4 sm:px-10 lg:px-40 flex justify-center py-5">
        <div className="max-w-[960px] flex-1">
          {/* Breadcrumb */}
          <div className="flex flex-wrap gap-2 p-4">
            <a className="text-[#93a6c8] text-base font-medium leading-normal" href="#">Home</a>
            <span className="text-[#93a6c8] text-base font-medium leading-normal">/</span>
            <span className="text-white text-base font-medium leading-normal">Contact</span>
          </div>

          {/* Header Section */}
          <div className="flex flex-wrap justify-between gap-3 p-4">
            <div className="flex min-w-72 flex-col gap-3">
              <p className="text-white tracking-light text-[32px] font-bold leading-tight">Contact Us</p>
              <p className="text-[#93a6c8] text-sm font-normal leading-normal">
                We&apos;re here to help you with your financial needs. Reach out to us through the form below for consultation scheduling.
              </p>
            </div>
          </div>

          {/* Main Contact Form */}
          <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Main Contact</h3>
          <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
              <input
                placeholder="Your Name"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#243047] focus:border-none h-14 placeholder:text-[#93a6c8] p-4 text-base font-normal leading-normal"
              />
            </label>
          </div>
          <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
              <input
                placeholder="Your Email"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#243047] focus:border-none h-14 placeholder:text-[#93a6c8] p-4 text-base font-normal leading-normal"
              />
            </label>
          </div>
          <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
              <input
                placeholder="Subject"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#243047] focus:border-none h-14 placeholder:text-[#93a6c8] p-4 text-base font-normal leading-normal"
              />
            </label>
          </div>
          <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
            <label className="flex flex-col min-w-40 flex-1">
              <textarea
                placeholder="Your Message"
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-white focus:outline-0 focus:ring-0 border-none bg-[#243047] focus:border-none min-h-36 placeholder:text-[#93a6c8] p-4 text-base font-normal leading-normal"
              ></textarea>
            </label>
          </div>
          <div className="flex px-4 py-3 justify-start">
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#1650bb] text-white text-sm font-bold leading-normal tracking-[0.015em]">
              <span className="truncate">Send Message</span>
            </button>
          </div>

          {/* Contact Information */}
          <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Contact Information</h3>
          <div className="flex items-center gap-4 bg-[#111722] px-4 min-h-[72px] py-2">
            <div className="text-white flex items-center justify-center rounded-lg bg-[#243047] shrink-0 size-12">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z" />
              </svg>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-white text-base font-medium leading-normal line-clamp-1">Phone</p>
              <p className="text-[#93a6c8] text-sm font-normal leading-normal line-clamp-2">+91 7907238486</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-[#111722] px-4 min-h-[72px] py-2">
            <div className="text-white flex items-center justify-center rounded-lg bg-[#243047] shrink-0 size-12">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z" />
              </svg>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-white text-base font-medium leading-normal line-clamp-1">Email</p>
              <p className="text-[#93a6c8] text-sm font-normal leading-normal line-clamp-2">mailbox.fintax@gmail.com</p>
            </div>
          </div>

          {/* Alternative Contact Methods */}
          <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Alternative Contact Methods</h3>
          <div className="flex items-center gap-4 bg-[#111722] px-4 min-h-[72px] py-2">
            <div className="text-white flex items-center justify-center rounded-lg bg-[#243047] shrink-0 size-12">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M224,88H175.4l8.47-46.57a8,8,0,0,0-15.74-2.86l-9,49.43H111.4l8.47-46.57a8,8,0,0,0-15.74-2.86L95.14,88H48a8,8,0,0,0,0,16H92.23L83.5,152H32a8,8,0,0,0,0,16H80.6l-8.47,46.57a8,8,0,0,0,6.44,9.3A7.79,7.79,0,0,0,80,224a8,8,0,0,0,7.86-6.57l9-49.43H144.6l-8.47,46.57a8,8,0,0,0,6.44,9.3A7.79,7.79,0,0,0,144,224a8,8,0,0,0,7.86-6.57l9-49.43H208a8,8,0,0,0,0-16H163.77l8.73-48H224a8,8,0,0,0,0-16Zm-76.5,64H99.77l8.73-48h47.73Z" />
              </svg>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-white text-base font-medium leading-normal line-clamp-1">Social Media</p>
              <p className="text-[#93a6c8] text-sm font-normal leading-normal line-clamp-2">Connect with us on social media for updates and news.</p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-[#111722] px-4 min-h-[72px] py-2">
            <div className="text-white flex items-center justify-center rounded-lg bg-[#243047] shrink-0 size-12">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128ZM84,116a12,12,0,1,0,12,12A12,12,0,0,0,84,116Zm88,0a12,12,0,1,0,12,12A12,12,0,0,0,172,116Zm60,12A104,104,0,0,1,79.12,219.82L45.07,231.17a16,16,0,0,1-20.24-20.24l11.35-34.05A104,104,0,1,1,232,128Zm-16,0A88,88,0,1,0,51.81,172.06a8,8,0,0,1,.66,6.54L40,216,77.4,203.53a7.85,7.85,0,0,1,2.53-.42,8,8,0,0,1,4,1.08A88,88,0,0,0,216,128Z" />
              </svg>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-white text-base font-medium leading-normal line-clamp-1">Live Chat</p>
              <p className="text-[#93a6c8] text-sm font-normal leading-normal line-clamp-2">Chat with a representative in real-time.</p>
            </div>
          </div>

          {/* FAQ */}
          <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Frequently Asked Questions</h3>
          <div className="flex items-center gap-4 bg-[#111722] px-4 min-h-14 justify-between">
            <p className="text-white text-base font-normal leading-normal flex-1 truncate">What services do you offer?</p>
            <div className="shrink-0">
              <div className="text-white flex size-7 items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-[#111722] px-4 min-h-14 justify-between">
            <p className="text-white text-base font-normal leading-normal flex-1 truncate">How can I schedule a consultation?</p>
            <div className="shrink-0">
              <div className="text-white flex size-7 items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-[#111722] px-4 min-h-14 justify-between">
            <p className="text-white text-base font-normal leading-normal flex-1 truncate">What are your fees?</p>
            <div className="shrink-0">
              <div className="text-white flex size-7 items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
                </svg>
              </div>
            </div>
          </div>

          {/* Service Areas */}
          <h3 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Service Areas</h3>
          <p className="text-white text-base font-normal leading-normal pb-3 pt-1 px-4">We provide comprehensive financial services. Contact us to discuss your specific needs.</p>
        </div>
      </div>
    </div>
  );
}
