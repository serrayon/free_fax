import React from 'react';

function Header() {
    return (
        <header className="bg-blue-500 text-white py-4 shadow-md">
            <div className="container mx-auto text-center">
                <h1 className="text-3xl font-bold">Free Fax App</h1>
                <p className="mt-2 text-xl">Send faxes directly from your phone</p>
            </div>
        </header>
    );
}

export default Header;
