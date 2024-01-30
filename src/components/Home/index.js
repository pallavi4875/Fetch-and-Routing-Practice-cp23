import './index.css'
import {userInfo} from 'os'
import BlogsList from '../BlogList'

const Home = () => (
  <div className="home-container">
    <userInfo />
    <BlogsList />
  </div>
)

export default Home
