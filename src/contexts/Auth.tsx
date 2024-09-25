import React, { createContext, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from "../services/Api";
import { router } from "expo-router";
import { jwtDecode } from 'jwt-decode';
import { toast } from 'sonner-native';

export const AuthContext = createContext({
    login: (username: string, password: string) => Promise.resolve(),
    checkLogin: () => Promise.resolve(false),
    logout: () => {}
});

function AuthProvider({ children }: any) {

    const login = async (username: string, password: string) => {

        try {

            const data = JSON.stringify({
                username,
                password
            });

            const response = await api.post("/login", data);

            console.log(response.data);

            if (response.data) {

                let credentials = {
                    token: response.data.data.token,
                    username: username,
                    password: password
                };

                await AsyncStorage.setItem('credentials', JSON.stringify(credentials));

                router.replace('/home');

            } else {

                throw new Error("Erro ao fazer login. Por favor, tente novamente.");

            }

        } catch (error: any) {

            if (error.response && error.response.data && error.response.data.message) {

                throw new Error(error.response.data.message);

            } else {

                throw new Error("Erro ao fazer login. Por favor, tente novamente.");

            }

        }
    };

    const checkLogin = async () => {

        const data = await AsyncStorage.getItem("credentials");

        const credentials = data ? JSON.parse(data) : null;

        if (credentials) {

            if (!isTokenValid(credentials.token)) {

                try {

                    await login(credentials.username, credentials.password);
            
                } catch (error: any) {
            
                    toast.error("Erro ao autenticar usuário, efetue login novamente.");

                    await logout();
            
                }

            }

            return true;

        }

        return false;

    };

    const isTokenValid = (token: string) => {

        if (!token) {
            return false;
        }

        try {

            const decoded = jwtDecode(token);

            const currentTime = Date.now() / 1000;

            if (decoded.exp && decoded.exp < currentTime) {
                return false;
            }

            return true;

        } catch (error) {

            return false;

        }

    };

    const logout = async () => {

        await AsyncStorage.removeItem('credentials');

        router.replace('/login');

    };

    return (

        <AuthContext.Provider value={{ login, checkLogin, logout }}>
            {children}
        </AuthContext.Provider>

    )

}

export default AuthProvider;