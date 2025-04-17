import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    cadastro: {
        flex: 1,
        backgroundColor: "gold", 
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
    },
    textoCadastro: {
        textAlign: "center",
        color: "black", 
        fontSize: 26,
        fontWeight: "bold",
        marginBottom: 30,
        textTransform: "uppercase",
        letterSpacing: 1.5,
    },
    containerPai: {
        width: "100%",
        borderRadius: 20,
        backgroundColor: "", 
        padding: 30,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.4,
        shadowRadius: 8,
    },
    containerbox: {
        marginBottom: 25,
        width: "100%",
        alignSelf: "center",
    },
    email: {
        borderWidth: 0,
        borderRadius: 14,
        padding: 14,
        fontSize: 18,
        backgroundColor: "white",
        color: "gold",
        marginTop: 10,
        shadowColor: "#000",
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 29, 
    },
    botao: {
        backgroundColor: "white", 
        borderRadius: 15,
        paddingVertical: 16,
        alignItems: "center",
        marginTop: 15,
        shadowColor: "#000",
        shadowOffset: { width: 2, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 6,
        elevation: 3,
    },
    botaoTexto: {
        color: "black",
        fontSize: 20,
        fontWeight: "bold",
        textTransform: "uppercase",
    },
    logoimagem: {
        width: 270,
        height: 200,
        borderRadius: 85,
        resizeMode: "contain",
    },
    containerImage: {
        alignItems: "center",
        justifyContent: "center",
        height: "30%",
    }
});
