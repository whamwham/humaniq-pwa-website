import {numberFormat} from 'utils'

export default (arr) => {
  return arr.map(({info, amount}) =>({
    txHash: info.hash,
    block: null,
    from: info.senderAddress,
    to: info.receiverAddress,
    time: info.timestampIso,
    usdAmount: numberFormat(+ amount.usd, 2),
    hmqAmount: numberFormat(+ amount.hmq, 2),
    status: info.status
  }))
}