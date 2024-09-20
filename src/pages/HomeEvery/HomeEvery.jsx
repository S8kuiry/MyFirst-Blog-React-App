import React, { useEffect, useState } from 'react'
import './HomeEvery.css'
import HomeNav from './HomeNav'
import { Link } from 'react-router-dom'
import { collection, getDocs, query } from 'firebase/firestore'
import { db } from '../../config/Firebase'

const HomeEvery = () => {
    const [home, setHome] = useState([])

    useEffect(() => {
        const fetch = async () => {
            const q = query(collection(db, "posts"))
            const qSnap = await getDocs(q)
            const homedata = []
            qSnap.forEach((doc) => {
                homedata.push({ id: doc.id, ...doc.data() })
            })
            setHome(homedata)
        }
        fetch()
    }, [])

    return (
        <>
            <div className='home-every'>
                <HomeNav />
                <h1 style={{ color: "whitesmoke", marginTop: "60px" }}>Blogs Posted</h1>
                <div className="home-section">
                    {home.map((item) => (
                        <div className="he" key={item.id}>
                            <div className="he-upper">
                                <h2>
                                    <Link 
                                        to={`/showblog/${item.username}/${item.postTitle}`} 
                                        style={{ color: "whitesmoke", textDecoration: "none" }}
                                    >
                                        {item.postTitle}
                                    </Link>
                                </h2>
                            </div>
                            <div className="he-lower">
                                <p>Posted by : {item.username || "Unknown"}</p>
                                <p>
                                    Created on : {item.time?.toDate().toLocaleString() || "Undefined"}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default HomeEvery
