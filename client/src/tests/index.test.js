import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../index.jsx';
import AudienceReview from '../components/AudienceReview';
import './setupTest'

describe('App', () => {
  it('should render correctly in "debug" mode', () => {
    const component = shallow(<App debug />);
    expect(component).toMatchSnapshot();
  });

  it('calls componentDidMount', () => {
    jest.spyOn(App.prototype, 'componentDidMount');
    const component = shallow(<App />);
    expect(App.prototype.componentDidMount.mock.calls.length).toBe(1);
  });
});

describe('AudienceReview props', () => {
  const review = {
    title: "Black Panther",
    reviews: [ { "id": 59, "username": "deal", "review": "Cat ipsum dolor sit amet, touch my tail, i shred your hand purrrr slap owner's face at 5am until human fills food dish. Purr while eating sit in box or steal the warm chair right after you get up damn that dog yet scamper annoy the old grumpy cat, start a fight and then retreat to wash when i lose stand in doorway, unwilling to chose whether to stay in or go", "stars": 0 }, { "id": 60, "username": "do", "review": "dolor sit amet, touch my tail, i shred your hand purrrr slap owner's face at 5am until human fills food dish. Purr while eating sit in box or steal the warm chair right after you get up damn that dog yet scamper annoy the old grumpy cat, start a fight and then retreat to wash when i lose stand in doorway, unwilling to chose whether to stay in or go out. Stare at owner accusingly then wink. Lick face hiss at owner, pee a lot, and meow repeatedly scratch at fence purrrrrr", "stars": 3 }, { "id": 61, "username": "do", "review": "tail, i shred your hand purrrr slap owner's face at 5am until human fills food dish. Purr while eating sit in box or steal the warm chair right after you get up damn that dog yet scamper annoy the old grumpy cat, start a fight and then retreat to wash when i lose stand in doorway, unwilling to chose whether to stay in or go out. Stare at owner accusingly then wink. Lick face hiss", "stars": 3.5 }, { "id": 62, "username": "development", "review": "tail, i shred your hand purrrr slap owner's face at 5am until human fills food dish. Purr while eating sit in box or steal the warm chair right after you get up damn that dog yet scamper annoy the old grumpy cat, start a fight and then retreat to wash when i lose stand in doorway, unwilling to chose whether to stay in or go out. Stare at owner accusingly then wink. Lick face hiss at owner, pee a lot, and meow repeatedly scratch at fence purrrrrr eat muffins and poutine until owner comes back meow all night having their mate disturbing sleeping humans", "stars": 0.5 } ]
  }
  it('accepts title props', () => {
    const wrapper = mount(<AudienceReview title={review.title} reviews={review.reviews}/>);
    expect(wrapper.props().title).toEqual(review.title);
  });

  it('accepts reviews props', () => {
    const wrapper = mount(<AudienceReview title={review.title} reviews={review.reviews}/>);
    expect(wrapper.props().reviews).toEqual(review.reviews);
  });
});