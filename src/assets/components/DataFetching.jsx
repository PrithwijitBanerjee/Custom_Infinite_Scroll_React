/* eslint-disable no-unsafe-optional-chaining */
import { useEffect, useState } from "react"
import CardsGrid from "./CardsGrid";
import axios from "axios";
import { Vortex } from "react-loader-spinner";
import { baseUrl } from "./utlis/baseUrl";


const DataFetching = () => {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const getPosts = async page => {
        try {
            const res = await axios.get(`${baseUrl}/posts?_limit=10&_page=${page}`);
            setPosts([...posts, ...res?.data]);
            setLoading(true);
        } catch (error) {
            throw new Error(error?.message);
        }
    }

    useEffect(() => {
        getPosts(page);
    }, [page]);

    const handleScrollDown = () => {
        // console.log(document.documentElement.scrollHeight); // Height of the HTML Elements 
        // console.log(document.documentElement.scrollTop);  // How much distance you scroll from top
        // console.log(window.innerHeight); // height of the window

        if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
            //updates the page number ....
            setPage(prevPage => prevPage + 1);
            setLoading(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScrollDown);

        return () => { //clean up function ...
            window.removeEventListener("scroll", handleScrollDown);
        }
    }, []);
    return (
        <>
            <CardsGrid posts={posts} />
            {
                loading && (
                    <div className="mt-5 text-center">
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
                )
            }
        </>
    )
}

export default DataFetching