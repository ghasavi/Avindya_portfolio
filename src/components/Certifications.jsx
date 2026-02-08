"use client";

import Image from "next/image";
import { Award, ExternalLink, Sparkles } from "lucide-react";

export default function Certification({ id }) {
  const certifications = [
    {
      title: "AI/ML Engineer - Stage 1",
      provider: "Centre for Open and Distance Education - SLIIT",
      year: "2026",
      image: "/certificates/AIML_stage1.png",
      credentialUrl: "https://code.sliit.org/certificates/vqizxlhmao",
      skills: ["AI/ML", "Python", "Google Collab"],
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "AI/ML Engineer - Stage 2",
      provider: "Centre for Open and Distance Education - SLIIT",
      year: "2026",
      image: "/certificates/AIML_stage2.png",
      credentialUrl: "https://code.sliit.org/certificates/gb4bmyilyw",
      skills: ["AI/ML"],
      color: "from-emerald-500 to-teal-500"
    },
    {
      title: "Programming in Python - 1. Python for Beginners",
      provider: "Moratuwa University",
      year: "2026",
      image: "/certificates/moratuwa_python1.png",
      credentialUrl: "https://open.uom.lk/lms/mod/customcert/view.php?id=675&downloadown=1",
      skills: ["Python"],
      color: "from-pink-500 to-purple-500"
    },
    {
      title: "Programming in Python - 2. Python Programming",
      provider: "Moratuwa University",
      year: "2026",
      image: "/certificates/moratuwa_python2.png",
      credentialUrl: "https://open.uom.lk/lms/mod/customcert/view.php?id=838&downloadown=1",
      skills: ["Python","Git"],
      color: "from-pink-500 to-purple-500"
    }
  ];

  return (
    <section
      id={id}
      className="relative py-20 px-6 md:px-10 bg-gradient-to-b from-black to-gray-900 overflow-hidden"
    >
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#009F9D]/20 to-transparent border border-[#009F9D]/30 px-4 py-2 rounded-full mb-4 backdrop-blur-sm">
          <Award className="w-4 h-4 text-[#009F9D]" />
          <span className="text-gray-300 text-sm font-medium tracking-wider">
            CERTIFICATIONS
          </span>
          <Sparkles className="w-3 h-3 text-[#009F9D] animate-pulse" />
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-white">Professional </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#009F9D] via-[#00FFFC] to-[#009F9D] animate-gradient-x">
            Credentials
          </span>
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto">
          Verified certifications showcasing continuous learning and practical expertise
        </p>
      </div>

      {/* Certificate Cards */}
<div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  {certifications.map((cert, index) => (
    <div key={index} className="group relative rounded-3xl overflow-hidden border border-gray-800 bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-shadow duration-500">
      
      {/* Glow Effect */}
      <div
        className={`absolute -inset-1 rounded-2xl bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-30 blur transition-opacity duration-500`}
      />

      {/* Certificate Image */}
      {/* Certificate Image */}
<div className="relative w-full h-50 md:h-60 lg:h-72 overflow-hidden rounded-t-2xl bg-black/10">
  <Image
    src={cert.image}
    alt={cert.title}
    fill
    className="object-contain p-3 group-hover:scale-105 transition-transform duration-700"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
</div>


      {/* Card Content */}
      <div className="p-6 flex flex-col justify-between h-full">
        <div>
          <div className="flex justify-between mb-3 text-xs text-gray-400">
            <span>{cert.year}</span>
            <span>{cert.provider}</span>
          </div>

          <h3 className="text-lg font-bold text-white mb-4 group-hover:text-[#00FFFC] transition-colors">
            {cert.title}
          </h3>

          <div className="flex flex-wrap gap-2 mb-4">
            {cert.skills.map((skill, i) => (
              <span key={i} className="px-3 py-1 rounded-lg bg-black/50 border border-gray-800 text-xs text-gray-300 hover:border-[#009F9D] hover:text-[#009F9D] transition">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <a
          href={cert.credentialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 text-sm text-[#009F9D] hover:text-[#00FFFC] font-medium transition-colors"
        >
          View Credential
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  ))}
</div>

      {/* Gradient Animation */}
      <style>{`
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }

        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </section>
  );
}
