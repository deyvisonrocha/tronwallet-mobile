import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Colors } from './DesignSystem'
import * as Utils from './Utils'
import ButtonGradient from '../components/ButtonGradient'

const CardRow = ({ label, value }) => (
  <View style={styles.cardRow}>
    <Utils.Text size='xsmall'>{label}:</Utils.Text>
    <Utils.Text size='xsmall' style={{ paddingLeft: '2%' }}>{value}</Utils.Text>
  </View>
)

class Card extends Component {
  constructor (props) {
    super()
  }

  renderInput = () => {
    const { isEditable } = this.props

    if (isEditable) {
      return (
        <View style={styles.inputWrapper}>
          <Utils.Text size='xsmall' secondary>FREEZE AMOUNT</Utils.Text>
          <Utils.FormInput
            innerRef={ref => { this.freezeAmount = ref }}
            underlineColorAndroid='transparent'
            keyboardType='numeric'
            marginBottom={10}
            autoCapitalize='none'
            autoCorrect={false}
            onChangeText={() => {}}
            onSubmitEditing={() => {}}
            returnKeyType='send'
            style={{
              color: Colors.secondaryText
            }}
          />
        </View>
      )
    }

    return null
  }

  render () {
    const { buttonLabel } = this.props
    return (
      <View style={styles.container}>
        {this.renderInput()}
        <CardRow label='New Frozen TRX' value='2,000' />
        <CardRow label='New Votes' value='2,000' />
        <CardRow label='New BandWith' value='4,000,000,000' />
        <View style={styles.buttonWrapper}>
          <ButtonGradient text={buttonLabel} onPress={() => {}} size='small' />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: Colors.darkerBackground,
    borderRadius: 5,
    marginTop: '3%',
    padding: 24
  },
  buttonWrapper: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    marginTop: '5%'
  },
  inputWrapper: {
    backgroundColor: Colors.darkerBackground,
    width: '100%',
    borderRadius: 5
  },
  cardRow: {
    flexDirection: 'row',
    paddingVertical: '2%'
  }
})

export default Card
