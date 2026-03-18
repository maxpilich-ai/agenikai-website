'use client';

import { useState } from 'react';

export default function ROICalculator() {
  const [teamSize, setTeamSize] = useState(10);
  const [manualHours, setManualHours] = useState(40);
  const [hourlyCost, setHourlyCost] = useState(50);
  const [automationRate, setAutomationRate] = useState(60);

  const monthlyCost = teamSize * manualHours * 4.33 * hourlyCost;
  const automatedCost = (monthlyCost * (100 - automationRate)) / 100;
  const savings = monthlyCost - automatedCost;
  const annualSavings = savings * 12;

  return (
    <div className="roi-calculator">
      <div className="calculator-header">
        <h3>Calculate Your ROI</h3>
        <p>Estimate how much you can save with AgeniKAI</p>
      </div>

      <div className="calculator-sliders">
        <div className="slider-wrapper">
          <div className="slider-label-group">
            <label>Team Size</label>
            <span className="slider-value-display">{teamSize} people</span>
          </div>
          <input
            type="range"
            min="1"
            max="100"
            value={teamSize}
            onChange={(e) => setTeamSize(parseInt(e.target.value))}
            className="calculator-slider"
          />
          <div className="slider-limits">
            <span>1</span>
            <span>100+</span>
          </div>
        </div>

        <div className="slider-wrapper">
          <div className="slider-label-group">
            <label>Manual Hours per Person/Week</label>
            <span className="slider-value-display">{manualHours}h</span>
          </div>
          <input
            type="range"
            min="5"
            max="40"
            value={manualHours}
            onChange={(e) => setManualHours(parseInt(e.target.value))}
            className="calculator-slider"
          />
          <div className="slider-limits">
            <span>5h</span>
            <span>40h</span>
          </div>
        </div>

        <div className="slider-wrapper">
          <div className="slider-label-group">
            <label>Avg. Hourly Cost</label>
            <span className="slider-value-display">${hourlyCost}</span>
          </div>
          <input
            type="range"
            min="15"
            max="150"
            value={hourlyCost}
            onChange={(e) => setHourlyCost(parseInt(e.target.value))}
            className="calculator-slider"
          />
          <div className="slider-limits">
            <span>$15</span>
            <span>$150</span>
          </div>
        </div>

        <div className="slider-wrapper">
          <div className="slider-label-group">
            <label>Automation Rate</label>
            <span className="slider-value-display">{automationRate}%</span>
          </div>
          <input
            type="range"
            min="10"
            max="95"
            value={automationRate}
            onChange={(e) => setAutomationRate(parseInt(e.target.value))}
            className="calculator-slider"
          />
          <div className="slider-limits">
            <span>10%</span>
            <span>95%</span>
          </div>
        </div>
      </div>

      <div className="calculator-results">
        <div className="result-box">
          <div className="result-label">Monthly Savings</div>
          <div className="result-value">${Math.round(savings).toLocaleString()}</div>
        </div>
        <div className="result-box featured">
          <div className="result-label">Annual Savings</div>
          <div className="result-value">${Math.round(annualSavings).toLocaleString()}</div>
        </div>
      </div>
    </div>
  );
}
