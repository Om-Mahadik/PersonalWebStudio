'use client'

import ScrollReveal from './ScrollReveal'

const ScrollRevealSection = () => {
  return (
    <section className="w-full flex justify-center my-24 md:my-32">
      {/* Centered container */}
      <div className="w-full max-w-6xl px-12">
        {/* Always centered text */}
        <div className="text-center">
          <ScrollReveal baseOpacity={0} enableBlur baseRotation={3} blurStrength={4}>
            We prove, design,
          </ScrollReveal>

          <ScrollReveal baseOpacity={0} enableBlur baseRotation={3} blurStrength={4}>
            implement, and market
          </ScrollReveal>

          <ScrollReveal baseOpacity={0} enableBlur baseRotation={3} blurStrength={4}>
            your idea with absolute
          </ScrollReveal>

          <ScrollReveal baseOpacity={0} enableBlur baseRotation={3} blurStrength={4}>
            transparency and efficiency
          </ScrollReveal>

          <ScrollReveal baseOpacity={0} enableBlur baseRotation={3} blurStrength={4}>
            in its core.
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

export default ScrollRevealSection