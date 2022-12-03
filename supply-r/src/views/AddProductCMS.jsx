import React from 'react';
import { Container, Row, Col, Button, Form, ButtonGroup, Alert } from 'react-bootstrap';
import ImageUploading from 'react-images-uploading';
import { postProduct } from '../features/productSlice';
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'


export default function AddProductCMS(props) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {
    maxNumber = 5,
    acceptType = ['jpeg', 'jpg', 'png'],
    maxFileSize = 5000000,
  } = props;
  
  const [images, setImages] = React.useState([]);
  const [formProduct, setFormProduct] = React.useState({
    name: '',
    CategoryId: '',
    description: '',
    price: '',
    stock: '',
  });
  const onChange = (imageList, addUpdateIndex) => {
    setImages(imageList);
  };
  const onError = () => {
    setImages([]);
  };
  const hendlerProduct = (e) => {
    const { name, value } = e.target;
    const newProduct = {
      ...formProduct,
    };
    newProduct[name] = value;
    setFormProduct(newProduct);
  };
  const printjson = async (e) => {
	e.preventDefault();
  const data = {
    images,
    formProduct
  }
  await dispatch(postProduct(data))
  navigate('/product-list')
  };
  return (
    <>
      <div style={{ marginLeft: '20%' }}>
        <Container
          style={{
            paddingTop: '2%',
            paddingBottom: '2%',
            paddingLeft: '15%',
            paddingRight: '15%',
          }}>
          <h1 style={{ textAlign: 'center' }}>Add Product</h1>
          <br></br>

          <Form onSubmit={printjson}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Product name ..."
                name="name"
                value={formProduct.name}
                onChange={hendlerProduct}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Select
                name="CategoryId"
                value={formProduct.CategoryId}
                onChange={hendlerProduct}>
                <option disabled>-- Select Category --</option>
                <option value="1">Electronik</option>
                <option value="2">Pertukangan</option>
                <option value="3">Jasa Konstruksi / Renovasi</option>
                <option value="4">Office / Stationary</option>
                <option value="5">Jasa Perawatan / Peralatan dan Mesin</option>
                <option value="6">Souvenir / Merchandise</option>
                <option value="7">Jasa Event Organizer</option>
                <option value="8">Jasa Mandoe dan Tenaga Kerja Lainnya</option>
                <option value="9">Jasa Percetakan dan Media</option>
                <option value="10">Kesehatan</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                type="textarea"
                placeholder="Product description ..."
                name="description"
                value={formProduct.description}
                onChange={hendlerProduct}
              />
            </Form.Group>

            <Row style={{ flexDirection: 'row' }}>
              <Col style={{ flex: '1' }}>
                <Form.Group className="mb-3">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Product price ..."
                    name="price"
                    value={formProduct.price}
                    onChange={hendlerProduct}
                  />
                </Form.Group>
              </Col>

              <Col style={{ flex: '1' }}>
                <Form.Group className="mb-3">
                  <Form.Label>Stock</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="Product stock ..."
                    name="stock"
                    value={formProduct.stock}
                    onChange={hendlerProduct}
                  />
                </Form.Group>
              </Col>
            </Row>

            <ImageUploading
              multiple
              value={images}
              onChange={onChange}
              onError={onError}
              maxNumber={maxNumber}
              acceptType={acceptType}
              maxFileSize={maxFileSize}
              dataURLKey="data_url">
              {({
                imageList,
                onImageUpload,
                onImageRemoveAll,
                onImageUpdate,
                onImageRemove,
                isDragging,
                dragProps,
                errors,
              }) => (
                <>
                  {errors && (
                    <Alert color="danger text-start">
                      <ul>
                        {errors.maxNumber && (
                          <li>Number of selected images exceed maxNumber</li>
                        )}
                        {errors.acceptType && (
                          <li>Your selected file type is not allow</li>
                        )}
                        {errors.maxFileSize && (
                          <li>Selected file size exceed maxFileSize</li>
                        )}
                      </ul>
                    </Alert>
                  )}

                  <div className="upload__image-wrapper">
                    <div
                      className="upload-container"
                      {...dragProps}
                      onClick={onImageUpload}
                      style={
                        isDragging
                          ? { backgroundColor: '#afafaf', color: 'white' }
                          : undefined
                      }>
                      Choose a file or Drag it here
                    </div>

                    <div className="p-2" style={{ textAlign: 'left' }}>
                      {imageList.map((image, index) => (
                        <div
                          key={index}
                          className="image-item  "
                          style={{
                            width: '150px',
                            marginRight: '10px',
                            display: 'inline-block',
                          }}>
                          <img src={image['data_url']} alt="" style={{ width: '100%' }} />
                          <div className="image-item__btn-wrapper mt-1">
                            <ButtonGroup size="sm" style={{ width: '100%' }}>
                              <Button
                                color="primary"
                                onClick={() => onImageUpdate(index)}>
                                Update
                              </Button>
                              <Button color="danger" onClick={() => onImageRemove(index)}>
                                Remove
                              </Button>
                            </ButtonGroup>
                          </div>
                        </div>
                      ))}
                    </div>
                    {/* {images.length > 0 && (
                      <>
                        <hr />
                        <div className="text-start p-2">
                          <Button onClick={printjson} color="success">
                            Upload
                          </Button>{' '}
                          <Button onClick={onImageRemoveAll} color="danger">
                            Remove All Images
                          </Button>
                        </div>
                        <pre className="text-start" id="jsonprint"></pre>
                      </>
                    )} */}
                  </div>
                </>
              )}
            </ImageUploading>
						<br></br>
						<Button
							style={{
								backgroundColor: "#2596be",
								borderColor: "#2596be",
								color: "white",
							}}
							type="submit"
						>
							+ Add Product
						</Button>
					</Form>
				</Container>
			</div>
		</>
	);
}
