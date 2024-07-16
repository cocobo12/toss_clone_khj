import { StyleSheet, View } from "react-native";
import BellIcon from "../../assets/icons/bell-44.svg";
import PostIcon from "../../assets/icons/posticon.svg";
import ThunderIcon from "../../assets/icons/thundericon.svg";
import ForeignIcon from "../../assets/icons/foreignicon.svg";
import PigIcon from "../../assets/icons/pigicon.svg";
import TossStar from "../../assets/icons/tossstar.svg";
import TossIcon from "../../assets/icons/tossicon.svg";
import PencilIcon from "../../assets/icons/pencilicon.svg";
import LinkIcon from "../../assets/icons/linkicon.svg";
import MeterIcon from "../../assets/icons/metericon.svg";
import PoketSearchIcon from "../../assets/icons/poketsearchicon.svg";
import ShildIcon from "../../assets/icons/shildicon.svg";
import YellowBell from "../../assets/icons/yellowbell.svg";
import BrandCon from "../../assets/icons/brandcon.svg";
import CardIcon from "../../assets/icons/cardicon.svg";
import D15Icon from "../../assets/icons/d15icon.svg";
import CompareGraph from "../../assets/icons/compareGraph.svg";

function CustomIcons({ name, width, height }) {
  let icon = (
    <BellIcon
      width={width ? width : 24}
      height={height ? height : 24}
      fill="white"
    />
  );
  if (name === "우체국") {
    icon = (
      <PostIcon width={width ? width : 50} height={height ? height : 50} />
    );
  } else if (name === "토스뱅크 이자") {
    icon = (
      <ThunderIcon width={width ? width : 50} height={height ? height : 50} />
    );
  } else if (name === "토스뱅크 통장") {
    icon = (
      <TossStar width={width ? width : 50} height={height ? height : 50} />
    );
  } else if (name === "외화통장") {
    icon = (
      <ForeignIcon width={width ? width : 50} height={height ? height : 50} />
    );
  } else if (name === "모임통장") {
    icon = <PigIcon width={width ? width : 50} height={height ? height : 50} />;
  } else if (name === "토스증권") {
    icon = (
      <TossIcon width={width ? width : 50} height={height ? height : 50} />
    );
  } else if (name === "기타자산") {
    icon = (
      <PencilIcon width={width ? width : 50} height={height ? height : 50} />
    );
  } else if (name === "브랜드콘") {
    icon = (
      <BrandCon width={width ? width : 30} height={height ? height : 30} />
    );
  } else if (name === "소비줄이기") {
    icon = (
      <LinkIcon width={width ? width : 30} height={height ? height : 30} />
    );
  } else if (name === "머니알림") {
    icon = (
      <YellowBell width={width ? width : 30} height={height ? height : 30} />
    );
  } else if (name === "신용점수") {
    icon = (
      <MeterIcon width={width ? width : 26} height={height ? height : 26} />
    );
  } else if (name === "내보험") {
    icon = (
      <ShildIcon width={width ? width : 30} height={height ? height : 30} />
    );
  } else if (name === "내대출") {
    icon = (
      <PoketSearchIcon
        width={width ? width : 30}
        height={height ? height : 30}
      />
    );
  } else if (name === "카드내역") {
    icon = (
      <CardIcon width={width ? width : 50} height={height ? height : 50} />
    );
  } else if (name === "D15") {
    icon = <D15Icon width={width ? width : 50} height={height ? height : 50} />;
  } else if (name === "총자산") {
    icon = <CompareGraph width={width} height={height} />;
  }

  return <View style={styles.icon}>{icon}</View>;
}

export default CustomIcons;

const styles = StyleSheet.create({
  icon: {
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
});
