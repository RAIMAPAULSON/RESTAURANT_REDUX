import React, { useEffect } from 'react'
import Header from '../components/Header'
import { Row,Col,Card,Spinner} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRestaurantDetails, searchRestaurant } from '../redux/restaurantSlice'


const Restaurant = () => {
  const dispatch = useDispatch()
  const {allRestaurants,Loading,error}=useSelector(state=>state.restaurantReducer)
  useEffect(()=>{
    dispatch(fetchRestaurantDetails())
  },[])
  return (
    <div>
    <Header insideHeader={true} />
    <div style={{ marginTop: '150px' }} className="container-fluid">
                {Loading ?
                <div className='text-center mt-5 fw-bolder'>
                 <Spinner className='me-2' animation="border" variant="info" />Loading...
                </div>
                :
                    <Row className='my-5'>
                    {
                    allRestaurants?.length>0 ?
                    allRestaurants?.map(product=>(
                     <Col key={product?.id} className='mb-5' sm={12} md={6} lg={4} xl={3}>
                        <Card className='shadow rounded'>
                            <Card.Img height={'180px'} variant="top" src={product?.photograph} />
                            <Card.Body>
                                <Card.Title>{product?.name.slice(0,20)}...</Card.Title>
                                <h5>{product?.neighborhood}</h5>
                                <div className='text-center mt-3'><Link to={`/${product?.id}/view`}>View More...</Link></div>
                            </Card.Body>
                        </Card>
                    </Col>
                    ))
                    :
                    <div className='text-center fw-bolder text-danger mt-5 mb-5'>Products not found!!!!!!</div>
                    }
                </Row>
                }
            </div>
    </div>
  )
}

export default Restaurant