function Navbar({ onUpload, onClear, onShow, onLogout, uploaded }) {
    return (
        <div className="navbar">
            <h3>Bulk Import</h3>
            <div>
                {/* <button onClick={onUpload}>Upload</button>
                <button onClick={onClear}>Clear</button> */}
                <button disabled={!uploaded} onClick={onShow}>
                    Show Uploaded
                </button>
                <button onClick={onLogout}>Logout</button>
            </div>
        </div>
    );
}
export default Navbar;