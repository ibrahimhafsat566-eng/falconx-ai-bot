export default function Home() {
  return (
    <main
      style={{
        minHeight: '100vh',
        background: '#06111b',
        color: '#ffffff',
        fontFamily: 'Arial, sans-serif',
        padding: '16px',
      }}
    >
      <div
        style={{
          maxWidth: 480,
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
        }}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: 12,
          }}
        >
          <div>
            <h1
              style={{
                margin: 0,
                fontSize: 28,
                lineHeight: 1.1,
                fontWeight: 800,
              }}
            >
              FalconX AI Bot
            </h1>

            <p
              style={{
                marginTop: 8,
                color: '#9fb3c8',
                fontSize: 15,
                lineHeight: 1.4,
              }}
            >
              Autonomous high-risk crypto trading dashboard
            </p>
          </div>

          <div
            style={{
              background: '#0f2233',
              border: '1px solid #1f3b55',
              color: '#4ade80',
              borderRadius: 999,
              padding: '10px 16px',
              fontWeight: 700,
              fontSize: 14,
              whiteSpace: 'nowrap',
            }}
          >
            LIVE
          </div>
        </div>

        {/* Balance */}
        <div
          style={{
            background: '#0c1722',
            border: '1px solid #1b2a3a',
            borderRadius: 18,
            padding: 20,
          }}
        >
          <div style={{ color: '#9fb3c8', fontSize: 14 }}>
            Portfolio Balance
          </div>

          <div
            style={{
              marginTop: 10,
              fontSize: 40,
              fontWeight: 800,
            }}
          >
            $0.00
          </div>

          <div
            style={{
              marginTop: 6,
              color: '#6ee7b7',
              fontSize: 13,
            }}
          >
            +0.00% today
          </div>
        </div>

        {/* AI Status */}
        <div
          style={{
            background: '#0c1722',
            border: '1px solid #1b2a3a',
            borderRadius: 18,
            padding: 20,
          }}
        >
          <div style={{ color: '#9fb3c8', fontSize: 14 }}>AI Status</div>

          <div
            style={{
              marginTop: 10,
              fontSize: 30,
              fontWeight: 800,
              color: '#4ade80',
            }}
          >
            READY
          </div>

          <div
            style={{
              marginTop: 6,
              color: '#9fb3c8',
              fontSize: 13,
            }}
          >
            Waiting for market analysis
          </div>
        </div>

        {/* Coins Scanned */}
        <div
          style={{
            background: '#0c1722',
            border: '1px solid #1b2a3a',
            borderRadius: 18,
            padding: 20,
          }}
        >
          <div style={{ color: '#9fb3c8', fontSize: 14 }}>Coins Scanned</div>

          <div
            style={{
              marginTop: 10,
              fontSize: 36,
              fontWeight: 800,
            }}
          >
            50+
          </div>

          <div
            style={{
              marginTop: 6,
              color: '#9fb3c8',
              fontSize: 13,
            }}
          >
            Binance Futures watchlist
          </div>
        </div>

        {/* Open Positions */}
        <div
          style={{
            background: '#0c1722',
            border: '1px solid #1b2a3a',
            borderRadius: 18,
            padding: 20,
          }}
        >
          <div style={{ color: '#9fb3c8', fontSize: 14 }}>Open Positions</div>

          <div
            style={{
              marginTop: 10,
              fontSize: 36,
              fontWeight: 800,
            }}
          >
            0
          </div>

          <div
            style={{
              marginTop: 6,
              color: '#9fb3c8',
              fontSize: 13,
            }}
          >
            No active trades
          </div>
        </div>

        {/* Win Rate */}
        <div
          style={{
            background: '#0c1722',
            border: '1px solid #1b2a3a',
            borderRadius: 18,
            padding: 20,
          }}
        >
          <div style={{ color: '#9fb3c8', fontSize: 14 }}>Win Rate</div>

          <div
            style={{
              marginTop: 10,
              fontSize: 36,
              fontWeight: 800,
            }}
          >
            0%
          </div>

          <div
            style={{
              marginTop: 6,
              color: '#9fb3c8',
              fontSize: 13,
            }}
          >
            No completed trades yet
          </div>
        </div>

        {/* Bot Control */}
        <div
          style={{
            background: '#0c1722',
            border: '1px solid #1b2a3a',
            borderRadius: 18,
            padding: 20,
          }}
        >
          <div style={{ color: '#9fb3c8', fontSize: 14 }}>Bot Control</div>

          <button
            style={{
              marginTop: 16,
              width: '100%',
              background: '#16a34a',
              color: '#ffffff',
              border: 'none',
              borderRadius: 14,
              padding: '16px',
              fontSize: 18,
              fontWeight: 700,
              cursor: 'pointer',
            }}
          >
            Start Bot
          </button>

          <div
            style={{
              marginTop: 10,
              color: '#9fb3c8',
              fontSize: 13,
              textAlign: 'center',
            }}
          >
            Manual control will be replaced with fully autonomous trading mode.
          </div>
        </div>
      </div>
    </main>
  );
        }
            
