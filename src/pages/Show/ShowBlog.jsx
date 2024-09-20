import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './showblog.css';
import Navbar from '../../components/Navbar/Navbar';
import { addDoc, collection, deleteDoc, doc, getDocs, query, setDoc, where } from 'firebase/firestore';
import { auth, db } from '../../config/Firebase';

const ShowBlog = () => {
  const [showBlogData, setShowBlogData] = useState(null);  // State to hold the blog data
  const { username, postTitle } = useParams();  // Extract username and postTitle from URL
  const [comment, setComment] = useState("")
  // Fetch blog data based on username and postTitle
  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const q = query(
          collection(db, "posts"),
          where("postTitle", "==", postTitle),

        );

        const qSnap = await getDocs(q);
        const blogData = [];

        qSnap.forEach((doc) => {
          blogData.push({ id: doc.id, ...doc.data() });
        });

        // If blog data is found, set it in the state
        if (blogData.length > 0) {
          setShowBlogData(blogData[0]);
        } else {
          console.error("No blog found.");
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };

    fetchBlogData();
  }, [username, postTitle]);// Re-run when username or postTitle changes

  // fetching comment 
  const [fetchCmt, setFetchCmt] = useState([])
  useEffect(() => {
    const fetchComment = async () => {
      const q = query(collection(db, "comments"), where("postTitle", "==", postTitle));
      const qSnap = await getDocs(q);
      const commento = [];
       qSnap.forEach((doc) => {
        commento.push({ postTitle: doc.postTitle, ...doc.data() })
      })
      setFetchCmt(commento); 
    }
    fetchComment();

  },[postTitle])
  const navigate = useNavigate();


  const deleteBlock  = ()=>{
    try{
      deleteDoc(doc(db,"posts",auth.currentUser.uid));
      alert("deleted");
      navigate(`/home/${username}`);
    }catch(error){
      alert(`${error.code}`)

    }
  }




  {/* posting comment section */ }
  const handleComment = async (e) => {
    e.preventDefault();
    try {
      if (comment != "") {
        await addDoc(collection(db, "comments") , {

          comment: comment,
          postTitle: showBlogData.postTitle,
          username: showBlogData.username,

        })
        setComment("");
        alert("Comment Posted")


      } else {
        alert("Please fill the comment section before posting")
      }




    } catch (error) {
      alert(`${error}`)

    }
  }

  return (
    <>
      <Navbar mode={'dark'} btnmode={'success'} username={username} method={username}/>

      <div className="showblog-page">
        
      
        <div className="pg-full">
          { showBlogData && auth.currentUser && auth.currentUser.uid === username?(<button onClick={deleteBlock}  id='delete-btn' className='btn btn-danger'>Delete</button>):(<p></p>)}
          <div className="title-section">
            <h4>Title: {postTitle}</h4>
          </div>

          <div className="blog-section">
            {showBlogData ? (
              <p>{showBlogData.post}</p>
            ) : (
              <p>Loading blog content...</p>  // Show loading message while data is being fetched
            )}
          </div>

          <div className="comment-section">
            <form onSubmit={handleComment}>
              <input onChange={(e) => setComment(e.target.value)} type='text' placeholder='Post a comment ' />
              <button type='submit' >Post</button>

            </form>
            <div className="comment-display">
              <h3 style={{marginTop:"20px"}}>Comments</h3>
              {
                fetchCmt.map((item) => {
                  return (
                    <div className="cmt">
                      <div className="cmt-left"></div>
                      <div className="cmt-right">
                        <p style={{margin:"10px 0px"}}>{item.username}<br />
                          {item.comment}</p>
                      </div>

                    </div>

                  )
                })
              }
              

              
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default ShowBlog;
