import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

export const useAuthStatus = () => {
    const [loggedIn, setLoggeedIn] = useState(false)
    const [checkingStatus, setCheckingStatus] = useState(true)

    const { user } = useSelector((state: any) => state.auth)

    useEffect(() => {
        if (user) {
            setLoggeedIn(true)
        } else {
            setLoggeedIn(false)
        }
        setCheckingStatus(false)
    }, [user])

    return { loggedIn, checkingStatus }
}
