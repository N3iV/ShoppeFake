import i18n from 'i18next'
import { useTranslation, initReactI18next } from 'react-i18next'
import en from './en.json'
import vi from './vi.json'
import chi from './chi.json'
const resources = {
  en: {
    translation: en
  },
  vi: {
    translation: vi
  },
  chi: {
    translation: chi
  }
}
i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en'
})

export default i18n
