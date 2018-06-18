import React, { Component } from 'react'
import { SafeAreaView, FlatList, StyleSheet, RefreshControl, Image } from 'react-native'

import * as Utils from '../../components/Utils'
import { Spacing, Colors } from '../../components/DesignSystem'
import Client from '../../services/client'
import TransferCard from './Transfer'
import ParticipateCard from './Participate'
import VoteCard from './Vote'
import FreezeCard from './Freeze'
import Default from './Default'

import transactionsStore from '../../store/transactions'

// const firstLetterCapitalize = str => str.charAt(0).toUpperCase() + str.slice(1)

class TransactionsScene extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: (
        <SafeAreaView style={{ backgroundColor: 'black' }}>
          <Utils.Header>
            <Utils.TitleWrapper>
              <Utils.Title>My Transactions</Utils.Title>
            </Utils.TitleWrapper>
          </Utils.Header>
        </SafeAreaView>
      )
    }
  }

  state = {
    refreshing: true,
    transactions: transactionsStore.objects('Transaction')
  }

  componentDidMount () {
    this.loadData()
  }

  loadData = async () => {
    this.setState({ refreshing: true })
    const transactions = await Client.getTransactionList()
    transactionsStore.write(() => transactions.map(item => transactionsStore.create('Transaction', item, true)))
    this.setState({ refreshing: false, transactions: transactionsStore.objects('Transaction') })
  }

  renderCard = item => {
    switch (item.type) {
      case 'Transfer': return <TransferCard item={item} />
      case 'Freeze': return <FreezeCard item={item} />
      case 'Vote': return <VoteCard item={item} />
      case 'Participate': return <ParticipateCard item={item} />
      default: return <Default item={item} />
    }
  }

  renderListEmptyComponent = () => <Utils.Container />

  render () {
    const { refreshing } = this.state
    const transactions = transactionsStore.objects('Transaction').map(item => Object.assign({}, item))

    if (transactions.length === 0) {
      return (
        <Utils.View style={{ backgroundColor: Colors.background }} flex={1} justify='center' align='center'>
          <Image
            source={require('../../assets/empty.png')}
            resizeMode='contain'
            style={{ width: '60%' }}
          />
          <Utils.VerticalSpacer size='medium' />
          <Utils.Text secondary font='light' size='small'>No transactions found.</Utils.Text>
        </Utils.View>
      )
    }

    return (
      <Utils.Container>
        <FlatList
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={this.loadData}
            />
          }
          contentContainerStyle={styles.list}
          data={transactions}
          keyExtractor={item => item.id}
          renderItem={({ item }) => this.renderCard(item)}
          ItemSeparatorComponent={() => <Utils.VerticalSpacer size='medium' />}
          ListEmptyComponent={this.renderListEmptyComponent}
        />
      </Utils.Container>
    )
  }
}

const styles = StyleSheet.create({
  list: {
    padding: Spacing.medium
  }
})
export default TransactionsScene