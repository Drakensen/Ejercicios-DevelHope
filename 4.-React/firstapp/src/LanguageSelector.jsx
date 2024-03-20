import { useEffect, useState, useContext, createContext } from "react";

export const LanguageContext = createContext("es");

export function Clock() {
    const { language } = useContext(LanguageContext);
    const [date, setDate] = useState(new Date());

    useEffect(() => {
    setInterval(() => {
        setDate(new Date());
    }, 1000);
    }, []);

    return (
    <h2 className="clock">
        {language === "es" ? "Hora Actual:" : "Current Time:"} {date.toLocaleTimeString(language === "es" ? 'es-ES' : undefined)}
    </h2>
    );
}

function LanguageSelector({ children }) {
    const [language, setLanguage] = useState("en");

    return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
        <select className="sel-lang" value={language} onChange={(e) => setLanguage(e.target.value)}>
            <option value="en">English</option>
            <option value="es">Español</option>
        </select>
        {children}
    </LanguageContext.Provider>
    );
}

export default function App() {
    return (
    <LanguageSelector>
        <Clock />
    </LanguageSelector>
    );
}