
import React, { useRef, useState, useEffect } from 'react';
import D3Chart from './D3Chart';
import D3Chart1 from './D3Chart1';
import {connect} from "react-redux";
import {getUDsAndLemmata} from "../selectors";
import Stack from "@mui/material/Stack";
import {Box, Button} from "@mui/material";
import {CSVLink} from "react-csv";

const ChartWrapper = ({UDsAndLemmata}) => {
	const chartArea = useRef(null)
	const chartArea1 = useRef(null)
	const [chart, setChart] = useState(null)
	const [chart1, setChart1] = useState(null)
	const [showUD, setShowUD] = useState(false)
	const [showLemmata, setShowLemmata] = useState(false)

	useEffect(() => {
		if (!chart && UDsAndLemmata[0].length > 0) {

			setChart(new D3Chart(chartArea.current, UDsAndLemmata))
		}
	}, [chart, UDsAndLemmata])

		useEffect(() => {
		if (!chart1 && UDsAndLemmata[0].length > 0) {

			setChart1(new D3Chart1(chartArea1.current, UDsAndLemmata))
		}
	}, [chart1, UDsAndLemmata])



	return (
		<>
			<Stack direction="column" spacing={1} justifyContent="center">

            <Box style={{display: "flex", flexDirection: 'column', justifyContent:"center", alignItems: "center"}}  justifyContent="center">
                   {UDsAndLemmata && UDsAndLemmata[1].length > 0 && (
              <Button type="button"
                        variant="text"
                    sx={{
                    color: '#BB4A4A',
                    width: '50%',
                    fontSize: "16px",
                        mt: "20px"
                    }}
					  onClick={()=> setShowUD(true)}
                >
              Show UD frequency plot
                </Button>
                )}

				<div ref={chartArea} style={showUD ? {display: 'block'} : {display: 'none'}}> </div>

                {UDsAndLemmata && UDsAndLemmata[0].length > 0 && (
              <Button type="button"
                        variant="text"
                    sx={{
                    color: '#BB4A4A',
                    width: '50%',
                    fontSize: "16px",
                        mt: "20px"
                    }}

					  onClick={()=> setShowLemmata(true)}
                >
              Show lemmata frequency plot
                </Button>
                )}

				<div ref={chartArea1} style={showLemmata ? {display: 'block'} : {display: 'none'}}> </div>


            </Box>
         </Stack>



			</>
	)
}



const mapStateToProps = state => ({

    UDsAndLemmata: getUDsAndLemmata(state),
});

export default connect(mapStateToProps)(ChartWrapper);
