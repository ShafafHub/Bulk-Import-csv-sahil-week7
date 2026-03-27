function UploadedTable({ data }) {
    if (!data) return null;

    return (
        <div>
            <h3>Uploaded Products</h3>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((p, i) => (
                        <tr key={i}>
                            <td>{p.name}</td>
                            <td>{p.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default UploadedTable;