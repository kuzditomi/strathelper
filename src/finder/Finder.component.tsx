import { useState, useEffect, useRef } from 'react';
import { getData, TickerData } from './finder.api';
import './finder.scss';

function useFinder(ticker: string) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<TickerData | undefined>();

  useEffect(() => {
    if (!ticker) {
      setData(undefined);
      return;
    }
    setIsLoading(true);

    (async () => {
      try {
        const tickerData = await getData(ticker);

        setData(tickerData);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [ticker]);

  return { isLoading, data };
}

interface Option {
  type: 'C' | 'P';
  strike: number;
  expiry: string;
}

export const Finder: React.FC = () => {
  const tickerRef = useRef<HTMLInputElement>(null);
  const [ticker, setTicker] = useState('');
  const [expiry, setExpiry] = useState('');
  const [options, setOptions] = useState({} as Record<string, Option>);
  const { isLoading, data } = useFinder(ticker);

  const addOption = function (type: 'C' | 'P', strike: number, expiry: string) {
    setOptions({
      ...options,
      [`${type}${strike}${expiry}`]: { type, strike, expiry },
    });
  };

  const renderExpiries = () => {
    if (isLoading) {
      return <p>Loading...</p>;
    }

    if (!data) {
      return null;
    }

    return (
      <div className="expiries">
        {data?.expiries.map((exp) => (
          <button
            key={exp}
            onClick={() => {
              setExpiry(exp);
              setOptions({});
            }}
          >
            {exp}
          </button>
        ))}
      </div>
    );
  };

  const OptionCell: React.FC<{
    key: string;
    strike: number;
    expiry: string;
    type: 'C' | 'P';
  }> = ({ strike, type }) => {
    return (
      <td
        align="center"
        className={options[`${type}${strike}${expiry}`] ? 'plus' : ''}
      >
        <button
          onClick={() => {
            addOption(type, strike, expiry);
          }}
        >
          {type}
        </button>
      </td>
    );
  };
  const renderPrices = () => {
    if (!expiry) {
      return null;
    }

    return (
      <div className="prices">
        <table>
          <tbody>
            <tr>
              {data?.prices[expiry].map((strike) => (
                <OptionCell
                  key={expiry + strike + 'C'}
                  expiry={expiry}
                  strike={strike}
                  type="C"
                />
              ))}
            </tr>
            <tr>
              {data?.prices[expiry].map((n) => (
                <td align="center" key={n}>
                  {n}
                </td>
              ))}
            </tr>
            <tr>
              {data?.prices[expiry].map((strike) => (
                <OptionCell
                  key={expiry + strike + 'P'}
                  expiry={expiry}
                  strike={strike}
                  type="P"
                />
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div>
      <div className="ticker">
        <label>
          Ticker:
          <input type="text" ref={tickerRef} />
        </label>
        <button
          onClick={() => {
            tickerRef?.current?.value && setTicker(tickerRef.current.value);
          }}
        >
          GO
        </button>
      </div>
      {renderExpiries()}
      {renderPrices()}
    </div>
  );
};
