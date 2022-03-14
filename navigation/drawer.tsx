import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationDrawerAction } from 'react-navigation';
import Home from '../screens/Home';
import DrawerContent from './DrawerContent';

const Drawer = createDrawerNavigator();

function MyDrawer(props: NavigationDrawerAction) {
    return (
        <Drawer.Navigator
            drawerContent={() => {
                return <DrawerContent />
            }}
            screenOptions={{ headerShown: false }}
        >
            <Drawer.Screen {...props} name="Home" component={Home} />
        </Drawer.Navigator>
    );
}
export default MyDrawer;