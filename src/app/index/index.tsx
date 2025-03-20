import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style"

export default function Index(){
    const MENU = [
        {
            id: 1,
            name: "Docinhos Rosas",
            description: "Brigadeiros a base de chocolate branco com decoração rosa",
            price: 39.90,
            image: require("@/assets/images/docinhos_rosas.jpg")
        },
        {
            id: 2,
            name: "Docinhos Florais",
            description: "Brigadeiros com decorações florais com ninho",
            price: 39.90,
            image: require("@/assets/images/docinhos_flores.jpg")
        },
        {
            id: 3,
            name: "Biscoitos Artesanais",
            description: "Biscoitos feitos a mão e com decorações variadas",
            price: 39.90,
            image: require("@/assets/images/biscoitos_artesanais.jpg")
        },
    ]

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.headerImage} source={require("@/assets/images/download.png")}/>
                <Text style={styles.restaurentName}>Doces Nune's</Text>
                <Text style={styles.subtitle}>A melhor doceria artesanal do mundo</Text>
            </View>
           
            <View style={styles.tabs}>
                {["Cookies", "Docinhos", "Biscoitos", "Bebidas"].map((item) => (
                    <TouchableOpacity>
                        <Text style={styles.tabsName}>{item}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <ScrollView style={styles.menuList}>
            {
                MENU.map((item) => (
                    <TouchableOpacity style={styles.menuItem}>
                        <View>
                            <Text style={styles.itemName}>{item.name}</Text>
                            <Text style={styles.itemDescription}>{item.description}</Text>
                            <Text style={styles.itemPrice}>{item.price.toFixed(2)}</Text>
                        </View>
                        <Image source={item.image}/>
                    </TouchableOpacity>
                ))
            }
            </ScrollView>
        </View>

      
    )
}

