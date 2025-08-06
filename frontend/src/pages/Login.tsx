import { useEffect, useState } from "react"
import { FaSignInAlt } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { login, reset } from '../features/auth/authSlice'
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import Spinner from "../components/Spinner"
import { AppDispatch } from "../app/store"

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const { email, password, } = formData

  const dispath = useDispatch<AppDispatch>()
  const navigate = useNavigate()
  const { user, isLoading, isSuccess, isError, message } = useSelector((state: any) => state.auth)

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    // Redirect when logged in
    if (isSuccess || user) {
      navigate('/')
    }

    dispath(reset())
  }, [isError, isSuccess, user, message, navigate, dispath])

  const onChange = (e: any) => {
    setFormData((prev) => ({
      ...prev, [e.target.name]: e.target.value
    }))
  }

  const onSubmit = (e: any) => {
    e.preventDefault()

    const userData = {
      email, password
    }

    dispath(login(userData))
  }

  if (isLoading) {
    <Spinner />
  }

  return (
    <>
      <section className="heading">
        <h1><FaSignInAlt /> Login</h1>
        <p>Please Login to get support</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input type="email" className="form-control" name="email" id="email" value={email} onChange={onChange} placeholder="Enter Your Email" required />
          </div>
          <div className="form-group">
            <input type="password" className="form-control" name="password" id="password" value={password} onChange={onChange} placeholder="Enter Your Password" required />
          </div>
          <div className="form-group">
            <button className="btn btn-block">Submit</button>
          </div>
        </form>
      </section>

    </>
  )
}

export default Login
