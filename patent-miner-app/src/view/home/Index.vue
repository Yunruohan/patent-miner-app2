<template>
  <div class="content container">
    <div class="title" v-if="!this.$store.state.search.started">
      <img src="/static/img/PatentMiner.png"/>
    </div>
    <div class="col-xs-12 col-sm-10 col-md-8 col-lg-6 input-group" :class="this.$store.state.search.started?'':'col-sm-offset-1 col-md-offset-2 col-lg-offset-3'">
      <normal-search @search="search"></normal-search>
    </div>
    <div v-if="result">
      <search-result
        v-for="patent in this.result.patents"
        :patent="patent"
        :highLightings="result.highLightings[patent.patentID]"
        :key="patent.patentID">
      </search-result>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageIndex"
        :page-sizes="pageSizeList"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="result.numFound">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  import normalSearch from '@/components/search/NormalSearch';
  import searchResult from '@/components/search/SearchResult';
  import * as types from '@/store/mutation-types';

  export default {
    name: 'index',
    components: {
      normalSearch,
      searchResult,
    },
    computed: {
      result: {
        get() {
          return this.$store.state.search.result;
        },
      },
      pageSizeList: {
        get() {
          return this.$store.state.search.pageSizeList;
        },
      },
      pageSize: {
        get() {
          return this.$store.state.search.searchState.pageSize;
        },
      },
      pageIndex: {
        get() {
          return this.$store.state.search.searchState.pageIndex;
        },
      },
    },
    methods: {
      ...mapActions({
        search: 'search/search',
      }),
      handleSizeChange(value) {
        this.$store.commit(types.SEARCH_SET_PAGESIZE, value);
        this.search();
      },
      handleCurrentChange(value) {
        this.$store.commit(types.SEARCH_SET_PAGEINDEX, value);
        this.search();
      },
    },
  };
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import "../../assets/css/home/index.css";
</style>

