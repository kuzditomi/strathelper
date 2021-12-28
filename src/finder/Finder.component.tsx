import { useState, useEffect, useRef } from 'react';
import { OptionType, Trade, TradeGroup } from '../chart/chart.models';
import { OptionExpiryChart } from '../chart/OptionExpiryChart.component';
import { getData, getExpiries, getStrikePrices, getTrade, OptionChainResult } from './finder.api';
import './finder.scss';

function useFinder(ticker: string) {
  const [isLoading, setIsLoading] = useState(false);
  const [optionChain, setOptionChain] = useState<OptionChainResult | undefined>();
  const [expiries, setExpiries] = useState<string[] | undefined>();

  useEffect(() => {
    if (!ticker) {
      setOptionChain(undefined);
      return;
    }
    setIsLoading(true);

    (async () => {
      try {
        const chain = await getData(ticker);

        setOptionChain(chain);
        setExpiries(getExpiries(chain))
      } finally {
        setIsLoading(false);
      }
    })();
  }, [ticker]);

  const getStrikes = (expiry: string) => {
    if (!optionChain) {
      throw Error("Strikes were read while optionchain is not loaded");
    }

    return getStrikePrices(optionChain, expiry);
  }

  const getOption = (expiry: string, strike: string, optionType: OptionType, amount: number): Trade => {
    if (!optionChain) {
      throw Error("Option were read while optionchain is not loaded");
    }

    return getTrade(optionChain, expiry, strike, optionType, amount);
  }

  return { isLoading, expiries, getStrikes, getOption };
}

interface Option {
  type: OptionType;
  strike: number;
  expiry: string;
}

export const Finder: React.FC = () => {
  const tickerRef = useRef<HTMLInputElement>(null);
  const [ticker, setTicker] = useState('');
  const [expiry, setExpiry] = useState('');
  const [options, setOptions] = useState({} as Record<string, Trade>);
  const { isLoading, expiries, getStrikes, getOption } = useFinder(ticker);

  const addOption = function (id: string, type: OptionType, strike: string, amount: number = 1) {
    const optionTrade = getOption(expiry, strike, type, amount)

    setOptions({
      ...options,
      [id]: optionTrade,
    });
  };

  const renderExpiries = () => {
    if (isLoading) {
      return <p>Loading...</p>;
    }

    if (!expiries) {
      return null;
    }

    return (
      <div className="expiries">
        {expiries.map((exp) => (
          <button
            key={exp}
            onClick={() => {
              setExpiry(exp);
              setOptions({});
            }}
          >
            {exp.split(':')[0]}
          </button>
        ))}
      </div>
    );
  };

  const OptionCell: React.FC<{
    key: string;
    strike: string;
    expiry: string;
    type: OptionType;
  }> = ({ strike, type }) => {

    const id = `${type}${strike}${expiry}`;

    return (
      <td
        align="center"
        className={options[id] ? options[id].position > 0 ? 'plus' : 'minus' : ''}
      >
        <button
          onClick={(evt) => {
            addOption(id, type, strike, evt.ctrlKey ? -1 : 1);
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

    const prices = getStrikes(expiry);

    return (
      <div className="prices">
        <table>
          <tbody>
            <tr>
              {prices.map((strike) => (
                <OptionCell
                  key={expiry + strike + 'C'}
                  expiry={expiry}
                  strike={strike}
                  type="C"
                />
              ))}
            </tr>
            <tr>
              {prices.map((n) => (
                <td align="center" key={n}>
                  {n}
                </td>
              ))}
            </tr>
            <tr>
              {prices.map((strike) => (
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

  const renderChart = () => {
    if (!Object.keys(options).length) {
      return null;
    }

    const tradeGroup: TradeGroup = {
      expiration: new Date(expiry),
      underlying: ticker,
      trades: Object.values(options)
    }

    return (
      <div className="chart">
        <OptionExpiryChart chartData={tradeGroup} />
      </div>
    );
  }

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
      {renderChart()}
    </div>
  );
};
