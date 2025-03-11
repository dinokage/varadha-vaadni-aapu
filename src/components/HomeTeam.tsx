import React from 'react'
import Image from 'next/image'

const team = [
    {
        name: "Chandrasekhar Chevvakula",
        url: "/team/chevukula.png"
    },
    {
        name: "krishna Kothalanka",
        url: "/team/kothalanka.png"
    },
    {
        name: "Engineering Enterprises Team",
        url: "/team/enterprise-team.png"
    },
    {
        name: "P.S. Gireeshma",
        url: "/team/gireeshma.png"
    },
    {
        name: "B. Samanth Kumar",
        url: "/team/samanth-kumar.png"
    },
    {
        name: "Mr. Apparao",
        url: "/team/apparao.png"
    }

]

function HomeTeam() {
  return (
   <section className="w-full bg-[#FFF9E3]">
         {/* Header */}
         <div className="w-full bg-[#1a1a1a] py-4 text-center relative">
           <h2 className="text-3xl font-bold">
             <span className="text-white">Our </span>
             <span className="text-[#3498db] text-4xl">Passionate </span>
             <span className="text-white">Team</span>
           </h2>
           </div>
   
         <div className="container mx-auto px-4 py-12 md:py-16 bg-[#00BAFF]">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
             {/* Left side - Client logos grid */}
             <div className="col-span-2">
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                 {team.map((member, index) => (
                   <div
                     key={index}
                     className="flex items-center justify-center p-4 bg-white rounded-md shadow-sm hover:shadow-md transition-shadow duration-300"
                   >
                     <Image
                       src={member.url || "/placeholder.svg"}
                       alt={`${member.name} image`}
                       width={160}
                       height={80}
                       className="max-h-52 w-auto object-contain"
                     />
                   </div>
                 ))}
               </div>
             </div>
             
           </div>
         </div>
       </section>
  )
}

export default HomeTeam