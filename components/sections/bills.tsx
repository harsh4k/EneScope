"use client"

import { useState } from "react"
import { useLanguage } from "@/context/language-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Upload, TrendingUp } from "lucide-react"

export default function Bills() {
  const { t } = useLanguage()
  const [units, setUnits] = useState("")
  const [billData, setBillData] = useState<any>(null)

  const handleCalculate = () => {
    if (!units) return
    const kwh = Number.parseFloat(units)
    const rate = 8 // Average rate in INR per kWh
    const co2 = (kwh * 0.75).toFixed(2) // Approximate CO2 generation
    setBillData({
      kwh: kwh.toFixed(2),
      amount: (kwh * rate).toFixed(0),
      co2,
      comparison: (((kwh - 120) / 120) * 100).toFixed(1),
    })
  }

  return (
    <div className="w-full py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">{t("bills")}</h1>
        <p className="text-muted-foreground mb-8">Enter your electricity units to track usage and carbon impact.</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Input Card */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle>Enter Usage</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Units Used (kWh)</label>
                <Input
                  type="number"
                  placeholder="e.g., 250"
                  value={units}
                  onChange={(e) => setUnits(e.target.value)}
                  className="w-full"
                />
              </div>
              <Button onClick={handleCalculate} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                Calculate
              </Button>
              <Button variant="outline" className="w-full bg-transparent">
                <Upload className="w-4 h-4 mr-2" />
                Upload Bill Image
              </Button>
            </CardContent>
          </Card>

          {/* Results Cards */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {billData && (
              <>
                <Card>
                  <CardContent className="pt-6">
                    <div className="text-sm text-muted-foreground mb-1">Total Usage</div>
                    <div className="text-3xl font-bold text-primary">{billData.kwh} kWh</div>
                    <div className="text-xs text-muted-foreground mt-2">This month's electricity consumption</div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="text-sm text-muted-foreground mb-1">Estimated Bill</div>
                    <div className="text-3xl font-bold text-primary">₹{billData.amount}</div>
                    <div className="text-xs text-muted-foreground mt-2">At ₹8 per kWh average rate</div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="text-sm text-muted-foreground mb-1">CO₂ Footprint</div>
                    <div className="text-3xl font-bold text-accent">{billData.co2} kg</div>
                    <div className="text-xs text-muted-foreground mt-2">Approximate carbon emissions</div>
                  </CardContent>
                </Card>

                <Card className={billData.comparison > 0 ? "border-red-200" : "border-green-200"}>
                  <CardContent className="pt-6">
                    <div className="text-sm text-muted-foreground mb-1">vs City Average</div>
                    <div
                      className={`text-3xl font-bold flex items-center gap-2 ${billData.comparison > 0 ? "text-red-600" : "text-green-600"}`}
                    >
                      <TrendingUp className="w-6 h-6" />
                      {Math.abs(billData.comparison)}%
                    </div>
                    <div className="text-xs text-muted-foreground mt-2">
                      {billData.comparison > 0 ? "Above" : "Below"} average
                    </div>
                  </CardContent>
                </Card>
              </>
            )}
          </div>
        </div>

        {/* Tips Section */}
        {billData && (
          <Card className="mt-8 bg-accent/5 border-accent/20">
            <CardHeader>
              <CardTitle className="text-accent flex items-center gap-2">
                <span>💡</span> {t("energyTips")}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex gap-3">
                <span className="text-lg">✓</span>
                <p>Use LED bulbs instead of incandescent to save up to 80% on lighting</p>
              </div>
              <div className="flex gap-3">
                <span className="text-lg">✓</span>
                <p>Run AC at 24-26°C and service it regularly for optimal efficiency</p>
              </div>
              <div className="flex gap-3">
                <span className="text-lg">✓</span>
                <p>Unplug devices when not in use to eliminate phantom power drain</p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
