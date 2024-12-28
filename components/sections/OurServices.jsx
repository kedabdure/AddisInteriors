import React from 'react'
import Image from 'next/image'

const OurServices = () => {
  return (
    <section className="w-full bg-zinc-50">
      <div className="flex justify-left sm:justify-normal gap-4 items-center mb-10 md:mb-16">
        <div className="w-12 md:w-16 lg:w-20 h-[3px] bg-black"></div>
        <h1 className="title-text">Our Services</h1>
      </div>

      <div className="flex flex-wrap justify-center lg:justify-between gap-8">
        <div className="w-full sm:max-w-[350px] flex items-start gap-4">
          <Image src={'/image/icons/interior-design.png'} width={98} height={98} alt="Our Services" />
          <div className="flex flex-col items-start gap-4">
            <h2 className="subtitle-text">Interior Design</h2>
            <p className="text-base">
              Achieve the perfect balance of ambient, task, and accent lighting for a functional atmosphere
            </p>
          </div>
        </div>

        <div className="w-full sm:max-w-[350px] flex items-start gap-4">
          <Image src={'/image/icons/lighting-design.png'} width={98} height={98} alt="Our Services" />
          <div className="flex flex-col items-start gap-4">
            <h2 className="subtitle-text">Lighting Design</h2>
            <p className="text-base">

              Create the ideal mix of ambient, task, and accent lighting for a practical setting.
            </p>
          </div>
        </div>

        <div className="w-full sm:max-w-[350px] flex items-start gap-4">
          <Image src={'/image/icons/outdoor-design.png'} width={98} height={98} alt="Our Services" />
          <div className="flex flex-col items-start gap-4">
            <h2 className="subtitle-text">Outdoor Design</h2>
            <p className="text-base">
              Celebrate the changing seasons with our seasonal outdoor decor services
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurServices
