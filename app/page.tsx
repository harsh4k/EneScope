"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Home from "@/components/sections/home"
import Bills from "@/components/sections/bills"
import Suggestion from "@/components/sections/suggestion"
import UserDashboard from "@/components/sections/user-dashboard"
import CityInsights from "@/components/sections/city-insights"
import Feedback from "@/components/sections/feedback"
import Settings from "@/components/sections/settings"
import Footer from "@/components/footer"
import { LanguageProvider } from "@/context/language-context"
import { AccessibilityProvider } from "@/context/accessibility-context"

export default function Page() {
  const [activeSection, setActiveSection] = useState("dashboard")
  const [showSettings, setShowSettings] = useState(false)

  const renderSection = () => {
    switch (activeSection) {
      case "about":
        return <Home />
      case "bills":
        return <Bills />
      case "faqs":
        return <Suggestion />
      case "dashboard":
        return <UserDashboard />
      case "insights":
        return <CityInsights />
      case "feedback":
        return <Feedback />
      default:
        return <UserDashboard />
    }
  }

  return (
    <AccessibilityProvider>
      <LanguageProvider>
        <div className="min-h-screen flex flex-col bg-background">
          <Navigation
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            onSettingsClick={() => setShowSettings(true)}
          />
          <main className="flex-1 w-full">{renderSection()}</main>
          <Footer />
          {showSettings && <Settings onClose={() => setShowSettings(false)} />}
        </div>
      </LanguageProvider>
    </AccessibilityProvider>
  )
}
