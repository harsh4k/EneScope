"use client"

import { useState } from "react"
import { Menu, X, Settings, Globe, Zap } from "lucide-react"
import { useLanguage } from "@/context/language-context"

interface NavigationProps {
  activeSection: string
  setActiveSection: (section: string) => void
  onSettingsClick: () => void
}

export default function Navigation({ activeSection, setActiveSection, onSettingsClick }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [langDropdownOpen, setLangDropdownOpen] = useState(false)
  const { t, language, setLanguage } = useLanguage()

  const languages = ["en", "hi", "mr", "ta", "bn", "gu"] as const

  const sections = [
    { id: "dashboard", label: t("dashboard") },
    { id: "bills", label: t("bills") },
    { id: "insights", label: t("insights") },
    { id: "faqs", label: t("faqs") },
    { id: "feedback", label: t("feedback") },
    { id: "about", label: t("aboutUs") },
  ]

  const getLanguageName = (lang: string) => {
    const names: Record<string, string> = {
      en: "English",
      hi: "हिंदी",
      mr: "मराठी",
      ta: "தமிழ்",
      bn: "বাংলা",
      gu: "ગુજરાતી",
    }
    return names[lang] || lang.toUpperCase()
  }

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground shadow-lg border-b-4 border-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center gap-2">
            <Zap className="w-6 h-6 text-accent animate-pulse" />
            <span className="font-bold text-2xl tracking-tight font-sans">EneScope </span>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-1">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`px-4 py-2 rounded-t-lg text-sm font-semibold transition-all duration-300 ${
                  activeSection === section.id
                    ? "bg-accent text-accent-foreground shadow-md transform -translate-y-1"
                    : "hover:bg-primary/60 text-primary-foreground hover:shadow-md"
                }`}
                aria-label={`Navigate to ${section.label}`}
              >
                {section.label}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden sm:block relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-2 bg-primary/40 rounded-full px-4 py-2.5 text-sm font-semibold hover:bg-primary/50 transition-all duration-300 transform hover:scale-105"
              >
                <Globe className="w-4 h-4 flex-shrink-0" />
                <span>{getLanguageName(language)}</span>
              </button>
              {langDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 bg-white text-primary rounded-lg shadow-xl py-2 min-w-40 z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setLanguage(lang)
                        setLangDropdownOpen(false)
                      }}
                      className={`block w-full text-left px-4 py-2.5 text-sm font-semibold transition-all duration-200 ${
                        language === lang ? "bg-accent text-accent-foreground" : "hover:bg-muted text-primary"
                      }`}
                    >
                      {getLanguageName(lang)}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Settings Button */}
            <button
              onClick={onSettingsClick}
              className="p-2.5 rounded-full hover:bg-primary/60 transition-all duration-300 transform hover:scale-110 active:scale-95"
              aria-label="Open settings"
            >
              <Settings className="w-5 h-5" />
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-full hover:bg-primary/60 transition-all duration-300 transform hover:scale-110 active:scale-95"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-6 space-y-3 border-t border-primary/50 pt-6">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => {
                  setActiveSection(section.id)
                  setMobileMenuOpen(false)
                }}
                className={`block w-full text-left px-4 py-3 rounded-lg text-base font-semibold transition-all duration-300 ${
                  activeSection === section.id
                    ? "bg-accent text-accent-foreground shadow-md"
                    : "hover:bg-primary/60 text-primary-foreground"
                }`}
              >
                {section.label}
              </button>
            ))}
            <div className="px-4 py-4 border-t border-primary/50 mt-4">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-2 w-full bg-primary/40 rounded-lg px-4 py-3 text-sm font-semibold hover:bg-primary/50 transition-all duration-300"
              >
                <Globe className="w-4 h-4" />
                <span>{getLanguageName(language)}</span>
              </button>
              {langDropdownOpen && (
                <div className="mt-3 space-y-2 bg-primary/20 rounded-lg p-3">
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setLanguage(lang)
                        setLangDropdownOpen(false)
                      }}
                      className={`block w-full text-left px-3 py-2 rounded text-sm font-semibold transition-all duration-200 ${
                        language === lang
                          ? "bg-accent text-accent-foreground"
                          : "hover:bg-primary/60 text-primary-foreground"
                      }`}
                    >
                      {getLanguageName(lang)}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
