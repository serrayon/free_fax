import React, { useState } from 'react';

function MainForm() {
    const [faxNumber, setFaxNumber] = useState('');
    const [file, setFile] = useState<File | null>(null);


    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle fax submission logic here
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
            <div className="mb-4">
                <label htmlFor="faxNumber" className="block text-lg font-medium text-gray-700">Fax Number</label>
                <input
                    id="faxNumber"
                    type="text"
                    value={faxNumber}
                    onChange={(e) => setFaxNumber(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter fax number"
                    required
                />
            </div>

            <div className="mb-4">
                <label htmlFor="file" className="block text-lg font-medium text-gray-700">Upload File</label>
                <input
                    id="file"
                    type="file"
                    onChange={handleFileChange}
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    required
                />
            </div>

            <button
                type="submit"
                className="w-full py-2 mt-4 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition"
            >
                Send Fax
            </button>
        </form>
    );
}

export default MainForm;
