import { Link } from 'react-router-dom';
import {
    BgAnimation
} from '../../components';
import {
    Container,
    Wrapper,
    H1,
    ContainerWelcome,
    AbsoluteContainer,
    P,
    Button,
    
} from './LandingStyles';

const Landing = () => {
    return (
        <Container>
            <AbsoluteContainer>
                <BgAnimation />
            </AbsoluteContainer>
            <Wrapper>
                <ContainerWelcome>
                    <H1>TastyCrunch.</H1>
                    <P>Can you imagine something delicious? Cook it with TastyCrunch.</P>
                    <Link to="/recipes">
                        <Button>Get Started</Button>
                    </Link>
                </ContainerWelcome>
            </Wrapper>
        </Container>
    )
}

export default Landing