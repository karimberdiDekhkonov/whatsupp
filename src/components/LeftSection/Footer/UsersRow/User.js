import './User.css'

function User(){
        return <div className='User bg-light d-flex justify-content-between gap-2'>
            <div className='img-container rounded-circle'>
                <img src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=2000" alt="photo" />
            </div>
            <div className='right-container'>
                <div className="name d-flex justify-content-between">
                    <div>Kevin</div>
                    <div className='min'>01/12/2022</div>
                </div>
                <div className="message d-flex gap-2">
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="seen bi bi-check2-all" viewBox="0 0 16 16">
                        <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z"/>
                        <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708z"/>
                    </svg>
                    </div>
                    <div>
                      How's it going?
                    </div>
                </div>
            </div>
        </div>
    }

export default User;