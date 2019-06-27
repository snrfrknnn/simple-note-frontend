import React, { Component } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, StatusBar, ScrollView, FlatList, Dimensions} from 'react-native';
import { Fab, View, Text, Container, Header, Left, Body, Right, Title, Icon, Button, Thumbnail, Content} from 'native-base';

class Home extends Component {

toNote = () => {
  const { navigation } = this.props;
  navigation.navigate('Note');
}

toggleDrawer = () => {
  const { navigation } = this.props;
  navigation.toggleDrawer();
}

render() {
    return (
        <Container>
          
          <Header style={styles.header} androidStatusBarColor='#fff' iosBarStyle='dark-content'>
            <View>
              <TouchableOpacity transparent onPress={this.toggleDrawer}>
                <Thumbnail small source={{ uri: 'https://cdn.moneysmart.id/wp-content/uploads/2019/03/08124226/Untitled-design-2.jpeg' }} />
              </TouchableOpacity>
            </View>
            <View>
              <Title style={styles.title}>NOTE APP</Title>
            </View>
            <View>
              <TouchableOpacity transparent>
                <Icon name='funnel' />  
              </TouchableOpacity>
            </View>
          </Header>

          <TouchableOpacity style={styles.search}>
            <TextInput style={styles.searchBar} placeholder="Search..." />
          </TouchableOpacity>

          <FlatList
            data={[{
              date: '27 Jul',
              title: 'Lifecycle',
              category: 'Work',
              note: 'Component Did Mount, Component Will Unmount lialkhs akshakjs ajshkan ajshalk kjhskjfh kjshfkjsd kjsdh jdhfjslkjhiuwf lakjsfhkjbsd sdhkljsdfkjhaf ksjdchkjdhkahdj kajsdfjbdc lakjdckjnkxlkhskjdfbbak lakfksdb'
            }, {
              date: '28 Jul',
              title: 'Lifecycle',
              category: 'Work',
              note: 'Component Did Mount, Component Will Unmount'
            }, {
              date: '28 Jul',
              title: 'Lifecycle',
              category: 'Work',
              note: 'Component Did Mount, Component Will Unmount'
            }]}
            renderItem={({item}) =>
              <View style={styles.content}> 
              <TouchableOpacity style={styles.card} onPress={this.toNote}>
                <Text style={styles.cardDate}>{item.date}</Text>
                <Text numberOfLines={1} style={styles.cardTitle}>{item.title}</Text>
                <Text numberOfLines={1} style={styles.cardCategory}>{item.category}</Text>
                <Text numberOfLines={4} style={styles.cardContent}>{item.note}</Text>
              </TouchableOpacity>
              </View>
            }
            numColumns={2}
          />

          <Fab style={styles.fab}>
            <Icon style={styles.fabIcon} name='add' />
          </Fab>

        </Container>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    // flexDirection: 'row',
    // flex: 1,
    // flexWrap: 'wrap',
    marginLeft: 24,
    // marginRight: 25,
    justifyContent: 'space-between'
  },
  header: {
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    fontFamily: 'Open Sans',
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    alignSelf: 'center'
  },
  search: {
    height: 45,
    margin: 25,
    borderRadius: 100,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  searchBar: {
    borderRadius: 100,
    paddingLeft: 25,
    paddingRight: 25,
    borderBottomColor: 'transparent',
    fontFamily: 'Open Sans',
    fontSize: 14
  },
  card: {
    width: 143,
    height: 143,
    borderRadius: 10,
    backgroundColor: '#2FC2DF',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
    padding: 10,
    marginBottom: 25,
    // marginRight: 25
  },
  cardDate: {
    color: '#fff',
    textAlign: 'right',
    fontSize: 12
  },
  cardCategory: {
    color: '#fff'
  },  
  cardTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 17
  },
  cardContent: {
    color: '#fff'
  },
  fab: { backgroundColor: '#fff' },
  fabIcon: { color: '#000' }
});

export default Home;