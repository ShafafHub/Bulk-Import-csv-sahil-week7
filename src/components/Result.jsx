function Result({ data }) {
    if (!data) return null;

    const downloadErrors = () => {
        const csv = data.errors.map(e => `${e.row},${e.message}`).join("\n");
        const blob = new Blob([csv]);
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = "errors.csv";
        a.click();
    };

    return (
        <div>
            <p>Success: {data.successCount}</p>
            <p>Errors: {data.errorCount}</p>

            <button onClick={downloadErrors}>Download Errors</button>
        </div>
    );
}
export default Result;