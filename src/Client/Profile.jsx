import { Fragment } from "react"

const Profile = () => {

    const { client, loading } = clientSelector(state => state.auth)

    return(
        <Fragment>
            {loading ? <Loader /> : (
                <Fragment>
                    <metadata title={'Mina Sidor'} />

                    <h2 class="mt-4 ml-4">Mina Sidor</h2>
                    <div class="row justify-content-around mt-4 client-info">
                        <div class="col-4 col-md-3">
                            <figure class='avatar avatar-profile'>
                                <img class="rounded-circle img-fluid" src='' alt='' />
                            </figure>
                            <a href="#" id="edit_profile" class="btn btn-primary btn-block my-4">
                                Redigera Profil
                            </a>
                        </div>
                        <div class="col-4 col-md-5">
                            <h4>Fullständiga namn</h4>
                            <p>Testar Testsson</p>
                            
                            <h4>Epost adress</h4>
                            <p>TestTestsson@gmail.com</p>

                            <a href="#" class="btn btn-danger btn-block mt-5">
                                Mina ordrar
                            </a>

                            <a href="#" class="btn btn-primary btn-block mt-3">
                                Byt Lösenord
                            </a>
                        </div>
                    </div> 
                </Fragment>
            )
        }

        </Fragment>
        
        
    )
}

export default Profile