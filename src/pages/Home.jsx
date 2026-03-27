import { useState } from "react";
import Navbar from "../components/Navbar";
import FileUpload from "../components/FileUpload";
import PreviewTable from "../components/PreviewTable";
import UploadedTable from "../components/UploadedTable";
import Result from "../components/Result";
import Spinner from "../components/Spinner";
import { uploadCSV, getProducts } from "../services/api";

function Home({ onLogout }) {
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [result, setResult] = useState(null);
    const [uploaded, setUploaded] = useState(false);
    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");

    const handleUpload = async () => {
        if (!file) {
            alert("⚠️ Please choose a valid file first");
            return;
        }

        setLoading(true);

        const text = await file.text();
        const res = await uploadCSV(text);

        setResult(res.data);
        setUploaded(true);
        setLoading(false);
    };


    const handleShow = async () => {
        const res = await getProducts();
        setProducts(res.data);
    };

    // const handleClear = () => {
    //     setFile(null);
    //     setPreview(null);
    //     setResult(null);
    //     setProducts(null);
    //     setUploaded(false);
    // };
    const handleClear = () => {
        setFile(null);
        setPreview(null);
        setError("");
    };

    return (
        <div>
            <Navbar
                onUpload={handleUpload}
                onClear={handleClear}
                onShow={handleShow}
                onLogout={onLogout}
                uploaded={uploaded}
            />
            <FileUpload
                setFile={setFile}
                setPreview={setPreview}
                setError={setError}
            />

            {error && <p className="error">{error}</p>}

            <PreviewTable data={preview} />

            {error && <p className="error">{error}</p>}

            <FileUpload setFile={setFile} setPreview={setPreview} />
            <PreviewTable data={preview} />

            {loading && <Spinner />}

            <Result data={result} />
            <UploadedTable data={products} />
        </div>
    );
}

export default Home;