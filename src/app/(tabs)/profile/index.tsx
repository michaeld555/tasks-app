import React, { useContext, useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Switch,
  Image,
} from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { AuthContext } from '../../../contexts/Auth';
import { router } from 'expo-router';
import api from '../../../services/Api';
import { stringMd5 } from 'react-native-quick-md5';
import { styles } from '../../../styles/profile';

export default function Profile() {

    const { logout } = useContext(AuthContext);

    const [form, setForm] = useState({
        emailNotifications: true,
        pushNotifications: false,
    });

    const [user, setUser] = useState({
        name: '-',
        email: '-',
    });

    const checkUser = async () => {

        try {

            const response = await api.get("/profile");

            console.log(response.data);

            if (response.data) {

                setUser(response.data.data);

            }

        } catch (error) {
            console.error("Erro ao buscar dados do usuário:", error);
        }
    };

    useEffect(() => {

        checkUser();
        
    }, []);

    return (

        <SafeAreaView style={{ flex: 1, backgroundColor: '#f8f8f8' }}>
        <ScrollView contentContainerStyle={styles.content}>

            <View style={[styles.section, { paddingTop: 60 }]}>

            <Text style={styles.sectionTitle}>Meus dados</Text>

            <View style={styles.sectionBody}>
                <TouchableOpacity
                onPress={() => {
                    // handle onPress
                }}
                style={styles.profile}>
                <Image
                    alt=""
                    source={{
                    uri: `https://www.gravatar.com/avatar/${stringMd5(user.email)}`,
                    }}
                    style={styles.profileAvatar} />
                <View style={styles.profileBody}>
                    <Text style={styles.profileName}> {user.name} </Text>
                    <Text style={styles.profileHandle}> {user.email} </Text>
                </View>
                </TouchableOpacity>
            </View>

            </View>

            <View style={styles.section}>

            <Text style={styles.sectionTitle}>Configurações</Text>

            <View style={styles.sectionBody}>
                
                <View style={[styles.rowWrapper, styles.rowFirst]}>
                <TouchableOpacity
                    onPress={() => {
                    // handle onPress
                    }}
                    style={styles.row}>
                    <Text style={styles.rowLabel}>Histórico de apontamentos</Text>
                    <View style={styles.rowSpacer} />
                    <FontAwesome
                    color="#bcbcbc"
                    name="chevron-right"
                    size={19} />
                </TouchableOpacity>
                </View>

                <View style={styles.rowWrapper}>
                <TouchableOpacity
                    onPress={() => {
                    // handle onPress
                    }}
                    style={styles.row}>
                    <Text style={styles.rowLabel}>Relatório de horas</Text>
                    <View style={styles.rowSpacer} />
                    <FontAwesome
                    color="#bcbcbc"
                    name="chevron-right"
                    size={19} />
                </TouchableOpacity>
                </View>

                <View style={styles.rowWrapper}>
                <View style={styles.row}>
                    <Text style={styles.rowLabel}>Alertas de horário</Text>
                    <View style={styles.rowSpacer} />
                    <Switch
                    onValueChange={emailNotifications =>
                        setForm({ ...form, emailNotifications })
                    }
                    style={{ transform: [{ scaleX: 0.95 }, { scaleY: 0.95 }] }}
                    value={form.emailNotifications} />
                </View>
                </View>

                <View style={[styles.rowWrapper, styles.rowLast]}>
                <View style={styles.row}>
                    <Text style={styles.rowLabel}>Notificações Push</Text>
                    <View style={styles.rowSpacer} />
                    <Switch
                    onValueChange={pushNotifications =>
                        setForm({ ...form, pushNotifications })
                    }
                    style={{ transform: [{ scaleX: 0.95 }, { scaleY: 0.95 }] }}
                    value={form.pushNotifications} />
                </View>
                </View>

            </View>
            </View>

            <View style={styles.section}>
            <View style={styles.sectionBody}>
                <View
                style={[
                    styles.rowWrapper,
                    styles.rowFirst,
                    styles.rowLast,
                    { alignItems: 'center' },
                ]}>
                <TouchableOpacity
                    onPress={() => {

                        logout();

                    }}
                    style={styles.rowLogout}>
                    <Text style={[styles.rowLabel, styles.rowLabelLogout]}>
                        Sair
                    </Text>
                </TouchableOpacity>
                </View>
            </View>
            </View>

            <Text style={styles.contentFooter}>build 1.00 #0001</Text>

        </ScrollView>
        </SafeAreaView>

    );

}