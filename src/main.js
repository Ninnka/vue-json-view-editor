// * style
import '@/styles/common-style.less';
import '@/iconfont/iconfont.css';

// * components
import JsonViewEditor from '@/components/VueJsonViewEditor';

import JsonCompose from '@/components/JsonCompose';
import JsonContainer from '@/components/JsonContainer';

import JsonObject from '@/components/json-types/JsonObject';
import JsonArray from '@/components/json-types/JsonArray';
import JsonString from '@/components/json-types/JsonString';
import JsonNumber from '@/components/json-types/JsonNumber';
import JsonBoolean from '@/components/json-types/JsonBoolean';
import JsonDate from '@/components/json-types/JsonDate';
import JsonUndefined from '@/components/json-types/JsonUndefined';
import JsonNull from '@/components/json-types/JsonNull';
import JsonNaN from '@/components/json-types/JsonNaN';

// * mixins
import CommonMixin from '@/mixins/common-mixin';

// * directives
import CommonDirective from '@/directives/common-directive';

const components = [
  JsonViewEditor,
  JsonCompose,
  JsonContainer,
  JsonObject,
  JsonArray,
  JsonString,
  JsonNumber,
  JsonBoolean,
  JsonDate,
  JsonUndefined,
  JsonNull,
  JsonNaN,
];

const install = (vue) => {
  /* istanbul ignore if */
  if (install.installed) return;

  vue.mixin(CommonMixin);

  Object.entries(CommonDirective).forEach((item) => {
    vue.directive(item[0], item[1]);
  });

  /*eslint-disable*/
  components.map((component) => {
    vue.component(component.name, component);
  });

};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

// export {
//   JsonViewEditor,
// }

export default {
  install,
  JsonViewEditor,
  JsonCompose,
  JsonContainer,
  JsonObject,
  JsonArray,
  JsonString,
  JsonNumber,
  JsonBoolean,
  JsonDate,
  JsonUndefined,
  JsonNull,
  JsonNaN,
};
