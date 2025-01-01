import React from 'react'
import Image from 'next/image';
import { teamMembers } from '@/constants';


const Teams = () => {
  return (
    < div className="c-space bg-zinc-50" >
      <h1 className="text-3xl lg:text-4xl font-semibold lg:font-bold tracking-wide text-center text-gray-900">Meet Our Teams</h1>
      <div className="grid gap-12 py-12 lg:grid-cols-3">
        {teamMembers.map((member) => (
          <div key={member.id} className="overflow-hidden bg-white border border-gray-300 rounded-lg shadow-md">
            <div className="py-8 px-3 text-center transition-transform duration-300 transform hover:-translate-y-2">
              <Image
                src={member.image}
                width={200}
                height={200}
                alt={member.name}
                className="mx-auto rounded-full"
              />
              <h2 className="mt-4 text-2xl font-semibold text-gray-900">{member.role}</h2>
              <p className="mt-2 text-sm text-gray-500">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div >
  )
}

export default Teams
