/* test cases for front-end part */
import { mount } from '@vue/test-utils';
import codeSelection from '@/components/CodeSelection.vue';
import result from '@/components/Result.vue';

describe('- Common componets ', () => {
   describe('* CodeSelection', () => {
      test('is a Vue instance', () => {
         const wrapper = mount(codeSelection);
         expect(wrapper.isVueInstance()).toBeTruthy();
      });
   });

   describe('* Result', () => {
      test('is a Vue instance', () => {
         const wrapper = mount(result);
         expect(wrapper.isVueInstance()).toBeTruthy();
      });
   });
});
