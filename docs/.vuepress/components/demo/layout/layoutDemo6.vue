<template>
  <lg-row :gutter="10">
    <lg-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"
      ><div class="grid-content bg-purple"></div
    ></lg-col>
    <lg-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"
      ><div class="grid-content bg-purple-light"></div
    ></lg-col>
    <lg-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11"
      ><div class="grid-content bg-purple"></div
    ></lg-col>
    <lg-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"
      ><div class="grid-content bg-purple-light"></div
    ></lg-col>
  </lg-row>
</template>

<style>
.lg-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
