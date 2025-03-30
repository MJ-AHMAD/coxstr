export function HeroSection() {
  return (
    <div className="relative h-[500px] w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(https://mj-ahmad.github.io/mja2025/img/coxs1.png)" }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 max-w-4xl">
          Built for the students of Cox's Bazar, driven by innovation
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-3xl">
          Empowering Cox's Bazar students with specialized opportunities and support
        </p>
      </div>
    </div>
  )
}

