import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';

const UpdateArtifact = () => {
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    const { id } = useParams()
    const [art, setArt] = useState([])
    useEffect(() => {
        fetchAllArts()
    }, [id])
    const fetchAllArts = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/artifact/${id}`)
        setArt(data)
    }
    const handleSubmit = async e => {
        e.preventDefault()
        const form = e.target;
        const artiName = form.artifactName.value;
        const artiImg = form.artifactImage.value;
        const category = form.artifactType.value;
        const history = form.historicalContext.value;
        const create = form.createdAt.value;
        const discoverAt = form.discoveredAt.value;
        const discoverBy = form.discoveredBy.value;
        const location = form.presentLocation.value;
        const name = form.userName.value;
        const email = form.userEmail.value;
        const formData = { artiName, artiImg, category, history, create, discoverAt, discoverBy, location, name, email, like_count: art.like_count }
        // console.log(formData)
        try {
            await axios.put(`${import.meta.env.VITE_API_URL}/update-artifact/${id}`, formData)
            navigate('/my-artifacts')
            toast.success('Data updated successfully')
        }
        catch (err) {
            console.log(err)
            toast.error(err.message)

        }
    }
    return (
        <div className="max-w-4xl mx-auto p-6 my-6 bg-gray-700 text-white shadow-lg rounded-lg">
            <Helmet>
                <title>
                    assignment-11 | Update Artifact
                </title>
            </Helmet>
            <h1 className="text-2xl font-bold mb-6 text-center">Update Artifact</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="artifactName">
                        Artifact Name
                    </label>
                    <input
                        type="text"
                        id="artifactName"
                        name="artifactName"
                        defaultValue={art.artiName}
                        placeholder="Enter artifact name"
                        className="w-full px-3 py-2 border bg-[#ded6d6] text-black border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="artifactImage">
                        Artifact Image (URL)
                    </label>
                    <input
                        type="url"
                        id="artifactImage"
                        name="artifactImage"
                        defaultValue={art.artiImg}
                        placeholder="Enter image URL"
                        className="w-full px-3 py-2 border bg-[#ded6d6] text-black border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="artifactType">
                        Artifact Type
                    </label>
                    <select
                        id="artifactType"
                        name="artifactType"
                        defaultValue={art.category}
                        className="w-full px-3 py-2 border bg-[#ded6d6] text-black border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    >
                        <option value="">Select a type</option>
                        <option value="Tools">Tools</option>
                        <option value="Weapons">Weapons</option>
                        <option value="Documents">Documents</option>
                        <option value="Writings">Writings</option>
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium  mb-1" htmlFor="historicalContext">
                        Historical Context
                    </label>
                    <textarea
                        id="historicalContext"
                        name="historicalContext"
                        defaultValue={art.history}
                        placeholder="Provide historical context"
                        className="w-full px-3 py-2 border bg-[#ded6d6] text-black border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        rows="4"
                    ></textarea>
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="createdAt">
                        Created At
                    </label>
                    <input
                        type="text"
                        id="createdAt"
                        name="createdAt"
                        defaultValue={art.create}
                        placeholder="e.g., 100 BC"
                        className="w-full px-3 py-2 border bg-[#ded6d6] text-black border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="discoveredAt">
                        Discovered At
                    </label>
                    <input
                        type="text"
                        id="discoveredAt"
                        name="discoveredAt"
                        defaultValue={art.discoverAt}
                        placeholder="e.g., 1799"
                        className="w-full px-3 py-2 border bg-[#ded6d6] text-black border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="discoveredBy">
                        Discovered By
                    </label>
                    <input
                        type="text"
                        id="discoveredBy"
                        name="discoveredBy"
                        defaultValue={art.discoverBy}
                        placeholder="Enter name"
                        className="w-full px-3 py-2 border bg-[#ded6d6] text-black border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="presentLocation">
                        Present Location
                    </label>
                    <input
                        type="text"
                        id="presentLocation"
                        name="presentLocation"
                        defaultValue={art.location}
                        placeholder="Enter location"
                        className="w-full px-3 py-2 border bg-[#ded6d6] text-black border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="userName">
                            Your Name
                        </label>
                        <input
                            type="text"
                            id="userName"
                            value={user?.displayName}
                            readOnly
                            className="w-full px-3 py-2 border bg-[#ded6d6] text-black border-gray-300 rounded-md shadow-sm sm:text-sm"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1" htmlFor="userEmail">
                            Your Email
                        </label>
                        <input
                            type="email"
                            id="userEmail"
                            value={user?.email}
                            readOnly
                            className="w-full px-3 py-2 border bg-[#ded6d6] text-black border-gray-300 rounded-md shadow-sm sm:text-sm"
                        />
                    </div>
                </div>
                <div className="text-center">
                    <button
                        type="submit"
                        className="w-full sm:w-auto px-6 py-2 bg-[#ac9a1a] hover:bg-gray-800 text-white font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        Update Artifact
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateArtifact;