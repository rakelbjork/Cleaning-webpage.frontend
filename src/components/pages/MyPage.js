import { Fragment } from "react"
import { Link } from 'react-router-dom'
import { userSelector } from 'react-redux'




const Profile = () => {

    const { user, loading } = userSelector(state => state.auth)

    

    return(
        <Fragment>
            {loading ? <any /> : (
                <Fragment>
                    <metadata title={'Mina Sidor'} />

                    <h2 className="mt-4 ml-4">Mina Sidor</h2>
                    <div className="row justify-content-around mt-4 user-info">
                        <div className="col-4 col-md-3">
                            <figure className='avatar avatar-profile'>
                                <img className="rounded-circle img-fluid" src={user.avatar.url} 
                                alt={user.name} />
                            </figure>
                            <Link to="/me/update" id="edit_profile" class="btn btn-primary btn-block my-4">
                                Redigera Profil
                            </Link>

                            <Link to="/phonenumber/update" id="edit_number" className="btn btn-primary btn-block mt-2">
                                Redigera Telefonnummer
                            </Link>


                        </div>
                        <div className="col-4 col-md-5">
                            <h4>Fullständiga namn: </h4>
                            <p>{user.name}</p>
                            
                            <h4>Email adress: </h4>
                            <p>{user.email}</p>

                            <h4>Telefonummer: </h4>
                            <p>{user.phonenumber}</p>

                            
                            {user.role !== 'admin' && (!
                            <Link to="/orders/me" className="btn btn-danger btn-block mt-5">
                                Mina ordrar
                            </Link>
                                
                            
                            )}

                            <Link to="/password/update" className="btn btn-primary btn-block mt-3">
                                Byt Lösenord
                            </Link>
                        </div>
                    </div> 
                </Fragment>
            )
        }

        </Fragment>
        
        
    )
}

export default Profile