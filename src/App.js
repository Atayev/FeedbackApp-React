
import {BrowserRouter as Router,Route, Routes} from "react-router-dom"
import Header from "./components/header"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
import AboutPage from "./pages/AboutPage"
import { FeedbackProvider } from "./context/FeedbackContext"
import AboutIconLink from "./components/AboutIconLink"


function App() {
    return (
        <FeedbackProvider>
        <Router>
        <Header />
        
        <div className="container">
            <Routes>
            <Route exact path="/"
             element={
                <>
                <FeedbackForm />
                <FeedbackStats />
                <FeedbackList  />
                </>
            }>
            </Route>
            <Route path="/about" element={<AboutPage />}/>
           </Routes>
         
        </div>
         <AboutIconLink />
        </Router>
        </FeedbackProvider>
        
    ) }

    
    export default App





    
    // const title = "blog post"
    // const body = "this is my blog post"
    // const comments = [
    //     {id: 1,text: "comment one"},
    //     {id: 2,text: "comment two"},
    //     {id: 3,text: "comment three"}
    // ]

    // const loading= false
    // const showComments=true

    // const commentBlock = (
    //     <div className="comments">
    //     <h3>comments ({comments.length})</h3>
    //     <ul>
    //         {comments.map((comment, index) => (
    //             <li key={index}>{comment.text}</li>
    //             ))}
    //         </ul>
    //     </div> 
    //     )

    // if (loading) return <h1>Loading ... </h1>

    // return (
    // <div className="container">
    //     <h1>{title.toUpperCase()}</h1>
    //     <p>{body}</p>
    //     {/*  if show comments is true or false there is no else operator in &&, if you need else operator in ternary just put ?(&&)* (using comment block variable to check condition!)*/}

    //     {showComments && commentBlock} 
        
        
    // </div> )
    
    
        
    

