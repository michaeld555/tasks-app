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
import { Skeleton } from "moti/skeleton";
import { SkeletonProps } from '../../../core/SkeletonProps';

export default function Profile() {

    const { logout } = useContext(AuthContext);

    const [loading, setLoading] = useState(true);

    const [user, setUser] = useState({
        name: '-',
        email: '-',
        profile_photo: '',
        alerts: true,
        notifications: true,
    });

    const checkUser = async () => {

        try {

            const response = await api.get("/profile");

            if (response.data) {

                setUser(response.data.data);

            }

        } catch (error) {

            console.error("Erro ao buscar dados do usuário:", error);

        } finally {

            setLoading(false);

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
                    //
                }}
                style={styles.profile}>
                    <Skeleton show={loading} height={60} width={60} radius={999} {...SkeletonProps}>
                        <Image
                            alt="Profile Avatar"
                            source={{
                            uri: `https://www.gravatar.com/avatar/${stringMd5(user.email)}`,
                            }}
                            style={styles.profileAvatar} />
                    </Skeleton>
                    <View style={styles.profileBody}>
                        <Skeleton show={loading} height={19} width={'80%'} {...SkeletonProps}>
                            <Text style={styles.profileName}> {user.name} </Text>
                        </Skeleton>
                        <Skeleton show={loading} height={19} width={'60%'} {...SkeletonProps}>
                            <Text style={styles.profileHandle}> {user.email} </Text>
                        </Skeleton>
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
                    <Text style={styles.rowLabel}>Integração com AI</Text>
                    <View style={styles.rowSpacer} />
                    <FontAwesome
                    color="#bcbcbc"
                    name="chevron-right"
                    size={19} />
                </TouchableOpacity>
                </View>

                <View style={styles.rowWrapper}>
                <View style={styles.row}>
                    <Text style={styles.rowLabel}>Alertas de tarefas</Text>
                    <View style={styles.rowSpacer} />
                    <Switch
                    onValueChange={alerts =>
                        setUser({ ...user, alerts })
                    }
                    style={{ transform: [{ scaleX: 0.95 }, { scaleY: 0.95 }] }}
                    value={user.alerts} />
                </View>
                </View>

                <View style={[styles.rowWrapper, styles.rowLast]}>
                <View style={styles.row}>
                    <Text style={styles.rowLabel}>Notificações Push</Text>
                    <View style={styles.rowSpacer} />
                    <Switch
                    onValueChange={notifications =>
                        setUser({ ...user, notifications })
                    }
                    style={{ transform: [{ scaleX: 0.95 }, { scaleY: 0.95 }] }}
                    value={user.notifications} />
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