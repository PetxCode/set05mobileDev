import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SignUp from "./components/SignUp";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./components/HomeScreen";
import BabyScreen from "./components/BabyScreen";
import Icon from "react-native-vector-icons/FontAwesome";

const Stacked = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Tabs.Navigator
				screenOptions={{
					headerShown: true,
					tabBarShowLabel: false,
					tabBarInactiveTintColor: "gray",
					tabBarActiveTintColor: "#004080",
				}}
			>
				<Tabs.Screen
					name="baby"
					component={BabyScreen}
					options={{
						headerShown: false,
						tabBarIcon: ({ color }) => {
							return <Icon name="child" size={30} color={color} />;
						},
					}}
				/>
				<Tabs.Screen
					name="home"
					component={HomeScreen}
					options={{
						tabBarIcon: ({ color }) => {
							return <Icon name="home" size={30} color={color} />;
						},
					}}
				/>
				<Tabs.Screen
					name="signUp"
					component={SignUp}
					options={{
						tabBarIcon: ({ color }) => {
							return <Icon name="pencil" size={30} color={color} />;
						},
					}}
				/>
			</Tabs.Navigator>
		</NavigationContainer>
	);
}

{
	/* <Stacked.Navigator
				initialRouteName="mybaby"
				screenOptions={{
					headerShown: false,
				}}
			>
				<Stacked.Screen name="home" component={HomeScreen} />
				<Stacked.Screen name="signUp" component={SignUp} />
			 <Stacked.Screen name="mybaby" component={BabyScreen} />
			</Stacked.Navigator> */
}
