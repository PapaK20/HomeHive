import Colors, { Color } from './Colors';
import { StyleSheet } from 'react-native';

export const defaultStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFFFF',
  },
  inputField1: {
    height: 44,
    borderWidth: 1,
    borderColor: '#ABABAB',
    borderRadius: 8,
    padding: 10,
    width: '40%',
    backgroundColor: '#fff',
    marginBottom: 30,
  },
  inputField: {
    height: 50,
    backgroundColor: '#f1f5f9',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontFamily: 'mon',
    color: '#222',
    borderWidth: 1,
    borderColor: '#C9D3DB',
    borderStyle: 'solid',
  },
  btn: {
    backgroundColor: '#aed6dc',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Followbtn: {
    backgroundColor: '#aed6dc',
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'mon-b',
  },
  btnIcon: {
    position: 'absolute',
    left: 16,
  },
  footer: {
    position: 'absolute',
    height: 100,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopColor: Colors.grey,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
  signUpButton: {
    backgroundColor: Color.colorOrange_100,
    borderRadius: 8,
    width: '100%',
    padding: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  signUpText: {
    color: Color.colorWhite,
    fontSize: 16,
    fontFamily: 'mon-b',
    textTransform: "uppercase",
  },
});

export const FontSize = {
  size_lg: 18,
  size_base: 16,
  size_sm: 14,
  size_3xl: 22,
  size_xl: 20,
  size_17xl: 36,
  size_13xl: 32,
  size_smi: 13,
  size_6xl: 25,
  size_mid: 17,
  size_11xl: 30,
  size_5xl: 24,
  size_mini: 15,
};
export const Border = {
  br_5xs: 8,
  br_3xs: 10,
  br_11xl: 30,
  br_10xs: 3,
  br_xl: 20,
  br_21xl: 40,
  br_smi: 13,
  br_8xs: 5,
  br_11xs: 2,
  br_16xl: 35,
};

//#4a536b