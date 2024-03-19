import { useEffect, useState, useContext, createContext } from "react";

export const LanguageContext = createContext("esp");

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
        {language === "esp" ? "Hora Actual:" : "Current Time:"} {date.toLocaleTimeString()}
    </h2>
    );
}

function LanguageSelector({ children }) {
    const [language, setLanguage] = useState("eng");

    return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
        <select className="sel-lang" value={language} onChange={(e) => setLanguage(e.target.value)}>
            <option value="eng">English</option>
            <option value="esp">Español</option>
        </select>
        {children}
    </LanguageContext.Provider>
    );
}

export default LanguageSelector