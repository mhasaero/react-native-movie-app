import { useRouter } from "expo-router";
import { Image, ScrollView, View } from "react-native";

import { icons } from "@/constants/icons";
import { images } from "@/constants/images";

import SearchBar from "@/components/SearchBar";

const Index = () => {
  const router = useRouter();

  return (
    <View className="flex-1 bg-[#00000D]">
      <Image source={images.bg} className="absolute w-full z-0" resizeMode="cover" />

      <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false} contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}>
        <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />

        <SearchBar
          onPress={() => {
            router.push("/search");
          }}
          placeholder="Search for a movie"
        />
      </ScrollView>
    </View>
  );
};

export default Index;
