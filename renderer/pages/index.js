
import Workspace from "../components/workspace"
import Members from '../components/members'
const Home = () => {
    const MemberList = [
        {
            id: '123',
            status: 'available',
            name: 'Ravi Krishna',
            waved: true,
        }, {
            id: 'asd',
            status: 'away',
            name: 'Siva Krishna',
            waved: false,
        }, {
            id: 'jhu',
            status: 'busy',
            name: 'Achuth Hadnoor',
            waved: false,
        }, {
            id: 'kol',
            status: '😶',
            name: 'Hanuman',
            waved: false,
        }, {
            id: 'plo',
            status: '🏃‍♂️',
            name: 'Akhil',
            waved: false,
        },
    
    ]
    
    return (
        <div className="container">
        <Workspace/>
        <Members MemberList={MemberList}/>
        </div>
    )
}

export default Home;
