import React, { useState }  from 'react';
import { View,StyleSheet,Image ,Text,FlatList,ScrollView,SafeAreaView} from 'react-native';
import { Header} from 'react-native-elements';
import { TextInput } from 'react-native-paper';
import { Switch } from 'react-native-switch';
import CustomSwitch from '../CustomSwitch';
import SelectDropdown from 'react-native-select-dropdown'

export default function Dashboard() {
  const countries = ["Egypt", "Canada", "Australia", "Ireland"]

  
  const listItems = [

  {
    id: 1,
    title: 'Location:New Industrial',
    count: '-2'
  },
  {
    id: 2,
    title: 'Location:New Industrial: Ahmed Bin Ali Stadium',
    count:'1'
  },
  {
    id: 3,
    title: 'Location:New Industrial: Al Bayt Stadium',
    count:'1'
  },
  {
    id: 4,
    title: 'Location:New Industrial : Al Janoub Stadium',
    count:'0'
  },
  {
    id: 5,
    title: 'Location:New Industrial : Al Thumama Stadium',
    count:'0'
  },
  {
    id: 6,
    title: 'Location:New Industrial : Education City Stadium',
    count:'0'
  },
  {
    id: 7,
    title: 'Location:New Industrial : Khalifa International Squash and Tennis Federation',
    count:'0',
  },
  {
    id: 8,
    title: 'Location:New Industrial : Khalifa International Stadium',
    count:'0',
  },
  {
    id: 9,
    title: 'Location:New Industrial : Lusail City Stadium',
    count:'0',
  },
  {
    id: 10,
    title: 'Location:New Industrial : Stadium 974',
    count:'0'
  },
  {
    id: 11,
    title: 'Location:West Bay',
    count:'0'
  },
  
 
];
const ItemDivider = () => {
  return (
    <View
      style={{
        height: 1,
        width: "100%",
        backgroundColor: "#607D8B",
      }}
    />
  );
}

const onSelectSwitch = index => {
};

const [isEnable, setIsEnable] = useState(true);

const PrintItem = ({ title,count }) => (
  <View style={styles.description}>
    <Text style={{ fontSize: 16, color: 'black' }}>{title}</Text>
    <Text style={{ fontSize: 15, color: 'black' }}>{count}</Text>
  </View>
);
  return (
    <ScrollView>
    <View style={styles.container}>
          <Header
            backgroundColor="#cb3c42"
            height="20%"
            placement="left"
            leftComponent={{
              icon: 'home',
              color: '#dff',
              iconStyle: { color: '#fff' },
            }}
          
            centerComponent={{ text: 'Inventory Transfer', style: { color: '#fff',fontSize: 20 ,marginLeft:80} }}
            rightComponent={{
              icon: 'logout',
              color: '#dff',
              iconStyle: { color: '#fff' },
            }}
          />

          <View style={styles.SquareShapeView}>
            <Text style={styles.description}>Fishing - Filament Tape,{'\n'}50mm x 50m</Text>
            <Text style={styles.description1}> Item </Text>
            <Text style={styles.description2}>FI-ADH1525-001</Text>
            <Text style={styles.description1}> UOM</Text>
            <Text style={styles.description2}>perRL(50m) </Text>
            <Text style={styles.description1}> Quantity on Hand</Text>
            <Text style={styles.description2}>0</Text>

        

                    <Image
                          source={require('../components/assets/car.jpg')}
                          style = {{ width: 200, height: 320 ,marginLeft:180,marginTop:-250}}
                          
                        />

          </View>

          <ScrollView>
          <View style={styles.SquareShapeView1}>
           
                <FlatList
                  data={listItems}
                  renderItem={({ item }) => <PrintItem title={item.title} count={item.count}/>}
                  keyExtractor={(item) => item.id.toString()}
                  ItemSeparatorComponent={ItemDivider}
                />
          </View>
          </ScrollView>

          <View style={styles.SquareShapeView1}>

          <CustomSwitch
          selectionMode={1}
          roundCorner={true}
          option1={'From'}
          option2={'To'}
          onSelectSwitch={onSelectSwitch}
          selectionColor={'maroon'}
        />

            <Text style={{marginTop:30, fontSize:16,marginLeft:50}}> Received</Text>
            <TextInput label="0" editable={false} selectTextOnFocus={false} style={{width:100,height:20 ,marginLeft:200, marginTop:-30,  borderColor: 'black', borderWidth: 1}} />

            <SelectDropdown    
            dropdownIconPosition ="right"

            defaultButtonText="Location"
                    data={countries}
                    onSelect={(selectedItem, index) => {
                      console.log(selectedItem, index)
                    }}
                    buttonTextAfterSelection={(selectedItem, index) => {
                        return selectedItem
                    }}
                    rowTextForSelection={(item, index) => {
                   
                      return item
                    }}
                    
            />
</View>


  </View>
  </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
      flex:1,
      backgroundColor: "#fff"
  },
  SquareShapeView: {
 
    width: 390,
    height: 350,
    backgroundColor: '#fff',
    marginLeft: 10,
    marginRight: 10,
    shadowColor: '#52006A',  
    elevation: 20,  
    marginTop:-15
   },

   SquareShapeView1: {
 
    width: 390,
    height: 350,
    backgroundColor: '#fff',
    marginLeft: 10,
    marginRight: 10,
    shadowColor: '#52006A',  
    elevation: 20,  
    marginTop:10
   },
 
  description: {
      marginTop: 20,
      marginLeft:15,
      fontSize: 15,
      marginBottom:5
  },
  description1: {
    marginTop: 15,
    marginLeft:15,
    fontSize: 15,
    color:"grey"
},
description2: {
  marginTop: 10,
  marginLeft:19,
  fontSize: 18,
  color:'#cb3c42'
},
  button_style: {
      marginLeft: "10%",
      position: 'absolute',
      width: '80%',
      bottom: 50,
  }
})
