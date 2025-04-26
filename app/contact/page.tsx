import React from 'react'
import ShineBorder from '@/components/magicui/shine-border'
import { GradientText } from '../../components/GradientText'

const ContactPage = () => {
  return (
    <div className="flex flex-col items-center min-h-[60vh] py-10">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        <GradientText colors={["#0077b5", "#00a0dc", "#d44638", "#ffb300"]}>
          Get in Touch
        </GradientText>
      </h1>
      <div className="flex flex-col md:flex-row gap-8">
        <ShineBorder color={["#0077b5", "#00a0dc"]} borderRadius={12} borderWidth={2} duration={10} className="bg-zinc-900 text-white">
          <a
            href="https://www.linkedin.com/in/eric-nichols-ab509118/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-lg hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400 px-6 py-2"
          >
            Connect on LinkedIn
          </a>
        </ShineBorder>
        <ShineBorder color={["#d44638", "#ffb300"]} borderRadius={12} borderWidth={2} duration={10} className="bg-zinc-900 text-white">
          <a
            href="mailto:sd646@icloud.com"
            className="font-semibold text-lg hover:underline focus:outline-none focus:ring-2 focus:ring-orange-400 px-6 py-2"
          >
            Email Me
          </a>
        </ShineBorder>
      </div>
    </div>
  )
}

export default ContactPage