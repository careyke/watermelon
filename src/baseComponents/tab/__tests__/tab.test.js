import React from 'react';
import { render, shallow, mount } from 'enzyme';
import { Tab } from '../Tab';
import { TabPanel } from '../TabPanel';
import { TabNav } from '../TabNav';

describe('tab test', () => {
  it('renders correctly', () => {
    const wrapper = render(
      <Tab>
        <TabPanel tabKey='tab1' tabTitle='tab1'></TabPanel>
        <TabPanel tabKey='tab2' tabTitle='tab2'></TabPanel>
      </Tab>
    );
    expect(wrapper).toMatchSnapshot(); //会有一个useLayoutEffect在服务端渲染的警告

    const wrapper1 = render(
      <Tab>
        <TabPanel tabKey='tab1' tabTitle='tab1'></TabPanel>
        <TabPanel tabKey='tab1' tabTitle='tab2'></TabPanel>
      </Tab>
    )
    expect(wrapper1).toMatchSnapshot();

    const wrapper2 = render(
      <Tab>
        <div>test</div>
        test
        <TabPanel tabKey='tab1' tabTitle='tab1'></TabPanel>
        <TabPanel tabKey='tab2' tabTitle='tab2'></TabPanel>
      </Tab>
    )
    expect(wrapper2).toMatchSnapshot();
  });
  it('render TabNav and TabPanel', () => {
    const wrapper = shallow(
      <Tab>
        <TabPanel tabKey='tab1' tabTitle='tab1'></TabPanel>
        <TabPanel tabKey='tab2' tabTitle='tab2'></TabPanel>
      </Tab>
    );
    expect(wrapper.childAt(0).type()).toEqual(TabNav);
    expect(wrapper.childAt(1).type()).toEqual(TabPanel);
  });
  it('renders correctly TabPanel count', () => {
    const wrapper = shallow(
      <Tab>
        <TabPanel tabKey='tab1' tabTitle='tab1'></TabPanel>
        <TabPanel tabKey='tab1' tabTitle='tab2'></TabPanel>
      </Tab>
    );
    expect(wrapper.childAt(0).prop('items').length).toEqual(1);

    const wrapper1 = shallow(
      <Tab>
        <div>test</div>
        <TabPanel tabKey='tab1' tabTitle='tab1'></TabPanel>
        <span>test</span>
        <TabPanel tabKey='tab2' tabTitle='tab2'></TabPanel>
        test
      </Tab>
    )
    expect(wrapper1.childAt(0).prop('items').length).toEqual(2);
  });
  it('renders correctly activeKey in state', () => {
    const wrapper = shallow(
      <Tab>
        <TabPanel tabKey='tab1' tabTitle='tab1'></TabPanel>
        <TabPanel tabKey='tab2' tabTitle='tab2'></TabPanel>
      </Tab>
    );
    expect(wrapper.childAt(0).prop('activeTabKey')).toEqual('tab1');
    const wrapper1 = shallow(
      <Tab defaultActiveTabKey='tab2'>
        <TabPanel tabKey='tab1' tabTitle='tab1'></TabPanel>
        <TabPanel tabKey='tab2' tabTitle='tab2'></TabPanel>
      </Tab>
    );
    expect(wrapper1.childAt(0).prop('activeTabKey')).toEqual('tab2');
    const wrapper2 = shallow(
      <Tab defaultActiveTabKey='tab3'>
        <TabPanel tabKey='tab1' tabTitle='tab1'></TabPanel>
        <TabPanel tabKey='tab2' tabTitle='tab2'></TabPanel>
      </Tab>
    );
    expect(wrapper2.childAt(0).prop('activeTabKey')).toEqual('tab1');
    const wrapper3 = shallow(
      <Tab defaultActiveTabKey='tab'>
      </Tab>
    );
    expect(wrapper3.childAt(0).prop('activeTabKey')).toEqual('');
  });
  it('switch tab correctly', () => {
    // enzyme暂时不支持访问hooks组件的state
    const mockChange = jest.fn();
    // 后面需要用到底层的dom元素，需要使用mount渲染
    const wrapper = mount(
      <Tab onChange={mockChange}>
        <TabPanel tabKey='tab1' tabTitle='tab1'></TabPanel>
        <TabPanel tabKey='tab2' tabTitle='tab2'></TabPanel>
      </Tab>
    );
    const tabItems = wrapper.find('.tabItem');
    const tabNav = wrapper.find('.tab').childAt(0);
    const items = tabNav.prop('items');
    const oldActiveTab = tabNav.prop('activeTabKey');
    const index = ~~(Math.random() * tabItems.length);
    tabItems.at(index).simulate('click');
    const newTab = items[index].tabKey;
    if(oldActiveTab !== newTab){
      expect(mockChange).toBeCalledWith(newTab,oldActiveTab);
    }else{
      expect(mockChange).not.toBeCalled();
    }
  });
  it('render full style tabNav width correctly',()=>{
    const wrapper = mount(
      <Tab type='full'>
        <TabPanel tabKey='tab1' tabTitle='tab1'></TabPanel>
        <TabPanel tabKey='tab2' tabTitle='tab2'></TabPanel>
        <TabPanel tabKey='tab3' tabTitle='tab3'></TabPanel>
      </Tab>
    );
    const tabItems = wrapper.find('.tabItem');
    const index = ~~(Math.random() * tabItems.length);
    expect(wrapper.find('.tabItem').at(index).prop('style').width).toEqual(`${1 / tabItems.length * 100}%`)
  })
})