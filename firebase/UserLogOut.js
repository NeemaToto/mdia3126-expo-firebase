import { signOut } from "firebase/auth";
import { auth } from "./firebase.config";
import { Avatar } from '@ui-kitten/components';
import { TouchableHighlight } from 'react-native';

export default function UserLogout({ navigation }) {
    const logoutUser = async () => {
        await signOut(auth);
        console.log('User logged out')
        navigation.popToTop();
    }

    return (
        <TouchableHighlight onPress={() => logoutUser()}>
            <Avatar size='giant' source={require('../assets/cat.png')} />
        </TouchableHighlight>
    )
}