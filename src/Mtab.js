import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity
} from 'react-native';
const prefixType = '_type_';
const prefixStyle = '_style_';
//default background color
const defaultBackgroundColor = {backgroundColor:'#fff'};
class Mtab extends Component {
  constructor(props) {
    super(props);
    const data = this.props.data;
    const nSelected = this.props.nSelected;
    const tabSelected = this.props.tabSelected;
    const obj = {};
    let kIndex = 0;
    for(let k in data){
      const childData = data[k];
      let cIndex = 0;
      for(let c in childData){
        const type = prefixType + k + '_' + c;
        const style = prefixStyle + k + '_' + c;
        obj[type] = false;
        obj[style] = {};
        //set default 
        if(nSelected === cIndex){
          obj[type] = true;
          obj[style] = defaultBackgroundColor;
        }
        cIndex++;
      }
      kIndex++;
    }
    obj.tabSelected = tabSelected;
    obj.nSelected = nSelected;
    this.state=obj;
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          {this.renderlHeader()}
        </View>
        <View style={styles.menuList}>
          <ScrollView style={styles.left_pannel}>
            {this.renderLeft()}
          </ScrollView>
          <ScrollView style={styles.right_pannel}>
            {this.renderRight()}
          </ScrollView>
        </View>
      </View>
    );
  }
  renderlHeader() {
    const data = this.props.data;
    const tabSelected = this.state.tabSelected;
    const header = [];
    let tabIndex = 0;
    for(let i in data){
      let tabStyle = null;
      tabIndex === tabSelected ? tabStyle=[styles.text_tab, styles.active_blue] : tabStyle = [styles.text_tab];
      header.push(
        <TouchableOpacity style={[styles.header_text]}
                          onPress={this.clickTab.bind(this, i)}
                          key={i}>
          <Text style={tabStyle}>{i}</Text>
        </TouchableOpacity>
      );
      tabIndex ++;
    }
    return header;
  }
  renderLeft() {
    const data = this.props.data;
    const tabSelected = this.state.tabSelected;
    const leftPannel = [];
    let index = 0;
    for(let i in data){
      if(index === tabSelected){
        for(let k in data[i]){
          const style = this.state[prefixStyle + i + '_' + k];
          leftPannel.push(
            <Text onPress={this.clickLeft.bind(this, i, k)}
                  key={k}
                  style={[styles.left_row, style]}>{k}</Text>);
        }
        break;
      }
      index ++;
    }
    return leftPannel;
  }
  renderRight() {
    const data = this.props.data;
    const tabSelected = this.state.tabSelected;
    const nSelected = this.state.nSelected;
    let index = 0;
    const rightPannel = [];
    for(let i in data){
      if(tabSelected === index ){
        for(let k in data[i]){
          if(this.state[prefixType + i + '_' + k]){
            for(let j in data[i][k]){
              rightPannel.push(
                <Text 
                  onPress={this.props.click.bind(this, data[i][k][j])} 
                  key={j}
                  style={styles.left_row}>{data[i][k][j]}</Text>);
            }
            break;
          }
        }
      }
      index ++;
    }
    return rightPannel;
  }
  clickLeft(tabIndex, nIndex) {
    let obj = {};
    for(let k in this.state){
      if(k.indexOf(prefixType) > -1){
        obj[k] = false;
        this.setState(obj);
      }
      if(k.indexOf(prefixStyle) > -1){
        obj[k] = {};
        this.setState(obj);
      }
    }
    obj[prefixType + tabIndex + '_' + nIndex] = true;
    obj[prefixStyle + tabIndex + '_' + nIndex] = defaultBackgroundColor;
    this.setState(obj);
  }
  clickTab(title) {
    const data = this.props.data;
    let index = 0;
    for(let i in data){
      if(i === title){
        this.setState({
          tabSelected: index,
        });
        let obj = {};
        let n = 0;
        for(let k in data[i]){
          if(n !== 0){
            obj[prefixType + i + '_' + k] = false;
            obj[prefixStyle + i + '_' + k] = {};
          }else{
            obj[prefixType + i + '_' + k] = true;
            obj[prefixStyle + i + '_' + k] = defaultBackgroundColor;
          }
          n ++;
        }
        this.setState(obj);
      }
      index ++;
    }
  }
}
const styles = StyleSheet.create({
  container: {
    height:240,
    borderTopWidth:1,
    borderColor:'#c8c7cc'
  },
  header: {
    flexDirection:"row",
    height:40,
    borderBottomWidth:1,
    borderColor:'#c8c7cc',
    backgroundColor:'#efeff4'
  },
  header_text: {
    flex:1,
    alignItems:"center",
    justifyContent: "center",
  },
  menuList: {
    flexDirection: "row",
    flex:1,
  },
  left_pannel: {
    flex:1,
    backgroundColor:"#efeff4",
  },
  left_row: {
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    height:40,
    lineHeight:40,
    fontSize:14,
    color:'#000',
    paddingLeft: 15,    
  },
  right_pannel: {
    flex:1,
    marginLeft:15,
  },
  text_tab:{
    color: "#000",
  },
  active_blue:{
    color: '#007aff'
  },
});
export default Mtab;





