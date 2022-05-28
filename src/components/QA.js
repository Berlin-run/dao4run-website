import Container from "react-bootstrap/Container";
import Accordion from 'react-bootstrap/Accordion';
function QA() {
  return (
    <>
      <Container fluid className="text-center" id="qa">
        <h1>Q&A</h1>
      </Container>
      <Container className="text-left">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>社区使用什么平台？</Accordion.Header>
            <Accordion.Body>
              <p>Discord</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>如何使用门票？</Accordion.Header>
            <Accordion.Body>
              <p>购买NFT门票后在Discord门票验证频道连接钱包即可验证并加入社区。</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>NFT 门票是在什么平台mint？</Accordion.Header>
            <Accordion.Body>
              <p>NFT门票会在币安链mint，可以在多数主流平台交易。</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>如何获取到分成？</Accordion.Header>
            <Accordion.Body>
              <p>智能合约中已经写明后续收益的20%会自动以BNB的形式平均分给所有的NFT持有者。</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>门票是否可以交易？</Accordion.Header>
            <Accordion.Body>
              <p>门票可以在任何支持BSC智能链的NFT交易平台进行交易。目前基本所有主流平台均支持BSC智能链。</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>如何使用门票？</Accordion.Header>
            <Accordion.Body>
              <p>我们的运营只负责用卖NFT拿来的钱去找各路大牛，并无其他的运营策略，团队一共就仨人，平日还得上班，做好活动就足够了。</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header>是否有地板价？</Accordion.Header>
            <Accordion.Body>
              <p>第一次发售的价格为0.1BNB约等于240人民币左右。由于是我们是DAO社区，后面我们的团队和社区共同努力，让社区更有价值，让之后的发售价格都高于这个价格，也能让持有者的门票升值。</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7">
            <Accordion.Header>如何使用门票？</Accordion.Header>
            <Accordion.Body>
              <p>目前是不会的，我们的合约里保证了NFT的单一性，除了编号，每个NFT没有任何实质的区别。</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="8">
            <Accordion.Header>NFT门票出售之后是否还能访问社区？</Accordion.Header>
            <Accordion.Body>
              <p>当钱包中无法识别到NFT门票之后的一段时间内会被移除访问社区的权限。</p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="9">
            <Accordion.Header>既然都是DAO了 为什么还有运营团队？</Accordion.Header>
            <Accordion.Body>
              <p>我们在初期负责项目活动的组织，我们希望之后社区有成员站出来自己组织活动。并且我们负责维护项目相关的服务和网站。运营团队也都各自持有一张门票，也是社区的一份子。</p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </>
  );
}
export default QA;
