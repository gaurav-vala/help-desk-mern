import { useEffect, useState } from "react"
import { FaUser } from "react-icons/fa"
import { toast } from "react-toastify"
import { useDispatch, useSelector } from "react-redux"
import { register, reset } from '../features/auth/authSlice'
import { useNavigate } from "react-router-dom"
import Spinner from "../components/Spinner"
import { AppDispatch } from "../app/store"

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  })

  const { name, email, password, password2 } = formData

  const dispath = useDispatch<AppDispatch>()
  const navigate = useNavigate()

  const { user, isLoading, isSuccess, message, isError } = useSelector((state: any) => state.auth)

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

    if (password !== password2) {
      toast.error('Passwords do not match')
    } else {
      const userData = {
        name, email, password
      }

      dispath(register(userData))
    }
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className="heading">
        <h1><FaUser /> Register</h1>
        <p>Please Create an Account</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input type="text" className="form-control" name="name" id="name" value={name} onChange={onChange} placeholder="Enter Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" className="form-control" name="email" id="email" value={email} onChange={onChange} placeholder="Enter Your Email" required />
          </div>
          <div className="form-group">
            <input type="password" className="form-control" name="password" id="password" value={password} onChange={onChange} placeholder="Enter Your Password" required />
          </div>
          <div className="form-group">
            <input type="password" className="form-control" name="password2" id="password2" value={password2} onChange={onChange} placeholder="Confirm Your Password" required />
          </div>
          <div className="form-group">
            <button className="btn btn-block">Submit</button>
          </div>
        </form>
      </section>

    </>
  )
}

export default Register
