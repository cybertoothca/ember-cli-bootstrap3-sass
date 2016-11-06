import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | bootstrap is installed');

test('visiting / ', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(find('.jumbotron').css('background'),
      'rgb(238, 238, 238) none repeat scroll 0% 0% / auto padding-box border-box');
    assert.equal(find('.glyphicon-adjust').css('font-family').indexOf('Glyphicons Halflings'), 1);
  });
});
