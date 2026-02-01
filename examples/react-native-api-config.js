/**
 * Configuração da API para React Native
 * Copie este arquivo para o seu projeto React Native (ex: src/api/config.js)
 * e ajuste BASE_URL conforme o ambiente.
 */

import { Platform } from 'react-native';

// Em produção, use a URL real da sua API
const PRODUCTION_URL = 'https://sua-api.com';

// Em desenvolvimento:
// - Android Emulator: 10.0.2.2 aponta para o localhost da sua máquina
// - iOS Simulator: localhost funciona
// - Dispositivo físico: use o IP da sua máquina na rede (ex: 192.168.1.100)
const getDevBaseUrl = () => {
  if (Platform.OS === 'android') {
    return 'http://10.0.2.2:3000'; // Android emulator
  }
  return 'http://localhost:3000'; // iOS simulator (no dispositivo físico troque por seu IP)
};

export const API_BASE_URL = __DEV__ ? getDevBaseUrl() : PRODUCTION_URL;

// Exemplo de uso com fetch:
// const res = await fetch(`${API_BASE_URL}/api/auth/login`, { ... });

// Exemplo com axios:
// import axios from 'axios';
// const api = axios.create({ baseURL: `${API_BASE_URL}/api` });
