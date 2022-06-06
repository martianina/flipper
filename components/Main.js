import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebook'
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram'
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Legaltech Pioneer</h2>
          <span className="image main"><img src="/static/images/pic01.jpg" alt="" /></span>
          <p>Welcome to my world of global legal product design!</p>
          <p>I'm a full-stack developer with 7 years experience in digital asset and web3 systems design.</p>
          <p>I'm one of the world's first "legal engineers," a breed of dev who creates legally significant systems, usually using blockchains & smart contracts.</p>
          <p>I have 25 years experience in US and international legal practice and a FINRA Series 65.</p>
          <p>I've had the privilege of working with clients and partners around the world, including global transactional banks,insurers, NGOs, governments, regulators, and universities.</p> 
          <p> I've learned that technology can level the playing field for main street, so it's the competitive applications of technology for small businesses that excite me most for the future. </p>
          <p>I build systems that cross jurisdictions easily, helping businesses grow and people move freely.</p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Publications</h2>
          <span className="image main"><img src="/static/images/pic02.jpg" alt="" /></span>
          <p><h3>Distributed Ledgers, Cryptography, & Smart Contracts</h3></p>
          <p href="https://www.amazon.com/Legal-Informatics-Daniel-Martin-Katz/dp/1107142725">Legal Informatics, Cambridge University Press, Katz & Bommarito, Eds., 2021</p>
          <p><h3>Custody, Control, and Assurances: Improving Legal Operations with Blockchain</h3></p>
          <p href="https://businesslawtoday.org/2018/12/custody-control-assurances-improving-legaloperations blockchain/">American Bar Association, Business Law Today (18 December 2018)</p>
          <p><h3>Blockchain Technology Regulations: Harnessing Potential Means Enabling, Not Restricting,</h3></p>
           <p><p href="http://yalejreg.com/nc/blockchain-technology-regulations-harnessing-potential-me ans-enabling-not-restricting-by-nina-gunther-kilbride/ 
">Yale University Law School Notice & Comment (6 June 2017)</p></p>
          
          <p><h3>cryptolawyer.net</h3></p>
          <p href="http://cryptolawyer.net
">Blog, 2015-17 (6 June 2017)</p>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Projects</h2>
          <span className="image main"><img src="/static/images/pic03.jpg" alt="" /></span>
          <p><h3>Legal Engineering</h3></p>
          <p>Avert Open Source Operational Risk Management is a legal and compliance documentation system that makes it easier to launch and manage a resilent global platform using digital asset technology.</p>
          <p><h3>Opportunity Zones</h3></p>
          <p>OZs are where my passion for using tech to benefit main street businesses comes to life. <p></p>I work with partners in Opportunity Zones to maximize their access to digital growth tools and capital while still maintaining focus on what they do best.</p>
          <p><h3>Mothership USA</h3></p>
          <p>Mothership USA is a non-profit project building a sustainable residential network in US Opportunity Zones.</p>
          <p><h3>Amuseum</h3></p>
          <p>Games are the mother of invention.</p>
          <p>Being a software developer means self-teaching new technologies and techniques constantly. I like to do this with art & games.</p>
          <p>Amuseum is where I occasionally publish my favorites games and art projects. Most of these projects are adaptations of prior art from Github.</p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="#">
              <FontAwesomeIcon icon={faTwitter} />
            </a></li>
            <li><a href="#">
              <FontAwesomeIcon icon={faFacebook} />
            </a></li>
            <li><a href="#">
              <FontAwesomeIcon icon={faInstagram} />
            </a></li>
            <li><a href="#">
              <FontAwesomeIcon icon={faGithub} />
            </a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool
}

export default Main