import { useContext, useEffect, useState } from "react";
import SplashScreen from "../components/SplashScreen";
import { Redirect, router } from "expo-router";
import { AuthContext } from "../contexts/Auth";


export default function App() {

    const { checkLogin } = useContext(AuthContext);

    const [isShowSplashScreen, setIsShowSplashScreen] = useState(true);

    useEffect(() => {

        const checkUserLogin = async () => {

            let isLogged = await checkLogin();

            if(isLogged) {

                router.replace('/home');

            }

            setIsShowSplashScreen(false);

        };

        setTimeout(() => {

            checkUserLogin();
            
        }, 3000);
        
    }, []);

    if(isShowSplashScreen) {

        return (
            <SplashScreen />
        );

    }

    return <Redirect href="/login" />;

}