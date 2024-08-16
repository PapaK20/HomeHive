import * as React from "react";
import { Text, StyleSheet } from "react-native";
import { Color, FontSize, FontFamily } from "../Constants/GlobalStyles";

const BySelectingTheButtonBelowIAgreeToHostsHouseRulesGroundRulesForGuestsStayFindersRebookingAndRefundPolicyAndThatStayFinderCanChargeMyPaymentMetHodIfImResponsibleForDamage1 =
  () => {
    return (
      <Text style={styles.bySelectingTheContainer}>
        <Text
          style={styles.bySelectingThe}
        >{`By selecting the button below, I agree to Host’s  House Rules, `}</Text>
        <Text style={styles.groundRulesFor}>Ground rules for guests</Text>
        <Text style={styles.bySelectingThe}>{`, `}</Text>
        <Text style={styles.groundRulesFor}>
          StayFinder’s Rebooking and Refund policy
        </Text>
        <Text style={styles.bySelectingThe}>{` and that StayFinder can `}</Text>
        <Text style={styles.groundRulesFor}>charge my payment met hod</Text>
        <Text
          style={styles.bySelectingThe}
        >{` if I’m responsible for damage. `}</Text>
      </Text>
    );
  };

const styles = StyleSheet.create({
  bySelectingThe: {
    color: Color.colorDimgray_100,
  },
  groundRulesFor: {
    textDecoration: "underline",
    color: Color.colorBlack,
  },
  bySelectingTheContainer: {
    fontSize: FontSize.size_sm,
    letterSpacing: 0,
    lineHeight: 21,
    fontWeight: "500",
    fontFamily: FontFamily.k2DMedium,
    textAlign: "left",
    width: 339,
  },
});

export default BySelectingTheButtonBelowIAgreeToHostsHouseRulesGroundRulesForGuestsStayFindersRebookingAndRefundPolicyAndThatStayFinderCanChargeMyPaymentMetHodIfImResponsibleForDamage1;
