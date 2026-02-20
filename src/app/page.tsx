import Image from "next/image";
import {
  MdWork,
  MdWorkspacePremium,
  MdArchitecture,
  MdSchedule,
} from "react-icons/md";

export default function Home() {
  return (
    <>
      <section className="relative h-screen w-full overflow-hidden flex items-center">
        <Image
          alt="Sophisticated Interior"
          className="absolute inset-0 w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAH3dEsKnqln7DInT9ZShqx2804EQxBe__dygG-b6sDhkxiHhmn6Hhu5zDc3A6RDDcPw1MihNUK0hJI_-63e8oDJkjEpxQlZPwdPlcRSW2nYR-tiYFth702w4M9rTVwkm-PlnygYnXq1FF_7tVPCweTueGMVqkQCN4jnvXR6Y1aLw2IhBsngsBnP07w-iipW-rexzg7yV60UMJknYTAGEfuSXofkyxl-DDZ-Fi_pE1MsA3OPG806M05s9DJnLq6v1sNWcogX6P9xaU"
          fill
          priority
          quality={90}
          sizes="100vw"
          style={{ objectFit: "cover", zIndex: 0 }}
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="relative max-w-7xl mx-auto px-6 w-full pt-32 pb-16 z-20 flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg">
              Designing Spaces That Feel Like Home
            </h1>
            <p className="text-xl text-white/90 mb-10 leading-relaxed max-w-lg drop-shadow">
              Personalized interiors crafted with style and comfort. Experience
              luxury living tailored to your lifestyle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#73D411] cursor-pointer text-black px-8 py-4 rounded-full font-bold text-lg hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[#73D411] transition-all shadow-md">
                Book Free Consultation
              </button>
              <button className="border-2 border-white cursor-pointer text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#73D411] focus:outline-none focus:ring-2 focus:ring-white transition-all shadow-md">
                Explore Designs
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-[#FAF9F6] text-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold mb-4">Why Choose Us</h2>
            <div className="w-12 h-1 bg-accent-gold mx-auto rounded" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Cards improved for accessibility and visual clarity */}
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow flex flex-col items-center">
              <MdWork
                className="text-4xl text-accent-gold mb-6"
                aria-hidden="true"
              />
              <h3 className="text-xl font-bold mb-3">Custom Designs</h3>
              <p className="text-gray-500 text-sm leading-relaxed text-center">
                Tailored architectural solutions that reflect your personal
                aesthetic.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow flex flex-col items-center">
              <MdWorkspacePremium
                className="text-4xl text-accent-gold mb-6"
                aria-hidden="true"
              />
              <h3 className="text-xl font-bold mb-3">Premium Materials</h3>
              <p className="text-gray-500 text-sm leading-relaxed text-center">
                Sourcing only the finest sustainable materials for your
                projects.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow flex flex-col items-center">
              <MdArchitecture
                className="text-4xl text-accent-gold mb-6"
                aria-hidden="true"
              />
              <h3 className="text-xl font-bold mb-3">Expert Designers</h3>
              <p className="text-gray-500 text-sm leading-relaxed text-center">
                Award-winning professionals with decades of industry experience.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow flex flex-col items-center">
              <MdSchedule
                className="text-4xl text-accent-gold mb-6"
                aria-hidden="true"
              />
              <h3 className="text-xl font-bold mb-3">On-Time Delivery</h3>
              <p className="text-gray-500 text-sm leading-relaxed text-center">
                Rigorous project management ensuring deadlines are always met.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
            <div>
              <h2 className="text-4xl font-extrabold mb-4">Our Services</h2>
              <p className="text-gray-500">
                Transforming every corner of your life.
              </p>
            </div>
            <a
              className="text-accent-gold font-bold flex items-center gap-2 hover:underline"
              href="/services"
              aria-label="View all services"
            >
              <span>View All Services</span>
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="service-card group relative h-100 overflow-hidden rounded-2xl">
              <Image
                alt="Living Room"
                className="w-full h-full object-cover transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCu_d4LXAbmJzXvVDXBAzEW1XxDyc2Sz8ZSZGp_7fuaOirdgHeoszGq0uoR0CjrzQG3e4NlYYQvd-sck2-IwPAZ_kPJPeJdyCchBbgHskl-0fsT78LPAfoEYx8LDqYeQsi3pSpyEcZdrtOKT_15Hkp0u5SGU_0nXa4rFDRv-HmJnhI4s1yK_K36b6WLkpPWQLVfXsQwb2Oj0yN3_qVAGB7av-q9v40y2gc_bUWXg2zCZGomtJcGrfbSJWL0_Qplnxj21OQnT4gSe1w"
                fill
                quality={85}
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
                placeholder="blur"
                blurDataURL="/public/file.svg"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-white text-3xl font-bold">Living Room</h3>
                <p className="text-white/80 mt-2">
                  Harmonious spaces for gathering and relaxation.
                </p>
              </div>
            </div>
            <div className="service-card group relative h-100 overflow-hidden rounded-2xl">
              <Image
                alt="Bedroom"
                className="w-full h-full object-cover transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBM4QvTsTB7p-8VbFSwkVc6w9jr5EeRN6NFp48DcU9fBsnXzKIG3GTXW6ptoZziDhYkq_KxL3PecYOiva8j_w1b7hLwNdpVH02JDsTQrwgpX7CGnaYDXzPpsucnPVBFqRAzw3ugUysL3V9eefisWLZ6MJBlQD1GqIl7HPcZAuaiaOxiyn1mYoPTRrhF20wxVIPEKu_2AbOzFctfg5LcuSVyLNtlvPM9dFHK4vxyciIKnvbECnbGWE-fmxkp0g1Fzs509rXrBrH8bAI"
                fill
                quality={85}
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
                placeholder="blur"
                blurDataURL="/public/file.svg"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-white text-3xl font-bold">Bedroom</h3>
                <p className="text-white/80 mt-2">
                  Private sanctuaries designed for restful sleep.
                </p>
              </div>
            </div>
            <div className="service-card group relative h-100 overflow-hidden rounded-2xl">
              <Image
                alt="Kitchen"
                className="w-full h-full object-cover transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHchWAOKk2AoM1h-bPL8ceUK7j3K-Z7Q2vfhnV8MdmZlo0GWni_Zn_Nkk7R22PBNSJWbCMXmBZby03rBKfbgPTTA-ZGYeR5YyGsx-SPvDtU_ggD6U-H03DNB94stW8r1YSy02DhZIBBP32V43xUdRubSMXU6cPLkDL-m5MBa0gsZxrOZKk_EEaaPW5E50F7Ui0jon1vyxkeUL50teOmLRO6UGMQO9zk4En0LDUsHwibhmXR2wcDQ8Lx0rCaRrsbdL7hbjZysJ2giE"
                fill
                quality={85}
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
                placeholder="blur"
                blurDataURL="/public/file.svg"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-white text-3xl font-bold">Kitchen</h3>
                <p className="text-white/80 mt-2">
                  Functional elegance where culinary dreams come alive.
                </p>
              </div>
            </div>
            <div className="service-card group relative h-100 overflow-hidden rounded-2xl">
              <Image
                alt="Office"
                className="w-full h-full object-cover transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCr9fkodzN5qrT2W8g7rfyKMvWzfyXoRiRMDpQ9LCgA_Ij2hxQcWWJB_2w5LYL8k_5vnVXk5Qos94IS-O1GgOwz4d6Xqa8U7CpTGbOBa3Cm6qblzPgmDBSo7_CdGt8Xizes4ptLGSjXIOoIaO9meD9GeTr5wLeNsQcSy7gp195rGUxGZ4lT0zCWkE7lD5yfsUmRSPeG2tboWUwNPeoUxJPUbuJrsJDj8kg1DN0Lf00AU0lOOfQi1xj6QJ-7kLDHWNfQD9ghF0YrUvg"
                fill
                quality={85}
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
                placeholder="blur"
                blurDataURL="/public/file.svg"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                <h3 className="text-white text-3xl font-bold">Office</h3>
                <p className="text-white/80 mt-2">
                  Inspiring workspaces that foster productivity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-[#f5f2ed] text-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl font-extrabold mb-4">The Design Journey</h2>
            <p className="text-gray-600">
              A seamless process from concept to completion.
            </p>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-accent-gold/30 -translate-y-1/2" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white border-4 border-accent-gold rounded-full flex items-center justify-center text-xl font-bold text-accent-gold mb-6 shadow-sm">
                  1
                </div>
                <h3 className="text-lg font-bold mb-2">Consultation</h3>
                <p className="text-sm text-gray-500">
                  Understanding your vision and spatial needs.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white border-4 border-accent-gold rounded-full flex items-center justify-center text-xl font-bold text-accent-gold mb-6 shadow-sm">
                  2
                </div>
                <h3 className="text-lg font-bold mb-2">Design</h3>
                <p className="text-sm text-gray-500">
                  Crafting moodboards and 3D architectural renders.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white border-4 border-accent-gold rounded-full flex items-center justify-center text-xl font-bold text-accent-gold mb-6 shadow-sm">
                  3
                </div>
                <h3 className="text-lg font-bold mb-2">Execution</h3>
                <p className="text-sm text-gray-500">
                  Premium craftsmanship meets professional management.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white border-4 border-accent-gold rounded-full flex items-center justify-center text-xl font-bold text-accent-gold mb-6 shadow-sm">
                  4
                </div>
                <h3 className="text-lg font-bold mb-2">Delivery</h3>
                <p className="text-sm text-gray-500">
                  The final reveal of your dream interior space.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-extrabold text-center mb-16">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-10 border border-gray-100 rounded-2xl shadow-sm italic">
              <div className="flex gap-1 text-accent-gold mb-6">
                <span className="material-symbols-outlined fill-1">star</span>
                <span className="material-symbols-outlined fill-1">star</span>
                <span className="material-symbols-outlined fill-1">star</span>
                <span className="material-symbols-outlined fill-1">star</span>
                <span className="material-symbols-outlined fill-1">star</span>
              </div>
              <p className="text-gray-600 mb-8 leading-relaxed">
                "DesignSpace transformed our penthouse into a modern
                masterpiece. Their attention to detail and choice of materials
                were impeccable."
              </p>
              <div className="flex items-center gap-4 not-italic">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    alt="Client"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDt3uaiBMjA5BkT6BfCVBY3VJ-EASzQdxG0MCojgXyODgTLJGNU8IdN2reBbv5C5fAnacAzmuE8fIZEyd8itmvko0kuJ9e8sYIVI_rUNU62Bnj0eVabzPO9RwOJ3lNmZtTyP-n7dt9ldpanseLFQAIV8J1fEImxEeSKli8-aOR6RJUL93LCuDmBoYLn2j7KzqAWzmZ_7q0Qcg1vIavRkDEsdK2_iEJiLSXG7nG3u8ocKwIAir6PFkg-BTnz1I7CGqn_CDxjngdM3FE"
                    width={48}
                    height={48}
                    style={{ borderRadius: "9999px" }}
                    placeholder="blur"
                    blurDataURL="/public/file.svg"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Alexandra Sterling</h4>
                  <p className="text-xs text-gray-400">CEO, TechFlow</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-10 border border-gray-100 rounded-2xl shadow-sm italic">
              <div className="flex gap-1 text-accent-gold mb-6">
                <span className="material-symbols-outlined fill-1">star</span>
                <span className="material-symbols-outlined fill-1">star</span>
                <span className="material-symbols-outlined fill-1">star</span>
                <span className="material-symbols-outlined fill-1">star</span>
                <span className="material-symbols-outlined fill-1">star</span>
              </div>
              <p className="text-gray-600 mb-8 leading-relaxed">
                "The transition from old to new was so smooth. Their project
                management is top-tier. I couldn't be happier with my new
                minimalist kitchen."
              </p>
              <div className="flex items-center gap-4 not-italic">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200" />
                <div>
                  <h4 className="font-bold text-sm">James Harrington</h4>
                  <p className="text-xs text-gray-400">Architect</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-10 border border-gray-100 rounded-2xl shadow-sm italic">
              <div className="flex gap-1 text-accent-gold mb-6">
                <span className="material-symbols-outlined fill-1">star</span>
                <span className="material-symbols-outlined fill-1">star</span>
                <span className="material-symbols-outlined fill-1">star</span>
                <span className="material-symbols-outlined fill-1">star</span>
                <span className="material-symbols-outlined fill-1">star</span>
              </div>
              <p className="text-gray-600 mb-8 leading-relaxed">
                "Every corner of our home now tells a story. The expert
                designers really listened to what we wanted and exceeded
                expectations."
              </p>
              <div className="flex items-center gap-4 not-italic">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200" />
                <div>
                  <h4 className="font-bold text-sm">Elena Rodriguez</h4>
                  <p className="text-xs text-gray-400">Art Curator</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-deep-olive py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8">
            Let’s Build Your Dream Space
          </h2>
          <p className="text-white/70 text-lg mb-12">
            Join hundreds of satisfied homeowners who have elevated their living
            experience with DesignSpace.
          </p>
          <button className="bg-[#73d411] text-[#141b0d] cursor-pointer px-10 py-5 rounded-full font-bold text-xl hover:brightness-110 transition-all">
            Get Started Today
          </button>
        </div>
      </section>
      <footer className="bg-white text-black border-t border-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="text-primary">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    viewBox="0 0 48 48"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M39.5563 34.1455V13.8546C39.5563 15.708 36.8773 17.3437 32.7927 18.3189C30.2914 18.916 27.263 19.2655 24 19.2655C20.737 19.2655 17.7086 18.916 15.2073 18.3189C11.1227 17.3437 8.44365 15.708 8.44365 13.8546V34.1455C8.44365 35.9988 11.1227 37.6346 15.2073 38.6098C17.7086 39.2069 20.737 39.5564 24 39.5564C27.1288 39.5564 30.2914 39.2069 32.7927 38.6098C36.8773 37.6346 39.5563 35.9988 39.5563 34.1455Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <span className="text-xl font-extrabold tracking-tight">
                  DesignSpace
                </span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                Crafting premium interiors that redefine modern luxury and
                comfort.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6">Explore</h4>
              <ul className="space-y-4 text-sm text-gray-500">
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    Gallery
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    Designers
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    Journal
                  </a>
                </li>
                <li>
                  <a className="hover:text-primary transition-colors" href="#">
                    Reviews
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">Contact</h4>
              <ul className="space-y-4 text-sm text-gray-500">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-sm">
                    mail
                  </span>
                  hello@designspace.com
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-sm">
                    call
                  </span>{" "}
                  +1 (555) 000-1234
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-sm">
                    location_on
                  </span>
                  123 Interior Ave, NY
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">Social</h4>
              <div className="flex gap-4">
                <a
                  className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center hover:bg-primary/20 transition-colors"
                  href="#"
                >
                  <span className="material-symbols-outlined">share</span>
                </a>
                <a
                  className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center hover:bg-primary/20 transition-colors"
                  href="#"
                >
                  <span className="material-symbols-outlined">public</span>
                </a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between gap-4">
            <p className="text-xs text-gray-400">
              © 2024 DesignSpace Interior Collective. All rights reserved.
            </p>
            <div className="flex gap-8 text-xs text-gray-400">
              <a className="hover:text-primary" href="#">
                Privacy Policy
              </a>
              <a className="hover:text-primary" href="#">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
