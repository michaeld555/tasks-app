import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  TouchableOpacity,
  TextInput,
  Text,
  Image,
} from 'react-native';
import{ FontAwesome, FontAwesome6 } from '@expo/vector-icons';
import { useLocalSearchParams } from 'expo-router';
import { styles } from '../../styles/project';
import { ProjectInfo } from '../../interfaces/ProjectInfo';
import api from '../../services/Api';

const tags = ['ios', 'android', 'web', 'ui', 'ux'];
const stats = [
  { label: 'Location', value: 'USA' },
  { label: 'Job Type', value: 'Full Time' },
  { label: 'Experience', value: '6 years' },
];
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

export default function Project() {

  const { id } = useLocalSearchParams();

  const [loading, setLoading] = useState(true);

  const [project, setProject] = useState<ProjectInfo | null>(null);

  const searchProject = async () => {

    try {

      const response = await api.get("/project/" + id);

      if (response.data) {

          setProject(response.data.data);

      }

    } catch (error) {

      console.error("Erro ao buscar dados do projeto:", error);

    } finally {

      setLoading(false);

    }

  };

  useEffect(() => {

    searchProject();
      
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={[styles.header, { paddingTop: 30 }]}>
        <View style={styles.headerAction}>
          <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}>
            <FontAwesome6 name="chevron-left" size={24} />
          </TouchableOpacity>
        </View>

        <View style={styles.search}>
          <View style={styles.searchIcon}>
            <FontAwesome color="#778599" name="search" size={17} />
          </View>

          <TextInput
            autoCapitalize="words"
            autoComplete="name"
            placeholder="Search..."
            placeholderTextColor="#778599"
            style={styles.searchControl} />
        </View>

        <View style={[styles.headerAction, { alignItems: 'flex-end' }]}>
          <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}>
            <FontAwesome name="ellipsis-v" size={24} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView>
        <View style={styles.content}>
          <View style={styles.profile}>
            <View style={styles.profileTop}>
              <View style={styles.avatar}>
                <Image
                  alt=""
                  source={{
                    uri: project?.project_logo,
                  }}
                  style={styles.avatarImg} />
              </View>

              <View style={styles.profileBody}>
                <Text style={styles.profileTitle}>{ project?.project_name }</Text>

                <Text style={styles.profileSubtitle}>
                  UI/UX Designer

                  {' · '}

                  <Text style={{ color: '#266EF1' }}>@nickmiller</Text>
                </Text>
              </View>
            </View>

            <Text style={styles.profileDescription}>
              Skilled in user research, wireframing, prototyping, and collaborating with cross-functional teams.
            </Text>

            <View style={styles.profileTags}>
              {tags.map((tag, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    // handle onPress
                  }}>
                  <Text style={styles.profileTagsItem}>#{tag}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <View style={styles.stats}>

              <View
                style={[
                  styles.statsItem, { borderLeftWidth: 0 },
                ]}>
                <Text style={styles.statsItemText}>Status</Text>

                <Text style={styles.statsItemValue}>{ project?.status ? 'Ativo' : 'Inativo' }</Text>
              </View>

              <View
                style={[
                  styles.statsItem
                ]}>
                <Text style={styles.statsItemText}>Tempo Gasto</Text>

                <Text style={styles.statsItemValue}>{ project?.total_time_spent }h</Text>
              </View>

              <View
                style={[
                  styles.statsItem
                ]}>
                <Text style={styles.statsItemText}>Membros</Text>

                <Text style={styles.statsItemValue}>{ project?.members_count } membros</Text>
              </View>

          </View>

          <View style={styles.contentActions}>
            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}
              style={{ flex: 1, paddingHorizontal: 6 }}>
              <View style={styles.btn}>
                <Text style={styles.btnText}>Follow</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                // handle onPress
              }}
              style={{ flex: 1, paddingHorizontal: 6 }}>
              <View style={styles.btnPrimary}>
                <Text style={styles.btnPrimaryText}>Message</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.list}>
          <View style={styles.listHeader}>
            <Text style={styles.listTitle}>Tarefas abertas</Text>

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
                      <FontAwesome6
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
            <Text style={styles.listTitle}>Tarefas fechadas</Text>

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
                      <FontAwesome6
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
      </ScrollView>
    </SafeAreaView>
  );
}
