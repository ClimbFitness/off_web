export function HeroGlow() {
    return (
      <>
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-orange-600 rounded-full opacity-20 blur-[120px]"></div>
        <div className="absolute top-1/2 left-1/4 w-[300px] h-[300px] bg-orange-700 rounded-full opacity-20 blur-[120px]"></div>
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-orange-800 rounded-full opacity-20 blur-[120px]"></div>
  
        {/* Grid background */}
        <div className="absolute inset-0 bg-grid-white/[0.02] [mask-image:linear-gradient(to_bottom,transparent,black,transparent)]"></div>
      </>
    )
  }
  