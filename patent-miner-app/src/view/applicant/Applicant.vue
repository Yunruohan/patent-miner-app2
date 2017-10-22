<template>
  <el-input placeholder="检索内容" v-model="query">
    <el-select v-model="type" slot="prepend" placeholder="检索范围" style="width:160px;">
      <el-option
        v-for="(value, key) in types"
        :key="key"
        :label="value"
        :value="key">
      </el-option>
    </el-select>
    <el-button
      slot="append"
      type="primary"
      icon="show"
      @click="application">公司</el-button>
  </el-input>
</template>
<script>
  import * as types from '../../store/mutation-types';

  export default {
    data() {
      return {
        types: {
        },
      };
    },
    computed: {
      id: {
        get() {
          return this.$store.state.application;
        },
        set(value) {
          this.$store.commit(types.APPLICATION_SHOW_SET_ID, value);
        },
      },
      name: {
        get() {
          return this.$store.state.application;
        },
        set(value) {
          this.$store.commit(types.APPLICATION_SHOW_SET_NAME, value);
        },
      },
      address: {
        get() {
          return this.$store.state.application;
        },
        set(value) {
          this.$store.commit(types.APPLICATION_SHOW_SET_ADDRESS, value);
        },
      },
      postCode: {
        get() {
          return this.$store.state.application;
        },
        set(value) {
          this.$store.commit(types.APPLICATION_SHOW_SET_POSTCODE, value);
        },
      },
    },
    methods: {
      application() {
        this.$emit('application');
      },
    },
  };
</script>


