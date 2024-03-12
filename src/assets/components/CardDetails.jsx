import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { baseUrl } from './utlis/baseUrl';
import { Vortex } from 'react-loader-spinner';

const CardDetails = () => {
    const { id } = useParams();
    const getParticularData = async () => {
        try {
            const res = await axios.get(`${baseUrl}/posts/${id}`);
            return res?.data;
        } catch (err) {
            throw new Error(err?.message);
        }
    }
    const { data: post, isError, isLoading } = useQuery({
        queryKey: ['id'],
        queryFn: getParticularData,
        refetchOnWindowFocus: false,
    });

    if (isError) {
        return (<>
            <div className='text-center'>
                <h1 className='text-danger'>Some thing went wrong!</h1>
            </div>
        </>)
    }

    if (isLoading) {
        return (<>
            <div className='d-flex justify-content-center align-items-center' style={{ height: '100vh' }}>
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
        </>)
    }
    return (
        <>
            {
                !!post && (<>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text center mt-5">
                                <div className="card" style={{ width: '30rem' }}>
                                    <div className="card-body">
                                        <h5 className="card-title">{post?.title} {post?.id}</h5>
                                        <p className="card-text">{post?.body}</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </>)
            }
        </>
    )
}

export default CardDetails