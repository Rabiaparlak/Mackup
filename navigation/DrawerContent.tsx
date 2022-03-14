import React from "react";
import { View } from "react-native";
import { styles } from "../screens/style";
import { TouchableOpacity } from "react-native-gesture-handler";

const DrawerContent = () => {

    return (
        <View style={styles.body}>

            <TouchableOpacity
                style={styles.homeIcon}
            >

            </TouchableOpacity>

            <TouchableOpacity
                style={styles.sample1Icon}
            >

            </TouchableOpacity>

            <TouchableOpacity
                style={styles.settingsIcon}
            >

            </TouchableOpacity>

            <TouchableOpacity
                style={styles.sample2Icon}
            >

            </TouchableOpacity>

            <TouchableOpacity
                style={styles.logOutIcon}
            >

            </TouchableOpacity>

        </View>
    )
}
export default DrawerContent;