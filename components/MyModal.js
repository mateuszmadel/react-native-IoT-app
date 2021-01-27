import React from "react";
import {Modal, StyleSheet, Text, TouchableOpacity, View,TextInput} from "react-native";

class MyModal extends React.Component{
    state={

    }
    render()
    {
        return (
            <Modal transparent={true} visible={this.props.visible}>
                <View style={styles.modalView}>
                    <View style={{flex:5,justifyContent:'center'}}>
                        <TextInput
                            style={styles.textInp}
                            onChangeText={this.props.handleChange("name")}
                            placeholder={"Name"}
                        />
                        <TextInput
                            style={styles.textInp}
                            onChangeText={this.props.handleChange("place")}
                            placeholder={"Place"}
                        />
                        <TextInput
                            style={styles.textInp}
                            onChangeText={this.props.handleChange("command")}
                            placeholder={"Command"}
                        />
                        {this.props.picker()}
                    </View>
                    <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.openButton} onPress={this.props.cancel}>
                        <Text style={{fontFamily:'Roboto_400Regular'}}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.openButton} onPress={this.props.save}>
                        <Text style={{fontFamily:'Roboto_400Regular'}}>Save</Text>
                    </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    modalView: {
        backgroundColor: "#D4D4D2",
        padding: 30,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
        position: "absolute",
    },
    buttonContainer:{
        flex:1,
        flexDirection:'row',
        flexWrap:'wrap'
    },
    openButton: {
        backgroundColor: "#FF9500",
        borderRadius: 20,
        padding: 10,
        marginTop: 20,
        marginLeft:20,
        width:'40%',
        justifyContent: "center",
        alignItems:'center'
    },
    textInp:{
        height: 50,
        width:200,
        borderColor: 'gray',
        borderBottomWidth: 1,
        margin:10,
        justifyContent:'center',
        padding:5,
        fontFamily:'Roboto_400Regular'

    }
})

export default MyModal;