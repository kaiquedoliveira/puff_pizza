import { Link } from "expo-router";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "@/app/login/style"
 
export default function LoginScreen(){
{
        return (
            <View style={styles.cadastro}>
                <View style={styles.containerImage}>
                <Image style={styles.logoimagem}  source={require("@/assets/images/logo-pizza.png")}></Image>
                </View>
                <View style={styles.containerPai}>
 
                   
               
                    <View style={styles.containerbox}>
                        <Text>Email</Text>
                        <TextInput
                            style={styles.email}
                            placeholder="Seu Email"
                            placeholderTextColor="#aaa"
                        />
                    </View>
 
                   
     
                   
                    <View style={styles.containerbox}>
                        <Text>Senha</Text>
                        <TextInput
                            style={styles.email}
                            placeholder="Sua senha"
                            placeholderTextColor="#aaa"
                            secureTextEntry
                        />
                    </View>
     
                    {/* Botão de envio */}
                    <View style={styles.containerbox}>
                        <Link href={"/home/page"} asChild>
                            <TouchableOpacity style={styles.botao}>
                                <Text style={styles.botaoTexto}>entrar</Text>
                            </TouchableOpacity>
                        </Link>
                    </View>
                    <Link href={"/"}>
                     <Text style={styles.textoCadastro}>crie sua conta</Text>
 
                    </Link>
     
                   
                </View>
            </View>
        );
    }
 
}