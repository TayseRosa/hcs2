import FontAwesome from '@expo/vector-icons/FontAwesome5'
import { Tabs } from "expo-router";

export default function TabLayout(){
    return(
        <Tabs
            screenOptions={{
                tabBarActiveTintColor:'blue'
            }}
        >
            <Tabs.Screen 
                name="home" 
                options={{
                    title:'Inicio',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color}/>
                }}
            />

            <Tabs.Screen 
                name="categories" 
                options={{
                    title:'Categorias',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="archive" color={color}/>
                }}
            />

            <Tabs.Screen 
                name="about" 
                
                options={{
                    title:'Sobre',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color}/>,
                    headerShown:false
                }}
            />
        </Tabs>
    )
}