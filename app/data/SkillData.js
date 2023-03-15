import { colors } from "../theme/colors";
import { images } from "../theme/images";
import { metrics } from "../theme/metrics";

export const skills = [
  {
    title: "Graphic Design",
    titleMarginTop: metrics.spacing.xxxl,
    imageURL: images.graphic_design,
    containerProps: {
      height: 400,
      width: 360,
    },
    imageProps: {
      height: 100,
      width: 200,
    },
    backgroundColor: colors.blue,
  }
];
export const uiApp = [
  {
    title: "UI/UX",
    titleMarginTop: metrics.spacing.xxl,
    imageURL: images.uiUx,
    containerProps: {
      height: 200,
      width: 165,
    },
    imageProps: {
      height: 100,
      width: 200,
    },
    backgroundColor: colors.yellow,
  },
  {
    title: "Apps",
    titleMarginTop: metrics.spacing.xxl,
    imageURL: images.apps,
    containerProps: {
      height: 200,
      width: 165,
    },
    imageProps: {
      height: 100,
      width: 200,
    },
    backgroundColor: colors.pink,
  }
]
export const diffSkill = [
  {
    title: "Illustrations",
    titleMarginTop: metrics.spacing.m,
    imageURL: images.illustrations,
    containerProps: {
      height: 180,
      width: 360,
    },
    imageProps: {
      height: 100,
      width: 200,
    },
    backgroundColor: colors.red,
  },
  {
    title: "Photography",
    titleMarginTop: metrics.spacing.m,
    imageURL: images.photography,
    containerProps: {
      height: 180,
      width: 360,
    },
    imageProps: {
      height: 100,
      width: 200,
    },
    backgroundColor: colors.cyan,
  },
  {
    title: "Motion Graphic",
    titleMarginTop: metrics.spacing.m,
    imageURL: images.illustrations,
    containerProps: {
      height: 180,
      width: 360,
    },
    imageProps: {
      height: 100,
      width: 200,
    },
    backgroundColor: colors.purple,
  },
];