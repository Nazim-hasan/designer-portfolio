import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { colors } from "../../theme/colors";
import Text from "../text/Text";
import { metrics } from "../../theme/metrics";

const Skills = ({skillProps}) => {
  return (
    <View
      style={{
        backgroundColor: skillProps.backgroundColor,
        marginHorizontal: metrics.spacing.m,
        marginVertical: metrics.spacing.l,
        borderRadius: 5,
        padding: metrics.spacing.xxl,
        height: skillProps.containerProps.height,
        width: skillProps.containerProps.width
      }}
    >
      <Image
        source={skillProps.imageURL}
        height={skillProps.imageProps.height}
        width={skillProps.imageProps.width}
        style={{ alignSelf: "flex-end", marginRight: 0 }}
      />
      <Text
        preset="headingMed"
        customStyles={{
          color: colors.white,
          fontWeight: "bold",
          marginTop: skillProps.titleMarginTop,
        }}
      >
        {skillProps.title}
      </Text>
    </View>
  );
};

export default Skills;

const styles = StyleSheet.create({});
