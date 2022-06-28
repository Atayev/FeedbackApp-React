import Card from "../components/shared/Card"
import {Link} from "react-router-dom"
function AboutPage() {
  return (
    <Card className="about">
        <h1>About this Project</h1>
        <p>This is React app to leave feedback</p>

        <p>
            <Link to="/">Back to home</Link>
        </p>
    </Card>
  )
}

export default AboutPage