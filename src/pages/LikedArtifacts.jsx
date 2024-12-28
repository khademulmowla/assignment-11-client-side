import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import axios from "axios";
import LikedArtCard from "../components/LikedArtCard";
import { Helmet } from "react-helmet-async";


const LikedArtifacts = () => {
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    const [likes, setLikes] = useState([])
    useEffect(() => {
        fetchAllLikeArts()
    }, [user])
    const fetchAllLikeArts = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/liked/${user?.email}`)
        setLikes(data)
    }
    console.log(likes)

    return (
        <div className="py-6">
            <Helmet>
                <title>
                    assignment-11 | Liked Artifacts
                </title>
            </Helmet>
            <div className="text-center">
                <h1 className="text-2xl text-gray-300 font-semibold">The Artifact Chronicles Liked By You.</h1>
                <p className="text-gray-400">Honoring history, inspiring discovery.</p>
            </div>
            {likes.length === 0 ? (
                <div className="text-center mt-12">
                    <h2 className="text-2xl font-semibold text-gray-400">No Liked Artifacts Found</h2>
                    <p className="text-gray-300 mt-4">You haven't liked any artifacts yet. Start exploring...</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 px-6 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {likes.map(like => <LikedArtCard like={like} key={like._id} />)}
                </div>
            )}
        </div>
    );
};

export default LikedArtifacts;
