"use client"

import { useLanguage } from "@/context/language-context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Users, Zap, TrendingUp } from "lucide-react"

export default function CityInsights() {
  const { t } = useLanguage()

  const cityStats = [
    { icon: Users, label: "Active Users", value: "2.5M", change: "+12%" },
    { icon: Zap, label: "Avg Usage/Home", value: "125 kWh", change: "+3%" },
    { icon: TrendingUp, label: "Peak Hour", value: "7-9 PM", change: "Stable" },
  ]

  const mumbaiZones = [
    { name: "North Mumbai", usage: 85, color: "bg-red-500", coords: "20-25%" },
    { name: "Central Mumbai", usage: 92, color: "bg-orange-500", coords: "35-45%" },
    { name: "South Mumbai", usage: 78, color: "bg-yellow-500", coords: "55-65%" },
    { name: "Eastern Mumbai", usage: 88, color: "bg-orange-600", coords: "75-85%" },
  ]

  return (
    <div className="w-full py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">{t("insights")}</h1>
            <p className="text-muted-foreground">Explore energy trends and climate insights for Indian cities.</p>
          </div>
          <Button className="flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground">
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">Download Data</span>
          </Button>
        </div>

        {/* City Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {cityStats.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <Card key={idx}>
                <CardContent className="pt-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">{stat.label}</p>
                      <p className="text-3xl font-bold text-primary">{stat.value}</p>
                      <p className="text-xs text-accent mt-2">{stat.change}</p>
                    </div>
                    <Icon className="w-8 h-8 text-accent opacity-50" />
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Mumbai Energy Distribution Map</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Map Container */}
              <div className="lg:col-span-2">
                <div className="relative w-full bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-8 border border-primary/20 aspect-video flex items-center justify-center overflow-hidden">
                  {/* Mumbai Map SVG-style representation */}
                  <svg viewBox="0 0 400 500" className="w-full h-full">
                    {/* Water background */}
                    <rect width="400" height="500" fill="#e0f2fe" />

                    {/* North Mumbai Zone */}
                    <circle cx="150" cy="100" r="60" fill="#ef4444" opacity="0.3" />
                    <text x="150" y="100" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1f2937">
                      North
                    </text>

                    {/* Central Mumbai Zone */}
                    <circle cx="200" cy="180" r="70" fill="#f97316" opacity="0.35" />
                    <text x="200" y="180" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1f2937">
                      Central
                    </text>

                    {/* South Mumbai Zone */}
                    <circle cx="150" cy="280" r="55" fill="#eab308" opacity="0.3" />
                    <text x="150" y="280" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1f2937">
                      South
                    </text>

                    {/* Eastern Mumbai Zone */}
                    <circle cx="280" cy="240" r="65" fill="#ea580c" opacity="0.32" />
                    <text x="280" y="240" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1f2937">
                      Eastern
                    </text>
                  </svg>
                </div>
                <p className="text-xs text-muted-foreground mt-3 text-center">
                  Circle intensity represents energy consumption levels. Hover over zones for details.
                </p>
              </div>

              {/* Zone Legend and Stats */}
              <div className="space-y-3">
                <h3 className="font-semibold text-sm mb-4">Zone Breakdown</h3>
                {mumbaiZones.map((zone, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg border border-muted hover:border-accent transition-colors cursor-pointer group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium group-hover:text-accent transition-colors">{zone.name}</span>
                      <span className="text-xs font-bold text-accent">{zone.usage}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className={`${zone.color} h-2 rounded-full transition-all`}
                        style={{ width: `${zone.usage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Insights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-accent/30 bg-accent/5">
            <CardHeader>
              <CardTitle className="text-lg">Key Insight</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed">
                If 20% of homes in your city use efficient appliances, the city could save{" "}
                <span className="font-bold text-primary">₹50 crore per year</span>. That's equivalent to powering
                100,000 additional homes sustainably.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Temperature & Energy Correlation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Peak Usage Days (30°C+)</span>
                    <span className="font-bold">+45%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full" style={{ width: "45%" }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Normal Days (25-28°C)</span>
                    <span className="font-bold">Base</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-accent h-2 rounded-full" style={{ width: "100%" }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Cool Days (Below 25°C)</span>
                    <span className="font-bold">-25%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: "75%" }} />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
