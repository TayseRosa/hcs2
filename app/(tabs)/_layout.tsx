import FontAwesome from '@expo/vector-icons/FontAwesome5'
import { Tabs } from "expo-router";

export default function TabLayout(){

    return(
        <Tabs
        screenOptions={{
            tabBarActiveTintColor:'#ffffff',
            tabBarStyle:{
             backgroundColor:'#00547A',
            }
        }}            
        >
            <Tabs.Screen 
                name="home"
                options={{
                    headerShown:false,
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />
                }}
            />

            <Tabs.Screen 
                name="categories" 
                options={{
                    title:'Categorias',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="tshirt" color={color}/>,
                    headerShown:false
                }}
                
            />

            <Tabs.Screen 
                name="profile" 
                options={{
                    title:'Editar perfil',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="user-circle" color={color}/>,
                }}
            />

            <Tabs.Screen 
                name="newClient" 
                options={{
                    title:'Novo cliente',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color}/>,
                    headerShown:false
                }}                
            />


        </Tabs>
    )
}
