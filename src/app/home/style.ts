import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "gold", 
        paddingHorizontal: 20,
    },
    header: {
        padding: 16,
        alignItems: "center",
    },
    headerImage: {
        width: "100%",
        height: 280,
        borderRadius: 20,
        resizeMode: "cover",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
    },
    restauranteName: {
        fontSize: 28,
        fontWeight: "bold",
        marginTop: 20,
        color: "#F4A900", 
        textAlign: "center",
        textTransform: "uppercase",
        letterSpacing: 1.5,
    },
    subtitle: {
        color: "#333",
        marginTop: 8,
        fontSize: 18,
        textAlign: "center",
    },
    tabs: {
        flexDirection: "row",
        justifyContent: "center",
        paddingVertical: 15,
        borderBottomColor: "#F4A900",
        borderBottomWidth: 2,
        gap: 20,
    },
    tabsName: {
        color: "#333",
        fontSize: 18,
        fontWeight: "bold",
        textTransform: "uppercase",
    },
    menuList: {
        paddingVertical: 20,
        flex: 1,
    },
    menuItem: {
        flexDirection: "row",
        borderBottomColor: "#F4A900",
        borderBottomWidth: 1,
        paddingVertical: 20,
        alignItems: "center",
    },
    menuContent: {
        flex: 1,
        marginRight: 20,
    },
    itemImage: {
        width: 160,
        height: 160,
        borderRadius: 12,
        resizeMode: "cover",
        shadowColor: "#000",
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
    },
    itemName: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#F4A900",
    },
    itemDescription: {
        color: "#333",
        marginTop: 6,
        fontSize: 16,
        lineHeight: 22,
    },
    itemPrice: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 12,
        color: "#50C878", 
    },
});
