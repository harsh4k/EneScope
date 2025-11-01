"use client"

import { useState } from "react"
import { useLanguage } from "@/context/language-context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, TrendingUp, Zap, Lightbulb, Sliders, AlertCircle } from "lucide-react"

export default function UserDashboard() {
  const { t } = useLanguage()
  const [acTemp, setAcTemp] = useState(23)
  const [ledSwitched, setLedSwitched] = useState(false)
  const [acRunHours, setAcRunHours] = useState(8)

  const dashboardData = {
    dailyAvg: 4.2,
    monthlyEstimate: 125,
    monthlyBill: 1000,
    monthlyEmissions: 93.75,
    trend: 5.2,
  }

  const applianceData = [
    {
      name: "Air Conditioner",
      icon: "❄️",
      dailyUsage: 2.1,
      monthlyUsage: 63,
      monthlyBill: 504,
      percentage: 50,
      age: 8,
      efficiency: "3-star",
      recommendations:
        "Your AC is 8 years old and running above average. A 5-star inverter AC could save ₹150-200/month.",
      tips: [
        "Set temperature to 25-26°C instead of 23°C to save 5-10% energy",
        "Use sleep mode or timer function to turn off automatically",
        "Clean filters monthly to maintain efficiency",
        "Keep doors and windows closed when AC is running",
        "Use ceiling fans alongside AC to improve circulation",
      ],
    },
    {
      name: "Refrigerator",
      icon: "❄️",
      dailyUsage: 0.8,
      monthlyUsage: 24,
      monthlyBill: 192,
      percentage: 19.2,
      age: 10,
      efficiency: "3-star",
      recommendations:
        "Your fridge is consuming 25% more power than average. A 5-star model could save ₹180/month (₹2,160/year).",
      tips: [
        "Keep fridge at 37-38°F for optimal efficiency",
        "Don't open door frequently - plan what you need first",
        "Allow hot food to cool before placing in fridge",
        "Ensure proper ventilation around the fridge (2 inches gap)",
        "Defrost regularly to maintain cooling efficiency",
      ],
    },
    {
      name: "Water Heater",
      icon: "💧",
      dailyUsage: 0.6,
      monthlyUsage: 18,
      monthlyBill: 144,
      percentage: 14.4,
      age: 6,
      efficiency: "3-star",
      recommendations: "Switch to a solar water heater to reduce electricity usage by 70-80%.",
      tips: [
        "Reduce water heater temperature to 120°F (49°C)",
        "Take shorter showers to reduce hot water usage",
        "Install a timer to heat water only when needed",
        "Insulate hot water pipes to reduce heat loss",
        "Fix leaking hot water taps immediately",
      ],
    },
    {
      name: "Washing Machine",
      icon: "👕",
      dailyUsage: 0.3,
      monthlyUsage: 9,
      monthlyBill: 72,
      percentage: 7.2,
      age: 5,
      efficiency: "2-star",
      recommendations: "Consider upgrading to a 5-star or inverter washing machine for 30-40% energy savings.",
      tips: [
        "Use cold water for washing - saves energy for heating",
        "Wash full loads instead of partial loads",
        "Use eco mode if available on your machine",
        "Use shorter wash cycles for lightly soiled clothes",
        "Air dry clothes instead of using dryer",
      ],
    },
    {
      name: "Lighting",
      icon: "💡",
      dailyUsage: 0.2,
      monthlyUsage: 6,
      monthlyBill: 48,
      percentage: 4.8,
      age: 3,
      efficiency: "LED",
      recommendations: "You're already using energy-efficient lighting! Continue maintaining this.",
      tips: [
        "Replace all bulbs with LED lights - 80% more efficient",
        "Turn off lights when leaving a room",
        "Use natural daylight whenever possible",
        "Install motion sensors in less-used areas",
        "Clean light fixtures to improve brightness",
      ],
    },
    {
      name: "Television",
      icon: "📺",
      dailyUsage: 0.2,
      monthlyUsage: 6,
      monthlyBill: 48,
      percentage: 4.8,
      age: 4,
      efficiency: "4-star",
      recommendations: "Your TV is reasonably efficient. Focus on reducing usage time.",
      tips: [
        "Turn off TV completely instead of using standby mode",
        "Reduce brightness to comfortable level",
        "Unplug TV when not using for extended periods",
        "Use power strips to cut standby power draw",
        "Limit viewing time to save energy",
      ],
    },
  ]

  const calculateACSavings = () => {
    const baselineTemp = 23 // Baseline temperature with 0 savings
    const maxSavings = 467 // Maximum savings at highest temperature
    const maxTemp = 28 // Maximum temperature
    const savingsPerDegree = maxSavings / (maxTemp - baselineTemp) // ₹93.4 per degree

    // Calculate savings relative to 23°C baseline
    const savings = (acTemp - baselineTemp) * savingsPerDegree
    return Math.round(savings)
  }

  const calculateLEDSavings = () => {
    if (ledSwitched) {
      return Math.round(48 * 0.8) // 80% savings on lighting
    }
    return 0
  }

  const totalSavings = calculateACSavings() + calculateLEDSavings()

  return (
    <div className="w-full py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-16">
          <div>
            <h1 className="text-4xl font-bold mb-3">{t("dashboard")}</h1>
            <p className="text-muted-foreground text-lg">Your personal energy tracking and analytics.</p>
          </div>
          <Button className="flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground transition-all duration-300 transform hover:scale-105 active:scale-95">
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">Download Report</span>
          </Button>
        </div>

        {/* Key Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Card className="transition-all duration-300 ease-out hover:shadow-lg hover:-translate-y-1 hover:scale-105 cursor-pointer">
            <CardContent className="pt-8">
              <div className="text-sm text-muted-foreground mb-3">Daily Avg</div>
              <div className="text-3xl font-bold text-primary mb-4">{dashboardData.dailyAvg} kWh</div>
              <div className="text-xs text-muted-foreground">Per day average</div>
            </CardContent>
          </Card>

          <Card className="transition-all duration-300 ease-out hover:shadow-lg hover:-translate-y-1 hover:scale-105 cursor-pointer">
            <CardContent className="pt-8">
              <div className="text-sm text-muted-foreground mb-3">Monthly Usage</div>
              <div className="text-3xl font-bold text-primary mb-4">{dashboardData.monthlyEstimate} kWh</div>
              <div className="text-xs text-muted-foreground">Current month estimate</div>
            </CardContent>
          </Card>

          <Card className="transition-all duration-300 ease-out hover:shadow-lg hover:-translate-y-1 hover:scale-105 cursor-pointer">
            <CardContent className="pt-8">
              <div className="text-sm text-muted-foreground mb-3">Estimated Bill</div>
              <div className="text-3xl font-bold mb-4 text-muted">₹{dashboardData.monthlyBill}</div>
              <div className="text-xs text-muted-foreground">This month</div>
            </CardContent>
          </Card>

          <Card className="transition-all duration-300 ease-out hover:shadow-lg hover:-translate-y-1 hover:scale-105 cursor-pointer">
            <CardContent className="pt-8">
              <div className="text-sm text-muted-foreground mb-3">CO₂ This Month</div>
              <div className="text-3xl font-bold text-primary mb-4">{dashboardData.monthlyEmissions} kg</div>
              <div className="text-xs text-muted-foreground">Carbon footprint</div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <Sliders className="w-6 h-6 text-accent" />
            Interactive Savings Simulator
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* AC Temperature Simulator */}
            <Card className="transition-all duration-300 ease-out hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <span>❄️</span> AC Temperature Impact
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <label className="text-sm font-semibold">Set AC Temperature</label>
                    <span className="text-2xl font-bold text-accent">{acTemp}°C</span>
                  </div>
                  <input
                    type="range"
                    min="20"
                    max="28"
                    value={acTemp}
                    onChange={(e) => setAcTemp(Number(e.target.value))}
                    className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-accent"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-2">
                    <span>20°C (Max)</span>
                    <span>28°C (Min)</span>
                  </div>
                </div>
                <div className="bg-accent/10 rounded-lg p-4 border-l-4 border-accent">
                  <p className="text-sm text-muted-foreground mb-2">Monthly Savings at {acTemp}°C:</p>
                  <p className="text-2xl font-bold text-accent">₹{calculateACSavings()}</p>
                  <p className="text-xs text-muted-foreground mt-2">
                    {acTemp > 23 ? "Raising temperature saves energy" : "Lower temperature uses more energy"}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* LED Bulb Simulator */}
            <Card className="transition-all duration-300 ease-out hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <span>💡</span> LED Bulb Replacement
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between p-4 rounded-lg bg-[rgba(131,184,125,1)] text-muted">
                  <div>
                    <p className="text-sm font-semibold mb-1">Switch to LED Bulbs</p>
                    <p className="text-xs text-muted-foreground">80% more efficient than traditional bulbs</p>
                  </div>
                  <button
                    onClick={() => setLedSwitched(!ledSwitched)}
                    className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
                      ledSwitched ? "bg-accent" : "bg-muted"
                    }`}
                  >
                    <span
                      className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                        ledSwitched ? "translate-x-7" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>
                <div className="bg-accent/10 rounded-lg p-4 border-l-4 border-accent">
                  <p className="text-sm text-muted-foreground mb-2">Monthly Savings with LED:</p>
                  <p className="text-2xl font-bold text-accent">₹{calculateLEDSavings()}</p>
                  <p className="text-xs text-muted-foreground mt-2">
                    {ledSwitched ? "You're saving energy with LED bulbs!" : "Switch to LED to save energy"}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Total Savings Card */}
          {totalSavings > 0 && (
            <Card className="mt-8 bg-gradient-to-r from-accent/10 to-accent/5 border-2 border-accent">
              <CardContent className="pt-8">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Total Potential Monthly Savings</p>
                    <p className="text-4xl font-bold text-accent">₹{totalSavings}/month</p>
                    <p className="text-sm text-muted-foreground mt-2">That's ₹{totalSavings * 12}/year!</p>
                  </div>
                  <Zap className="w-16 h-16 text-accent opacity-20" />
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="transition-all duration-300 ease-out hover:shadow-lg hover:-translate-y-1">
            <CardHeader className="pb-8">
              <CardTitle className="text-lg">Daily Usage Pattern (Last 7 Days)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-56 flex items-end justify-around gap-3">
                {[3.1, 4.2, 3.8, 5.1, 4.5, 4.0, 4.2].map((value, idx) => (
                  <div
                    key={idx}
                    className="flex-1 bg-accent rounded-t-lg transition-all duration-300 hover:opacity-80 hover:scale-y-110 hover:shadow-lg cursor-pointer"
                    style={{ height: `${(value / 5.1) * 100}%` }}
                    title={`Day ${idx + 1}: ${value} kWh`}
                  />
                ))}
              </div>
              <div className="flex justify-between text-xs text-muted-foreground mt-6">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </div>
            </CardContent>
          </Card>

          <Card className="transition-all duration-300 ease-out hover:shadow-lg hover:-translate-y-1">
            <CardHeader className="pb-8">
              <CardTitle className="text-lg">Monthly Comparison</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between mb-3">
                    <span className="text-sm font-medium">This Month</span>
                    <span className="text-sm font-bold text-primary">125 kWh</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3">
                    <div
                      className="bg-accent h-3 rounded-full transition-all duration-300 hover:shadow-lg"
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-3">
                    <span className="text-sm font-medium">Last Month</span>
                    <span className="text-sm font-bold text-muted-foreground">119 kWh</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3">
                    <div
                      className="bg-primary h-3 rounded-full transition-all duration-300 hover:shadow-lg"
                      style={{ width: "95%" }}
                    />
                  </div>
                </div>
                <div className="pt-6 border-t">
                  <div className="flex items-center gap-3 text-sm">
                    <TrendingUp className="w-4 h-4 text-red-500" />
                    <span>Usage increased by {dashboardData.trend}% from last month</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Appliance Analysis Section */}
        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-10 flex items-center gap-3">
            <Zap className="w-6 h-6 text-accent" />
            Appliance Analysis & Recommendations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {applianceData.map((appliance, idx) => (
              <Card
                key={idx}
                className="overflow-hidden transition-all duration-300 ease-out hover:shadow-xl hover:-translate-y-2 hover:scale-105 flex flex-col cursor-pointer"
              >
                <CardHeader className="pb-6 bg-gradient-to-r from-primary/5 to-accent/5">
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <CardTitle className="flex items-center gap-3 text-lg mb-2">
                        <span className="text-3xl transition-transform duration-300 hover:scale-125">
                          {appliance.icon}
                        </span>
                        {appliance.name}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">Monthly Usage & Cost Analysis</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="text-2xl font-bold text-primary">{appliance.percentage}%</div>
                      <p className="text-xs text-muted-foreground mt-1">of total usage</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6 flex-1">
                  {/* Device Info */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-sm">
                      <p className="text-muted-foreground text-xs mb-1">Age</p>
                      <p className="font-semibold">{appliance.age} years</p>
                    </div>
                    <div className="text-sm">
                      <p className="text-muted-foreground text-xs mb-1">Efficiency</p>
                      <p className="font-semibold text-accent">{appliance.efficiency}</p>
                    </div>
                  </div>

                  {/* Usage stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-muted/50 rounded-lg p-4 transition-all duration-300 hover:bg-accent/10 hover:shadow-md">
                      <p className="text-xs mb-2 text-primary-foreground">Daily Usage</p>
                      <p className="text-2xl font-semibold text-primary">{appliance.dailyUsage} kWh</p>
                    </div>
                    <div className="rounded-lg p-4 transition-all duration-300 hover:bg-accent/10 hover:shadow-md bg-[rgba(16,93,8,1)]">
                      <p className="text-xs mb-2 text-primary-foreground">Monthly Cost</p>
                      <p className="text-2xl font-semibold text-[rgba(112,164,103,1)]">₹{appliance.monthlyBill}</p>
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div>
                    <div className="flex justify-between mb-3">
                      <span className="text-sm font-medium">Monthly Usage</span>
                      <span className="text-sm text-primary font-semibold">{appliance.monthlyUsage} kWh</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2.5 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-accent to-accent/70 h-2.5 rounded-full transition-all duration-300 hover:shadow-lg"
                        style={{ width: `${Math.min(appliance.percentage * 2, 100)}%` }}
                      />
                    </div>
                  </div>

                  <div className="bg-orange-50 border-l-4 border-orange-500 rounded p-4">
                    <div className="flex gap-3">
                      <AlertCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      <div className="text-sm">
                        <p className="font-semibold text-orange-900 mb-1">Upgrade Recommendation</p>
                        <p className="text-orange-800">{appliance.recommendations}</p>
                      </div>
                    </div>
                  </div>

                  {/* Tips section */}
                  <div className="border-t pt-6">
                    <p className="text-sm font-semibold mb-4 flex items-center gap-2">
                      <Lightbulb className="w-4 h-4 text-yellow-500" />
                      Energy Saving Tips
                    </p>
                    <ul className="space-y-3">
                      {appliance.tips.map((tip, tipIdx) => (
                        <li
                          key={tipIdx}
                          className="text-sm text-muted-foreground leading-relaxed flex gap-3 transition-all duration-300 hover:translate-x-1"
                        >
                          <span className="text-accent font-bold mt-0.5 flex-shrink-0">•</span>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
