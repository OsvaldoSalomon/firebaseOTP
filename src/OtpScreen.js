import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import firebase from 'firebase/app';
import 'firebase/auth';

const OtpScreen = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [verificationId, setVerificationId] = useState(null);
    const [verificationCode, setVerificationCode] = useState('');

    const sendVerificationCode = async () => {
        const phoneProvider = new firebase.auth.PhoneAuthProvider();
        try {
            const verificationId = await phoneProvider.verifyPhoneNumber(
                phoneNumber,
                // timeout duration
                60 * 1000
            );
            setVerificationId(verificationId);
            console.log('Verification code sent to your phone.');
        } catch (err) {
            console.log('Error sending verification code:', err);
        }
    };

    const verifyCode = async () => {
        const credential = firebase.auth.PhoneAuthProvider.credential(
            verificationId,
            verificationCode
        );
        try {
            await firebase.auth().signInWithCredential(credential);
            console.log('Authenticated successfully!');
        } catch (err) {
            console.log('Error authenticating:', err);
        }
    }
};

return (
    <View>
        <Text>Enter your phone number:</Text>
        <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={(text) => setPhoneNumber(text)}
            value={phoneNumber}
        />
        <Button title="Send verification code" onPress={sendVerificationCode} />
        <Text>Enter verification code:</Text>
        <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={(text) => setVerificationCode(text)}
            value={verificationCode}
        />
        <Button title="Verify code" onPress={verifyCode} />
    </View>
)


export default OtpScreen;