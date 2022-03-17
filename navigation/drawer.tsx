import { createDrawerNavigator } from '@react-navigation/drawer';
import { Dimensions } from "react-native";
import { NavigationDrawerAction } from 'react-navigation';
import Home from '../screens/Home';
import DrawerContent from './DrawerContent';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Drawer = createDrawerNavigator();

function MyDrawer(props: NavigationDrawerAction) {
    return (
        <Drawer.Navigator
            drawerContent={(props) => {
                return <DrawerContent {...props} />
            }}
            screenOptions={{
                headerShown: false,
                drawerStyle: {
                    top: windowHeight*0.06,
                    backgroundColor: '#312F53',
                    borderTopRightRadius: windowHeight*2,
                    borderBottomRightRadius: windowHeight*2,
                    width: windowWidth*0.76,
                    height: windowHeight*0.75,
                    opacity: 0.5,
                    shadowColor: "#312F53",
                    shadowOffset: {
                        width: 0,
                        height: 12,
                    },
                    shadowOpacity: 0.58,
                    shadowRadius: 16.00,

                    elevation: 24,
                },
            }}
        >
            <Drawer.Screen {...props} name="Home" component={Home} />
            
        </Drawer.Navigator>
    );
}
export default MyDrawer;