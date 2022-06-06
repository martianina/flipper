import PropTypes from 'prop-types';

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">&copy; Nina Kilbride</p>
        <p href="">Privacy Policy </p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
