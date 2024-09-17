import React, { createContext, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from "../services/Api";
import { router } from "expo-router";
import { jwtDecode } from 'jwt-decode';

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
                password,
                rememberMe: false
            });

            const response = await api.post("/authenticate", data);

            if (response.data && response.data.id_token) {

                console.log(response.data);

                await AsyncStorage.setItem('token', response.data.id_token);

                router.replace('/home');

            }

        } catch (error) {
            console.error("Erro ao fazer login:", error);
        }
    };

    const checkLogin = async () => {

        const token = await AsyncStorage.getItem("token");

        if (token && token != '') {
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

            console.error('Erro ao decodificar o token', error);

            return false;

        }

    };

    const logout = async () => {

        await AsyncStorage.setItem('token', '');

    };

    return (

        <AuthContext.Provider value={{ login, checkLogin, logout }}>
            {children}
        </AuthContext.Provider>

    )

}

export default AuthProvider;