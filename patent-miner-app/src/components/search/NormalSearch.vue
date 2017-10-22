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
      icon="search"
      @click="search">搜索</el-button>
  </el-input>
</template>
<script>
  import * as types from '../../store/mutation-types';

  export default {
    data() {
      return {
        types: {
          auto: '自动识别',
          element: '检索要素',
          patentNo: '公开（公告）号',
          applicant: '申请人',
          inventor: '发明人',
          title: '发明名称',
        },
      };
    },
    computed: {
      type: {
        get() {
          return this.$store.state.search.searchState.type;
        },
        set(value) {
          this.$store.commit(types.SEARCH_SET_TYPE, value);
        },
      },
      query: {
        get() {
          return this.$store.state.search.searchState.query;
        },
        set(value) {
          this.$store.commit(types.SEARCH_SET_QUERY, value);
        },
      },
    },
    methods: {
      search() {
        this.$emit('search');
      },
    },
  };
</script>


