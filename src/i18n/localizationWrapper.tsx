'use client';

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

interface LocaleContextType {
  locale: 'en' | 'hi';
  toggleLanguage: () => void;
}

const LocaleContext = createContext<LocaleContextType>({
  locale: 'en',
  toggleLanguage: () => {},
});

interface IProps {
  children: React.ReactNode;
  initialLocale?: 'en' | 'hi';
}

const LocalizationWrapper: React.FC<IProps> = ({ children, initialLocale }) => {
  const [locale, setLocale] = useState<'en' | 'hi'>(() => {
    if (typeof window !== 'undefined') {
      const match = document.cookie.match(/locale=(hi|en)/);
      return (match?.[1] as 'en' | 'hi') || 'en';
    }
    return initialLocale || 'en';
  });

  useEffect(() => {
    document.cookie = `locale=${locale}; path=/; max-age=${60 * 60 * 24 * 365}`;
  }, [locale]);

  const toggleLanguage = useCallback(() => {
    setLocale(prev => (prev === 'en' ? 'hi' : 'en'));
    window.location.reload();
  }, []);

  const contextValue = useMemo(
    () => ({ locale, toggleLanguage }),
    [locale, toggleLanguage]
  );

  return (
    <LocaleContext.Provider value={contextValue}>
      {children}
    </LocaleContext.Provider>
  );
};

export const useLocaleContext = () => {
  return useContext(LocaleContext);
};

export default LocalizationWrapper;
