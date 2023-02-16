<template>
    <div class="greetCon">
        <div style="display: flex">
            <img src="../assets/davisuko-5E5N49RWtbA-unsplash.jpg" alt=""
                style="width: 90px;height: 90px; border-radius: 50%;">
            <div>
                <span style="font-size: 40px; font-weight: 600; padding: 5px 0px 5px 30px">Good Morning Keshab</span>
                <div style="display: flex; padding: 5px 0px 5px 30px; font-size: 18px">Here are your stats for today</div>
            </div>
        </div>
        <div style="display: flex; flex-direction: row;">
            <div style="border: 2px solid #f0f0f0; padding: 10px 30px; border-radius:20px; height: 20px">
                <font-awesome-icon icon="fa-solid fa-calendar-week" style="color:#0a83f5"/>
                Today
            </div>
            <span style="padding: 10px 10px;">compared to</span>
            <div style="border: 2px solid #f0f0f0; padding: 10px 30px; border-radius:20px; height: 20px">
                Previous Period
                <font-awesome-icon icon="fa-solid fa-caret-down" style="color:#0a83f5"/>
            </div>
        </div>
</div>
</template>

<script>


export default {

}
</script>
<style>
.greetCon {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 40px 20px 20px 0px;
}
</style>