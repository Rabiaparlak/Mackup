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
            screenOptions={{
                headerShown: false,
                drawerStyle: {
                    marginTop:100,
                    backgroundColor: '#312F53',
                    borderTopRightRadius:400,
                    borderBottomRightRadius:400,
                    width: 300,
                    height:600,
                    opacity:0.5,
                },
            }}
        >
            <Drawer.Screen {...props} name="Home" component={Home} />
        </Drawer.Navigator>
    );
}
export default MyDrawer;