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
      @click="show">专利详情</el-button>
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
      Title: {
        get() {
          return this.$store.state.show;
        },
        set(value) {
          this.$store.commit(types.PATENT_SHOW_SHOW_SET_TITLE, value);
        },
      },
      PatentNo: {
        get() {
          return this.$store.state.show;
        },
        set(value) {
          this.$store.commit(types.PATENT_SHOW_SET_PATENTNO, value);
        },
      },
      IssueDate: {
        get() {
          return this.$store.state.show;
        },
        set(value) {
          this.$store.commit(types.PATENT_SHOW_SET_ISSUEDATE, value);
        },
      },
      Abstract: {
        get() {
          return this.$store.state.show;
        },
        set(value) {
          this.$store.commit(types.PATENT_SHOW_SET_ABSTRACT, value);
        },
      },
      Application: {
        get() {
          return this.$store.state.show;
        },
        set(value) {
          this.$store.commit(types.PATENT_SHOW_SET_APPLICATION, value);
        },
      },
      Classification: {
        get() {
          return this.$store.state.show;
        },
        set(value) {
          this.$store.commit(types.PATENT_SHOW_SET_CLASSIFICATION, value);
        },
      },
      Inventors: {
        get() {
          return this.$store.state.show;
        },
        set(value) {
          this.$store.commit(types.PATENT_SHOW_SET_INVENTORS, value);
        },
      },
    },
    methods: {
      show() {
        this.$emit('show');
      },
    },
  };
</script>


