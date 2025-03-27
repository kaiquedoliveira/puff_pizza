import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style"

export default function Index(){
    const MENU = [
        {
            id: 1,
            name: "Pizza Peperoni",
            description: "Uma pizza de peperoni é feita com massa, molho de tomate, queijo mussarela e fatias de peperoni levemente picantes. Simples e deliciosa! ",
            price: 40.90,
            image: require("@/assets/images/pizzapepe.jpg")
        },
        {
            id: 2,
            name: "Pizza Calabresa com Catupry",
            description: "Uma pizza de calabresa com catupiry é composta por uma massa saborosa, molho de tomate, queijo mussarela, fatias de linguiça calabresa levemente defumada e cremosa cobertura de catupiry. Uma combinação irresistível de sabores!",
            price: 45.90,
            image: require("@/assets/images/pizzacat.png")
        },
        {
            id: 3,
            name: "Pizza Brocolis",
            description: "Uma pizza de brócolis é composta por uma base de massa macia, molho de tomate, queijo mussarela derretido e pedaços de brócolis frescos e levemente temperados. Para um toque extra, pode incluir alho ou requeijão, criando uma combinação leve e saborosa! ",
            price: 30.00,
            image: require("@/assets/images/pizzabroc.jpg")
        },
        {
            id: 4,
            name: "Pizza Frango com Catupiry",
            description: "Uma pizza de frango com catupiry combina uma massa macia, molho de tomate, queijo mussarela, pedaços suculentos de frango desfiado bem temperado e uma generosa camada de catupiry cremoso. Uma delícia que agrada muitos paladares!",
            price: 39.90,
            image: require("@/assets/images/pizzafran.jpg")
        }
    ]

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.headerImage} source={require("@/assets/images/logo.png")}/>
            </View>
           
            <View style={styles.tabs}>
                {["Pizzas", "Bebidas", "Combos", "Telefone"].map((item) => (
                    <TouchableOpacity>
                        <Text style={styles.tabsName}>{item}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <ScrollView style={styles.menuList}>
            {
                MENU.map((item) => (
                    <TouchableOpacity style={styles.menuItem}>
                          <Image style={styles.imgItem} source={item.image}/>
                        <View style={styles.menuContent}>
                            <Text style={styles.itemName}>{item.name}</Text>
                            <Text style={styles.itemDescription}>{item.description}</Text>
                            <Text style={styles.itemPrice}>{item.price.toFixed(2)}</Text>
                        </View>
                      
                    </TouchableOpacity>
                ))
            }
            </ScrollView>
        </View>

      
    )
}
