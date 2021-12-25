import React from 'react';
interface ResultProps {
    maxLoss: number;
    maxWin: number;
    profitChance: number;
}

const RiskReward: React.FC<{ value: number }> = ({ value }) => {
    return (
        <span style={{ background: 'black', padding: 10, color: `hsl(${value},100%,50%)` }}>{value.toFixed(0)}%</span>
    )
}

const Profit: React.FC<{ value: number }> = ({ value = 0 }) => {
    return (
        <span style={{ background: 'black', padding: 10, color: value > 0 ? 'lime' : value == 0 ? 'grey' : 'red' }}>{value.toFixed(0)} $</span>
    )
}

export const Result: React.FC<ResultProps> = ({ maxLoss, maxWin, profitChance }) => {
    const longTermResult = (profitChance / 100) * maxWin - (1 - (profitChance / 100)) * maxLoss;

    return (
        <div className="result">
            <div className="field">
                <p>
                    <b>Reward on risk: <RiskReward value={((maxWin / maxLoss) * 100)} /></b>
                </p>
                <p>
                    <b>Long term profit: <Profit value={longTermResult}/></b>
                </p>
            </div>
        </div>
    )
}