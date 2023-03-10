import React, { useState } from "react";
import { useGroupCategoriesStyles } from "@/static/stylesheets/screens/groupcategoriesStyles";
import LogoEcBazaar from "@/static/images/placeholder.jpg";
import LogoDelete from "@/static/icons/ic_delete.png";
import LogoEdit from "@/static/icons/ic_edit.png";
import LogoAdd from "@/static/icons/ic_add.png";

const GroupCategories = (props: {
  formData: { bazaar_name: any };
  setFormData: (arg0: any) => void;
}) => {
  const classes = useGroupCategoriesStyles();


  const [inputFields, setInputFields] = useState([{
    fullName:'',
    image:'',
} ]);

const addInputField = ()=>{
    setInputFields([...inputFields, {
        fullName:'',
        image:'',
    } ])
  
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

  return (



    
    <div className={classes.root}>

                   
      <table>
        <tr>
          <th>Image</th>
          <th>Group Category Name</th>
          <th></th>
        </tr>
        <tr>
          <td>
            <div className="brandLogo" style={{position:"relative"}}>
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
                type="text" name="fullName"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg text-[#2E2C34] block w-full p-[15px] dark:border-[#EBEAED]"
                placeholder="Snacks" onChange={dataSave}
              />
            </div>
          </td>
          <td>
            <div className="ActionLogo">
              <img src={LogoDelete} alt={"Logo"}/>
              <div className="dividor"></div>
              <img src={LogoEdit} alt={"Logo"} />
              
            </div>
          </td>
        </tr>

        
      </table>
      
      <div>
        <div className="addButton" onClick={addInputField}>
          <img src={LogoAdd} alt={"Logo"} />
          <p>Add New Group Category</p>
        </div>
      </div>
    </div>
  );
};

export default GroupCategories;
