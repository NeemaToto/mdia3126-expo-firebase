import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "./firebase.config"
import { useState } from 'react'
import { View, TextInput } from 'react-native';
import { StyleSheet } from 'react-native';
import { Card, Text, Button, Divider } from '@ui-kitten/components';

export default function UserEmailSignin({ navigation }) {
    const [loginEmail, setLoginEmail] = useState();
    const [loginPassword, setLoginPassword] = useState();

    function handleLogin() {
        login()
    }

    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(auth, loginEmail, loginPassword)
            console.log(user)
            setLoginEmail('')
            setLoginPassword('')
            navigation.push('Dashboard');
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
                <Text category="h1">Sign in</Text>
                <View style={{ display: 'flex', gap: 20, marginTop: 20 }}>
                    <View>
                        <Text category="h6">Email</Text>
                        <TextInput
                            placeholder="Email"
                            value={loginEmail}
                            onChangeText={event =>
                                setLoginEmail(event)
                            }
                        />
                    </View>
                    <View>
                        <Text category="h6">Password</Text>
                        <TextInput
                            placeholder="Password..."
                            value={loginPassword}
                            onChangeText={event =>
                                setLoginPassword(event)
                            }
                        />
                    </View>

                    <Button onPress={() => {
                        handleLogin();
                    }}>
                        <Text>Login</Text>
                    </Button>
                </View>
                <Divider />
                <Button
                    style={styles.button}
                    appearance='ghost'
                    status='basic'
                    onPress={() => navigation.push('UserEmailRegister')}
                >
                    Register
                </Button>
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