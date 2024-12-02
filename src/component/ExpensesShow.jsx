import { useEffect, useState } from "react"
import axios from "axios"

export function ExpensesShow() {
    const [income, setincome] = useState([]);

    async function fetch() {
        let res = await axios("https://reactevalution1-default-rtdb.asia-southeast1.firebasedatabase.app/expenses.json");
        let arr = [];
        for (let key in res.data) {
            arr.push({ id: key, ...res.data[key] });
        }
        setincome([...arr]);
    }

    useEffect(() => {
        fetch();
    }, []);

    const gridStyle = {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", // Responsive columns
        gap: "20px", // Spacing between cards
        padding: "20px",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
    };

    const cardStyle = {
        padding: "15px",
        backgroundColor: "white",
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "0px 4px 8px rgba(0,0,0,0.1)", // Subtle shadow
        transition: "transform 0.2s ease, box-shadow 0.2s ease", // Smooth hover effect
    };

    const cardHoverStyle = {
        transform: "scale(1.05)", // Slightly enlarge on hover
        boxShadow: "0px 6px 12px rgba(0,0,0,0.2)", // More pronounced shadow
    };

    const textStyle = {
        margin: "5px 0",
        fontSize: "16px",
        color: "#333",
    };

    return (
        <div style={gridStyle}>
            {income.map((item) => (
                <div
                    key={item.id}
                    style={cardStyle}
                    onMouseEnter={(e) => {
                        e.target.style.transform = cardHoverStyle.transform;
                        e.target.style.boxShadow = cardHoverStyle.boxShadow;
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.transform = cardStyle.transform;
                        e.target.style.boxShadow = cardStyle.boxShadow;
                    }}
                >
                    <p style={{ ...textStyle, fontWeight: "bold" }}>{item.amount}</p>
                    <p style={textStyle}><strong>Category:</strong> {item.category}</p>
                    <p style={textStyle}><strong>Date:</strong> {item.date}</p>
                </div>
            ))}
        </div>
    );
}
