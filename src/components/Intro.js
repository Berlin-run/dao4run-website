import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';
import { PieChart } from 'react-minimal-pie-chart';
function Intro() {
  return (

    <>
      <Container fluid className="text-center bluebg">
        <p>国外的生活<red>到底是什么样的？</red> 我到底要不要出去</p>
        <p>有人说出去<red>生活水平下降</red>，有人说随便刷刷题年薪<red>20万美金</red>？</p>
        <p>都说要<red>转码</red>，写代码真的就是最优解么？ </p>
        <p>到底哪个国家更好？到底用什么方式出去最有效？</p>
        <p>润学不是随便说说，我们邀请在国外生活多年的专家认真的回答你的问题。</p>
        <p>咱中国人不仅不骗中国人！还要报团取暖，互帮互助！</p>
        <h2>我们提供一个 平等 民主 透明 专业 的平台</h2>
        <h2>让所有人能润出去 有<h2-red>选择自己生活的权利</h2-red></h2>
        <Container className="text-center">
          <Row>
            <Col></Col>
            <Col><a href="https://twitter.com/Dao4Run" target="_blank"><TwitterButton></TwitterButton></a></Col>
            <Col><a href='https://discord.gg/qZH7C3sXu5' target="_blank"><DiscordButton></DiscordButton></a></Col>
            <Col></Col>
          </Row>
        </Container>
      </Container>

      <Container fluid className="whitebg">
        <Container className="text-center">
          <h1>社区能为成员提供什么?</h1>
        </Container>
        <Container>
          <ul className='list'>
            <li>社区分析分享活动，邀请资深移民顾问，学术大牛，分享移民经验和海外生活。</li>
            <li>社区公开活动，所有人均可参加的公开润学研讨活动，只有会员才能进行发言。</li>
            <li>获取一手的海外热门国家移民/留学信息。</li>
            <li>交流留学/移民经验的平台，避免当韭菜！</li>
          </ul>
        </Container>
      </Container>

      <Container fluid className="bluebg">
        <Container className="text-center">
          <h2>什么样的平台能做到平等 民主 透明呢？</h2>
          <h1>DAO社区！ </h1>
          <h2> 为什么选择DAO社区？ 什么是DAO？和普通社区有什么区别呢？</h2>
          <h2>DAO全称Decentralized Autonomous Organization 去中心化自治社区</h2>
        </Container>
        <Container>
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header><p>什么是去中心化自治社区?</p></Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>DAO 是与全球志同道合之士共同工作的安全有效的方式。</li>
                  <li>可以将 DAO 视作由成员集体所有和共同管理的互联网原生企业。 DAO 拥有内置资产，未经该组织批准，任何人都无权动用。 DAO 通过提案和投票来决策，以确保组织内的每个人都有发言权。</li>
                  <li>不会有仅凭心血来潮就随意授权支出的 CEO，也不会有徇私枉法操纵账簿的 CFO。 一切行为公开，有关开支的规则都会通过代码编入 DAO 组织。</li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header><p>去中心化自治社区和传统社区有什么不同?</p></Accordion.Header>
              <Accordion.Body>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>去中心化自治组织 (DAO)</th>
                      <th>传统组织</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>通常是平等的，并且完全民主。</td>
                      <td>通常等级鲜明。</td>
                    </tr>
                    <tr>
                      <td>需要成员投票才能实施任何更改。</td>
                      <td>可能部分人就能进行决策，也可能投票表决，具体取决于组织结构。</td>
                    </tr>
                    <tr>
                      <td>不需要可信的中间人就可以自动计算投票、执行结果。</td>
                      <td>如果允许投票，则在内部计票，投票结果必须由人工处理。</td>
                    </tr>
                    <tr>
                      <td>以去中心化方式自动提供服务（例如慈善基金的分配）。</td>
                      <td>需要人工处理或自动集中控制，易受操纵。</td>
                    </tr>
                    <tr>
                      <td>所有活动公开透明。</td>
                      <td>活动通常是私密进行，不向公众开放。</td>
                    </tr>
                  </tbody>
                </Table>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
        <p>以上均来自以太坊对于DAO的解释</p>
      </Container>



      <Container fluid className="text-center whitebg" id="ticket">
        <h1>如何加入</h1>
        <h2>NFT门票</h2>
        <h2>说起NFT 懂爷们都来了 </h2>
        <h2>哎呦 不就是白名单，盲盒，空投么？把QQ空间那点东西拿出来卖？有意思么？</h2>
        <h2>作为一个典型NFT项目 上述这些我们</h2>
        <h2-red>统统没有</h2-red>
        <h2>我们要让NFT回归本心 作为电子门票</h2>
        <h2>让持有者有权利免费参与任何社区活动</h2>
        <h2>没有门槛的社区，只能如<h2-red>贴吧</h2-red>一般混乱。</h2>
        <h2>唯有一定的筛选，才能让社区像1024 和 NGA一样<h2-red>秩序井然</h2-red>！</h2>
      </Container>




      <Container fluid className="text-center bluebg">
        <h1>NFT门票</h1>
        <h2>我们发售的门票<h2-red>有且只有一种类型</h2-red>，所有持票人享有相同的权利。</h2>
        <h2>所有社区事务投票决定，公平 公平 还是他妈的公平。</h2>
        <h2>社区门票自由交易，成功润出之后，可以将门票挂在市场上售卖。</h2>
        <h2>随着社区活动的增加，门票价格会逐步提高，门票收益的<h2-red>20%</h2-red>会平均分给所有持有者，买了就是社区的股东。</h2>
        <h2>首次发售价格为0.1BNB，约合人民币250元（2022年6月）。</h2>
      </Container>
      <Container fluid className="whitebg">
          <Container className="text-center">
          <h1>NFT收益分配</h1>
          <br></br>
          <PieChart
            className='pie'
            label={(props) => { return props.dataEntry.title;}}
            data={[{ title: "社区活动资金", value: 50, color: "#7697ef" },
                  { title: "分红", value: 20, color: "#df335b" },
                  { title: "团队成员开销", value: 20, color: "#86f332" },
                  { title: "社区奖励", value: 10, color: "#ff0000" }
            ]}
          />
        </Container>
        <ul className='list'>
          <li><red>社区活动资金</red>用于聘请顾问，业界大牛来社区内进行讲座。</li>
          <li><red>分红</red>会将下次门票增发之后的收益的20%平均分给当前所有门票持有者。</li>
          <li><red>团队成员开销</red>用于支付团队费用，我们也有服务器，也有人联系业界大牛。</li>
          <li><red>社区奖励</red>用于奖励优秀的提案人。</li>
        </ul>
      </Container>

      
      <Container fluid className="text-center bluebg" id="plan">
        <h1>社区运营</h1>
        <Container>
          <Row>
            <Col>
              <h2>Step01</h2>
              <p>发售NFT作为社区门票。使用NFT获益举办社区活动，包括但不限于专业留学/移民讲座，海外职位推荐，转码讲座，移民顾问一对一答疑。</p>
            </Col>
            <Col>
              <h2>Step02</h2>
              <p>社区投票决定更多的活动类型，增发门票情况，价格等。从收益中分出一部分奖励贡献者，使整个社区更有价值。。</p>
            </Col>
            <Col>
              <h2>Step03</h2>
              <p>发售更多NFT筹得更多资金举行社区活动，是社区更有价值，吸引更多人加入。</p>
            </Col>
          </Row>
        </Container>
      </Container>

    
    </>
  );
}
export default Intro;
const TwitterButton = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-twitter icon" viewBox="0 0 16 16">
            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
    </svg>
  )
}

const DiscordButton = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-discord icon" viewBox="0 0 16 16">
      <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"/>
    </svg>
  )
}


