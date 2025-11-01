"use client"

import { useState } from "react"
import { useLanguage } from "@/context/language-context"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Volume2, ChevronDown, ChevronUp } from "lucide-react"

export default function Education() {
  const { t } = useLanguage()
  const [expandedSection, setExpandedSection] = useState<string | null>("how-it-works")
  const [playingTTS, setPlayingTTS] = useState(false)

  const sections = [
    {
      id: "how-it-works",
      title: "How Electricity Works",
      content:
        "Electricity flows from power plants through high-voltage transmission lines to substations, then to local distribution networks, and finally to your home. Understanding this journey helps you appreciate where energy is generated and how you can contribute to grid stability.",
    },
    {
      id: "smart-habits",
      title: "Smart Energy Habits",
      content:
        "Simple daily practices can reduce your consumption: switch off lights when leaving rooms, use natural daylight, maintain appliances regularly, and adjust heating/cooling temperatures by just 1-2 degrees. Small changes across millions of homes create massive impact.",
    },
    {
      id: "appliances",
      title: "Appliance Usage Guide",
      content:
        "Air conditioners use 1.5-2 kW, refrigerators 0.15-0.5 kW (continuous), water heaters 2-4 kW, and washing machines 1.5-2 kW per cycle. Understanding these helps you identify high-consumption appliances and manage them wisely.",
    },
    {
      id: "climate",
      title: "Energy & Climate Connection",
      content:
        "Most Indian electricity comes from coal, producing CO₂ emissions. Each kWh you save prevents about 0.75 kg of CO₂. Collectively, if 20% of homes reduced usage by 10%, we'd save millions of tons annually—equivalent to planting 50 million trees.",
    },
  ]

  return (
    <div className="w-full py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2">{t("education")}</h1>
            <p className="text-muted-foreground">Learn about electricity, climate impact, and energy conservation.</p>
          </div>
          <Button
            variant="outline"
            onClick={() => setPlayingTTS(!playingTTS)}
            className="flex items-center gap-2"
            aria-label="Listen to this page"
          >
            <Volume2 className="w-4 h-4" />
            <span className="hidden sm:inline">Listen</span>
          </Button>
        </div>

        <div className="space-y-4">
          {sections.map((section) => (
            <Card
              key={section.id}
              className="cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => setExpandedSection(expandedSection === section.id ? null : section.id)}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{section.title}</CardTitle>
                  {expandedSection === section.id ? (
                    <ChevronUp className="w-5 h-5 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                  )}
                </div>
              </CardHeader>
              {expandedSection === section.id && (
                <CardContent>
                  <p className="leading-relaxed text-muted-foreground">{section.content}</p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        {/* Appliance Power Guide */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Common Appliances Power Consumption</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: "Air Conditioner", power: "1.5-2 kW", note: "Biggest consumer" },
                { name: "Refrigerator", power: "0.15-0.5 kW", note: "Runs 24/7" },
                { name: "Water Heater", power: "2-4 kW", note: "Peak usage: mornings" },
                { name: "Washing Machine", power: "1.5-2 kW", note: "Per cycle" },
                { name: "Microwave", power: "0.8-1.2 kW", note: "High power, short use" },
                { name: "LED Bulb", power: "0.01-0.02 kW", note: "Very efficient" },
              ].map((appliance, idx) => (
                <div key={idx} className="p-4 bg-muted/50 rounded-lg">
                  <div className="font-semibold">{appliance.name}</div>
                  <div className="text-lg font-bold text-accent mt-1">{appliance.power}</div>
                  <div className="text-sm text-muted-foreground mt-1">{appliance.note}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
