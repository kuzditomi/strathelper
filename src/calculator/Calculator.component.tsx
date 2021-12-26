import React, { useEffect, useState } from 'react';
import './calculator.scss';
import { Result } from './Result.component';

const ACCOUNT_SIZE_KEY = 'accountSize';

interface FieldProps {
  label: string;
  value: number;
  setValue: (value: number) => void;
  minValue?: number;
  maxValue?: number;
  step?: number;
}

const Field: React.FC<FieldProps> = ({
  label,
  value,
  setValue,
  minValue = 1,
  maxValue,
  step = 1,
}) => {
  return (
    <div className="field">
      <label>
        <span className="title">{label}</span>
        {minValue}
        <input
          type="range"
          step={step}
          min={minValue}
          max={maxValue}
          value={value}
          onChange={({ target: { value } }) => setValue(Number(value))}
        />{' '}
        {maxValue || 1000}
      </label>
      <div>
        <input
          type="number"
          value={value}
          onChange={({ target: { value } }) => {
            setValue(Number(value));
          }}
        />
      </div>
    </div>
  );
};

export const CalculatorPage: React.FC = () => {
  const [accountSize, setAccountSize] = useState(
    Number(localStorage.getItem(ACCOUNT_SIZE_KEY)) || 10_000
  );
  const [maxLoss, setMaxLoss] = useState(1);
  const [maxWin, setMaxWin] = useState(1);
  const [profitChance, setProfitChance] = useState(50);

  const [takeProfit, setTakeProfit] = useState(100);
  const [stopLoss, setStopLoss] = useState(100);

  return (
    <div className="calculator">
      <div className="inputs">
        <div className="left">
          <div className="field">
            <label>
              Account size (will be remembered):{' '}
              <input
                type="number"
                value={accountSize}
                onChange={({ target: { value } }) => {
                  localStorage.setItem(ACCOUNT_SIZE_KEY, value);
                  setAccountSize(Number(value));
                }}
              />{' '}
              $
            </label>
          </div>
          <Field
            label="$ Max loss"
            value={maxLoss}
            setValue={setMaxLoss}
            maxValue={accountSize / 10}
          />
          <Field
            label="$ Max win"
            value={maxWin}
            setValue={setMaxWin}
            maxValue={accountSize / 10}
          />
          <Field
            label="% Profit chance"
            value={profitChance}
            setValue={setProfitChance}
            maxValue={100}
          />
        </div>
        <div className="right">
          <Field
            label="Take profit %"
            value={takeProfit}
            minValue={0}
            setValue={setTakeProfit}
            maxValue={100}
            step={5}
          />
          <Field
            label="Stop loss %"
            value={stopLoss}
            minValue={0}
            setValue={setStopLoss}
            maxValue={100}
            step={5}
          />
        </div>
      </div>
      <Result {...{ maxWin, maxLoss, profitChance, takeProfit, stopLoss }} />
    </div>
  );
};
