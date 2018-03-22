## react-native-tab
A tab view component for React Native,react-native-tab using react-native,support android and ios.

### Getting started

The easiest way to get started is to check out the example:

```
cd example/Mtab
npm install or yarn
react-native start or yarn start
```
### Installation

First you need to install react-native-mtab:

```javascript
npm install react-native-mtab --save
```
### Component props

| name | type | default value | description |
|----|----|----|----|
| data | object | data | You need to render the data |
| tabSelected | number | 0 | Select a number of tab by default |
| nSelected | number | 1 | Select the two level menu item under tab by default |
| click | function | this.onPress | Click content |


### Usage

```javascript
import Mtab from 'react-native-mtab';
//mock data
const data = {
  "tab1": {
    "item1": ["item1-1"],
    "item2": [
      "item2-1",
      "item2-2",
      "item2-3"
    ],
    "item3": [
      "item3-1",
      "item3-2",
      "item3-3",
      "item3-4"
    ]
  },
  "tab2":{
    "list1": ["list1-1"],
    "list2": ["list2-1"],
    "list3": ["list3-1", "list3-2",]
  }
};
export default class App extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{marginTop:25}}>
        <Mtab data={data} tabSelected={0} nSelected={1} click={this.onPress}/>
      </View>
    );
  }
  
  onPress(val) {
    alert(val);
  }
}
```
### Examples
![image](https://github.com/territoryfan/react-native-tab/screenshots/Mtab.gif)
