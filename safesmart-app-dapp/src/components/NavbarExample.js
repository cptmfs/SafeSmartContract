import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
const isLoggedIn =false;
const walletaddress = 0xdd;
const balance = 1.8 ; 
function NavbarExample() {
  return (
    <Navbar className="bg-transparent">
      <Container>
        <Navbar.Brand  style={{ color: 'white' }} href="#home">Muhammed Ferit Simsek Dapp</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
            <Navbar.Text style={{ color: 'white' }}>
            {isLoggedIn ? "Balance = " + balance+" eth" : "Giriş yapın"}
            </Navbar.Text>  
          <Navbar.Text style={{ color: 'white' }}>
          {isLoggedIn ? "Signed in as = " + walletaddress :"N/A"}
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarExample;