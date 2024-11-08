import { Stack, Tabs } from "expo-router";

export default function CategoryLayout(){
    return(
        <Stack>
            <Stack.Screen name="list" options={{ title:'Categorias' }} />
            <Stack.Screen name="[id]" />
            <Stack.Screen name="calc1" options={{ headerShown:false }} />
            <Stack.Screen name="calc2" options={{ headerShown:false }} />
            <Stack.Screen name="result" options={{ headerShown:false }} />
        </Stack> 
    )
}