import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "white"
   },
   header: {
      padding: 16
   },
   headerImage: {
      width: "100%",
      height: 90,
      borderRadius: 8
   },
   restaurentName: {
      fontSize: 28,
      fontWeight: "bold",
      marginTop: 20,
      color: "blue",
      margin: "auto"
   },
   subtitle: {
      fontSize: 38,
      color: "blue",
      marginTop: 4,
      margin: "auto",
   },
   tabs: {
      flexDirection: "row",
      padding: 16,
      borderBottomColor: "black",
      borderBottomWidth: 1,
      gap: 16
   },
   tabsName: {
      color: "black"
   },
   menuList: {
      padding: 16,
      flex: 1
   },
   menuItem: {
      borderBottomColor: "black",
      borderBottomWidth: 1,
      padding: 16,
      flex: 1,
      flexDirection: "row",
      backgroundColor: "blue"
   },
   imgItem: {
      width: 100,
      height: 100,
      marginRight: 20
   },
   menuContent: {
      flex: 1,
      marginRight: 16
   },
   itemImage: {
      width: 80,
      height: 80,
      borderRadius: 8
   },
   itemName: {
      fontSize: 16,
      fontWeight: "bold"
   },
   itemDescription: {
      color: "black",
      marginTop: 4
   },
   itemPrice: {
      fontSize: 16,
      fontWeight: "bold",
      marginTop: 8
   },
   containerLogin: {
      flexDirection: "row",
      padding: 16,
      gap: 16
   }
})