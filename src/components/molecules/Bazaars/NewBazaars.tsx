import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import BazaarDetails from "@/screens/BazaarDetails";
import GroupCategories from "@/screens/GroupCategories";
import Categories from "@/screens/Categories";
import SubCategories from "@/screens/SubCategories";
import { useBazaarStepperdStyles } from "@/static/stylesheets/molecules";
import LogoPrev from "@/static/icons/ic_previous.png";
import { AppService } from "@/service/AllApiData.service";

const steps = [
  "Bazaar Details",
  "Group Categories",
  "Categories",
  "Sub- Categories",
  "Products",
];

export default function NewBazaars() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());
  const [AllState, setAllState] = React.useState([]);
  const getAllLists = async () => {
    const responseJson = await AppService.getAllStates();
    // console.log(responseJson.data.bazaar);
    setAllState(responseJson.data.results);
   
  };
 


  React.useEffect(() => {
    getAllLists();
  }, []);

  const [formData, setFormData] = React.useState({
  wholesellers: "",
    agents: "",
    states: "",
    earnings: "",
    bills: "",
    bazaar_description: "",
    bazaar_name: "",
    bazaar_image: "",
    bazaar_added_date: "",
    bazaar_updated_date: "",
    bazaar_updated_by: 1,
    bazaar_state: [],
    bazaar_city: [],
    bazaar_district: [],
    bazaar_gorup_category: [],
    bazaar_category: [],
    bazaar_subcategory: [],
    bazaar_product: []
  });

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = async (e:any) => {
    console.log(activeStep);
    console.log(formData);
    if(activeStep===4){
      const responseJson = await AppService.addBazars(formData);
      console.log(responseJson);
    }
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      console.log(activeStep);
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);

    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };
  React.useEffect(() => {
    console.log(formData);
    
      
      }, []);

  const classes = useBazaarStepperdStyles();

  return (
    <div className={classes.root}>
      <div className="headContainer">
        <div className="icon">
          <img src={LogoPrev} alt={"Logo"} />
        </div>
        <div className="headTitle">Add New Bazaar</div>
      </div>
      <div className={classes.stepperContainer}>
        <Box sx={{ width: "100%" }}>
          <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps: { completed?: boolean } = {};
              const labelProps: {
                optional?: React.ReactNode;
              } = {};
              if (isStepSkipped(index)) {
                stepProps.completed = false;
              }
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              );
            })}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography sx={{ mt: 2, mb: 1 }}>
                <div className="headTitle">completed</div>
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button className="nextButton" onClick={handleReset}>
                  Reset
                </Button>
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {activeStep === 0 && <BazaarDetails  formData={formData} setFormData={setFormData} />}

              {activeStep === 1 && <GroupCategories formData={formData} setFormData={setFormData} />}

              {activeStep === 2 && <Categories />}
              {activeStep === 3 && <Categories />}
              {activeStep === 4 && <SubCategories />}

              <div className="actionButton">
                <div>
                  <Button
                    className="BackButton"
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                  >
                    Back
                  </Button>
                </div>

                <div>
                  <Button className="nextButton" onClick={handleNext}>
                    {activeStep === steps.length - 1 ? "Finish" : "Next"}
                  </Button>
                </div>
              </div>
            </React.Fragment>
          )}
        </Box>
      </div>
    </div>
  );
}
