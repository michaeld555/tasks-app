import React from 'react';
import { Tabs } from 'expo-router'
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function TabLayout() {
  return (
    
    <Tabs screenOptions={{ tabBarActiveTintColor: '#4475bb' }}>

      <Tabs.Screen
        name="home/index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={33} name="home" color={color} />,
        }}
      />
      
      <Tabs.Screen
        name="projects/index"
        options={{
          title: 'Meus Projetos',
          tabBarLabel: 'Projetos',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="th-list" color={color} />,
        }}
      />

      <Tabs.Screen
        name="profile/index"
        options={{
          headerShown: false,
          title: 'Perfil',
          tabBarIcon: ({ color }) => <FontAwesome size={29} name="user-circle-o" color={color} />,
        }}
      />

    </Tabs>

  )
}