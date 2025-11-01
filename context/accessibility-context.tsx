"use client"

import type React from "react"
import { createContext, useContext, useState } from "react"

interface AccessibilityContextType {
  fontSize: number
  highContrast: boolean
  textToSpeech: boolean
  setFontSize: (size: number) => void
  setHighContrast: (enabled: boolean) => void
  setTextToSpeech: (enabled: boolean) => void
}

const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined)

export function AccessibilityProvider({ children }: { children: React.ReactNode }) {
  const [fontSize, setFontSize] = useState(100)
  const [highContrast, setHighContrast] = useState(false)
  const [textToSpeech, setTextToSpeech] = useState(false)

  return (
    <AccessibilityContext.Provider
      value={{ fontSize, highContrast, textToSpeech, setFontSize, setHighContrast, setTextToSpeech }}
    >
      {children}
    </AccessibilityContext.Provider>
  )
}

export function useAccessibility() {
  const context = useContext(AccessibilityContext)
  if (!context) {
    throw new Error("useAccessibility must be used within AccessibilityProvider")
  }
  return context
}
