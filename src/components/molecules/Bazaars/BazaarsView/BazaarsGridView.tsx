import React, { useEffect, useState } from "react";
import { BazaarCard } from "@/components/molecules/Bazaars";
import { Grid } from "@mui/material";
import { useBazaarsStyles } from "@/static/stylesheets/screens";
import { AppService } from "../../../../service/AllApiData.service";

const BazaarsGridView = () => {
  const classes = useBazaarsStyles();
  const [getAllBazar, setGetAllBazar] = useState([]);
  // const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  const getAllLists = async () => {
    const responseJson = await AppService.getAllBazarList(1);
    setGetAllBazar(responseJson.data.results);
    // console.log("ecomprd", responseJson.data.results);
  };

  

  useEffect(() => {
    getAllLists();
  }, []);
  return (
    <>
    {/* {console.log("pr", getAllBazar)} */}
      <div className={classes.root}>
        <Grid container spacing={2}>
       
            
              <BazaarCard getAllBazars={getAllBazar}/>
            
         
        </Grid>
      </div>
    </>
  );
};

export { BazaarsGridView };
