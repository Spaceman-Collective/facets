import { Text, FlatList, View, Image, TouchableOpacity, Modal } from "react-native";
import { useState } from "react";
import tw from "twrnc";

import { Screen } from "../components/Screen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Section } from "../components/Section";
import { TextInput } from "react-native-gesture-handler";

export function HomeScreen() {
  const features = [
    { name: "MadLad #4555", image: "https://pbs.twimg.com/profile_images/1649771240133984256/NyQnq5A1_400x400.jpg" },
    { name: "MadLad #4555", image: "https://pbs.twimg.com/profile_images/1649771240133984256/NyQnq5A1_400x400.jpg" },
    { name: "MadLad #4555", image: "https://pbs.twimg.com/profile_images/1649771240133984256/NyQnq5A1_400x400.jpg" },
    { name: "MadLad #4555", image: "https://pbs.twimg.com/profile_images/1649771240133984256/NyQnq5A1_400x400.jpg" },
    { name: "MadLad #4555", image: "https://pbs.twimg.com/profile_images/1649771240133984256/NyQnq5A1_400x400.jpg" },

  ];

  const [modalVisible, setModalVisible] = useState(false);
  const [addModalVisible, setAddModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState({ name: "", image: "" });

  const renderFeatureItem = ({ item }: any) => {
    return (
      <TouchableOpacity style={tw`w-[110px] h-[150px] flex items-center m-[5] bg-[#17222D] rounded-[20px]`} onPress={() => {
        setSelectedItem(item);
        setModalVisible(true);
      }}>
        <Image style={tw`h-[100px] w-full rounded-[20px]`} source={{ uri: item.image }} />
        <Text style={tw`text-center mt-3 text-[#5A6489] text-bold`}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  const renderFeatureItem2 = ({ item }: any) => {
    return (
      <TouchableOpacity style={tw`w-[170px] h-[150px] flex items-center m-[5] bg-[#17222D] rounded-[20px]`} onPress={() => {
        setSelectedItem(item);
        setModalVisible(true);
      }}>
        <Image style={tw`h-[100px] w-full rounded-[20px]`} source={{ uri: item.image }} />
        <Text style={tw`text-center mt-3 text-[#5A6489] text-bold`}>{item.name}</Text>
      </TouchableOpacity>
    );
  };


  return (
    <Screen>
      <View style={tw`flex flex-row flex-wrap justify-center`}>
        <FlatList
          data={features}
          keyExtractor={(item) => item.name}
          renderItem={renderFeatureItem}
          numColumns={3}
        />
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false);
          }}
        >
          <View style={tw`flex-1 justify-center items-center`}>
            <View style={tw`w-full h-full bg-[#14191E]`}>


              <View>
                <Text style={tw`text-[#93A4FF] text-2xl font-bold text-center w-full mt-[20px]`}>{selectedItem.name}</Text>
                <TouchableOpacity style={tw`absolute top-5 left-5 z-50`} onPress={() => setModalVisible(false)}>
                  <MaterialCommunityIcons name="arrow-left" size={30} color="#93A4FF" />
                </TouchableOpacity>
              </View>

              <View style={tw`mt-[20px]`}>
                <Image style={tw`h-[96px] w-full`} resizeMode="cover" source={{ uri: selectedItem.image }} />
              </View>

              <View style={tw`flex-row justify-between p-4 bg-transparent`}>
                <Text style={tw`text-gray-600 text-xl font-bold`}>Facets</Text>
                <TouchableOpacity onPress={() => {
                  setAddModalVisible(true);
                }}>
                  <MaterialCommunityIcons name="plus" size={30} color="gray" />
                </TouchableOpacity>
              </View>

              <FlatList
                data={features}
                keyExtractor={(item) => item.name}
                renderItem={renderFeatureItem2}
                numColumns={2}
              />

            </View>

          </View>

          <Modal
            animationType="slide"
            transparent={true}
            visible={addModalVisible}
            onRequestClose={() => {
              setAddModalVisible(false);
            }}
          >
            <View style={tw`flex-1 justify-center items-center`}>
              <View style={tw`w-full h-full bg-[#1A1F2D]`}>


                <View>
                  <Text style={tw`text-[#93A4FF] text-2xl font-bold text-center w-full mt-[20px]`}>{selectedItem.name}</Text>
                  <TouchableOpacity style={tw`absolute top-5 left-5 z-50`} onPress={() => setModalVisible(false)}>
                    <MaterialCommunityIcons name="arrow-left" size={30} color="#93A4FF" />
                  </TouchableOpacity>
                </View>

                <View style={tw`mt-[20px]`}>
                  <Image style={tw`h-[96px] w-full`} resizeMode="cover" source={{ uri: selectedItem.image }} />
                </View>

                <View style={tw`flex-row justify-between p-4 bg-transparent`}>
                  <Text style={tw`text-gray-600 text-xl font-bold`}>Add Facet</Text>
                  <TouchableOpacity onPress={() => {
                    setAddModalVisible(false);
                  }}>
                    <MaterialCommunityIcons name="arrow-down" size={30} color="gray" />
                  </TouchableOpacity>
                </View>
                <Section title="Search">
                  <TextInput placeholder="Enter text here" style={{ borderWidth: 2, borderColor: "#222D54", paddingHorizontal: 10, paddingVertical: 8, color: "gray", marginBottom: 20 }} />
                </Section>
                <FlatList
                  data={features}
                  keyExtractor={(item) => item.name}
                  renderItem={renderFeatureItem2}
                  numColumns={2}
                />

              </View>

            </View>
          </Modal>
        </Modal>
      </View>
    </Screen>

  );
}
