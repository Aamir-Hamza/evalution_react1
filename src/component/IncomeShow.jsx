import { useEffect, useState } from "react"
import axios from "axios"

export function IncomeShow() {
    const [income, setincome] = useState([]);

    async function fetch() {
        let res = await axios("https://reactevalution1-default-rtdb.asia-southeast1.firebasedatabase.app/income.json");
        let arr = [];
        for (let key in res.data) {
            arr.push({ id: key, ...res.data[key] });
        }
        setincome([...arr]);
    }

    useEffect(() => {
        fetch();
    }, []);

    const containerStyle = {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", // Responsive layout
        gap: "20px", // Spacing between cards
        padding: "20px",
        maxWidth: "800px", // Maximum container width
        margin: "30px auto", // Center the container
        backgroundColor: "#f9f9f9", // Light background
        borderRadius: "10px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow
    };

    const cardStyle = {
        padding: "15px",
        backgroundColor: "white",
        border: "1px solid #ddd",
        borderRadius: "10px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Card shadow
        transition: "transform 0.2s ease, box-shadow 0.2s ease", // Smooth transition
    };

    const cardHoverStyle = {
        transform: "scale(1.05)", // Slight zoom on hover
        boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.15)", // Stronger shadow on hover
    };

    const textStyle = {
        margin: "10px 0",
        fontSize: "16px",
        color: "#333",
        lineHeight: "1.5", // Improve readability
    };

    return (
        <div style={containerStyle}>
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
                    <p style={{ ...textStyle, fontWeight: "bold", fontSize: "18px" }}>
                        Amount: {item.amount}
                    </p>
                    <p style={textStyle}>
                        <strong>Description:</strong> {item.description}
                    </p>
                    <p style={textStyle}>
                        <strong>Date:</strong> {item.date}
                    </p>
                </div>
            ))}
        </div>
    );
}
