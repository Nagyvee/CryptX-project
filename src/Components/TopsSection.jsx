import styled from 'styled-components';
import BitcoinIcon from '../assets/Bitcoin-icon.svg';
import LitecoinIcon from '../assets/litecoin-icon.svg';
import EthereumIcon from '../assets/Ethereum-icon.svg';
import CardanoIcon from '../assets/cardano-icon.svg';
import {AiFillCaretUp, AiFillCaretDown} from 'react-icons/ai'

const Container = styled.section`
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 1rem;
  padding: .7rem 4rem 0 1rem;
`;

const LeftWrap = styled.div`
display: grid;
grid-template-columns: 50% 50%;
gap: 1rem;
`;

const Card = styled.div`
box-shadow: 0 0.5px 10px #a1a1a1;
width: fit-content;
min-width: 250px;
cursor: pointer;
padding:.75rem 1.6rem;
border-radius: 15px;
transition: transform .3s;

&:hover{
transform: scale(1.02);
}

h3{
font-size: 1.1rem;
}
`
const Icons = styled.div`
display: flex;
justify-content: space-between;
margin:0;

div{
display: flex;
align-items: canter;
gap: .35rem;
color: ${({color})=> color};
font-size: .9rem;
font-weight: 500;

svg{
margin-top: .2rem;
}
}
` 

const Image = styled.img`
 width: 40px;
 height: 40px;
 margin:0 0 .7rem;
`

const Text = styled.p`
font-size: .85rem;
margin-top: 0.35rem;
color: #b1b1b1;
`

const RightWrap = styled.div`
box-shadow: 0 0.5px 10px #a1a1a1;
border-radius: 15px;
padding: 1rem;
`

const TopSection = () =>{
    const cardsData = [
        {
            icon: BitcoinIcon,
            increase: 0.25,
            price:'$40,291',
            name:'Bitcoin - BTC'
        },
        {
            icon: EthereumIcon,
            increase: 0.25,
            price:'$18,291',
            name:'Ethereum - ETH',
        },        {
            icon: LitecoinIcon,
            increase: 0.25,
            price:'$8,291',
            name:'Litecoin - ITL'
        },        {
            icon: CardanoIcon,
            increase: -2.05,
            price:'$3,291',
            name:'Cardano - ADA'
        },
    ]

    return(
        <Container>
            <LeftWrap>
                {
                    cardsData.map((item) =>{
                        return(
                            <Card key={item.name}>
                                <Icons color={item.increase < 0 ? 'orange': 'rgb(45, 225, 45)'}>
                                <Image src={item.icon} alt={item.name} />
                                <div>
                                    {item.increase > 0 ? <AiFillCaretUp /> : <AiFillCaretDown /> }
                                     {item.increase > 0 && '+'}{item.increase}%
                                </div>
                                </Icons>
                                <h3>{item.price}</h3>
                                <Text>{item.name}</Text>
                            </Card>
                        )
                    })
                }
            </LeftWrap>
            <RightWrap>
                <h2>This is a chart position</h2>
            </RightWrap>
        </Container>
    )
}

export default TopSection;