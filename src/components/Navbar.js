import './styles/Navbar.css';

export default function Navbar() {
    return (
        <div className='navbar'>
            <h2>BaskCrypt</h2>
            <ul>
                <li>
                    {/* TODO: Buttons */}
                    NFT
                </li>
                <li>
                    {/* TODO: Buttons */}
                    Products
                </li>
                <li>
                    {/* TODO: Buttons */}
                    Learn
                </li>
                <li>
                    {/* TODO: Buttons */}
                    Company
                </li>
                <li>
                    <button type="button">
                        Prices
                    </button>
                </li>
            </ul>
        </div>
    )
}