import { StyleSheet, View } from 'react-native';
import { useState, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from "../firebase/firebase.config"
import { Text } from '@ui-kitten/components';
import axios from 'axios'

import Line from '../components/LineChart';
import UserLogout from '../firebase/UserLogOut';

export default function Dashboard( { navigation }) {
    const [user, setUser] = useState();
    const [data, setData] = useState();

    const url = 'https://www.fruityvice.com/api/fruit/apple'
    useEffect(() => {
        axios.get(url)
            .then((response) => {
                console.clear();
                console.log(response)
                setData([response.data])
            }).catch(err => {
                console.log(err)
            })
    }, [])

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => setUser(currentUser))
    }, [])

    const UserFromEmail = (email) => {
        const username = email?.split('@')[0] || '';
        return username.charAt(0).toUpperCase() + username.slice(1);
    }

    return (
        <View style={styles.container}>
            <View style={styles.userInfoContainer}>
                <Text category='h1'>User logged in:</Text>
                        <UserLogout navigation={navigation} />
                <Text category='p1'>
                    Welcome, {UserFromEmail(user?.email)}
                </Text>
            </View>

            <View style={styles.chartContainer}>
                <Line />
            </View>

            <View style={styles.appleContainer}>
                {
                    data && data.map((fruit, index) => {
                        return (
                            <View key={index}>
                                <Text category='h5'>Make sure to eat an {fruit.name} a day</Text>
                                <Text category='p1'>Here are some nutritional facts:</Text>
                                <Text category='p1'>Calories: {fruit.nutritions.calories.toFixed(1)}</Text>
                                <Text category='p1'>Sugar: {fruit.nutritions.sugar}</Text>
                                <Text category='p1'>Protein: {fruit.nutritions.protein}</Text>
                            </View>
                        )
                    })
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
    },
    userInfoContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10
    },
    chartContainer: {
        marginTop: 30
    },
    appleContainer: {
        marginTop: 30
    }
});
