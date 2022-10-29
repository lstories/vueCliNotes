<template>
  <div>
    <button>原生的按钮</button>
    <input type="text">

    <atlizhi-row>
      <atlizhi-button>默认按钮</atlizhi-button>
      <atlizhi-button type="primary">主要按钮</atlizhi-button>
      <atlizhi-button type="success">成功按钮</atlizhi-button>
      <atlizhi-button type="info">信息按钮</atlizhi-button>
      <atlizhi-button type="warning">警告按钮</atlizhi-button>
      <atlizhi-button type="danger">危险按钮</atlizhi-button>
    </atlizhi-row>
    <atlizhi-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期">
    </atlizhi-date-picker>
  </div>
</template>

<script>

export default {
  name: "App",

}
</script>



