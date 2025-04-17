import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "@/app/produto/style";
 
export default function ProductScreen() {
    return (
       
        <View style={styles.descricao}>
         
            <Image
             source={require("@/assets/images/pizzapepe.jpg")}
            style={styles.imagem}
            />
           
            <View style={styles.divpai}>
           
            <Text style={styles.nomedoproduto}>Pizza Peperoni</Text>
 
            <Text style={styles.precoproduto}>R$ 40,90</Text>
 
     
            <Text style={styles.detalhe}>Sobre</Text>
            <Text style={styles.ingredientes}>
            Uma pizza de peperoni é feita com massa, molho de tomate, queijo mussarela e fatias de peperoni levemente picantes. Simples e deliciosa!
            </Text>
 
 
 
            <Text style={styles.detalhe}>ingredientes</Text>
                <Text style={styles.ingredientes}> • Massa de pizza</Text>
                <Text style={styles.ingredientes}> • Molho de tomate</Text>
                <Text style={styles.ingredientes}> • Queijo muçarela </Text>
                <Text style={styles.ingredientes}> • Peperoni assado </Text>
                <Text style={styles.ingredientes}> • Pimenta </Text>
                <Text style={styles.ingredientes}> • Catupiry </Text>
                <Text style={styles.ingredientes}> • Azeitonas </Text>
 
           
            <TouchableOpacity style={styles.botaodecomprar}>
                <Text style={styles.botaoComprar}>Comprar</Text>
            </TouchableOpacity>
           
        </View>
        </View>
       
    );
}