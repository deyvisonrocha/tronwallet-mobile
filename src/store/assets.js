import Realm from 'realm'

const AssetsSchema = {
  name: 'Asset',
  primaryKey: 'id',
  properties: {
    price: 'int',
    issued: 'int',
    issuedPercentage: 'float?',
    available: 'int',
    availableSupply: 'int',
    remaining: 'int',
    remainingPercentage: 'float?',
    percentage: 'float?',
    frozen: 'float?',
    frozenPercentage: 'float?',
    id: 'string',
    block: 'int',
    transaction: 'string',
    ownerAddress: 'string',
    name: 'string',
    abbr: 'string',
    totalSupply: 'int',
    trxNum: 'int',
    num: 'int',
    startTime: 'int',
    endTime: 'int',
    voteScore: 'int',
    description: 'string',
    url: 'string',
    dateCreated: 'int'
  }
}

export default new Realm({
  path: 'Realm.assets',
  schema: [AssetsSchema],
  schemaVersion: 4
})
