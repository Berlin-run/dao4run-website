import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image"
import profile1 from "../static/img/berlin.jpeg"
import profile2 from "../static/img/Daniel.png"
import profile3 from "../static/img/ada.jpeg"
function About() {
  return (
    <>
      <Container fluid className="bluebg" id="about">
        <Container fluid className="text-center">
          <h1>团队成员</h1>
        </Container>
        <Container>
          <Row>
            <Col>
              <Container className="text-center">
                <Image src={profile1} roundedCircle className="profile"/> 
              </Container>
              <p>项目发起人/硅谷程序员/WEB3领域摸爬滚(挨)打多年。在美十年，希望能帮助到想要润出来的人！</p>
            </Col>
            <Col>
              <Container className="text-center">
                <Image src={profile2} roundedCircle className="profile"/> 
              </Container>
              <p>资深solidity工程师/多年WEB3开发经验。项目主要工程师。 </p>
            </Col>
            <Col>
              <Container className="text-center">
                <Image src={profile3} roundedCircle className="profile"/> 
              </Container>
              <p>运营大牛，成功运营了多个NFT项目。主要负责项目初期的项目组织和运营。 </p>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
export default About;
