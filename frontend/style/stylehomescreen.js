import {
  StyleSheet
} from "react-native";

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    height: "100%",
    paddingLeft: "50px",
    paddingRight: "50px",
  },
  text: {
    fontSize: "15px",
    fontWeight: "bold",
    textAlign: "center",
  },
  textContent: {
    fontSize: "15px",
    fontWeight: "bold",
    textAlign: "center",
    borderColor: "black",
    borderWidth: 1,
  },
  input: {
    backgroundColor: "#fff",
    color: "#000",
    borderRadius: "5px",
    height: "30px",
  },
  inputTwo: {
    backgroundColor: "#fff",
    color: "#000",
    borderRadius: "5px",
    height: "30px",
  },
  separator: {
    margin: "5px",
    backgroundColor: "#fff",
  },
  mybutton: {
    alignSelf: "center",
    width: "50%",
    height: "40px",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  buttonYes: {
    backgroundColor: "green",
  },
  buttonNo: {
    backgroundColor: "red",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});