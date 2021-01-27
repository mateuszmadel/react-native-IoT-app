import React, {Component} from "react";
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import MyModal from "../components/MyModal";
import DeviceTab from "../components/DeviceTab";
import {getData, storeData} from "../utils/AsyncStorage"
import {ColorPicker} from "react-native-color-picker";

export default class DevicesScreen extends Component{
    state={
        modalVisible: false,
        storageData:[],
        name:"",
        place:"",
        command:"",
        color:""
    }
    picker = () => (
        <ColorPicker
            onColorChange={color => this.setState({color:color})}
            style={{flex: 1}}
        />
    )
    async componentDidMount() {
        this.setState({storageData: await getData()})
    }

    onTextChange = (name) => (value) => {
        this.setState({ [name]: value });
    };

    saveDevice = async () => {
        let arr=await getData();
        if(arr===null || arr==='')
            arr=[];
        let obj = {
            name: this.state.name,
            place: this.state.place,
            command: this.state.command,
            color:this.state.color
        }
        arr.push(obj);
        await storeData(arr)
            .then(() => this.setState({modalVisible: false}));
        this.setState({storageData: await getData()})
        //await storeData('')

    }
    hideModal = () => {
        this.setState({modalVisible:false})
    }
    showModal = () =>{
        console.log(this.state)
        this.setState({modalVisible:true})
    }

    render(){
        return (
            <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Devices</Text>
            </View>

            <View style={styles.tabsContainer}>
                <MyModal visible={this.state.modalVisible} save={this.saveDevice} cancel={this.hideModal} handleChange={this.onTextChange} picker={this.picker}/>
                {
                    this.state.storageData.length>0 &&
                    this.state.storageData.map((el,index) => (
                        <DeviceTab name={el.name} place={el.place} command={el.command} color={el.color}
                                 key={index}/>
                    ))}
                <TouchableOpacity style={styles.addButton} onPress={()=>this.showModal()}>
                    <Text styles={{fontSize:60}}>+</Text>
                </TouchableOpacity>
            </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
      flex:1
    },
    tabsContainer:{
        flex:5,
        flexBasis:'35%',
        //justifyContent:'center',
        flexWrap:'wrap',
        flexDirection:'row',

    },
    header:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      borderBottomWidth:1,
        fontFamily:'Lora_400Regular'
    },
    headerText:{
        fontSize:28
    },
    addButton:{
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        margin: 20,
        height: '25%',
        width:'40%'
    }
})