import { Stack } from "expo-router";
import AuthProvider from "../contexts/Auth";
import { Toaster } from 'sonner-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function RootLayout() {

    return (
        <SafeAreaProvider>
            <GestureHandlerRootView>
                <AuthProvider>
                    <Stack>
                        <Stack.Screen name="index" options={{ headerShown: false }} />
                        <Stack.Screen name="login/index" options={{ headerShown: false }} />
                        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                    </Stack>
                    <Toaster style={{ marginTop: 10 }} />
                </AuthProvider>
            </GestureHandlerRootView>
        </SafeAreaProvider>
    )

}