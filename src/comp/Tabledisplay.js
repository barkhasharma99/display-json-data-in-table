import React from 'react'

class Tabledisplay extends React.Component {
    constructor (props) {
        super(props)
        this.state ={
            list:[]
        }

        this.CallAPI = this.CallAPI.bind(this)
        this.CallAPI();
    }
   
      CallAPI(){
    //fatch data


    fetch("https://reqres.in/api/users?page=2").then(
        (Response)=>Response.json()
    ).then((data)=>{
        console.log(data)
        this.setState({
            list:data.data
        })
    })
      }
    render() {

        let tb_data = this.state.list.map((item) => {
            return(
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.first_name}</td>
                    <td>{item.last_name}</td>
                    <td>{item.email}</td>
                    <td>
                        <button className='btn btn-danger'>Remove</button>
                    </td>
                </tr>
            )
        })
        return(


            <div  className='container'>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>F_name</th>
                            <th>L_name</th>
                            <th>Email</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tb_data}
                    </tbody>
                </table>


            </div>
        )
    }
}

export default Tabledisplay;
