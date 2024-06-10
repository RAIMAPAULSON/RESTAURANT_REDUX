import React, { useEffect } from 'react'
import Header from '../components/Header'
import { Row,Col,Card,Spinner} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRestaurantDetails, searchRestaurant ,setcurrentPage} from '../redux/restaurantSlice'


const Restaurant = () => {
  const dispatch = useDispatch()
  const {allRestaurants,Loading,error,currentPage}=useSelector(state=>state.restaurantReducer)
  // const restaurants = useSelector((state) => state.restaurantReducer.allRestaurants);
  // const currentPage = useSelector((state) => state.restaurantReducer.currentPage);
  const totalPages = 3;
  const handlePageChange = (page) => {
    // dispatch(setCurrentPage(page));
    if (page >= 1 && page <= totalPages) {
      dispatch(setcurrentPage(page));
      dispatch(fetchRestaurantDetails(page));
    }
  };
  console.log("ffffffcurrentPageffffffff", currentPage);
  console.log("ffffffffffffffRESTUARNTS", allRestaurants);
  console.log("ttttttttttttttttttTOTALPAGES", totalPages);
  useEffect(()=>{
    dispatch(fetchRestaurantDetails())
  },[])
  return (
    <div>
    <Header insideHeader={true} />
    <div style={{ marginTop: '150px' }} className="container">
                {Loading ?
                <div className='text-center mt-5 fw-bolder'>
                 <Spinner className='me-2' animation="border" variant="info" />Loading...
                </div>
                :
                    <Row className='my-5'>
                    {
                    allRestaurants?.length>0 ?
                    allRestaurants?.map(product=>(
                     <Col key={product?.id} className='mb-5' sm={12} md={6} lg={6} xl={6}>
                        <Card className='shadow rounded' style={{height:'420px',width:'420px'}}>
                            <Card.Img height={'300px'} variant="top" src={product?.photograph} />
                            <Card.Body>
                                <Card.Title>{product?.name}</Card.Title>
                                <h5>{product?.neighborhood}</h5>
                                <div className='mt-2'><Link to={`/${product?.id}/view`}>View More...</Link></div>
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
            <div style={{textAlign:'center'}}>
              <button style={{
            padding: '10px 20px',
            margin: '0 5px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
            opacity: currentPage === 1 ? '0.5' : '1'
          }}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button  style={{
            padding: '10px 20px',
            margin: '0 5px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
            opacity: currentPage === totalPages ? '0.5' : '1'
          }}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
            </div>
    </div>
  )
}

export default Restaurant