import React, { useState, useEffect, useMemo } from 'react'
import {
  View,
  Text,
  Button,
  FlatList,
  StyleSheet,
  TextInput,
} from 'react-native'

import { ApiResponse } from 'apisauce'
import { useNavigation } from '@react-navigation/native'

import { getChampions } from '../league_api/champions.api'

const HomeScreen = () => {
  const navigation = useNavigation()

  const [champions, setChampions] = useState([])
  const [searchText, setSearchText] = useState<string>('')

  useEffect(() => {
    getChampions().then((response: ApiResponse<any>) => {
      if (response.ok) {
        setChampions(response.data.data)
      }
    })
  }, [])

  const filteredKeysMemoized = useMemo(() => {
    const championKeys = Object.keys(champions)
    const filteredKeys = championKeys.filter((key) => {
      return key.toLowerCase().includes(searchText.toLowerCase())
    })
    return filteredKeys
  }, [champions, searchText])

  return (
    <View style={styles.container}>
      <TextInput
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
        placeholder="Search here"
      />
      <FlatList
        data={filteredKeysMemoized}
        renderItem={() => <Text>asdasd</Text>}
      />
      <Button
        title="Click here"
        onPress={() => {
          navigation.navigate('Home2')
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default HomeScreen
