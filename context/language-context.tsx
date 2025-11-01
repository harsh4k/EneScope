"use client"

import type React from "react"
import { createContext, useContext, useState } from "react"

type Language = "en" | "hi" | "mr" | "ta" | "bn" | "gu"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations: Record<Language, Record<string, string>> = {
  en: {
    aboutUs: "About Us",
    bills: "Bills",
    faqs: "FAQs",
    dashboard: "User Dashboard",
    insights: "City Insights",
    feedback: "Feedback",
    settings: "Settings",
    language: "Language",
    homeHeadline: "Know your electricity. Save energy. Empower your city.",
    checkBill: "Check My Bill",
    learnToSave: "Learn to Save",
    exploreCityData: "Explore City Data",
    avgHouseholdUse: "Avg Household Energy Use",
    co2Footprint: "CO₂ Footprint Estimate",
    localWeather: "Local Temperature & Humidity",
    units: "units",
    kwh: "kWh",
    amount: "₹",
    compareCity: "Compare with City Average",
    climateImpact: "Climate Impact",
    energyTips: "Energy Tips",
  },
  hi: {
    aboutUs: "हमारे बारे में",
    bills: "बिल",
    faqs: "अक्सर पूछे जाने वाले प्रश्न",
    dashboard: "यूजर डैशबोर्ड",
    insights: "शहर अंतर्दृष्टि",
    feedback: "प्रतिक्रिया",
    settings: "सेटिंग्स",
    language: "भाषा",
    homeHeadline: "अपनी बिजली जानें। ऊर्जा बचाएं। अपने शहर को सशक्त बनाएं।",
    checkBill: "मेरा बिल देखें",
    learnToSave: "बचाना सीखें",
    exploreCityData: "शहर का डेटा देखें",
    avgHouseholdUse: "औसत घरेलू ऊर्जा उपयोग",
    co2Footprint: "CO₂ पदचिह्न अनुमान",
    localWeather: "स्थानीय तापमान और आर्द्रता",
    units: "इकाइयां",
    kwh: "kWh",
    amount: "₹",
    compareCity: "शहर के औसत से तुलना करें",
    climateImpact: "जलवायु प्रभाव",
    energyTips: "ऊर्जा युक्तियाँ",
  },
  mr: {
    aboutUs: "आमच्याबद्दल",
    bills: "बिल",
    faqs: "वारंवार विचारले जाणारे प्रश्न",
    dashboard: "वापरकर्ता डॅशबोर्ड",
    insights: "शहर अंतर्दृष्टि",
    feedback: "अभिप्राय",
    settings: "सेटिंग्स",
    language: "भाषा",
    homeHeadline: "तुमचे वीज जाणून घ्या. ऊर्जा वाचवा. तुमचे शहर सशक्त करा.",
    checkBill: "माझे बिल पाहा",
    learnToSave: "वाचवायला शिका",
    exploreCityData: "शहर डेटा एक्सप्लोर करा",
    avgHouseholdUse: "सरासरी घरगुती ऊर्जा वापर",
    co2Footprint: "CO₂ पदचिह्न अंदाज",
    localWeather: "स्थानिक तापमान आणि आर्द्रता",
    units: "एकके",
    kwh: "kWh",
    amount: "₹",
    compareCity: "शहर सरासरी सह तुलना करा",
    climateImpact: "हवामान प्रभाव",
    energyTips: "ऊर्जा टिप्स",
  },
  ta: {
    aboutUs: "எங்களைப் பற்றி",
    bills: "பில்கள்",
    faqs: "அடிக்கடி கேட்கப்படும் கேள்விகள்",
    dashboard: "பயனர் டாஷ்போர்ட்",
    insights: "நகர அறிவுரைகள்",
    feedback: "கருத்து",
    settings: "அமைப்புகள்",
    language: "மொழி",
    homeHeadline: "உங்கள் மின்சாரத்தை அறிந்து கொள்ளுங்கள். ஆற்றலை சேமிக்கவும். உங்கள் நகரத்தை சக்திமிக்கமாக்குங்கள்.",
    checkBill: "என் பில் சரிபார்க்கவும்",
    learnToSave: "சேமிப்பதைக் கற்றுக்கொள்ளுங்கள்",
    exploreCityData: "நகர தரவை ஆராயுங்கள்",
    avgHouseholdUse: "சராசரி குடியிருப்பு ஆற்றல் பயன்பாடு",
    co2Footprint: "CO₂ அடிச்சுவடு மதிப்பீடு",
    localWeather: "உள்ளூர் வெப்பநிலை மற்றும் ஈரப்பதம்",
    units: "அலகுகள்",
    kwh: "kWh",
    amount: "₹",
    compareCity: "நகர சராசரியுடன் ஒப்பிடுக",
    climateImpact: "காலநிலை தாக்கம்",
    energyTips: "ஆற்றல் உதவிக்குறிப்புகள்",
  },
  bn: {
    aboutUs: "আমাদের সম্পর্কে",
    bills: "বিল",
    faqs: "সাধারণ প্রশ্নাবলী",
    dashboard: "ব্যবহারকারী ড্যাশবোর্ড",
    insights: "শহর অন্তর্দৃষ্টি",
    feedback: "প্রতিক্রিয়া",
    settings: "সেটিংস",
    language: "ভাষা",
    homeHeadline: "আপনার বিদ্যুৎ জানুন। শক্তি সাশ্রয় করুন। আপনার শহরকে ক্ষমতায়ন করুন।",
    checkBill: "আমার বিল দেখুন",
    learnToSave: "সাশ্রয় করতে শিখুন",
    exploreCityData: "শহরের ডেটা অন্বেষণ করুন",
    avgHouseholdUse: "গড় গৃহস্থালী শক্তি ব্যবহার",
    co2Footprint: "CO₂ পদচিহ্ন অনুমান",
    localWeather: "স্থানীয় তাপমাত্রা এবং আর্দ্রতা",
    units: "ইউনিট",
    kwh: "kWh",
    amount: "₹",
    compareCity: "শহরের গড়ের সাথে তুলনা করুন",
    climateImpact: "জলবায়ু প্রভাব",
    energyTips: "শক্তি টিপস",
  },
  gu: {
    aboutUs: "આમારા વિશે",
    bills: "બિલ્સ",
    faqs: "વારંવાર પૂછાતા પ્રશ્નો",
    dashboard: "વપરાશકર્તા ડેશબોર્ડ",
    insights: "શહર ઇનસાઈટ્સ",
    feedback: "પ્રતિક્રિયા",
    settings: "સેટિંગ્સ",
    language: "ભાષા",
    homeHeadline: "તમારો વીજ જાણો. ઉર્જા બચાવો. તમારા શહરને સશક્ત બનાવો.",
    checkBill: "મારો બિલ જુઓ",
    learnToSave: "બચાવવું શીખો",
    exploreCityData: "શહર ડેટા અન્વેષણ કરો",
    avgHouseholdUse: "સરેરાશ ઘરેલું ઉર્જા વપરાશ",
    co2Footprint: "CO₂ પગચાપ અંદાજ",
    localWeather: "સ્થાનિક તાપમાન અને આર્દ્રતા",
    units: "એકમો",
    kwh: "kWh",
    amount: "₹",
    compareCity: "શહર સરેરાશ સાથે સરખામણી કરો",
    climateImpact: "આબોહવા અસર",
    energyTips: "ઉર્જા ટિપ્સ",
  },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string) => {
    return translations[language]?.[key] || translations["en"]?.[key] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return context
}
