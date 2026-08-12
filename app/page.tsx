export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      background: '#071018',
      color: 'white',
      fontFamily: 'Arial, sans-serif',
      padding: '24px'
    }}>
      <div style={{
        maxWidth: 980,
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: 24
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div>
            <h1 style={{ fontSize: 34, margin: 0 }}>FalconX AI Bot</h1>
            <p style={{ color: '#9fb3c8', marginTop: 6 }}>
              Autonomous high-risk crypto trading dashboard
            </p>
          </div>

          <div style={{
            background: '#123',
            border: '1px solid #234',
            borderRadius: 999,
            padding: '10px 16px',
            color: '#6ee7b7',
            fontWeight: 700
          }}>
            LIVE
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, minmax(220px, 1fr))',
          gap: 16
        }}>
          <div style={{ background: '#0d1620', border: '1px solid #1f2a37', borderRadius: 16, padding: 20 }}>
            <div style={{ color: '#9fb3c8', fontSize: 14 }}>Portfolio Balance</div>
            <div style={{ fontSize: 32, fontWeight: 800, marginTop: 8 }}>$0.00</div>
          </div>

          <div style={{ background: '#0d1620', border: '1px solid #1f2a37', borderRadius: 16, padding: 20 }}>
            <div style={{ color: '#9fb3c8', fontSize: 14 }}>AI Status</div>
            <div style={{ fontSize: 24, fontWeight: 800, marginTop: 8, color: '#6ee7b7' }}>READY</div>
          </div>

          <div style={{ background: '#0d1620', border: '1px solid #1f2a37', borderRadius: 16, padding: 20 }}>
            <div style={{ color: '#9fb3c8', fontSize: 14 }}>Coins Scanned</div>
            <div style={{ fontSize: 32, fontWeight: 800, marginTop: 8 }}>50+</div>
          </div>

          <div style={{ background: '#0d1620', border: '1px solid #1f2a37', borderRadius: 16, padding: 20 }}>
            <div style={{ color: '#9fb3c8', fontSize: 14 }}>Open Positions</div>
            <div style={{ fontSize: 32, fontWeight: 800, marginTop: 8 }}>0</div>
          </div>
        </div>

        <div style={{ background: '#0d1620', border: '1px solid #1f2a37', borderRadius: 16, padding: 20 }}>
          <div style={{ color: '#9fb3c8', fontSize: 14 }}>Win Rate</div>
          <div style={{ fontSize: 28, fontWeight: 800, marginTop: 8 }}>0%</div>
        </div>

        <div style={{ background: '#0d1620', border: '1px solid #1f2a37', borderRadius: 16, padding: 20 }}>
          <div style={{ color: '#9fb3c8', fontSize: 14 }}>Bot Control</div>
          <button style={{
            marginTop: 14,
            background: '#16a34a',
            color: 'white',
            border: 'none',
            borderRadius: 12,
            padding: '12px 18px',
            fontWeight: 700,
            cursor: 'pointer'
          }}>
            Start Bot
          </button>
        </div>
      </div>
    </main>
  );
      }
      
