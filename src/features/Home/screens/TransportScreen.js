import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


export default function TransportScreen(){
    return(
        <>
            <View style={styles.header}>
                <TouchableOpacity style={styles.tab}>
                    <Text style={styles.tabText}>Разписания</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tab}>
                    <Text style={styles.tabText}>Карта</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    header:{
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: "#fff",
        borderRadius: 12,
        margin: 10,
        padding: 5,
        elevation: 3, 
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 5,
        marginTop: '10%'
    },
    tab: {
        flex: 1,
        paddingVertical: 10,
        borderRadius: 10,
        alignItems: "center",
    },
    tabText: {
        fontSize: 16,
        color: "#333",
    },
});