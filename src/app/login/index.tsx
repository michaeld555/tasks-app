import React, { useState, useContext } from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Logo from '../../assets/logo-auth.png';
import { AuthContext } from '../../contexts/Auth';
import { styles } from '../../styles/login';

export default function Login() {

  const { login } = useContext(AuthContext);

  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {

    if(form.username.trim() != '' && form.password.trim() != '' && !loading) {

      setLoading(true);

      await login(form.username, form.password);

    }

};

  return (
    
    <SafeAreaView style={{ flex: 1, backgroundColor: '#e8ecf4' }}>
      <View style={styles.container}>
        <KeyboardAwareScrollView>

          <View style={styles.header}>
            <Image
              alt="Logo"
              resizeMode="contain"
              style={styles.headerImg}
              source={Logo} />
            <Text style={styles.title}>
              Gerenciador <Text style={{ color: '#075eec' }}>Rem Soft</Text>
            </Text>
            <Text style={styles.subtitle}>
              Gerencie suas tasks e prioridades
            </Text>
          </View>

          <View style={styles.form}>
            <View style={styles.input}>
              <Text style={styles.inputLabel}>Usuário</Text>
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                clearButtonMode="while-editing"
                keyboardType="email-address"
                onChangeText={username => setForm({ ...form, username })}
                placeholder="Usuário de acesso"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                value={form.username} />
            </View>

            <View style={styles.input}>
              <Text style={styles.inputLabel}>Senha</Text>
              <TextInput
                autoCorrect={false}
                clearButtonMode="while-editing"
                onChangeText={password => setForm({ ...form, password })}
                placeholder="********"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                secureTextEntry={true}
                value={form.password} />
            </View>

            <View style={styles.formAction}>
              <TouchableOpacity
                activeOpacity={0.6} 
                onPress={handleLogin}>
                <View style={styles.btn}>
                  {loading?<ActivityIndicator color={'#FFF'}/>:<Text style={[styles.btnText]}>Login</Text>}
                </View>
              </TouchableOpacity>
            </View>
          </View>

        </KeyboardAwareScrollView>
      </View>
    </SafeAreaView>
  );

}