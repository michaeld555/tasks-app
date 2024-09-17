import React, { useState, useMemo } from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { styles } from '../../../styles/projects';

const users = [
  {
    img: '',
    name: 'Bell Burgess',
    phone: '+1 (887) 478-2693',
  },
  {
    img: 'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
    name: 'Bernard Baker',
    phone: '+1 (862) 581-3022',
  },
  {
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
    name: 'Elma Chapman',
    phone: '+1 (913) 497-2020',
  },
  {
    img: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    name: 'Knapp Berry',
    phone: '+1 (951) 472-2967',
  },
  {
    img: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
    name: 'Larson Ashbee',
    phone: '+1 (972) 566-2684',
  },
  {
    img: '',
    name: 'Lorraine Abbott',
    phone: '+1 (959) 422-3635',
  },
  {
    img: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
    name: 'Rosie Arterton',
    phone: '+1 (845) 456-2237',
  },
  {
    img: 'https://images.unsplash.com/photo-1573497019236-17f8177b81e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
    name: 'Shelby Ballard',
    phone: '+1 (824) 467-3579',
  },
];

export default function Projects() {

    const [input, setInput] = useState('');

    const filteredRows = useMemo(() => {
        const rows = [];
        const query = input.toLowerCase();
        for (const item of users) {
        const nameIndex = item.name.toLowerCase().search(query);
        if (nameIndex !== -1) {
            rows.push({
            ...item,
            index: nameIndex,
            });
        }
        }
        return rows.sort((a, b) => a.index - b.index);
    }, [input]);

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
                placeholder="Start typing.."
                placeholderTextColor="#848484"
                returnKeyType="done"
                style={styles.searchControl}
                value={input} />
            </View>
            </View>
            <ScrollView contentContainerStyle={styles.searchContent}>
            {filteredRows.length ? (
                filteredRows.map(({ img, name, phone }, index) => {
                return (
                    <View key={index} style={styles.cardWrapper}>
                    <TouchableOpacity
                        onPress={() => {
                        // handle onPress
                        }}>
                        <View style={styles.card}>
                        {img ? (
                            <Image
                            alt=""
                            resizeMode="cover"
                            source={{ uri: img }}
                            style={styles.cardImg} />
                        ) : (
                            <View style={[styles.cardImg, styles.cardAvatar]}>
                            <Text style={styles.cardAvatarText}>{name[0]}</Text>
                            </View>
                        )}
                        <View style={styles.cardBody}>
                            <Text style={styles.cardTitle}>{name}</Text>
                            <View style={styles.cardStats}>
                                <View style={styles.cardStatsItem}>
                                <FontAwesome color="#636a73" name="clock-o" />
                                <Text style={styles.cardStatsItemText}>
                                    11 mins
                                </Text>
                                </View>
                                <View style={styles.cardStatsItem}>
                                <FontAwesome color="#636a73" name="list" />
                                <Text style={styles.cardStatsItemText}>12 cals</Text>
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
                <Text style={styles.searchEmpty}>Sem Resultados...</Text>
            )}
            </ScrollView>
        </View>
        </SafeAreaView>

    );

}
