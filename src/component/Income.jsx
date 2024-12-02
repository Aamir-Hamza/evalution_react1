import { useState } from "react"
import axios from "axios"
import { IncomeShow } from "./IncomeShow";
export function Income() {
    const [data, setdata] = useState({
        amount: "",
        description: "",
        date: "",
    });

    function inputhandler(e) {
        const { name, value } = e.target;
        setdata({ ...data, [name]: value });
    }

    async function handleadd() {
        await axios.post("https://reactevalution1-default-rtdb.asia-southeast1.firebasedatabase.app/income.json", data);
        setdata({
            amount: "",
            description: "",
            date: "",
        });
    }

    const containerStyle = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "50px",
        padding: "20px",
        backgroundColor: "#f0f8ff",
        borderRadius: "10px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        width: "90%",
        maxWidth: "500px",
        margin: "auto",
    };

    const inputStyle = {
        padding: "10px",
        margin: "10px 0",
        width: "100%",
        borderRadius: "5px",
        border: "1px solid #ccc",
        fontSize: "16px",
        boxSizing: "border-box",
    };

    const buttonStyle = {
        backgroundColor: "#4CAF50",
        color: "white",
        border: "none",
        padding: "10px 15px",
        borderRadius: "5px",
        fontSize: "16px",
        cursor: "pointer",
        marginTop: "10px",
        width: "100%",
    };

    const buttonHoverStyle = {
        backgroundColor: "#45a049",
    };

    const titleStyle = {
        textAlign: "center",
        marginTop: "20px",
        fontSize: "24px",
        color: "#333",
    };

    return (
        <>
            <h1 style={titleStyle}>Enter Your Income List Here</h1>
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
            <IncomeShow />
        </>
    );
}
