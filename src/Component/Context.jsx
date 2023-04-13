import { createContext, useState } from "react";

export const GlobalData = createContext()

const DataProvider = ({ children }) => {
    const [products, setproducts] = useState([])
    const [addtocart, setAddtocart] = useState([])

    return <GlobalData.Provider value={{ products, setproducts, addtocart, setAddtocart }}>
        {children}
    </GlobalData.Provider>
}

export default DataProvider;