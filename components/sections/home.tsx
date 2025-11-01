"use client"

import { useLanguage } from "@/context/language-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Activity, Leaf, Cloud } from "lucide-react"

export default function Home() {
  const { t } = useLanguage()

  const stats = [
    {
      icon: Activity,
      label: t("avgHouseholdUse"),
      value: "120 kWh",
      description: "per month",
    },
    {
      icon: Leaf,
      label: t("co2Footprint"),
      value: "2.4 kg",
      description: "per day estimate",
    },
    {
      icon: Cloud,
      label: t("localWeather"),
      value: "28°C, 65%",
      description: "humidity",
    },
  ]

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-balance">{t("homeHeadline")}</h1>
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Track your electricity usage, understand climate impact, and join millions of Indians building a sustainable
            future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              {t("checkBill")}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary/90 bg-transparent"
            >
              {t("learnToSave")}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary/90 bg-transparent"
            >
              {t("exploreCityData")}
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, idx) => {
              const Icon = stat.icon
              return (
                <Card key={idx} className="border-2 border-muted hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-accent/10 rounded-lg">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-muted-foreground mb-1">{stat.label}</p>
                        <p className="text-2xl font-bold mb-1">{stat.value}</p>
                        <p className="text-xs text-muted-foreground">{stat.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-muted/30 py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">About EneScope Live</h2>
          <p className="text-lg leading-relaxed text-center mb-6">
            EneScope Live is India's civic-tech platform dedicated to energy transparency and climate awareness. We
            connect citizens, urban planners, and policymakers through real-time electricity data, personalized
            insights, and educational resources. Whether you're tracking your household consumption or exploring
            city-level energy trends, EneScope Live empowers you to make informed decisions that reduce costs, conserve
            resources, and build a more sustainable India.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">5M+</div>
                <p className="font-semibold">Users Tracking Energy</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold mb-2 text-muted">50+</div>
                <p className="font-semibold">Indian Cities Covered</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-primary mb-2">10M+</div>
                <p className="font-semibold">Tons CO₂ Saved</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
