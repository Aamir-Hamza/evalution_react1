import {useState}from "react"
import axios from "axios"
import { ExpensesShow } from "./ExpensesShow";
export function Expenses() {
    const [data, setdata] = useState({
        amount: "",
        description: "",
        date: "",
        category: "",
    });

    function inputhandler(e) {
        const { name, value } = e.target;
        setdata({ ...data, [name]: value });
    }

    async function handleadd() {
        await axios.post("https://reactevalution1-default-rtdb.asia-southeast1.firebasedatabase.app/expenses.json", data);
        setdata({
            amount: "",
            description: "",
            date: "",
            category: "",
        });
    }

    const containerStyle = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "50px",
        backgroundColor: "#f9f9f9",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
        width: "500px",
        margin: "auto",
    };

    const inputStyle = {
        padding: "10px",
        margin: "10px 0",
        width: "100%",
        borderRadius: "4px",
        border: "1px solid #ddd",
        boxSizing: "border-box",
        fontSize: "16px",
    };

    const buttonStyle = {
        backgroundColor: "#4CAF50",
        color: "white",
        border: "none",
        padding: "10px 20px",
        borderRadius: "4px",
        fontSize: "16px",
        cursor: "pointer",
        marginTop: "10px",
    };

    const buttonHoverStyle = {
        backgroundColor: "#45a049",
    };

    return (
        <>
            <h1 style={{ textAlign: "center", marginTop: "30px", fontSize: "24px", color: "#333" }}>
                Enter Your Expenses List Here
            </h1>
            <div style={containerStyle}>
                <input
                    type="text"
                    placeholder="Amount"
                    value={data.amount}
                    name="amount"
                    style={inputStyle}
                    onChange={inputhandler}
                />
                <input
                    type="text"
                    placeholder="Description"
                    name="description"
                    value={data.description}
                    style={inputStyle}
                    onChange={inputhandler}
                />
                <input
                    type="text"
                    placeholder="Category"
                    value={data.category}
                    name="category"
                    style={inputStyle}
                    onChange={inputhandler}
                />
                <input
                    type="date"
                    placeholder="Date"
                    value={data.date}
                    name="date"
                    style={inputStyle}
                    onChange={inputhandler}
                />
                <button
                    style={buttonStyle}
                    onMouseEnter={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
                    onMouseLeave={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
                    onClick={handleadd}
                >
                    Add Income
                </button>
            </div>
            <ExpensesShow />
        </>
    );
}
