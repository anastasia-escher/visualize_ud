import {createSelector } from "reselect";

export const getDataList = state => {

    function getLayer(data, prevLayer) {
		let prevLayerParentNumbers = [];
		prevLayer.tokens.map(token => prevLayerParentNumbers.push(token.numberInSent));
		let layer = {tokens: [], children: []};
		for (let i = 0; i < data.length; i++) {
		if (prevLayerParentNumbers.includes(data[i].numberOfParent)) {
			layer.tokens.push(data[i])
			}
		}
		for (let i = 0; i < data.length; i++ ) {
		for (const token of layer.tokens) {
			if (data[i].numberOfParent === token.numberInSent ) {
				layer.children.push(data[i]);
				}
			}
		}
	return layer;
	}


    let allData = [];
    for (const sent of state.data){
        let sentence = {rootData:{tokens:[], children:[]}, dataLayers: [], comment:'', plain:''}
        let relevantData = sent;

        if (typeof sent[sent.length - 1] === "string" && sent[sent.length - 1].startsWith('#')) {
            sentence.comment = sent[sent.length - 1];
            relevantData = sent.slice(0, -1);
        }

        if (typeof relevantData[relevantData.length - 1] === "string") {
            sentence.plain = relevantData[relevantData.length - 1]
            relevantData = relevantData.slice(0, -1);
        }


        const rootItem = relevantData.filter(i => i.ud === 'root')[0];
        sentence.rootData.tokens.push(rootItem)

        for (const item of relevantData) {

            if (item.numberOfParent === rootItem.numberInSent) {
                sentence.rootData.children.push(item);
               }
           }
            let prevLayer = sentence.rootData;
            let newLayer = {}

            while (prevLayer.children.length > 0) {
                newLayer = getLayer(relevantData, prevLayer);
                sentence.dataLayers.push(newLayer);
                prevLayer = newLayer;
            }

        allData.push(sentence)
    }


    return allData;
};

export const getStatistics = state => {
     let allStat= {};
    for (const sent of state.data) {
        let relevantData = sent;


              if (typeof sent[sent.length - 1] === "string" && sent[sent.length - 1].startsWith('#')) {

            relevantData = sent.slice(0, -1);
        }

        if (typeof relevantData[relevantData.length - 1] === "string") {
            relevantData = relevantData.slice(0, -1);
        }


        for (let word of relevantData){

            if (word.lemma in allStat){
                if (word.ud in allStat[word.lemma]) {
                    allStat[word.lemma][word.ud] += 1;
                } else {
                    allStat[word.lemma][word.ud] = 1;
                }
            }
            else {
                allStat[word.lemma] = {};
                allStat[word.lemma][word.ud] = 1;
                }
            }
        }

    let statData = []
    for (const [k, v] of Object.entries(allStat)) {
        let item = {}
        item['lemma'] = k;
        for (const [key, value] of Object.entries(v)) {
            item[key] = value;
        }
        statData.push(item)

    }

    statData.sort(function (a, b) {
    if (a["lemma"] > b["lemma"]) {
        return 1;
    }
    if (b["lemma"] > a["lemma"]) {
        return -1;
    }
    return 0;
        });

    return statData;
}

export const getUDsAndLemmata = createSelector(
    getStatistics,
    (stats) => {
        let UDs = {}
        let lemmata = {}
        let UDsList = []
        let lemmataList = []
        for (const word of stats) {
            for (const [k, v] of Object.entries(word)) {
            if (k !== "lemma") {
                if (k in UDs) {
                    UDs[k] += v;
                } else {
                    UDs[k] = v;
                        }
                } else if (k === 'lemma') {
                    lemmata[v] = 0;
                    for (const [k1, v1] of Object.entries(word)) {
                        if (k1 !== "lemma") {
                            lemmata[v] += v1
                        }
                    }
                    }
            }
        }


        for (const [key, value] of Object.entries(UDs)) {
            let itemUD = {}
                itemUD.ud = key
                itemUD.n = value
                UDsList.push(itemUD)
            }

         for (const [key, value] of Object.entries(lemmata)) {
            let itemLemma = {}
                itemLemma.lemma = key
                itemLemma.n = value
                lemmataList.push(itemLemma)
            }

         return [UDsList, lemmataList]

    }
)