
const LoginForm = () => {
    return (
        <div
            className="container-fluid d-flex justify-content-center align-items-center vh-100"
            style={{
                backgroundImage: "url('https://via.placeholder.com/1920x1080')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundColor : 'white',
                backgroundBlendMode: 'overlay',// Overlay to blend with the image
                width: '100%',          // Use 70% of the container's width
                maxWidth: '450px'    // Restrict the card to a maximum width of 400px
        }}
        >
            <div className="card p-4 shadow-lg border-0"
                style={{
                    width: '100%',
                    maxWidth: '500px',
                    backgroundColor: 'white',
                    borderRadius: '15px'
                }}
            >
                <form>
                    <h4 className="card-title text-center mb-4 mt-2" style={{color: 'black'}}>Login </h4>

                    {/* Email Field */}
                    <div className="form-group mb-3">
                        <label htmlFor="inputEmail3" className="form-label" style={{color: '#343a40'}}>Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="inputEmail3"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    {/* Password Field */}
                    <div className="form-group mb-3">
                        <label htmlFor="inputPassword3" className="form-label"
                               style={{color: '#343a40'}}>Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="inputPassword3"
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    {/* Checkbox */}
                    <div className="form-group mb-3">
                        <div className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id="gridCheck1"
                            />
                            <label className="form-check-label" htmlFor="gridCheck1" style={{color: '#343a40'}}>
                                Remember me
                            </label>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="d-grid">
                        <button type="submit" className="btn btn-dark">Sign in</button>
                    </div>

                    {/* Sign Up Link */}
                    <p className="text-center mt-4">
                        <span style={{color: '#6c757d'}}>Not registered? </span>
                        <a href="#" style={{textDecoration: 'none', color: 'black'}}>Sign up</a>
                    </p>
                </form>
            </div>
        </div>


    );
};

export default LoginForm;