//^ Snapshot test
import renderer from 'react-test-renderer'
import ItunesElement from '../ItunesElement'

it('renders correctly', () => {
    const tree = renderer
    .create(<ItunesElement/>)
    .toJSON()
    expect(tree).toMatchSnapshot()
})