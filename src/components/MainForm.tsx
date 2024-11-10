import React, { useState } from 'react';

const MainForm: React.FC = () => {
    const [faxNumber, setFaxNumber] = useState('');
    const [file, setFile] = useState<File | null>(null);

    const handleFaxNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFaxNumber(e.target.value);
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle the form submission logic (e.g., send fax request)
        console.log(faxNumber, file);
    };

    return (
        <div className="flex justify-center p-6">
            <form onSubmit={handleSubmit} className="space-y-6 max-w-lg w-full">
                <div className="mb-4">
                    <label htmlFor="faxNumber" className="block text-lg font-semibold mb-2">
                        Fax Number
                    </label>
                    <input
                        type="text"
                        id="faxNumber"
                        value={faxNumber}
                        onChange={handleFaxNumberChange}
                        className="w-full p-3 border border-gray-300 rounded-md"
                        placeholder="Enter fax number"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="file" className="block text-lg font-semibold mb-2">
                        Upload File
                    </label>
                    <input
                        type="file"
                        id="file"
                        onChange={handleFileChange}
                        className="w-full p-3 border border-gray-300 rounded-md"
                    />
                </div>

                <div className="mt-4">
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-md font-semibold"
                    >
                        Send Fax
                    </button>
                </div>
            </form>
        </div>
    );
};

export default MainForm;
