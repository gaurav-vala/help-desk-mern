import { useState } from "react"
import { useSelector } from "react-redux"

const NewTicket = () => {
    const { user } = useSelector((state: any) => state.auth)
    const [name] = useState(user.name)
    const [email] = useState(user.email)
    const [product, setProduct] = useState("")
    const [description, setDescription] = useState("")

    const onSubmit = (e: any) => {
        e.preventDefault()
    }


    return (
        <>
            <section className="heading">
                <h1>Create New Ticket</h1>
                <p>Please Fillout the Form below</p>
            </section>
            <section className="form">
                <div className="form-group">
                    <label htmlFor="name">Customer Name</label>
                    <input type="text" id="name" className="form-control" value={name} disabled />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Customer Email</label>
                    <input type="email" id="email" className="form-control" value={email} disabled />
                </div>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="product">Product</label>
                        <select name="product" id="product" value={product} onChange={(e) => setProduct(e.target.value)}>
                            <option value="iPhone">iPhone</option>
                            <option value="Macbook Pro">Macbook Pro</option>
                            <option value="iMac">iMac</option>
                            <option value="iPad">iPad</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description of the Issue</label>
                        <textarea name="descriptio" id="description" className="form-control" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-block">Submit</button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default NewTicket