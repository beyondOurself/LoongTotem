<template>
  <div>
    <lg-row>
      <lg-button>Default</lg-button>
      <lg-button type="primary">Primary</lg-button>
      <lg-button type="success">Success</lg-button>
      <lg-button type="info">Info</lg-button>
      <lg-button type="warning">Warning</lg-button>
      <lg-button type="danger">Danger</lg-button>
      <lg-button @click="handleButtonClick">中文</lg-button>
    </lg-row>
    <lg-row>
      <lg-button plain>Plain</lg-button>
      <lg-button type="primary" plain>Primary</lg-button>
      <lg-button type="success" plain>Success</lg-button>
      <lg-button type="info" plain>Info</lg-button>
      <lg-button type="warning" plain>Warning</lg-button>
      <lg-button type="danger" plain>Danger</lg-button>
    </lg-row>

    <lg-row>
      <lg-button round>Round</lg-button>
      <lg-button type="primary" round>Primary</lg-button>
      <lg-button type="success" round>Success</lg-button>
      <lg-button type="info" round>Info</lg-button>
      <lg-button type="warning" round>Warning</lg-button>
      <lg-button type="danger" round>Danger</lg-button>
    </lg-row>
    <lg-row>
      <lg-button :icon="Search" circle> <lg-icon name='dianpu'></lg-icon></lg-button>
      <lg-button type="primary" :icon="Edit" circle>
        <lg-icon name='cangku'></lg-icon
      ></lg-button>
      <lg-button type="success" :icon="Check" circle>
        <lg-icon name='gerenzhongxin' ></lg-icon
      ></lg-button>
      <lg-button type="info" :icon="Message" circle>
        <lg-icon name='quanqiu'></lg-icon
      ></lg-button>
      <lg-button type="warning" :icon="Star" circle>
        <lg-icon name='quanxian'></lg-icon
      ></lg-button>
      <lg-button type="danger"  :icon="Delete" circle>
        <lg-icon name='jiancha' ></lg-icon
      ></lg-button>
    </lg-row>
  </div>
</template>
<script lang='ts' setup>
const handleButtonClick = () => {
  console.log('>>>>')
}
</script>
<style lang="scss">
 .lg-row {
   margin-bottom: 1em;
 }
</style>
