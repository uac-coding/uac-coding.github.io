'use client'

import React, { useState } from 'react'

export const GoogleSlides = ({ url }) => {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div style={{ position: 'relative', paddingBottom: '58%', height: 0, overflow: 'hidden', marginTop: '1.25rem' }}>
      {/* Skeleton Loader */}
      {isLoading && (
        <div 
          style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: '95%', 
            height: '100%', 
            zIndex: 1,
            backgroundColor: 'rgba(150, 150, 150, 0.15)',
            animation: 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
          }} 
        />
      )}

      {/* Slide Iframe */}
      <iframe
        src={url}
        frameBorder="0"
        width="100%"
        allowFullScreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        onLoad={() => setIsLoading(false)}
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '95%', 
          height: '100%',
          opacity: isLoading ? 0 : 1,
          transition: 'opacity 0.3s ease-in-out',
          zIndex: 2,
          border: 'none',
        }}
      />

      {/* Pulse Animation Keyframes */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </div>
  )
}