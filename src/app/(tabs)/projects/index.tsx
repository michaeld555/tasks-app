import React, { useState, useMemo, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Animated,
} from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { styles } from '../../../styles/projects';
import { Project } from '../../../interfaces/Project';
import api from '../../../services/Api';
import ListCardSkeleton from '../../../components/Projects/ListCardSkeleton';

export default function Projects() {

    const [input, setInput] = useState('');

    const [loading, setLoading] = useState(true);

    const [projects, setProjects] = useState<Project[]>([]);

    const searchProjects = async () => {

        try {

            const response = await api.get("/projects");

            console.log(response.data);

            if (response.data) {

                setProjects(response.data.data.projects);

            }

        } catch (error) {

            console.error("Erro ao buscar os projetos:", error);

        } finally {

            setLoading(false);

        }

    };

    const filteredRows = useMemo(() => {

        const rows = [];

        const query = input.toLowerCase();

        for (const item of projects) {

          const nameIndex = item.project_name.toLowerCase().search(query);

          if (nameIndex !== -1) {

              rows.push({
              ...item,
              index: nameIndex,
              });

          }

        }

        return rows.sort((a, b) => a.index - b.index);

    }, [input, projects]);

    useEffect(() => {

      searchProjects();

    }, []);

    return (

        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>

            <View style={styles.container}>

                <View style={styles.searchWrapper}>
                    <View style={styles.search}>
                        <View style={styles.searchIcon}>
                            <FontAwesome
                                color="#848484"
                                name="search"
                                size={17} />
                        </View>
                        <TextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        clearButtonMode="while-editing"
                        onChangeText={val => setInput(val)}
                        placeholder="Digite sua busca..."
                        placeholderTextColor="#848484"
                        returnKeyType="done"
                        style={styles.searchControl}
                        value={input} />
                    </View>
                </View>

                <ScrollView contentContainerStyle={styles.searchContent}>

                {loading ? (

                    <ListCardSkeleton />

                ) : filteredRows.length ? (
                    filteredRows.map(({ project_logo, project_name, total_time_spent, members_count }, index) => {
                        return (
                        <View key={index} style={styles.cardWrapper}>
                            <TouchableOpacity
                                onPress={() => {
                                    // handle onPress
                                }}>
                                    
                                <View style={styles.card}>

                                    {project_logo ? (
                                        <Image
                                        alt="Logo do projeto"
                                        resizeMode="cover"
                                        source={{ uri: project_logo }}
                                        style={styles.cardImg} />
                                    ) : (
                                        <View style={[styles.cardImg, styles.cardAvatar]}>
                                            <Text style={styles.cardAvatarText}>{project_name}</Text>
                                        </View>
                                    )}

                                <View style={styles.cardBody}>

                                    <Text numberOfLines={1} ellipsizeMode="tail" style={styles.cardTitle}>{ project_name }</Text>

                                    <View style={styles.cardStats}>
                                        <View style={styles.cardStatsItem}>
                                        <FontAwesome color="#636a73" name="clock-o" />
                                        <Text style={styles.cardStatsItemText}>
                                            {total_time_spent}h
                                        </Text>
                                        </View>
                                        <View style={styles.cardStatsItem}>
                                        <FontAwesome color="#636a73" name="users" />
                                        <Text style={styles.cardStatsItemText}>{members_count} membros</Text>
                                        </View>
                                    </View>

                                </View>

                                <View style={styles.cardAction}>
                                    <FontAwesome
                                    color="#9ca3af"
                                    name="chevron-right"
                                    size={22} />
                                </View>

                                </View>
                            </TouchableOpacity>
                        </View>
                    );
                })
                ) : (
                    <Text style={styles.searchEmpty}>Sem resultados...</Text>
                )}

                </ScrollView>
            </View>

        </SafeAreaView>

    );

}
