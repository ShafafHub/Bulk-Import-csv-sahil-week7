import { useRef, useState } from "react";


function FileUpload() {
    const fileInputRef = useRef();
    const [data, setData] = useState([]);
    const [error, setError] = useState("");

    const handleImportClick = () => {
        fileInputRef.current.click();
    };

    const handleClear = () => {
        setData([]);
        setError("");
        fileInputRef.current.value = "";
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        if (!file.name.endsWith(".csv")) {
            setError("Only CSV file allowed");
            setData([]);
            return;
        }

        const reader = new FileReader();

        reader.onload = async (event) => {
            const text = event.target.result;
            const lines = text.split("\n");
            const rows = lines.slice(1);

            let validData = [];

            for (let i = 0; i < rows.length; i++) {
                const row = rows[i].trim();
                if (!row) continue;

                const [name, price] = row.split(",");

                // ❌ validations
                if (!name || name.trim() === "") {
                    setError(`Name is empty at row ${i + 2}`);
                    setData([]);
                    return;
                }

                if (!isNaN(name)) {
                    setError(`Name must be text at row ${i + 2}`);
                    setData([]);
                    return;
                }

                if (!price || price.trim() === "") {
                    setError(`Price is empty at row ${i + 2}`);
                    setData([]);
                    return;
                }

                if (isNaN(price)) {
                    setError(`Price must be number at row ${i + 2}`);
                    setData([]);
                    return;
                }

                validData.push({
                    name: name.trim(),
                    price: Number(price),
                });
            }

            // ✅ اگر همه valid باشد
            setError("");
            setData(validData);

            // 🚀 upload
            try {
                await fetch("http://localhost:5000/upload", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(validData),
                });
            } catch (err) {
                setError("Upload failed");
            }
        };

        reader.readAsText(file);
    };

    return (
        <div className="container">
            <div className="card">
                <h2>Bulk Import</h2>

                <div className="buttons">
                    <button className="importBtn" onClick={handleImportClick}>
                        Import File
                    </button>

                    <button className="clearBtn" onClick={handleClear}>
                        Clear
                    </button>
                </div>

                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    hidden
                />

                {error && <p className="error">{error}</p>}

                {data.length > 0 && (
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, i) => (
                                <tr key={i}>
                                    <td>{item.name}</td>
                                    <td>{item.price}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
}

export default FileUpload;