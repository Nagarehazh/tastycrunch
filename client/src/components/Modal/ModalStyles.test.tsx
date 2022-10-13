import renderer from 'react-test-renderer'
import 'jest-styled-components'
import {
    Overlay,
    ModalContainer,
    EncabezadoModal,
    ButtonClose,
} from './ModalStyles'


describe('Modal styles render correctly', () => {
    it('Overlay renders correctly', () => {
        const tree = renderer.create(<Overlay />).toJSON()
        expect(tree).toMatchSnapshot()
    })
    it('ModalContainer renders correctly', () => {
        const tree = renderer.create(<ModalContainer />).toJSON()
        expect(tree).toMatchSnapshot()
    })
    it('EncabezadoModal renders correctly', () => {
        const tree = renderer.create(<EncabezadoModal />).toJSON()
        expect(tree).toMatchSnapshot()
    })
    it('ButtonClose renders correctly', () => {
        const tree = renderer.create(<ButtonClose />).toJSON()
        expect(tree).toMatchSnapshot()
    })
})

