/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Alert, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  idNumber: string;
  age: string;
  gender: string;
  height: string;
  phone: string;
  birthDate: Date;
};

type Errors = Partial<Record<keyof FormData, string>>;

export const Register = ({ navigation }: any) => {
  const { top } = useSafeAreaInsets();
  
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    idNumber: '',
    age: '',
    gender: '',
    height: '',
    phone: '',
    birthDate: new Date(),
  });

  const [errors, setErrors] = useState<Errors>({});
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleChange = (name: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleDateChange = (event: any, selectedDate?: Date) => {
    setShowDatePicker(Platform.OS === 'ios');
    if (selectedDate) {
      setFormData(prev => ({
        ...prev,
        birthDate: selectedDate
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;

    // Validaciones
    const validations = [
      { field: 'firstName', message: 'Nombre es requerido', condition: !formData.firstName.trim() },
      { field: 'lastName', message: 'Apellido es requerido', condition: !formData.lastName.trim() },
      { field: 'email', message: 'Correo es requerido', condition: !formData.email.trim() },
      { field: 'email', message: 'Correo inválido', condition: formData.email.trim() && !emailRegex.test(formData.email) },
      { field: 'idNumber', message: 'Cédula es requerida', condition: !formData.idNumber.trim() },
      { field: 'age', message: 'Edad es requerida', condition: !formData.age },
      { field: 'gender', message: 'Género es requerido', condition: !formData.gender },
      { field: 'height', message: 'Estatura es requerida', condition: !formData.height },
      { field: 'phone', message: 'Teléfono es requerido', condition: !formData.phone.trim() },
      { field: 'phone', message: 'Teléfono debe tener 10 dígitos', condition: formData.phone.trim() && !phoneRegex.test(formData.phone) },
    ];

    validations.forEach(({ field, message, condition }) => {
      if (condition) newErrors[field as keyof Errors] = message;
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      Alert.alert(
        'Registro Exitoso',
        'Tu cuenta ha sido creada correctamente',
        [{ text: 'OK', onPress: () => navigation.navigate('Auth', { screen: 'Login' }) }]
      );
    }
  };

  const renderInputField = (
    name: keyof FormData, 
    label: string, 
    placeholder: string, 
    options?: { keyboardType?: 'default' | 'numeric' | 'email-address' | 'phone-pad', autoCapitalize?: 'none' }
  ) => (
    <View style={styles.inputGroup}>
      <Text style={styles.label}>{label}*</Text>
      <TextInput
        style={[styles.input, errors[name] && styles.inputError]}
        placeholder={placeholder}
        value={formData[name] as string}
        onChangeText={(text) => handleChange(name, text)}
        keyboardType={options?.keyboardType || 'default'}
        autoCapitalize={options?.autoCapitalize}
      />
      {errors[name] && <Text style={styles.errorText}>{errors[name]}</Text>}
    </View>
  );

  return (
    <ScrollView contentContainerStyle={[styles.container, { paddingTop: top + 20 }]} keyboardShouldPersistTaps="handled" >
      <Text style={styles.title}>Registro de Usuario</Text>

      {renderInputField('firstName', 'Nombre(s)', 'Ej: Juan Carlos')}
      {renderInputField('lastName', 'Apellido(s)', 'Ej: Pérez García')}
      {renderInputField('email', 'Correo Electrónico', 'Ej: usuario@correo.com', { 
        keyboardType: 'email-address', 
        autoCapitalize: 'none' 
      })}
      {renderInputField('idNumber', 'Cédula', 'Ej: 1234567890', { keyboardType: 'numeric' })}
      {renderInputField('age', 'Edad', 'Ej: 25', { keyboardType: 'numeric' })}
      
      {/* Género */}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Género*</Text>
        <View style={styles.radioGroup}>
          {['Masculino', 'Femenino', 'Otro'].map(gender => (
            <TouchableOpacity
              key={gender}
              style={[styles.radioButton, formData.gender === gender && styles.radioSelected]}
              onPress={() => handleChange('gender', gender)}
            >
              <Text>{gender}</Text>
            </TouchableOpacity>
          ))}
        </View>
        {errors.gender && <Text style={styles.errorText}>{errors.gender}</Text>}
      </View>
      {renderInputField('height', 'Estatura (cm)', 'Ej: 175', { keyboardType: 'numeric' })}
      {renderInputField('phone', 'Teléfono', 'Ej: 3001234567', { keyboardType: 'phone-pad' })}
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Fecha de Nacimiento</Text>
        <TouchableOpacity style={styles.input} onPress={() => setShowDatePicker(true)}>
          <Text>{formData.birthDate.toLocaleDateString()}</Text>
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            value={formData.birthDate}
            mode="date"
            display="default"
            onChange={handleDateChange}
            maximumDate={new Date()}
          />
        )}
      </View>
      <TouchableOpacity style={styles.registerButton} onPress={handleSubmit} >
        <Text style={styles.registerButtonText}>Registrarse</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

// Estilos (se mantienen igual)
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#2c3e50',
    fontFamily: 'PlaypenSans-Bold'
  },
  inputGroup: {
    marginBottom: 15
  },
  label: {
    marginBottom: 5,
    fontWeight: '500',
    color: '#34495e',
    fontFamily: 'PlaypenSans-Regular'
  },
  input: {
    borderWidth: 1,
    borderColor: '#bdc3c7',
    borderRadius: 5,
    padding: 12,
    fontSize: 16,
    fontFamily: 'PlaypenSans-Regular'
  },
  inputError: {
    borderColor: '#e74c3c'
  },
  errorText: {
    color: '#e74c3c',
    fontSize: 12,
    marginTop: 5,
    fontFamily: 'PlaypenSans-Regular'
  },
  radioGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5
  },
  radioButton: {
    borderWidth: 1,
    borderColor: '#bdc3c7',
    borderRadius: 5,
    padding: 10,
    flex: 1,
    marginHorizontal: 2,
    alignItems: 'center',
  },
  radioSelected: {
    backgroundColor: '#e3f2fd',
    borderColor: '#2196f3'
  },
  registerButton: {
    backgroundColor: '#2ecc71',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
    marginBottom: 20
  },
  registerButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'PlaypenSans-Bold'
  }
});