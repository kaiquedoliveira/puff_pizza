import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black", 
        padding: 80,
        alignItems: "center",
        justifyContent: "center",
    },
    imagem: {
        width: 400,
        height: 250,
        borderRadius: 10,
        marginBottom: 20,
    },
    nomedoproduto: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#fff", 
        marginBottom: 15,
        textAlign: "center",
    },
    descricao: {
        fontSize: 18,
        color: "black", 
        textAlign: "center",
        marginBottom: 20,
        padding: 15,
        backgroundColor: "#2a2a2a", 
        borderRadius: 8,
    },
    precoproduto: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#32CD32", 
        marginBottom: 20,
    },
    botaodecomprar: {
        backgroundColor: "green", 
        width: 220,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 12,
        marginBottom: 15,
    },
    botaoComprar: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
    },
    divpai: {
        alignItems: "center",
        backgroundColor: "#FFD700", 
        padding: 30,
        borderRadius: 12,
    },
    detalhe: {
        fontSize: 22,
        fontWeight: "bold",
        color: "white",
        marginBottom: 12,
        textAlign: "center",
    },
    ingredientes: {
        fontSize: 18,
        color: "white",
        marginBottom: 8,
        textAlign: "center",
        alignSelf: "flex-start",
        paddingLeft: 20,
    }
});
