import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "./firebase.config"
import { useState } from 'react'
import { StyleSheet, View, TextInput } from 'react-native';
import { Card, Text, Button } from '@ui-kitten/components';

export default function UserEmailRegister({ navigation }) {
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');

    function handleRegister() {
        register()
        navigation.goBack()
    }

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
            console.log(user)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View style={styles.container}>
            <Card
                style={styles.card}
                status='primary'
            >
                <Text category="h1">Register</Text>
                <View style={{ display: 'flex', gap: 20, marginTop: 20 }}>
                    <View>
                        <Text category="h6">Email</Text>
                        <TextInput
                            placeholder="Email"
                            value={registerEmail}
                            onChangeText={event =>
                                setRegisterEmail(event)
                            }
                        />
                    </View>
                    <View>
                        <Text category="h6">Password</Text>
                        <TextInput
                            placeholder="Password..."
                            value={registerPassword}
                            onChangeText={event =>
                                setRegisterPassword(event)
                            }
                        />
                    </View>
                    <Button onPress={() => {
                        handleRegister();
                    }}>
                        <Text>Register</Text>
                    </Button>
                </View>

            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
    card: {
        margin: 20,
    },
});