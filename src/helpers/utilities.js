export default {
    trimSentence (sentence, words) {
      let trimmed = sentence
      let resultArray = sentence.split(' ')
      if (resultArray.length > words) {
        resultArray = resultArray.slice(0, words)
        trimmed = resultArray.join(' ') + '…'
      }
      return trimmed
    },
  
    trim (text) {
      return text.replace(/^\s+|\s+$/g, '')
    },
  
    commaNumber (val, decimals) {
      // decimals = number of decimal points - defaul is 2
      let dec = typeof decimals === 'undefined' ? 2 : decimals
      return isNaN(val) || typeof val !== 'number' ? val : val.toFixed(dec).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
  
    currencySymbol (val) {
      let symbol = ''
      switch (val) {
        case 'GBP':
          symbol = '£'
          break
        case 'USD':
          symbol = '$'
          break
        case 'EURO':
          symbol = '€'
          break
        case 'BTC':
          symbol = '₿'
          break
        case 'SATS':
          symbol = '§'
          break
        default:
          symbol = ''
      }
      return symbol
    }
  
  }