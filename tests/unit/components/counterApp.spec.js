import {shallowMount} from '@vue/test-utils'
import CounterApp from '@/components/CounterApp'

describe('Counter App Test', () => {
    test('Debe de hacer match con el snapshot', () => {
        const wrapper = shallowMount(CounterApp)
        expect( wrapper.html() ).toMatchSnapshot()
    })
})