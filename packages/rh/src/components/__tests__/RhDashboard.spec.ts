import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import RhDashboard from '../RhDashboard.vue'

describe('RhDashboard', () => {
  it('renderiza o dashboard de RH com os colaboradores', () => {
    const wrapper = mount(RhDashboard, {
      global: {
        stubs: {
          UiTable: {
            name: 'UiTable',
            props: ['headers'],
            template: '<div class="ui-table"><slot name="title" /><table><tbody><slot name="rows" /></tbody></table></div>',
          },
          'v-chip': {
            template: '<span><slot /></span>',
          },
        },
      },
    })

    expect(wrapper.text()).toContain('Recursos Humanos')
    expect(wrapper.text()).toContain('Colaboradores Ativos')
    expect(wrapper.text()).toContain('Ana Souza')
    expect(wrapper.text()).toContain('Bruno Ramos')
    expect(wrapper.text()).toContain('Carla Dias')
    expect(wrapper.text()).toContain('Ativo')
    expect(wrapper.findAll('tbody tr')).toHaveLength(3)
  })
})