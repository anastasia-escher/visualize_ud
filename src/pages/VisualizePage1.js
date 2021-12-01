import * as React from 'react';
import Container from '@mui/material/Container';
import {connect} from "react-redux";
import Stack from '@mui/material/Stack';
import {Box, Typography} from "@mui/material";
import Visualize from "../components/Visualize";
import {Button} from "@mui/material";
import {useState} from "react";
import TextareaAutosize from '@mui/material/TextareaAutosize';
import {getData, reset} from "../components/actions";
import {getDataList, getStatistics, getUDsAndLemmata} from "../selectors";
import Alert from '@mui/material/Alert';
import html2canvas from "html2canvas";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import CSVReport from "../components/CSVReport";
import ChartWrapper from "../components/ChartWrapper";





function VisualizePage1({ data, onSubmitData, onreset}) {


    const [raw, setRaw] = useState("1\ti\ti\tpronoun\t_\t_\t2\tnsubj\t_\t_\n" +
        "2\tam\tbe\tverb\t_\t_\t0\troot\t_\t_\n" +
        "3\tan\ta\tarticle\t_\t_\t4\tdet\t_\t_\n" +
        "4\texample\texample\tnoun\t_\t_\t2\tobl\tpred\t_\n" +
        "# a comment or a translation could be written here\t\t\t\t\t\t\t\t\t\n" +
        "\t\t\t\t\t\t\t\t\t\n" +
        "1\ttry\ttry\tverb\t_\t_\t3\taux\t_\t_\n" +
        "2\tto\tto\tpreposition\t_\t_\t3\tfixed\tinf\t_\n" +
        "3\tsubmit\tsubmit\tverb\t_\t_\t0\troot\t_\t_\n" +
        "4\tme\ti\tpronoun\t_\t_\t3\tobj\t_\t_\n" +
        "# a comment or a translation could be written here\t\t\t\t\t\t\t\t\t\n" +
        "\t\t\t\t\t\t\t\t\t\n" +
        "1\tyou\tyou\tpronoun\t_\t_\t3\tnsubj\t_\t_\n" +
        "2\tcan\tcan\tverb\t_\t_\t3\taux\t_\t_\n" +
        "3\tsubmit\tsubmit\tverb\t_\t_\t0\troot\t_\t_\n" +
        "4\tseveral\tseveral\tadjective\t_\t_\t3\tamod\t_\t_\n" +
        "5\tsentences\tsentence\tnoun\t_\t_\t3\tobj\t_\t_\n" +
        "# a comment or a translation could be written here\t\t\t\t\t\t\t\t\t\n" +
        "\t\t\t\t\t\t\t\t\t\n" +
        "1\tjust\tjust\tadverb\t_\t_\t2\tadvmod\t_\t_\n" +
        "2\tleave\tleave\tverb\t_\t_\t0\troot\t_\t_\n" +
        "3\tan\ta\tarticle\t_\t_\t4\tdet\t_\t_\n" +
        "4\tempty \tempty\tadjective\t_\t_\t5\tamod\t_\t_\n" +
        "5\tline\tline\tnoun\t_\t_\t2\tobj\t_\t_\n" +
        "6\tbetween\tbetween\tpreposition\t_\t_\t7\tcase\t_\t_\n" +
        "7\tthem\tthem\tpronoun\t_\t_\t2\tobl\t_\t_\n" +
        "# a comment or a translation could be written here\t\t\t\t\t\t\t\t\t\n");



    const [errorMsg, setErrorMsg] = useState("");
    const [color, setColor] = useState("#BB4A4A");
    const [strWidth, setStrWidth] = useState(1);
    const [lineStyle, setLineStyle] = useState('curve');
    const [dash, setDash] = useState('')
    const [endPoint, setEndPoint] = useState(true)


 const handleChangeColor = (event) => {
    setColor(event.target.value);
  };

  const handleChangeWidth = (event) => {
    setStrWidth(event.target.value);
  };

   const handleChangeLine = (event) => {
    setLineStyle(event.target.value);
  };

      const handleChangeDash = (event) => {
          event.target.value === 'no' ?  setDash("") : setDash(event.target.value);

  };

            const handleChangeEndPoint = (event) => {
           setEndPoint(event.target.value);

  };

function refreshPage(){
    onreset();
    setErrorMsg('')
    window.location.reload();
}

    const capture = (e) => {
    e.target.style.visibility = 'hidden';

       let node = e.target.parentNode.id;
   html2canvas(document.getElementById(node)).then(function(canvas) {

   let link = document.createElement('a');
 link.download = 'tree.png';
 link.href = canvas.toDataURL()
  link.click();
 e.target.style.visibility = 'visible';
 });

  }


    const handleSubmit = (e) => {
        e.preventDefault()
           let lines = raw.trim().split('\n');
            let firstLine = lines[0].trim();
            let firstLineArray = firstLine.split('\t');
            if (firstLineArray.length === 10 ) {
                onSubmitData(raw);

            } else {
                setErrorMsg("Wrong data format. Please check the data preparation section.")
            }
        }




  return (
      <>
    <Container maxWidth="md">

      <br/>
        <br/>
        <br/>
        <br/>

        <Stack direction="column" spacing={2} justifyContent="flex-start">
              <Typography variant="h5" color="textSecondary" paragraph={true}>
                  The form accepts text in ConLL-U format.
                Delete the example sentences and paste your data here. Make sure to copy from a file with 10 tab-separated columns. <br/>

        </Typography>

                     <Typography variant="h5" color="textSecondary" paragraph={true}>
        Check data preparation section for details and data examples.
        </Typography>
            <form>
                <Stack direction="column" spacing={3} justifyContent="flex-start">
                <TextareaAutosize
                      aria-label="minimum height"
                      minRows={20}
                      maxRows={20}
                      style={{ width: 800 }}
                      value={raw}
                      onChange={(e)=> setRaw(e.target.value)}
                    />
        <Box style={{display: "flex", flexDirection: 'row' }}>
        <FormControl sx={{ m: 1, maxWidth: 100}}>
                     <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={color}
          label="color"
          onChange={handleChangeColor}>
          <MenuItem value={"#BB4A4A"}>Red</MenuItem>
          <MenuItem value={"#0057e7"}>Blue</MenuItem>
          <MenuItem value={"#008744"}>Green</MenuItem>
        </Select>
            <FormHelperText>Color</FormHelperText>
        </FormControl>

                        <FormControl sx={{ m: 1, maxWidth: 100 }}>
                     <Select

          id="demo-simple-select-helper-width"
          value={strWidth}
          onChange={handleChangeWidth}>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
        </Select>
            <FormHelperText>Stroke width</FormHelperText>
        </FormControl>

            <FormControl sx={{ m: 1, maxWidth: 100 }}>
                <Select
          id="demo-simple-select-helper-line"
          value={lineStyle}
          onChange={handleChangeLine}>
          <MenuItem value={'curve'}>curve</MenuItem>
          <MenuItem value={'straight'}>straight</MenuItem>
                         <MenuItem value={'angle'}>angle</MenuItem>
        </Select>
            <FormHelperText>Line style</FormHelperText>
        </FormControl>

                     <FormControl sx={{ m: 1, maxWidth: 100 }}>
                <Select
          id="demo-simple-select-helper-dash"
          value={dash}
          onChange={handleChangeDash}>
          <MenuItem value={'no'}>no</MenuItem>
          <MenuItem value={'5,5'}>yes</MenuItem>

        </Select>
            <FormHelperText>Dash</FormHelperText>
        </FormControl>

            <FormControl sx={{ m: 1, maxWidth: 100 }}>
                <Select
          id="demo-simple-select-helper-dash"
          value={endPoint}
          onChange={handleChangeEndPoint}>
                    <MenuItem value={true}>yes</MenuItem>
          <MenuItem value={false}>no</MenuItem>
        </Select>
            <FormHelperText>End Marker</FormHelperText>
        </FormControl>

        </Box>
<Box style={{display: "flex", flexDirection: 'row' }}>
                <Button variant="text"
                        onClick={(e) => handleSubmit(e)}
                sx={{
            color: '#BB4A4A',
                    width: "50px",
                    fontSize: "16px"

      }}>SUBMIT</Button>
                    <Button type="button" onClick={()=>refreshPage()}
                            sx={{
                    color: '#BB4A4A',
                    width: "50px",
                    fontSize: "16px",
                        marginLeft: "70px"
      }}>RESET</Button>


     </Box>
                     </Stack>
                </form>
      </Stack>
        <CSVReport/>
         <ChartWrapper  />
        </Container>

          {errorMsg ? <Stack sx={{ mx: "auto", width: "40%" }}spacing={2}>
      <Alert severity="error">{errorMsg}</Alert></Stack>:
          data.map((item, ind) => (
                <div key={ind} id={ind}>
                <Visualize rootData={item.rootData}
                           dataLayers={item.dataLayers}
                           comment={item.comment}
                           plain={item.plain}
                            index={ind}
                           color={color}
                           width={strWidth}
                           line={lineStyle}
                           dash={dash}
                           endMarker={endPoint}

                />
                    <Button
                        sx={{
                            display: 'block',
                             color: '#BB4A4A',
                                mx: "auto",
                                width: "200px"}}
                        onClick={(e) => capture(e)}>Download PNG</Button>

                </div>
          ))}


        <Container maxWidth="md">
        <ChartWrapper  />
            < /Container>


      </>
  );
}

const mapStateToProps = state => ({
    data: getDataList(state),
    stats: getStatistics(state),
    UDsAndLemmata: getUDsAndLemmata(state),
});

const mapDispatchToProps = dispatch => ({
    onSubmitData: (raw) => dispatch(getData(raw)),
    onreset: () => dispatch(reset())

});



export default connect(mapStateToProps, mapDispatchToProps)(VisualizePage1);