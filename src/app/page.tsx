'use client';

import { useState } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-[#111722] text-white">
      {/* Header */}
      <header className="relative bg-[#111722] border-b border-[#243047]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-xl font-bold text-white">FinTax Solutions</h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-[#93a6c8] hover:text-white transition-colors">Home</a>
              <a href="#services" className="text-[#93a6c8] hover:text-white transition-colors">Services</a>
              <a href="#about" className="text-[#93a6c8] hover:text-white transition-colors">About</a>
              <a href="#contact" className="text-[#93a6c8] hover:text-white transition-colors">Contact</a>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex">
              <button className="bg-[#1650bb] hover:bg-[#1446a0] text-white px-6 py-2 rounded-lg font-medium transition-colors">
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-[#93a6c8] hover:text-white focus:outline-none focus:text-white transition-colors"
                aria-label="Toggle menu"
              >
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#1a2332] border-t border-[#243047]">
            <div className="px-4 pt-2 pb-4 space-y-2">
              <a 
                href="#home" 
                className="block px-3 py-2 text-[#93a6c8] hover:text-white hover:bg-[#243047] rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#services" 
                className="block px-3 py-2 text-[#93a6c8] hover:text-white hover:bg-[#243047] rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#about" 
                className="block px-3 py-2 text-[#93a6c8] hover:text-white hover:bg-[#243047] rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#contact" 
                className="block px-3 py-2 text-[#93a6c8] hover:text-white hover:bg-[#243047] rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <div className="pt-2">
                <button className="w-full bg-[#1650bb] hover:bg-[#1446a0] text-white px-4 py-2 rounded-lg font-medium transition-colors">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="px-4 sm:px-10 lg:px-20 xl:px-40 flex justify-center py-8 lg:py-12">
        <div className="max-w-7xl w-full">
          <div className="@container">
            <div className="@[480px]:p-4">
              <div
                className="flex min-h-[480px] lg:min-h-[600px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-xl lg:rounded-2xl items-start justify-end px-4 pb-10 @[480px]:px-10 lg:px-16 xl:px-20"
                style={{
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDTFidHqECEVwGNhQ3SVQFVM_LdRKJ1MxjSJet50e9g5r11Vg49KoupBcJ7aywqi9uVcWuhm9xSpuuEvBv2P-9HoJMiC4zNNywbyWa-DiVUl2nWaA5n0tZjqk1C34_7jBfM0vlV_upybREft5QKAaCqnzlVoWH0hfwxh7orM-5FgjaqAdezeNbNefPDN1h2zsb8rnMOhf6VEezgOsnvQirYNsS5I69XRHAahL3bysYZbdi_Ej5BV2QuRNpRlxuAR0TOY9ZKWke8t0Zw")`
                }}
              >
                <div className="flex flex-col gap-4 lg:gap-6 text-left max-w-4xl">
                  <h1 className="text-white text-4xl lg:text-6xl xl:text-7xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl @[480px]:font-black @[480px]:leading-tight @[480px]:tracking-[-0.033em]">
                    Professional Financial Excellence
                  </h1>
                  <h2 className="text-white text-base lg:text-lg xl:text-xl font-normal leading-relaxed @[480px]:text-base @[480px]:font-normal @[480px]:leading-normal max-w-3xl">
                    Your comprehensive partner for GST compliance, tax planning, audit services, and complete financial management solutions.
                  </h2>
                </div>
                <div className="flex flex-wrap gap-4 lg:gap-6">
                  <button className="flex min-w-[140px] lg:min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 lg:h-14 px-6 lg:px-8 bg-[#1650bb] hover:bg-[#1446a0] transition-colors text-white text-sm lg:text-base font-bold leading-normal tracking-[0.015em]">
                    <span className="truncate">Schedule Free Consultation</span>
                  </button>
                  <button className="flex min-w-[140px] lg:min-w-[180px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 lg:h-14 px-6 lg:px-8 bg-[#243047] hover:bg-[#2d3a52] transition-colors text-white text-sm lg:text-base font-bold leading-normal tracking-[0.015em]">
                    <span className="truncate">Explore Services</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact Section */}
      <section id="about" className="px-4 sm:px-10 lg:px-20 xl:px-40 flex justify-center">
        <div className="max-w-7xl w-full">
          <div className="py-8 lg:py-16">
            <div className="text-center mb-8 lg:mb-12">
              <h2 className="text-white text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-[-0.015em] mb-4">Our Impact</h2>
              <p className="text-[#93a6c8] text-lg lg:text-xl max-w-2xl mx-auto">Delivering exceptional results and building lasting partnerships with our clients</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              <div className="flex flex-col items-center gap-4 rounded-2xl p-8 lg:p-10 bg-[#243047] hover:bg-[#2d3a52] transition-colors">
                <div className="text-center">
                  <p className="text-[#1650bb] text-5xl lg:text-6xl font-bold leading-tight mb-2">500+</p>
                  <p className="text-white text-lg lg:text-xl font-medium leading-normal">Happy Clients</p>
                  <p className="text-[#93a6c8] text-sm lg:text-base mt-2">Trusted by businesses nationwide</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-4 rounded-2xl p-8 lg:p-10 bg-[#243047] hover:bg-[#2d3a52] transition-colors">
                <div className="text-center">
                  <p className="text-[#1650bb] text-5xl lg:text-6xl font-bold leading-tight mb-2">10+</p>
                  <p className="text-white text-lg lg:text-xl font-medium leading-normal">Years Experience</p>
                  <p className="text-[#93a6c8] text-sm lg:text-base mt-2">Decade of financial expertise</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-4 rounded-2xl p-8 lg:p-10 bg-[#243047] hover:bg-[#2d3a52] transition-colors">
                <div className="text-center">
                  <p className="text-[#1650bb] text-5xl lg:text-6xl font-bold leading-tight mb-2">99%</p>
                  <p className="text-white text-lg lg:text-xl font-medium leading-normal">Success Rate</p>
                  <p className="text-[#93a6c8] text-sm lg:text-base mt-2">Consistently delivering results</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-4 sm:px-10 lg:px-20 xl:px-40 flex justify-center">
        <div className="max-w-7xl w-full">
          <div className="py-8 lg:py-16">
            <div className="text-center mb-8 lg:mb-12">
              <h2 className="text-white text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-[-0.015em] mb-4">Our Services</h2>
              <p className="text-[#93a6c8] text-lg lg:text-xl max-w-3xl mx-auto">Comprehensive financial solutions tailored to meet your business needs and ensure regulatory compliance</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
              <div className="group flex flex-col gap-4 p-6 bg-[#243047] rounded-2xl hover:bg-[#2d3a52] transition-all duration-300 hover:scale-105">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                  style={{
                    backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuB8qj8dgf_g13tECUO59REg4frzr0Lz5hMH7edamlqvs0s5CmpVeOngUCtD-kYTVAeez4PyYoQIU77oHBJc7IfqL9vUIJbALtm6VJgJ-VDPRyOAtKjOJWxqUCjEs0mX9Ra3L4tdm3EyZMeF_XQIx5ChpS9nlqy8TdZm7Bz4cbQmaLXPPyQys0HIDRSyrse_LhdeSm7nhBDDqONwdJgtEfeoRlWHDYgTf66rngp2FaDdNFAL3Vhe4cAKX-rZxdXVukACgUEKoUG91viK")`
                  }}
                ></div>
                <h3 className="text-white text-lg font-semibold leading-normal">GST Services</h3>
                <p className="text-[#93a6c8] text-sm leading-relaxed">Complete GST compliance and filing solutions</p>
              </div>
              <div className="group flex flex-col gap-4 p-6 bg-[#243047] rounded-2xl hover:bg-[#2d3a52] transition-all duration-300 hover:scale-105">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                  style={{
                    backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAPIGisH9eqTDyKrM0U0iZ9TkujZnJ0A5itGYgdTNhfA2u7B46acvJyxpNMQu6WTjDlTA9-Tm5GFtpsDN6eeJzdzf4g9us2mx86MyiQ6iY87CWmczN_wWZnRDtb-J0NM2lTwh_97KNiHn0Muipef5eu1pW4Qsq9uopHdrMO0mL_V53YQjoCVoey-y8yBbR50RtJsqztfzaNIbNW98I6wXnmQuHAEERvmTim5jdl6m8JNojiagyoTJCy8mwPF4Gv2ZlJ1wy3YmKwynMu")`
                  }}
                ></div>
                <h3 className="text-white text-lg font-semibold leading-normal">Income Tax Services</h3>
                <p className="text-[#93a6c8] text-sm leading-relaxed">Expert tax planning and filing assistance</p>
              </div>
              <div className="group flex flex-col gap-4 p-6 bg-[#243047] rounded-2xl hover:bg-[#2d3a52] transition-all duration-300 hover:scale-105">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                  style={{
                    backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAil13aTabWBzNRWqZj09n1xq035gALhGgjEzsm7HUZw-DN08DxEBGLWu9cIEvbERTodFnMefQelkSDXKbhrlcdhk3Kcs6lDCdYyrn6kzt4kxyEgAmLy5YnrjeX6gSqFynns2Q0wsq1EDwZkYxP1C4IYPdtUEzVCOtX8vdhEKMFyflUu5dODO2isOP76SkX8AgU1Yt6zBQae2wqHZpSfG2Beeysvo7AqyMocWjCtZwY5D-NDpxDN8croALPbp0m-fdoREWSrIjYug74")`
                }}
                ></div>
                <h3 className="text-white text-lg font-semibold leading-normal">TDS Services</h3>
                <p className="text-[#93a6c8] text-sm leading-relaxed">Professional TDS compliance and reporting</p>
              </div>
              <div className="group flex flex-col gap-4 p-6 bg-[#243047] rounded-2xl hover:bg-[#2d3a52] transition-all duration-300 hover:scale-105">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                  style={{
                    backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDQ_cDAlEE0SeH3LKlkxO1qv1KS86oOhVoOfoL3wzJB9ggxX2DfU4ftd4s33xij0zEg6T_emwJmmsqWzk04r_TFMedx5p1Nz5CQCihdTz-woitabndAfQIV9oZJ16lv9N0DRWFMlz9ofuwdKnyyyYi2HSTYysnRFmAbFOxF1jh5zw5-JKFZVrD1u-NXVTdthm6o7Kvpg4Gpuziafj-4-CWAukov6uLEO85OVz-8x2lcpYu7OQ_dDTcPyp3cjdiMbn3eV5DXGAeSTpsx")`
                  }}
                ></div>
                <h3 className="text-white text-lg font-semibold leading-normal">Financial Accounting</h3>
                <p className="text-[#93a6c8] text-sm leading-relaxed">Complete bookkeeping and accounting services</p>
              </div>
              <div className="group flex flex-col gap-4 p-6 bg-[#243047] rounded-2xl hover:bg-[#2d3a52] transition-all duration-300 hover:scale-105">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                  style={{
                    backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAJ-2mSa_MDE4UlvlVG-DM-ebExY4YYBLrUqYzDw6WR5RYdm4lmrssrcxlCj0M_2BDsXkr5KXTppvv5lSucIW7EMwsJkrgONFssPjIRjae9oEQZiYGQ7jZcUw1ivNYwYjm4tzK-K9HRDsrtzyTf58YKBREwfCk69EALTVrKGHnHOhWqRiLF554Hb2Qm0DUygcseREiOdVgkoxLzOpug_ZZm2K37J__hB2vAe55Dp_Oe3EWZHbM_5MwcaiGDQqeB2CNCjUF4ADnbapQw")`
                  }}
                ></div>
                <h3 className="text-white text-lg font-semibold leading-normal">Payroll & Compliance</h3>
                <p className="text-[#93a6c8] text-sm leading-relaxed">Efficient payroll management solutions</p>
              </div>
              <div className="group flex flex-col gap-4 p-6 bg-[#243047] rounded-2xl hover:bg-[#2d3a52] transition-all duration-300 hover:scale-105">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                  style={{
                    backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAT5iTLbxLl-ObU7RBQiCyjI9pGPOHVRx18PNfpl9ZBgqubaHAZ11JREUQDTFCrKB3oKNwQe-R-WW8Nf1CGSPZp9Iq7xxtninROKqDGZaACoOxzZmwWM4sUyaRqNoQ3h2Kv6UhZ2S9nb6hhdH8WGUvAVHozdvABOnxONoHEzsPS9RhqBPUbf5KEue6i83VZU92P6wxGKsRZTyHncIwCdfhj4v8H8W8fMyxhvS_fzUKRIuv7tMRwcludlPTTeXgZH3BRlP3BTZv93dE_")`
                  }}
                ></div>
                <h3 className="text-white text-lg font-semibold leading-normal">Back Office Operations</h3>
                <p className="text-[#93a6c8] text-sm leading-relaxed">Streamlined business process management</p>
              </div>
              <div className="group flex flex-col gap-4 p-6 bg-[#243047] rounded-2xl hover:bg-[#2d3a52] transition-all duration-300 hover:scale-105">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                  style={{
                    backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuANXgho1H05w4uBJWABr-2ZIWJWx8C1hoZsFXHCbiTf7HEw4teLtKSyZQkLdqIhXW5OjhfCLHLEHWcvRb6EH8IXhiR4w4HlLKTAUfFh47c89yti1S2QiB4XS_KiV_tgMOrnuyJ1aECxSqxsNjl0tuIZdOQl1e3_82sFE6RJozC45Cub3dMg0Dfy-XKp0Y02F8Yi2LdMjCVcpXx_DGRSNxpVfOJGS6Ku2TDlVT-MfYka4MZrCl8-9GQ3AoXMmKdbbh_ucOVBA6LzHF9_")`
                  }}
                ></div>
                <h3 className="text-white text-lg font-semibold leading-normal">Business Registrations</h3>
                <p className="text-[#93a6c8] text-sm leading-relaxed">Company incorporation and licensing</p>
              </div>
              <div className="group flex flex-col gap-4 p-6 bg-[#243047] rounded-2xl hover:bg-[#2d3a52] transition-all duration-300 hover:scale-105">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                  style={{
                    backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCLLRDAbRtHwIkMj2-9KNAsA_ZsH4bH7GypNzJkSSWVvSlrt-XYWvm6Q_rUWI8_udECRQ0pjS69AfSqCpszTJiOt_pf8R16gcyGYPqxwVV00rhJs0LnGbAXsVedZudRCAYsLNoX7bEDspQ0up0oCG3YnTD81uCuWym_d21cZS5Q7h8rVF1xMII-ktDH84b5-jshbYIesTWXPZWn3n6CWKhrUW8T-DhHmCynXbmSZcs5nzNL2Z9BXk-sS4_m3gjPbL4LBtSdwIEyn4nH")`
                  }}
                ></div>
                <h3 className="text-white text-lg font-semibold leading-normal">Audit & Assurance</h3>
                <p className="text-[#93a6c8] text-sm leading-relaxed">Thorough audit and compliance services</p>
              </div>
              <div className="group flex flex-col gap-4 p-6 bg-[#243047] rounded-2xl hover:bg-[#2d3a52] transition-all duration-300 hover:scale-105">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                  style={{
                    backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDVU5Ie3StZ8LoIo8qPQmbV8Hn_MRrXeDdejhukjQ89HiMO8CLIESkk0KZSZBsAUGV14SSHByOPBqBPRS9Wh-6G-o378x1YUjHiGwO2d7xyrTFzG62eqy1n9ZCsnq4kgG0-OQH7tHXA-SBGHEwSUgjyg9DyfF2OrXq_-G5ELZVEFkTPcwAaHlPIrcoWAD57ejQBGc69zqHlxl3o1-4R0y9rhJUWnbT9evkJIWmZ1-1o2i-mCZXpPqkQO2yW1_9yx27Cqvz6DQFyfoyd")`
                  }}
                ></div>
                <h3 className="text-white text-lg font-semibold leading-normal">Project Reports & Financial Statements</h3>
                <p className="text-[#93a6c8] text-sm leading-relaxed">Comprehensive financial reporting solutions</p>
              </div>
              <div className="group flex flex-col gap-4 p-6 bg-[#243047] rounded-2xl hover:bg-[#2d3a52] transition-all duration-300 hover:scale-105">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                  style={{
                    backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCHZlBaR0q0NCUEYwUdSt_h-FcPPjDDpdF2hRZi0nmD3YVRgrhc7pOWLXUOy7SyFq5Qp-uxfcll09Uc8nMO9BwlUFEwhDpqF05OJ022huOPoBXpoY78THE8LeJdCjDqyaWQl_so49O5ML5LnDG2ZuliZ3RqinvNmTe0aGit86GWRVlQjDwgOv93GpVj0fTGIjiExQ50ZHZh8gWxsRC-zTm48k3kDJozTbiwzXL8VaUyRy1PKkPXZFr2qn4_0py_ffLt7Sv5yOTXB7iR")`
                  }}
                ></div>
                <h3 className="text-white text-lg font-semibold leading-normal">Investment & Wealth Management</h3>
                <p className="text-[#93a6c8] text-sm leading-relaxed">Strategic investment planning and management</p>
              </div>
              <div className="group flex flex-col gap-4 p-6 bg-[#243047] rounded-2xl hover:bg-[#2d3a52] transition-all duration-300 hover:scale-105">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                  style={{
                    backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAko-PDB3U1YgVKCGvyPOWklobHhmvuicLwEYtOT7a-QsUrCRaU4_2ko9LnduLkKCBoydsL37tyyNnxeu-5nmksy1RBimh7ejH8P7oDx1YEqzia8kdokBRxhCG0hjkJXIcXeLcIVO5EGs4d3P3uo-rxNT7ZSYdCSHcmnuQEZy7D_dLJ9bm5gHa2jJVJJoXphO9feTa7iTwbX3qK66dRE922aAWi9N3_DsHlYbff-iQ2ndNrDoChP8fxPJ9zp1UhkfzaRwQjyCHTEFmR")`
                  }}
                ></div>
                <h3 className="text-white text-lg font-semibold leading-normal">Startup & Business Consulting</h3>
                <p className="text-[#93a6c8] text-sm leading-relaxed">Expert guidance for business growth</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="contact" className="px-4 sm:px-10 lg:px-20 xl:px-40 flex justify-center">
        <div className="max-w-7xl w-full">
          <div className="py-8 lg:py-16">
            <div className="text-center mb-8 lg:mb-12">
              <h2 className="text-white text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-[-0.015em] mb-4">Why Choose FinTax Solutions</h2>
              <p className="text-[#93a6c8] text-lg lg:text-xl max-w-3xl mx-auto">Experience the difference with our professional approach and commitment to excellence</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              <div className="flex flex-col gap-6 rounded-2xl border border-[#344565] bg-[#1a2332] hover:bg-[#243047] p-8 transition-all duration-300 hover:scale-105">
                <div className="text-[#1650bb] w-16 h-16 flex items-center justify-center bg-[#243047] rounded-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm40-68a28,28,0,0,1-28,28h-4v8a8,8,0,0,1-16,0v-8H104a8,8,0,0,1,0-16h36a12,12,0,0,0,0-24H116a28,28,0,0,1,0-56h4V72a8,8,0,0,1,16,0v8h16a8,8,0,0,1,0,16H116a12,12,0,0,0,0,24h24A28,28,0,0,1,168,148Z" />
                  </svg>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-white text-xl lg:text-2xl font-bold leading-tight">Timely Delivery</h3>
                  <p className="text-[#93a6c8] text-base lg:text-lg font-normal leading-relaxed">
                    All financial deadlines met with precision and reliability you can count on.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-6 rounded-2xl border border-[#344565] bg-[#1a2332] hover:bg-[#243047] p-8 transition-all duration-300 hover:scale-105">
                <div className="text-[#1650bb] w-16 h-16 flex items-center justify-center bg-[#243047] rounded-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z" />
                  </svg>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-white text-xl lg:text-2xl font-bold leading-tight">Expert Team</h3>
                  <p className="text-[#93a6c8] text-base lg:text-lg font-normal leading-relaxed">
                    Certified professionals with years of experience in financial services.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-6 rounded-2xl border border-[#344565] bg-[#1a2332] hover:bg-[#243047] p-8 transition-all duration-300 hover:scale-105">
                <div className="text-[#1650bb] w-16 h-16 flex items-center justify-center bg-[#243047] rounded-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z" />
                  </svg>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-white text-xl lg:text-2xl font-bold leading-tight">Personalized Service</h3>
                  <p className="text-[#93a6c8] text-base lg:text-lg font-normal leading-relaxed">
                    Tailored solutions designed for your unique business requirements.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-6 rounded-2xl border border-[#344565] bg-[#1a2332] hover:bg-[#243047] p-8 transition-all duration-300 hover:scale-105">
                <div className="text-[#1650bb] w-16 h-16 flex items-center justify-center bg-[#243047] rounded-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M208,56H48A24,24,0,0,0,24,80V200a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V80A24,24,0,0,0,208,56ZM40,80a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8v24H40Zm8,136a8,8,0,0,1-8-8V120H216v88a8,8,0,0,1-8,8Z"/>
                  </svg>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-white text-xl lg:text-2xl font-bold leading-tight">Data Security</h3>
                  <p className="text-[#93a6c8] text-base lg:text-lg font-normal leading-relaxed">
                    Enterprise-grade protection ensuring your financial data stays secure.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-6 rounded-2xl border border-[#344565] bg-[#1a2332] hover:bg-[#243047] p-8 transition-all duration-300 hover:scale-105">
                <div className="text-[#1650bb] w-16 h-16 flex items-center justify-center bg-[#243047] rounded-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM80,108a12,12,0,1,1,12,12A12,12,0,0,1,80,108Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,176,108Zm-1.07,48c-10.29,17.79-27.4,28-46.93,28s-36.63-10.2-46.92-28a8,8,0,1,1,13.84-8c7.47,12.91,19.21,20,33.08,20s25.61-7.1,33.07-20a8,8,0,0,1,13.86,8Z" />
                  </svg>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-white text-xl lg:text-2xl font-bold leading-tight">24/7 Support</h3>
                  <p className="text-[#93a6c8] text-base lg:text-lg font-normal leading-relaxed">
                    Round-the-clock assistance whenever you need expert guidance.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-6 rounded-2xl border border-[#344565] bg-[#1a2332] hover:bg-[#243047] p-8 transition-all duration-300 hover:scale-105">
                <div className="text-[#1650bb] w-16 h-16 flex items-center justify-center bg-[#243047] rounded-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" fill="currentColor" viewBox="0 0 256 256">
                    <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
                  </svg>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-white text-xl lg:text-2xl font-bold leading-tight">Growth Focused</h3>
                  <p className="text-[#93a6c8] text-base lg:text-lg font-normal leading-relaxed">
                    Strategic advice focused on business growth and long-term profitability.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
