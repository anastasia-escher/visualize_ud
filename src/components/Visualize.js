import * as React from 'react';
import {ArcherContainer, ArcherElement} from 'react-archer';
import {Typography} from "@mui/material";
import {Box} from "@mui/material";




const rootStyle = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "nowrap"
};
const rowStyle = {
  margin: "70px 2px",
  display: "flex",
  justifyContent: "center",
};
const boxStyle = {
  padding: "7px",
  border: "1px solid #ccc",
  borderRadius: "4px",
  fontSize: "12px",
  marginLeft: "16px",
  marginRight: "16px"
};
let tokenStyle = {
  fontSize: "12px",
  fontWeight: "bold",
    color: "#BB4A4A",
};

const labelStyle = {
  fontSize: "13px",
   marginTop: "-15px"
}



export default function Visualize(props) {

    let rootData = props.rootData;
    let dataLayers = props.dataLayers;
    let number = props.index + 1;

tokenStyle = {
  fontSize: "12px",
  fontWeight: "bold",
    color: props.color,
};

   function makeRootRelations(children) {
    let relations = []
    if (children.length > 0) {
        for (const child of children) {
        let item = {
            targetId: child.numberInSent,
                targetAnchor: "top",
                sourceAnchor: "bottom",
                label: (<div style={labelStyle} >{child.ud}</div>),
        }
        relations.push(item);
    }
    }
    return relations;
   }

   function makeChildRelation(child) {
       return {
           targetId: child.numberInSent,
           targetAnchor: "top",
           sourceAnchor: "bottom",
           label: (<div style={labelStyle}>{child.ud}</div>)
       };
   }



   function makeChildElement(token, relations=[]) {
    return( <div>

    <ArcherElement id={token.numberInSent}
    relations={relations}
    >
    <div style={boxStyle}> {token.numberInSent} - <span style={tokenStyle}>{token.token}</span><br/>
                             {token.annot1 !== '_' ? <>{token.annot1}</> : null}
							 {token.annot2 !== '_' ? <><br/>{token.annot2}</> : null}
                                {token.annot3 !== '_' ? <><br/>{token.annot3}</> : null}
							<br/> {token.numberOfParent}:{token.ud}</div>
    </ArcherElement>

        </div>
          )
   }

   function makeLayer(layer) {
    let layerItems = []
       for (const token of layer.tokens) {
        let tokenRelations = []
            if (layer.children){
                for (const child of layer.children) {
                    if (child.numberOfParent === token.numberInSent) {
                        let item = makeChildRelation(child)
                        tokenRelations.push(item)
                    }
                }
            }
            const childElement = makeChildElement(token, tokenRelations);
            layerItems.push(childElement);
       }
       return layerItems;
   }

  return (
    <div  >
        <Box sx={{ mx: "auto", width: 500 }}>

            {number? <Typography variant="h5" paragraph={true}>Sentence {number}:</Typography> : null}
            {props.plain ? <Typography  paragraph={true}>Plain text: <i>{props.plain}</i></Typography> : null}
            {props.comment ? <Typography  paragraph={true}>{props.comment}</Typography> : null}


        </Box>
      <ArcherContainer strokeColor={props.color}
                       strokeWidth={props.width}
                       lineStyle={props.line}
                       strokeDasharray={props.dash}
      endMarker={props.endMarker}
      >

          <br/>
        <div style={rootStyle}>
          <ArcherElement
            id="root"
            relations={makeRootRelations(rootData.children)}
                      >
            <div style={boxStyle}>{rootData.tokens[0].numberInSent} - <span style={tokenStyle}>{rootData.tokens[0].token}</span><br/>
									{rootData.tokens[0].annot1 !== '_' ? <>{rootData.tokens[0].annot1}</> : null}
                                    {rootData.tokens[0].annot2 !== '_' ? <><br/>{rootData.tokens[0].annot2}<br/></> : null}
                                    {rootData.tokens[0].annot3 !== '_' ? <>{rootData.tokens[0].annot3}</> : null}
									<br/> 0:{rootData.tokens[0].ud}</div>
          </ArcherElement>
        </div>
        {dataLayers.map((layer, index) => (
            <div style={rowStyle}  key={index} >
                {makeLayer(layer).map((i, k) => (<div  key={k}>
                    {i}
                    </div>))}
            </div>
        ) )}
      </ArcherContainer>


    </div>

  );
};


