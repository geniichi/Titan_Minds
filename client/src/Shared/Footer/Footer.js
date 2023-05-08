import './Footer.css';

const Footer = () => {
    return(
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div className="col-md-4 d-flex align-items-center">
            <span className="mb-3 mb-md-0 text-muted">&copy; 2022 Company, Inc</span>
            </div>

            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li className="ms-3"><a className="text-muted fa fa-facebook p-2" href="#"></a></li>
                <li className="ms-3"><a className="text-muted fa fa-twitter p-2" href="#"></a></li>
                <li className="ms-3"><a className="text-muted fa fa-linkedin p-2" href="#"></a></li>
            </ul>
        </footer>
    )
}

export default Footer;
