import { Tabs } from "expo-router";
import Feather from '@expo/vector-icons/Feather';


export default function TabsLayout() {
  return <Tabs screenOptions={{tabBarActiveTintColor:"coral"}}>

    <Tabs.Screen
        name='index'
        options={{
          title:"Home",
          tabBarIcon: ({color}) =>(
              <Feather name="home" size={24} color={color} />),
        }}
    />
    <Tabs.Screen name='Login' options={{title:"Login"}} />
  </Tabs>;
}
