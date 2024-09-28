import React from 'react';
import {
  StyleSheet,
  Dimensions,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome6';
import { styles } from '../../../styles/home';

const items = [
  {
    icon: 'figma',
    label: 'Senior UI/UX Designer',
    company: 'Figma',
    jobType: 'Full Time',
    years: '2019-2023',
  },
  {
    icon: 'github',
    label: 'Mid-level Designer',
    company: 'GitHub',
    jobType: 'Full Time',
    years: '2017-2019',
  },
  {
    icon: 'twitter',
    label: 'Junior Designer',
    company: 'Twitter',
    jobType: 'Full Time',
    years: '2015-2017',
  },
];
const items_2 = [
  {
    icon: 'code',
    label: 'TypeScript',
    company: '8 endorsements',
    jobType: '2 experiences',
    years: 'GitHub & Figma',
  },
  {
    icon: 'code-merge',
    label: 'Git',
    company: '3 endorsements',
    jobType: '1 experience',
    years: 'GitHub',
  },
];

export default function Home() {

  return (

    <SafeAreaView style={{ flex: 1, backgroundColor: '#FBFCFF' }}>
      <View style={styles.container}>
        <Text style={styles.title}>Work Profile</Text>
        <View style={styles.list}>
          <View style={styles.listHeader}>
            <Text style={styles.listTitle}>My Experience</Text>
            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}>
              <Text style={styles.listAction}>View All</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            contentContainerStyle={styles.listContent}
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            {items.map(({ icon, label, company, jobType, years }, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  // handle onPress
                }}>
                <View style={styles.card}>
                  <View style={styles.cardTop}>
                    <View style={styles.cardIcon}>
                      <FontAwesome
                        color="#000"
                        name={icon}
                        size={24} />
                    </View>
                    <View style={styles.cardBody}>
                      <Text style={styles.cardTitle}>{label}</Text>
                      <Text style={styles.cardSubtitle}>{company}</Text>
                    </View>
                  </View>
                  <View style={styles.cardFooter}>
                    <Text style={styles.cardFooterText}>{jobType}</Text>
                    <Text style={styles.cardFooterText}>{years}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <View style={styles.list}>
          <View style={styles.listHeader}>
            <Text style={styles.listTitle}>Skills</Text>
            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}>
              <Text style={styles.listAction}>View All</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            contentContainerStyle={styles.listContent}
            horizontal={true}
            showsHorizontalScrollIndicator={false}>
            {items_2.map(({ icon, label, company, jobType, years }, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  // handle onPress
                }}>
                <View style={styles.card}>
                  <View style={styles.cardTop}>
                    <View style={styles.cardIcon}>
                      <FontAwesome
                        color="#000"
                        name={icon}
                        size={24} />
                    </View>
                    <View style={styles.cardBody}>
                      <Text style={styles.cardTitle}>{label}</Text>
                      <Text style={styles.cardSubtitle}>{company}</Text>
                    </View>
                  </View>
                  <View style={styles.cardFooter}>
                    <Text style={styles.cardFooterText}>{jobType}</Text>
                    <Text style={styles.cardFooterText}>{years}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>

  );
  
}