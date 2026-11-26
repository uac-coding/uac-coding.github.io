'use client';

import { useState, useEffect } from 'react';

export default function Page({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isTargetReached: false,
  });

  useEffect(() => {
    const now = new Date();
    const currentYear = now.getFullYear();
    let targetDate = new Date(`December 23, ${currentYear} 00:00:00`);

    if (now.getTime() > targetDate.getTime()) {
      targetDate = new Date(`December 23, ${currentYear + 1} 00:00:00`);
    }

    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();

      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0, isTargetReached: true };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        isTargetReached: false,
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Mountains+of+Christmas:wght@700&family=Quicksand:wght@500;700&display=swap');

        .festive-title {
          font-family: 'Mountains of Christmas', cursive;
        }

        .cozy-body {
          font-family: 'Quicksand', sans-serif;
        }

        .advent-card {
          background-color: #fffaf0;
          padding: 36px 32px 32px;
          border-radius: 28px;
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);
          border: 4px solid #f4c430;
          text-align: center;
          max-width: 520px;
          width: 100%;
          /* Shift card upward visually off the exact vertical center */
          transform: translateY(-8vh);
        }

        .advent-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
        }

        .title-text {
          font-size: 3.6rem;
        }

        /* Mobile & Small Tablet Optimizations */
        @media (max-width: 640px) {
          .advent-card {
            padding: 28px 20px 24px;
            transform: translateY(-4vh);
          }

          .title-text {
            font-size: 2.8rem;
          }

          .advent-grid {
            gap: 8px;
          }
        }

        /* Small Phones (2x2 grid fallback to keep numbers readable) */
        @media (max-width: 380px) {
          .advent-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>

      <main className="cozy-body" style={styles.container}>
        <div className="advent-card">
          <h1 className="festive-title title-text" style={styles.title}>
            Coming Soon <span style={styles.treeIcon}>🎄</span>
          </h1>
          <p style={styles.subtitle}>Countdown to December 23<sup>rd</sup></p>

          {timeLeft.isTargetReached ? (
            <div style={styles.celebration}>
              <h2 className="festive-title" style={{ fontSize: '2.2rem' }}>
                🎁 Merry Christmas! The wait is over! 🌟
              </h2>
            </div>
          ) : (
            <div className="advent-grid">
              <div style={styles.timeBox}>
                <span style={styles.number}>{timeLeft.days}</span>
                <span style={styles.label}>Days</span>
              </div>
              <div style={styles.timeBox}>
                <span style={styles.number}>{String(timeLeft.hours).padStart(2, '0')}</span>
                <span style={styles.label}>Hours</span>
              </div>
              <div style={styles.timeBox}>
                <span style={styles.number}>{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span style={styles.label}>Minutes</span>
              </div>
              <div style={styles.timeBox}>
                <span style={styles.number}>{String(timeLeft.seconds).padStart(2, '0')}</span>
                <span style={styles.label}>Seconds</span>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#1b4d3e',
    backgroundImage: `
      radial-gradient(white 15%, transparent 16%),
      radial-gradient(white 15%, transparent 16%)
    `,
    backgroundSize: '60px 60px',
    backgroundPosition: '0 0, 30px 30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
  },
  title: {
    color: '#d42426',
    margin: '0 0 8px 0',
    lineHeight: 1,
    textShadow: '2px 2px 0px #f4c430',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
  },
  treeIcon: {
    fontSize: '0.8em',
    lineHeight: 1,
  },
  subtitle: {
    fontSize: '1rem',
    color: '#2c3e50',
    marginTop: '20px',
    marginBottom: '16px',
    fontWeight: 500,
    letterSpacing: '0.5px',
  },
  timeBox: {
    backgroundColor: '#eaf4f1',
    border: '2px solid #1b4d3e',
    borderRadius: '16px',
    padding: '12px 6px',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    fontSize: '1.8rem',
    fontWeight: 700,
    color: '#1b4d3e',
    lineHeight: 1.1,
  },
  label: {
    fontSize: '0.7rem',
    textTransform: 'uppercase' as const,
    color: '#2c3e50',
    marginTop: '4px',
    fontWeight: 700,
    letterSpacing: '1px',
  },
  celebration: {
    color: '#d42426',
    padding: '20px 0',
  },
};