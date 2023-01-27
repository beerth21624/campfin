import React from 'react'
import Layout from '../../components/Layout'
import './css/trip.css'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import DeleteIcon from '@mui/icons-material/Delete'
import CancelIcon from '@mui/icons-material/Cancel'
import Swal from 'sweetalert2'
const CreateTrip = () => {
  const [include, setInclude] = React.useState([''])
  const [planArr, setPlanArr] = React.useState([''])
  const [selectedImage, setSelectedImage] = React.useState()

  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0])
    }
  }

  const removeSelectedImage = () => {
    setSelectedImage()
  }

  const addInclude = () => {
    setInclude([...include, ''])
  }
  const removeInclude = (index) => {
    console.log('value', index)
    const newInclude = JSON.parse(JSON.stringify(include))
    newInclude.splice(index, 1)
    setInclude([...newInclude])
  }
  const changeInclude = (index, value) => {
    const newInclude = JSON.parse(JSON.stringify(include))
    newInclude[index] = value
    setInclude(newInclude)
  }

  const addPlan = () => {
    setPlanArr([...planArr, ''])
  }
  const removePlan = (index) => {
    console.log('value', index)
    const newPlan = JSON.parse(JSON.stringify(planArr))
    newPlan.splice(index, 1)
    setPlanArr([...newPlan])
  }
  const changePlan = (index, value) => {
    const newPlan = JSON.parse(JSON.stringify(planArr))
    newPlan[index] = value
    setPlanArr([...newPlan])
  }

  const modelDelete = (index) => {
    Swal.fire({
      title: 'Do you want to delete',
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('success', '', 'success')
        removeInclude(index)
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }
  const modelDeletePlan = (index) => {
    Swal.fire({
      title: 'Do you want to delete',
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('success', '', 'success')
        removePlan(index)
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }

  return (
    <Layout>
      <div className="create-trip">
        <h1 className="title">Create trip</h1>
        {!selectedImage && (
          <label for="image-trip" className="upload-image">
            <div className="upload-image-content">
              <p>Upload Image</p>
            </div>
          </label>
        )}

        {selectedImage && (
          <div className="preview-image-box">
            <span className="cancel-icon" onClick={() => removeSelectedImage()}>
              <CancelIcon />
            </span>
            <img
              src={URL.createObjectURL(selectedImage)}
              className="preview-image"
              alt="Thumb"
            />
          </div>
        )}
        <input
          className="image-input"
          id="image-trip"
          accept="image/*"
          type="file"
          onChange={imageChange}
        />
        <div className="p-5">
          <div className="input-box">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="row">
            <div className="col-6">
              <div className="input-box">
                <label for="name">สถานที่</label>
                <input type="text" id="name" name="name" />
              </div>
            </div>
            <div className="col-6">
              <div className="input-box">
                <label for="name">จำนวนผู้เข้าร่วม</label>
                <input type="number" id="name" name="name" />
              </div>
            </div>
          </div>
          <div className="row w-50">
            <div className="col-5 input-box">
              <label for="name">วันที่จัดกิจกรรม</label>
              <input type="date" id="name" name="name" />
            </div>
            <div className="col-2 d-flex align-items-center justify-content-center mt-3">
              ถึง
            </div>
            <div className="col-5 input-box">
              <label for="name"> .</label>
              <input type="date" id="name" name="name" />
            </div>
          </div>
          <div className="input-box w-50">
            <label for="name">ค่าใช้จ่าย</label>
            <input type="number" id="name" name="name" />
          </div>
          <div className="input-box">
            <label for="name">description</label>
            <textarea type="text" id="name" name="name" />
          </div>
          <div className="input-box my-5">
            <div className="d-flex justify-content-between">
              <label for="name">INCLUDE & EXCLUDE :</label>
              <button className="add-include-btn" onClick={() => addInclude()}>
                Add
              </button>
            </div>
            {include.map((item, index) => (
              <div className="d-flex align-items-center gap-2">
                <input
                  onChange={(e) => changeInclude(index, e.target.value)}
                  type="text"
                  id="name"
                  name="name"
                  value={item}
                />
                <DeleteIcon onClick={() => modelDelete(index)} />
              </div>
            ))}
          </div>
          <div className="input-box my-5">
            <div className="d-flex justify-content-between">
              <label for="name">Plan :</label>
              <button className="add-include-btn" onClick={() => addPlan()}>
                Add
              </button>
            </div>
            {planArr.map((item, index) => (
              <div className="d-flex align-items-center gap-2">
                <input
                  onChange={(e) => changePlan(index, e.target.value)}
                  type="text"
                  id="name"
                  name="name"
                  value={item}
                />
                <DeleteIcon onClick={() => modelDeletePlan(index)} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default CreateTrip
