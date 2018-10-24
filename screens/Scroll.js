import React from "react";
import { StyleSheet, SafeAreaView, StatusBar, View, ScrollView, Dimensions } from "react-native";

const { height } = Dimensions.get('window');

export default class Scroll extends React.Component{
	state = {
    screenHeight: height,
  };
	onContentSizeChange = (contentWidth, contentHeight) => {
		this.setState({ screenHeight: contentHeight });
	};

	render(){

		const scrollEnabled = true;
		return (
			<SafeAreaView style = {styles.container}>
				<StatusBar barStyle = 'default' backgroundColor = "#cab5cc"/>
				<ScrollView	style={{ flex: 1 }}
					contentContainerStyle = {styles.scrollview}
					scrollEnabled = {scrollEnabled}
					onContentSizeChange={this.onContentSizeChange}>
					<View style = {styles.content}>
						{this.props.children}
					</View>
				</ScrollView>
			</SafeAreaView>
		);
	}
}
		const styles = StyleSheet.create({
	  container: {
	    flex: 1,
	  },
	  scrollview: {
	    flexGrow: 1,
	  },
	  content: {
	    flexGrow: 1,
	    justifyContent: "space-between",
	    padding: 10,
	  },
	});
