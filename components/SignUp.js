import {
	TouchableOpacity,
	StyleSheet,
	TextInput,
	View,
	Text,
	Image,
} from "react-native";
import React, { useState } from "react";
import pix from "./assets/google.png";
import Icon from "react-native-vector-icons/FontAwesome";

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
});

export default function SignUp({ navigation }) {
	const [text, onChangeText] = useState("");
	return (
		<View style={styles.container}>
			<View style={styles.centerImage}>
				<Image
					style={styles.newImage}
					source={{
						uri: "https://burst.shopifycdn.com/photos/model-in-gold-fashion.jpg?width=500&format=pjpg&exif=1&iptc=1",
					}}
				/>
			</View>
			<Text>SignUp</Text>
			<TextInput
				placeholder="Text"
				style={styles.text}
				value={text}
				onChangeText={onChangeText}
			/>

			<View>
				<Text>{text}</Text>
			</View>

			<TouchableOpacity
				style={styles.butStyle}
				onPress={() => {
					navigation.navigate("home");
				}}
			>
				<Image source={pix} style={styles.img} />
				<Text style={styles.textComp}>Go back Home</Text>
			</TouchableOpacity>

			<Icon name="home" size={30} color="#004080" />
		</View>
	);
}
