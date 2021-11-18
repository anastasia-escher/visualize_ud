import {GETDATA, RESET} from "./actions";

export const data = (state = [], action) => {

    const {type, payload} = action;

    switch (type) {
        case GETDATA : {
            const { text } = payload;
            let textList = [];
            if (text.includes('\t\t\t\t\t\t\t\t\t\t\n')) {
                textList = text.split('\t\t\t\t\t\t\t\t\t\t\n')
            } else if (text.includes('\t\t\t\t\t\t\t\t\t\n')) {
                textList = text.split('\t\t\t\t\t\t\t\t\t\n')
            } else if (text.includes('#')) {
                 textList = text.split('\t\t\t\t\t\t\t\t\t\n')
            } else {
                return state
            }

            textList = textList.filter(text => text!== "")
            let dataNew = [];
            for (let sent of textList) {
                let sentList = [];
                let comment = '_'
                let tokensList = sent.split('\n')
                if (tokensList[tokensList.length - 1].startsWith('#')) {
                    comment = tokensList[tokensList.length -1]
                    tokensList = tokensList.slice(0, -1)
                }
                for (let token of tokensList) {
                    let tokenSplit = token.split('\t')
                    let tokenObj = {
                        numberInSent: tokenSplit[0],
                        token: tokenSplit[1],
                        lemma: tokenSplit[2],
                        annot1: tokenSplit[3],
                        annot2: tokenSplit[4],
                        annot3: tokensList[5],
                        numberOfParent: tokenSplit[6],
                        ud: tokenSplit[7],
                        dep: tokenSplit[8],
                        trans: tokenSplit[9]}
                    sentList.push(tokenObj)
                }
                sentList.push(comment)
                dataNew.push(sentList)

            }

            return state.concat(dataNew);
        } case RESET : {
            return []
        }

        default:
            return state

    }
}

const errorMSG = (state = '', action) => {


}