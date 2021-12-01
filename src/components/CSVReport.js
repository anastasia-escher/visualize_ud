
import { CSVLink } from "react-csv";
import {connect} from "react-redux";
import {getDataList, getStatistics, getUDsAndLemmata} from "../selectors";
import {Box, Button} from "@mui/material";
import * as React from "react";
import Stack from '@mui/material/Stack';


function CSVReport({stats, UDsAndLemmata}) {

    let headersUDs = [{ label: "UD", key: "ud" },
                            { label: "n", key: "n" },];
    let headersLemmata = [{ label: "Lemma", key: "lemma" },
                            { label: "n", key: "n" },];
    let headersAll = [{ label: "Lemma", key: "lemma" },];

    for (const item of UDsAndLemmata[0]) {
        let newHeader = {label: item.ud, key: item.ud}
        headersAll.push(newHeader)

    }


    return(
         <Stack direction="column" spacing={2} justifyContent="center">
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
                ><CSVLink headers={headersLemmata} data={UDsAndLemmata[1]} filename="LemmataStats.csv" style={{textDecoration: 'none', color: '#BB4A4A',}}>
              Download lemmata frequency
                </CSVLink></Button>
                )}

                {UDsAndLemmata && UDsAndLemmata[0].length > 0 && (
              <Button type="button"
                        variant="text"
                    sx={{
                    color: '#BB4A4A',
                    width: '50%',
                    fontSize: "16px",
                        mt: "20px"
                    }}
                ><CSVLink headers={headersUDs} data={UDsAndLemmata[0]} filename="UDStats.csv" style={{textDecoration: 'none', color: '#BB4A4A',}}>
              Download UD frequency
                </CSVLink></Button>
                )}


                                {stats && stats.length > 0 && (
              <Button type="button"
                        variant="text"
                    sx={{
                    color: '#BB4A4A',
                    width: '50%',
                    fontSize: "16px",
                        mt: "20px"
                    }}
                ><CSVLink headers={headersAll} data={stats} filename="Stats.csv" style={{textDecoration: 'none', color: '#BB4A4A',}}>
              Download Lemma/UD stats
                </CSVLink></Button>
                )}
            </Box>
         </Stack>
            )

}

const mapStateToProps = state => ({
    data: getDataList(state),
    stats: getStatistics(state),
    UDsAndLemmata: getUDsAndLemmata(state),
});



export default connect(mapStateToProps)(CSVReport);

