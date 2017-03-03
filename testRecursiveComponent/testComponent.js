/*jshint esversion: 6 */

var data ={
    counter: 0
};

Vue.component('scope-component',{
  template:`
    <div>
      <slot name="test-slot"></slot>
      <slot text="hello from child"></slot>
    </div>
  `
});

Vue.component('currency-input', {
  template: `
    <span>
      $
      <input ref="input"
        v-bind:value="value"
        v-on:input="updateValue($event.target.value)">
    </span>
  `,
  props: ['value'],
  methods: {
    // Instead of updating the value directly, this
    // method is used to format and place constraints
    // on the input's value
    updateValue: function (value) {
      var formattedValue = value
        // Remove whitespace on either side
        .trim()
        // Shorten to 2 decimal places
        .slice(0, value.indexOf('.') + 3)
      // If the value was not already normalized,
      // manually override it to conform
      if (formattedValue !== value) {
        this.$refs.input.value = formattedValue
      }
      // Emit the number value through the input event
      this.$emit('input', Number(formattedValue))
    }
  }
});

Vue.component('simple-counter',{
    template:`
     <button v-on:click="counter += 1">{{ counter }}</button>
    `,
    data:function(){
        return data;
    }
});

var maVue = new Vue({
    el:'#app',
    data:{
        price:0
    }
});

