import { StyleSheet, Text, View,ScrollView,TextInput } from 'react-native'
import React,{useState,useEffect} from 'react'
import Country from './Country'

const Countries = () => {
    const [countries, setCountries] = useState([])
    const [searched,setSearched]=useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all').then(res => res.json()).then(data => {
            setSearched(data)
            setCountries(data)
        })
    }, [])
    const handleSearch = text => {
        const filtered = countries.filter(country => {
            country.name.common.includes(text)
        })
        setSearched(filtered)
    }
  return (
    <View>
          <Text>Countries</Text>

          <TextInput
        style={styles.input}
        onChangeText={handleSearch}
        placeholder="Search the name of the country"
        keyboardType="default"
      />

          <ScrollView>
              {searched.map(country => <Country
                country={country}
              ></Country>)}
          </ScrollView>
    </View>
  )
}

export default Countries

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });