/* eslint-disable react/prop-types */

import { Vortex } from "react-loader-spinner"
import Card from "./Card"


const CardsGrid = ({ posts }) => {
    return (
        <>
            {
                posts?.length === 0 && (
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 d-flex justify-content-center align-items-center" style={{height: '100vh'}}>
                                <div>
                                    <Vortex
                                        visible={true}
                                        height="80"
                                        width="80"
                                        ariaLabel="vortex-loading"
                                        wrapperStyle={{}}
                                        wrapperClass="vortex-wrapper"
                                        colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            {
                posts?.length !== 0 && (
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                                {
                                    posts?.map(post => (
                                       <Card key={post?.id} 
                                       title={post?.title} 
                                       body={post?.body}
                                       id={post?.id} 
                                       />
                                    ))
                                }
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default CardsGrid