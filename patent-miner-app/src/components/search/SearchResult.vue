<template>
  <el-form>
    <el-checkbox-group v-model="checkList">
      <el-form-item>
        <el-checkbox>
          <el-button type="text">
            <span v-if="highLightings.Title" v-html="highLightings.Title"></span>
            <span v-else>{{patent.title}}</span>
          </el-button>
        </el-checkbox>
      </el-form-item>
      <el-form-item label="申请日：">
        <el-button type="text">{{patent.applicationDate}}</el-button>
      </el-form-item>
      <el-form-item label="公开（公告）号：">
        <span>{{patent.patentID}}</span>
      </el-form-item>
      <el-form-item label="公开（公告）日：">
        <el-button type="text">{{patent.issueDate}}</el-button>
      </el-form-item>
      <el-form-item label="IPC分类号：">
        <template v-for="(item,key) in patent.ipcclassifications"
                  type="text">
          <span v-if="key">；</span>
          <el-button type="text">{{item}}</el-button>
        </template>
      </el-form-item>
      <el-form-item label="申请（专利权）人：">
        <el-button type="text">
          <span v-if="highLightings.ApplicantName" v-html="highLightings.ApplicantName"></span>
          <span v-else>{{patent.applicantName}}</span>
        </el-button>
      </el-form-item>
      <el-form-item label="发明人：">
        <template v-for="(item,key) in patent.inventorNames"
                  type="text">
          <span v-if="key">；</span>
          <el-button type="text">{{item}}</el-button>
        </template>
      </el-form-item>
      <el-form-item label="摘要：">
        <p v-if="highLightings.Abstract" v-html="highLightings.Abstract+'...'"></p>
        <p v-else>{{patent._abstract.substring(0,100)+'...'}}</p>
      </el-form-item>
    </el-checkbox-group>
  </el-form>
</template>
<script>
  export default {
    data() {
      return {
        checkList: [],
      };
    },
    props: ['patent', 'highLightings'],
  };
</script>
<style scoped>
  .el-form-item {
    margin: 0 !important;
  }
</style>
<style>
  .high-lighting {
    color: red;
  }
</style>
