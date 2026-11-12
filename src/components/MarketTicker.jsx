import { useEffect, useRef, memo } from 'react';

const SYMBOLS = [
  { proName: 'BSE:NIFTY', title: 'NIFTY 50' },
  { proName: 'BSE:BANKNIFTY', title: 'BANK NIFTY' },
  { proName: 'BSE:SENSEX', title: 'SENSEX' },
  // { proName: 'BSE:CNXIT', title: 'NIFTY IT' },
  { proName: 'BSE:RELIANCE', title: 'Reliance' },
  { proName: 'BSE:HDFCBANK', title: 'HDFC Bank' },
  { proName: 'BSE:TCS', title: 'TCS' },
  { proName: 'FX_IDC:USDINR', title: 'USD/INR' },
  { proName: 'TVC:GOLD', title: 'Gold' },
  { proName: 'OANDA:XAUUSD', title: 'Gold (USD)' },
   { proName: 'FX_IDC:USDINR', title: 'USD/INR' },
];

function MarketTicker() {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;
    container.innerHTML = '';

    const widget = document.createElement('div');
    widget.className = 'tradingview-widget-container__widget';
    container.appendChild(widget);

    const script = document.createElement('script');
    script.src =
      'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbols: SYMBOLS,
      showSymbolLogo: false,
      colorTheme: 'dark',
      isTransparent: true,
      displayMode: 'adaptive',
      locale: 'en',
    });
    container.appendChild(script);

    return () => {
      container.innerHTML = '';
    };
  }, []);

  return (
    <div
      className="border-b border-white/10"
      style={{ background: '#0e1a2b' }}
      role="region"
      aria-label="Live market data"
    >
      <div
        ref={ref}
        className="tradingview-widget-container mx-auto max-w-7xl"
        style={{ minHeight: 46 }}
      />
    </div>
  );
}

export default memo(MarketTicker);