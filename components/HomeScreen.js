import {
	TouchableOpacity,
	StyleSheet,
	TextInput,
	View,
	Text,
	ScrollView,
	Image,
} from "react-native";
import React, { useState } from "react";
import pix from "./assets/google.png";
import baby from "./assets/myBaby.jpeg";
import data from "./data.json";

const styles = StyleSheet.create({
	text: {
		margin: 10,
		padding: 10,
		borderWidth: 1,
		width: 350,
		height: 50,
		borderRadius: 3,
		borderColor: "gray",
	},
	butStyle: {
		borderRadius: 3,
		margin: 10,
		width: 350,
		height: 50,
		justifyContent: "center",
		alignItems: "center",
		borderColor: "#1e4c3d",
		borderWidth: 2,
		flexDirection: "row",
		shadowColor: "black",
		shadowOffset: { width: 2, height: 4 },
	},
	textComp: {
		fontSize: 15,
		fontWeight: "bold",
		color: "#1e4c3d",
	},
	img: {
		width: 30,
		height: 30,
		marginRight: 5,
	},
	newImage: {
		width: 300,
		height: 250,
		borderRadius: 5,
		shadowOffset: { width: 2, height: 42 },
		shadowColor: "black",
		shadowOpacity: 1,
		resizeMode: "cover",
	},
	centerImage: {
		alignItems: "center",
	},
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	baby: { width: 370, height: 150, marginBottom: 20, borderRadius: 5 },
});

export default function HomeScreen({ navigation }) {
	const [text, onChangeText] = useState("");
	return (
		<View style={styles.container}>
			<View style={styles.centerImage}>
				<TouchableOpacity
					style={styles.butStyle}
					onPress={() => {
						navigation.push("signUp");
					}}
				>
					<Image source={pix} style={styles.img} />
					<Text style={styles.textComp}>Go to SignUp Screen</Text>
				</TouchableOpacity>

				<ScrollView>
					{data?.map(({ id, avatar }) => (
						<View key={id}>
							<Text>{id}</Text>
							<Image
								style={styles.newImage}
								source={{
									uri: avatar,
								}}
							/>
						</View>
					))}
				</ScrollView>
			</View>
		</View>
	);
}
