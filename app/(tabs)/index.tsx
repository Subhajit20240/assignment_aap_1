import { Image } from "expo-image";
import {  StyleSheet, View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import Fontisto from "@expo/vector-icons/Fontisto";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import EvilIcons from "@expo/vector-icons/EvilIcons";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.view1}>
        <View>
          <AntDesign name="menu" size={24} color="white" style={styles.view2} />
        </View>
        <View style={styles.view4}>
          <Fontisto style={styles.view2} name="wifi-logo" size={24}color="black"  />
          <Text style={styles.view2}>TheSubhajit</Text>
        </View>
        <View style={styles.view3}>
          <Feather style={styles.view2} name="search" size={24} color="black" />
          <Ionicons  style={styles.view2}  name="bag-handle-outline"  size={24}  color="black"
          />
        </View>
      </View>

      <ScrollView  style={styles.bodyScroll}    showsVerticalScrollIndicator={false}  >
        <View style={styles.view5}>
          <Image source={require("../../assets/images/assign.jpg")} style={styles.image} />
        </View>

        <View style={styles.view6}>
          <Text style={styles.view7}>Popular Catogories</Text>
        </View>

        <ScrollView  horizontal  showsHorizontalScrollIndicator={false}  contentContainerStyle={styles.categoriesContent}>
          <View style={styles.view8}>
            <MaterialCommunityIcons name="sofa-outline"  size={24}  color="black"/>
            <Text style={styles.view9}>Sofa</Text>
          </View>
          <View style={styles.view8}>
            <FontAwesome name="tv" size={24} color="black" />
            <Text style={styles.view9}>TV UNIT</Text>
          </View>
          <View style={styles.view8}>
            <FontAwesome6 name="chair" size={24} color="black" />
            <Text style={styles.view9}>Chair</Text>
          </View>
          <View style={styles.view8}>
            <Ionicons name="bed-outline" size={24} color="black" />
            <Text style={styles.view9}>Bed</Text>
          </View>
          <View style={styles.view8}>
            <Fontisto name="tablet" size={24} color="black" />
            <Text style={styles.view9}>Tablet</Text>
          </View>
          <View style={styles.view8}>
            <FontAwesome name="laptop" size={24} color="black" />
            <Text style={styles.view9}>Laptop</Text>
          </View>
          <View style={styles.view8}>
            <MaterialCommunityIcons  name="ceiling-fan"  size={24}  color="black"/>
            <Text style={styles.view9}>Ceiling Fan</Text>
          </View>
          <View style={styles.view8}>
            <AntDesign name="bulb" size={24} color="black" />
            <Text style={styles.view9}>Bulb</Text>
          </View>
        </ScrollView>

        <View style={styles.view10}>
          <Text style={styles.view7}>New Arrivals</Text>
          <View style={styles.view11}>
            <Text>View All</Text>
            <EvilIcons name="arrow-right" size={24} color="black" />
          </View>
        </View>
        <View style={styles.gridContent}>
          <View style={styles.gridRow}>
            <View style={styles.gridItem}>
              <Image source={require("../../assets/images/assign.jpg")} style={styles.gridImage} />
            </View>
            <View style={styles.gridItem}>
              <Image  source={require("../../assets/images/assign.jpg")} style={styles.gridImage}  />
            </View>
          </View>
          <View style={styles.gridRow}>
            <View style={styles.gridItem}>
              <Image   source={require("../../assets/images/assign.jpg")}  style={styles.gridImage} />
            </View>
            <View style={styles.gridItem}>
              <Image source={require("../../assets/images/assign.jpg")} style={styles.gridImage} />
            </View>
          </View>
          <View style={styles.gridRow}>
            <View style={styles.gridItem}>
              <Image  source={require("../../assets/images/assign.jpg")}  style={styles.gridImage} />
            </View>
            <View style={styles.gridItem}>
              <Image  source={require("../../assets/images/assign.jpg")}     style={styles.gridImage}   />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "white",
  },
  view1: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "black",
  },
  view2: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 20,
  },
  view3: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "black",
  },
  view4: {
    flexDirection: "row",
    // justifyContent:'center',
    alignItems: "center",
    backgroundColor: "black",
    justifyContent: "space-evenly",
  },
  view5: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
  image: {
    width: "100%",
    height: 300,
  },
  view6: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    // backgroundColor:'blue',
  },
  view7: {
    // backgroundColor:'blue',
    marginTop: 20,
    alignSelf: "flex-start",
    textAlign: "left",
    marginLeft: 20,
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  categoriesContent: {
    flexDirection: "row",
    paddingHorizontal: 16,
    gap: 10,
    marginTop:20
  },
  view8: {
    // paddingVertical:12,
    paddingHorizontal: 16,
    // marginRight:12,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor:'white'
  },
  view9: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
  view10: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 0,
    // backgroundColor:'black',
  },
  bodyScroll: {
    flex: 1,
  },
  view11: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    marginRight: 10,
    // backgroundColor:'black',
  },
  gridContent: {
    paddingHorizontal: 16,
    paddingBottom: 24,
    marginTop:20
  },
  gridScroll: {
    flex: 1,
  },
  gridRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  gridItem: {
    width: "48%",
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "white",
  },
  gridImage: {
    width: "100%",
    height: 150,
  },
});
