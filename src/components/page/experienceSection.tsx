import React, { useEffect, useState } from 'react'

export default function ExperienceSection() {
  const [stars, setStars] = useState<Array<{id: number, left: string, top: string, size: string, color: string, delay: string, duration: string}>>([]);

  useEffect(() => {
    // Generate stars only on client side to prevent hydration mismatch
    const generatedStars = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${Math.random() * 2 + 1}px`,
      color: ['#ffffff', '#00cfff', '#a259ff', '#7df9ff'][Math.floor(Math.random() * 4)],
      delay: `${Math.random() * 3}s`,
      duration: `${Math.random() * 2 + 2}s`
    }));
    setStars(generatedStars);
  }, []);

  return (
    <div className="relative min-h-screen p-4" style={{ backgroundColor: '#000000' }}>
      {/* Deep Space Background Layers */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary space background */}
        {/* <div 
          className="absolute inset-0" 
          style={{ 
            background: 'radial-gradient(ellipse at top, #0b0f2a 0%, #000000 50%, #0d1b2a 100%)' 
          }}
        ></div> */}
        {/* Secondary nebula layer */}
        {/* <div 
          className="absolute inset-0" 
          style={{ 
            background: 'radial-gradient(circle at 20% 30%, rgba(162, 89, 255, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(0, 207, 255, 0.08) 0%, transparent 50%)' 
          }}
        ></div> */}
      </div>

      {/* Starfield Particles */}
      <div className="absolute inset-0">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full animate-pulse"
            style={{
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
              background: star.color,
              animationDelay: star.delay,
              animationDuration: star.duration
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-8xl mx-auto mb-20">
        {/* Title */}
        <div className="text-center my-16">
          <h2 
            className="text-4xl md:text-6xl font-bold mb-4"
            style={{
              background: 'linear-gradient(45deg, #ffffff 0%, #00cfff 25%, #a259ff 50%, #7df9ff 75%, #ffffff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 0 30px rgba(255, 255, 255, 0.3)'
            }}
          >
            Test Experience
          </h2>
        </div>

        {/* Timeline Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-5 gap-8">
          {/* Timeline Column */}
          <div className="md:col-span-1 xl:col-span-1 relative">
            <div className="sticky top-8">
              {/* Timeline Line */}
              <div className="relative">
                <div 
                  className="absolute left-9 top-0 bottom-0 w-0.5"
                  style={{
                    background: 'linear-gradient(180deg, #00cfff 0%, #a259ff 50%, #7df9ff 100%)',
                    boxShadow: '0 0 10px rgba(0, 207, 255, 0.5), 0 0 20px rgba(162, 89, 255, 0.3)'
                  }}
                ></div>
                
                {/* Timeline Points */}
                <div className="space-y-16 md:space-y-64">
                  {/* First Experience Point */}
                  <div className="relative">
                    <div 
                      className="absolute left-6 w-6 h-6 rounded-full"
                      style={{
                        background: 'radial-gradient(circle, #00cfff 0%, #ffffff 50%, transparent 100%)',
                        boxShadow: '0 0 15px rgba(0, 207, 255, 0.8)',
                        border: '2px solid #00cfff'
                      }}
                    ></div>
                    <div className="ml-16">
                      <div 
                        className="text-lg font-semibold mb-2"
                        style={{ color: '#00cfff' }}
                      >
                        Test Date Range One
                      </div>
                    </div>
                  </div>

                  {/* Second Experience Point */}
                  <div className="relative">
                    <div 
                      className="absolute left-6 w-6 h-6 rounded-full mt-1"
                      style={{
                        background: 'radial-gradient(circle, #a259ff 0%, #ffffff 50%, transparent 100%)',
                        boxShadow: '0 0 15px rgba(162, 89, 255, 0.8)',
                        border: '2px solid #a259ff'
                      }}
                    ></div>
                    <div className="ml-16">
                      <div 
                        className="text-lg font-semibold mb-2"
                        style={{ color: '#a259ff' }}
                      >
                        Test Date Range Two
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Cards Column */}
          <div className="md:col-span-3 xl:col-span-4 space-y-8">
            {/* First Experience Card */}
            <div className="group relative p-8 rounded-2xl 
                         bg-gradient-to-br from-purple-900/30 via-slate-800/40 to-blue-900/30 
                         backdrop-blur-lg border border-purple-500/20 
                         shadow-2xl shadow-purple-500/10
                         hover:shadow-purple-500/30 hover:shadow-2xl
                         hover:border-purple-400/40 hover:bg-gradient-to-br hover:from-purple-800/40 hover:via-slate-700/50 hover:to-blue-800/40
                         transition-all duration-500 ease-out
                         hover:scale-101 hover:-translate-y-2
                         before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:from-purple-600/10 before:to-blue-600/10 before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2 text-purple-200 group-hover:text-purple-100 transition-colors duration-300">
                  Test Company One
                </h3>
                <p className="text-lg mb-4 font-medium text-slate-300 group-hover:text-slate-200 transition-colors duration-300">
                  Role: Test Developer
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start text-slate-300 group-hover:text-slate-200 transition-colors duration-300">
                    <span className="mr-2 mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-purple-400"></span>
                    <span>Test responsibility one</span>
                  </li>
                  <li className="flex items-start text-slate-300 group-hover:text-slate-200 transition-colors duration-300">
                    <span className="mr-2 mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-purple-400"></span>
                    <span>Test responsibility two</span>
                  </li>
                </ul>
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Second Experience Card */}
            <div className="group relative p-8 rounded-2xl 
                         bg-gradient-to-br from-blue-900/30 via-slate-800/40 to-purple-900/30 
                         backdrop-blur-lg border border-blue-500/20 
                         shadow-2xl shadow-blue-500/10
                         hover:shadow-blue-500/30 hover:shadow-2xl
                         hover:border-blue-400/40 hover:bg-gradient-to-br hover:from-blue-800/40 hover:via-slate-700/50 hover:to-purple-800/40
                         transition-all duration-500 ease-out
                         hover:scale-101 hover:-translate-y-2
                         before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:from-blue-600/10 before:to-purple-600/10 before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2 text-blue-200 group-hover:text-blue-100 transition-colors duration-300">
                  Test Company Two
                </h3>
                <p className="text-lg mb-4 font-medium text-slate-300 group-hover:text-slate-200 transition-colors duration-300">
                  Role: Test Full Stack Developer
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start text-slate-300 group-hover:text-slate-200 transition-colors duration-300">
                    <span className="mr-2 mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-blue-400"></span>
                    <span>Test responsibility one for company two</span>
                  </li>
                  <li className="flex items-start text-slate-300 group-hover:text-slate-200 transition-colors duration-300">
                    <span className="mr-2 mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-blue-400"></span>
                    <span>Test responsibility two for company two</span>
                  </li>
                  <li className="flex items-start text-slate-300 group-hover:text-slate-200 transition-colors duration-300">
                    <span className="mr-2 mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-blue-400"></span>
                    <span>Test responsibility three for company two</span>
                  </li>
                </ul>
              </div>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
