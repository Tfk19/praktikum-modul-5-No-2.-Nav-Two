import { Heading, Text, Center, Image, Box } from "@gluestack-ui/themed";
import { Header } from "../components";
import { ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";

const NewsDetail = () => {
  const params = useLocalSearchParams();
  return (
    <>
      <Header title={"News"} withBack={true} />
      <ScrollView Vertical={true} showsVerticalScrollIndicator={false}>
      <Image
          source={{ uri: params.image }}
          w="100%"
          h="50%"
          alt="Image Data"
        />
        <Text padding={"$4"}>{params.date}</Text>
        <Text bold padding={"$4"} textAlign="justify">{params.title}</Text>
        <Text padding={"$4"} textAlign="justify">{params.content}</Text>
        </ScrollView>
    </>
  );
};

export default NewsDetail;