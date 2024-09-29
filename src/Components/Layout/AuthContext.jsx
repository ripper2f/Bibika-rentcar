import { createContext, useState } from "react";

/* Глобальное состояние */
export const AuthContext = createContext();

/* children нужен для обёртки в index.js, чтоб не потерялся */
export default function AuthProvider({ children }) {
  /* Состояние юзеров, изначально не авторизирован, но можно добавить юзеров */
  const [user, setUser] = useState(false);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
