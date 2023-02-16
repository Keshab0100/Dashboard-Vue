<template>
  <div id="Maincontainer">
    <div id="leftCon">
      <NavigationCol />
    </div>
    <div id="rightCon">
      <GreetUser/>
      <MainChart/>
    </div>

</div>
</template>

<script>
import GreetUser from './GreetUser.vue';
import NavigationCol from './NavigationCol.vue';
import MainChart from './MainChart.vue';

export default {
  components: { NavigationCol, GreetUser, MainChart }
}
</script>

<style>
body{
  margin: 0px;
  padding: 0px;
}

#Maincontainer{
  position: fixed;
  top: 0;
  left: 0;
  height: 95vh;
  width: 98vw;
  display: flex;
  flex-direction: row;
  /* justify-content: space-around; */
}
#leftCon {
  width: 17%;
  border-right: 1px solid #b3b6c5;
  position: fixed;
  left: 10px;
  height: 110%;
  padding-top: 10px;
  padding-bottom: 10px;
}
#rightCon{
  width: 80%;
  position: relative;
  margin-left: 20%;
}

</style>