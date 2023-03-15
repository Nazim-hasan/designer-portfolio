import { StyleSheet, View } from "react-native";
import React from "react";
import { metrics } from "../theme/metrics";
import Button from "../components/button/Button";
import { colors } from "../theme/colors";
import Text from "../components/text/Text";
import Skills from "../components/skills/Skills";
import { diffSkill, skills, uiApp } from "../data/SkillData";
const DesignerPortfolio = () => {
  return (
    <View>
      <View style={styles.titleContainer}>
        <View
          style={{
            width: 44,
            height: 46,
            backgroundColor: colors.black,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              borderRadius: 30,
              borderWidth: 3,
              borderColor: colors.white,
              width: 30,
              height: 30,
            }}
          ></View>
        </View>
        <Button
          customStyles={{}}
          title={"Free Consultation"}
          onPress={() => {
            console.log("hi");
          }}
        />
      </View>
      <View>
        <Text
          preset="headingLarge"
          customStyles={{ fontWeight: "bold", textAlign: "center" }}
        >
          Design solutions
        </Text>
        <Text
          preset="headingLarge"
          customStyles={{ fontWeight: "bold", textAlign: "center" }}
        >
          made easy
        </Text>
        <Text
          customStyles={{
            textAlign: "center",
            marginHorizontal: metrics.spacing.xxxl,
          }}
        >
          With over ten years of experience in various design disciplines, I’m
          your one-stop shop for your design needs.
        </Text>
      </View>
      <View>
      
        {skills.map((item, index) => (
          <Skills skillProps={item} key={item.title} />
        ))}
        <View style={{ flexDirection: 'row' }}>
        {uiApp.map((item, index) => (
          <Skills skillProps={item} key={item.title} />
        ))}
        </View>
        {diffSkill.map((item, index) => (
          <Skills skillProps={item} key={item.title} />
        ))}
      </View>
    </View>
  );
};

export default DesignerPortfolio;

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: metrics.spacing.m,
    marginVertical: metrics.spacing.m,
  },
});
