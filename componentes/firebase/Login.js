import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app'; // Update the import statement
import 'firebase/compat/auth'; // Update the import statement

import { initializeApp } from 'firebase/app';


const firebaseConfig = {
    apiKey: "AIzaSyD2FKJQ-1CS2JePMetOwT1KiMf-qqvJSc8",
    authDomain: "loginreact15601.firebaseapp.com",
    projectId: "loginreact15601",
    storageBucket: "loginreact15601.appspot.com",
    messagingSenderId: "406411818282",
    appId: "1:406411818282:web:b6b28156dc86f8e3475a53"
  };
   // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
 
  const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    useEffect(() => {
      // Inicializar Firebase solo una vez al cargar el componente
      if (!firebase.apps.length) {
        initializeApp(firebaseConfig);
      }
    }, []);
  
    const handleLogin = async () => {
      try {
        const response = await firebase.auth().signInWithEmailAndPassword(email, password);
        alert('Bienvenido, Inicio de sesión exitoso');
        console.log('Inicio de sesión exitoso:', response.user);
        // Aquí puedes redirigir al usuario a otra página o realizar acciones adicionales después del inicio de sesión.
      } catch (error) {
        alert('Usuario y/o contraseña inválidos');
        console.error('Error durante el inicio de sesión:', error.message);
        // Puedes manejar el error de inicio de sesión aquí.
      }
    };
  
    return (
      <div>
        <h2>Login</h2>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br />
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  };
  
  export default Login;