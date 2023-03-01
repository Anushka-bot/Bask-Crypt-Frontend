import './styles/Landing.css';
import './styles/Table.css'
import Navbar from './Navbar.js';
import Table from './Table.js';

const data = {
    header: null,
    rows: [
        ['Bitcoin', 'BTC', '$21,287.29', '-1.56%', '$404,403,025,264.19'],
        ['Ethereum', 'ETH', '$21,287.29', '-1.56%', '$404,403,025,264.19'],
        ['Cardano', 'ADA', '$21,287.29', '-1.56%', '$404,403,025,264.19'],
        ['Dogecoin', 'DOGE', '$21,287.29', '-1.56%', '$404,403,025,264.19'],
        ['Polkadot', 'DOT', '$21,287.29', '-1.56%', '$404,403,025,264.19'],
    ]
}

export default function Landing() {
  return (
    <div className='landing'>
      <Navbar />
      <Table tb={data} />
    </div>
  );
}