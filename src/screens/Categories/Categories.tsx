import React, { useState } from "react";
import { useCategoriesStyles } from "@/static/stylesheets/screens/categoriesStyles";
import GroupCategories from "../GroupCategories";
import MuiTreeView from "@/components/atoms/MuiTreeView/MuiTreeView";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { TreeView, TreeItem } from "@mui/lab";
import LogoEcBazaar from "@/static/images/placeholder.jpg";
import LogoDelete from "@/static/icons/ic_delete.png";
import LogoEdit from "@/static/icons/ic_edit.png";
import LogoAdd from "@/static/icons/ic_add.png";
import { Alert } from "@/alert/Alert";
import { AppService } from "@/service/AllApiData.service";

const Categories = (props: {
  formData: { bazaar_name: any };
  setFormData: (arg0: any) => void;
}) => {
  const classes = useCategoriesStyles();
  const [ListGroups, setListGroups] = useState([]);
const [IDS, setIDS] = React.useState([]);
const [HideTable, setHideTable] = React.useState(false);

const [addData, setAddData] = React.useState({
  category_name: "",
  category_description: "",
  category_active: "true",
  category_updated_by: 2,
  category_group: 1
  });

const detailIB = async (ID:any) =>{
const responseJson = await AppService.detailMainCate(ID);
setIDS(responseJson.data);
console.log(responseJson.data);
// Alert("save successfully");
}

  const [inputFields, setInputFields] = useState([{
    fullName:'',
    image:'',
} ]);

const addInputField = ()=>{
    // setInputFields([...inputFields, {
    //     fullName:'',
    //     image:'',
    // } ])
    setHideTable(true);
  
}
const removeInputFields = (index: number)=>{
    const rows = [...inputFields];
    rows.splice(index, 1);
    setInputFields(rows);
}
const handleChange = (index: string | number, evnt: React.ChangeEvent<HTMLInputElement>)=>{

const { name, value } = evnt.target;
const list = [...inputFields];
// list[index][name] = value
console.log(list);
setInputFields(list);
// props.setFormData({
//   ...props.formData,
//   bazaar_gorup_category: list,
// });
}


const [selectedImage, setSelectedImage] = useState();
const [selected, setSelected] = React.useState([]);
const [node, setNode] = React.useState("");

const imageChange = (e:any) => {
  if (e.target.files && e.target.files.length > 0) {
    console.log(e.target.files[0]);
    setSelectedImage(e.target.files[0]);
  }
};

const dataSave = (e:any) => {
  // console.log(e.target.value);
  // props.setFormData({
  //   ...props.formData,
  //   bazaar_gorup_category: [selectedImage, e.target.value],
  // });
}


const handleSelectedItems = (event:any, nodeId:any) => {
  console.log(nodeId);
  setNode(nodeId);
  detailIB(nodeId);
  props.setFormData({
    ...props.formData,
    bazaar_category: [nodeId],
  });
}

const getAllLists = async () => {
    const responseJson = await AppService.listMaincategory();
    // console.log(responseJson.data.bazaar);
    setListGroups(responseJson.data.results);
   
  };

  const deletes = async(id:any)=>{
    const responseJson = await AppService.deleteMainCate(id);
    console.log(responseJson.data);
    Alert("delete successfully");
    getAllLists();

  }
  const edit = async(id:any)=>{
    const responseJson = await AppService.updateMainCate(id, addData);
    console.log(responseJson.data);
    Alert("update successfully");
    getAllLists();
  }

  


React.useEffect(() => {
  // console.log(formData);
  getAllLists();
  
    
    }, []);

    const hideTabs = async (e:any) =>{
      setHideTable(false);
    }

    const handleChanges = (event:any) => {
      event.preventDefault();
      setAddData({ ...addData, [event.target.name]: event.target.value });
      if (event.target.files && event.target.files.length > 0) {
        console.log(event.target.files[0]);
        setSelectedImage(event.target.files[0]);
      }
      // props.setFormData({
      //   ...props.formData,
      //   bazaar_product: [contactInfo],
      // });
   
    };


    const save = async () =>{
      const responseJson = await AppService.addMainCate(addData);
      // setIDS(responseJson.data);
      // console.log(responseJson.data);
      Alert("AddNew successfully");
      getAllLists();
      setHideTable(false);
      }

  return (
    <div className={classes.root}>
      <div className="container">
        <div className="leftContainer">
        <TreeView
        className="treefont"
        aria-label="file system navigator"
        selected={selected}
        // onNodeToggle={handleToggle}
        onNodeSelect={handleSelectedItems}
        defaultExpandIcon={<ChevronRightIcon />}
        sx={{
          height: 300,
          flexGrow: 1,
          maxWidth: 300,
          overflowY: "auto",
          border: 2,
          padding: "30px",
          borderColor: "#E1E1E1",
          borderRadius: "6px",
        }}
      >
        {ListGroups.map((items:any, index)=>(
        <TreeItem nodeId={items.id} label={items.category_name}>
          {/* <TreeItem nodeId={items.id} label={items.parent_category_name} /> */}
        </TreeItem>
        ))}
       
      </TreeView>
        </div>
        <div className="rightContainer">
        <table className="groupCeta">
        <tr>
          <th>Image</th>
          <th> Category Name</th>
          <th></th>
        </tr>
        {[IDS].map((items:any)=>(
        <tr>
          <td>
            <div className="max-w-[58px]" style={{position:"relative"}}>
              {/* <img src={LogoEcBazaar} alt={"Logo"} /> */}
              {selectedImage ===undefined ? <img src={LogoEcBazaar} alt={"Logo"} /> :selectedImage && (
            <img src={URL.createObjectURL(selectedImage)}/>
            ) } 
              <input  accept="image/*" style={{position: 'absolute',
    top: 0,     width: '40px',
    height: '37px',
    cursor: 'pointer', opacity:'0'}} type="file" onChange={handleChanges}  name="image"  />
            </div>
          </td>
          <td>
            <div>
              <input 
                type="text" name="parent_category_name"
                value={items.category_name}
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg text-[#2E2C34] block w-full p-[15px] dark:border-[#EBEAED]"
                placeholder="Snacks" onChange={e => setAddData({
                  ...addData, category_name: e.target.value})}
              />
            </div>
          </td>
          <td>
            <div className="ActionLogo">
              <img src={LogoDelete} onClick={()=> deletes(items.id)} alt={"Logo"}/>
              <div className="dividor"></div>
              <img src={LogoEdit} alt={"Logo"} onClick={()=> edit(items.id)}/>
              
            </div>
          </td>
        </tr>
        ))}

<span hidden={!HideTable}><tr >
          <td>
            <div className="max-w-[58px]" style={{position:"relative"}}>
              {/* <img src={LogoEcBazaar} alt={"Logo"} /> */}
              {selectedImage ===undefined ? <img src={LogoEcBazaar} alt={"Logo"} /> :selectedImage && (
            <img src={URL.createObjectURL(selectedImage)}/>
            ) } 
              <input  accept="image/*" style={{position: 'absolute',
    top: 0,     width: '40px',
    height: '37px',
    cursor: 'pointer', opacity:'0'}} type="file" onChange={imageChange}  name="image"  />
            </div>
          </td>
          <td>
            <div>
              <input 
                type="text" name="category_name"
              
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg text-[#2E2C34] block w-full p-[15px] dark:border-[#EBEAED]"
                placeholder="Snacks" onChange={handleChanges}
              />
            </div>
          </td>
          <td>
            <div className="ActionLogo">
              <img src={LogoDelete} onClick={()=> hideTabs(true)} alt={"Logo"}/>
              <div className="dividor"></div>
              <img src={LogoAdd} alt={"Logo"} onClick={()=> save()}/>
              
            </div>
          </td>
        </tr>
        </span>

        
      </table>
            <div>
        <div className="addButton" onClick={addInputField}>
          <img src={LogoAdd} alt={"Logo"} />
          <p>Add New Category</p>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
