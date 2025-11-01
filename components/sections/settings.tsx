"use client"

import { useLanguage } from "@/context/language-context"
import { useAccessibility } from "@/context/accessibility-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { X, Plus, Minus } from "lucide-react"

interface SettingsProps {
  onClose: () => void
}

export default function Settings({ onClose }: SettingsProps) {
  const { language, setLanguage } = useLanguage()
  const { fontSize, textToSpeech, setFontSize, setTextToSpeech } = useAccessibility()

  const languages = ["en", "hi", "mr", "ta", "bn", "gu"] as const
  const languageLabels: Record<string, string> = {
    en: "English",
    hi: "हिंदी",
    mr: "मराठी",
    ta: "தமிழ்",
    bn: "বাংলা",
    gu: "ગુજરાતી",
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md max-h-[90vh] overflow-y-auto">
        <CardHeader className="flex flex-row items-center justify-between pb-4 border-b">
          <CardTitle>Settings</CardTitle>
          <button
            onClick={onClose}
            className="p-1 hover:bg-muted rounded-lg transition-colors"
            aria-label="Close settings"
          >
            <X className="w-5 h-5" />
          </button>
        </CardHeader>

        <CardContent className="space-y-6 pt-6">
          {/* Language Settings */}
          <div>
            <h3 className="font-semibold mb-3">Language</h3>
            <div className="grid grid-cols-2 gap-2">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-3 py-2 rounded-lg font-medium text-sm transition-colors text-primary-foreground ${
                    language === lang
                      ? "bg-accent text-accent-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {languageLabels[lang]}
                </button>
              ))}
            </div>
          </div>

          {/* Text Size */}
          <div>
            <h3 className="font-semibold mb-3">Text Size</h3>
            <div className="flex items-center gap-4">
              <Button size="sm" variant="outline" onClick={() => setFontSize(Math.max(75, fontSize - 10))}>
                <Minus className="w-4 h-4" />
              </Button>
              <span className="text-sm font-medium w-12 text-center">{fontSize}%</span>
              <Button size="sm" variant="outline" onClick={() => setFontSize(Math.min(150, fontSize + 10))}>
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Text-to-Speech */}
          <div className="flex items-center justify-between py-3 border-t">
            <span className="font-medium">Text-to-Speech</span>
            <button
              onClick={() => setTextToSpeech(!textToSpeech)}
              className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
                textToSpeech ? "bg-accent" : "bg-muted"
              }`}
              role="switch"
              aria-checked={textToSpeech}
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                  textToSpeech ? "translate-x-7" : "translate-x-1"
                }`}
              />
            </button>
          </div>

          {/* Data Privacy */}
          <div className="flex items-center justify-between py-3 border-t">
            <span className="font-medium">Data Privacy</span>
            <button
              className="relative inline-flex h-8 w-14 items-center rounded-full bg-accent transition-colors"
              role="switch"
              aria-checked={true}
            >
              <span className="inline-block h-6 w-6 transform rounded-full bg-white translate-x-7 transition-transform" />
            </button>
          </div>

          {/* Notification Preferences */}
          <div className="border-t pt-4">
            <h3 className="font-semibold mb-3">Notifications</h3>
            <div className="space-y-2">
              <label className="flex items-center gap-3">
                <input type="checkbox" defaultChecked className="w-4 h-4" />
                <span className="text-sm">Energy usage alerts</span>
              </label>
              <label className="flex items-center gap-3">
                <input type="checkbox" defaultChecked className="w-4 h-4" />
                <span className="text-sm">Weekly energy report</span>
              </label>
              <label className="flex items-center gap-3">
                <input type="checkbox" className="w-4 h-4" />
                <span className="text-sm">Product updates</span>
              </label>
            </div>
          </div>

          <Button onClick={onClose} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
            Close Settings
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
