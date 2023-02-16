<template>
    <div class="container">
        <div>
            <div id="name">
                <img src="../assets/davisuko-5E5N49RWtbA-unsplash.jpg" alt="" id="logo">
                Keshab
            </div>
            <div id="search">
                <font-awesome-icon icon="fa-solid fa-magnifying-glass" style="marginRight: 8px" />
                Search...
            </div>
            <div id="dash">
                <font-awesome-icon icon="fa-solid fa-house" style="marginRight: 8px" />
                Dashboard
            </div>
            <hr id="sideHr" />
            <div class="navs">
                <font-awesome-icon icon="fa-solid fa-comment" style="marginRight: 8px" />
                Conversations
            </div>
            <div class="navs">
                <font-awesome-icon icon="fa-solid fa-toggle-on" style="marginRight: 8px" />
                Automations
            </div>
            <div class="navs">
                <font-awesome-icon icon="fa-solid fa-chart-simple" style="marginRight: 8px" />
                Campaign
            </div>
            <div class="navs">
                <font-awesome-icon icon="fa-solid fa-rectangle-list" style="marginRight: 8px" />
                PopUp
            </div>
            <div class="navs">
                <font-awesome-icon icon="fa-solid fa-message" style="marginRight: 8px" />
                Live Chat
            </div>
            <div class="navs">
                <font-awesome-icon icon="fa-solid fa-chart-pie" style="marginRight: 8px" />
                Segments
            </div>
            <div class="navs">
                <font-awesome-icon icon="fa-solid fa-sliders" style="marginRight: 8px" />
                Interations
            </div>
        </div>
        <div style="display: flex; margin-left: 25px"> 
            <img src="../assets/davisuko-5E5N49RWtbA-unsplash.jpg" alt="" style="width: 40px">
            <div id="leftDown">
                <div style="fontSize: 25px">Keshab</div>
                <div style="fontSize: 15px">Store Name</div>
            </div>
        </div>

</div>
</template>

<script>
export default {

}
</script>
  
<style>
body {
    height: 100%;
}

#leftDown {
    display: flex;
    flex-direction: column;
    padding-left: 20px;
}

.container {
    height: 93vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.navs {
    padding: 15px;
    margin-left: 20px;
    font-size: 18px;
    display: flex;
}

#sideHr {
    width: 85%;
    height: 1px;
    background-color: #c7c7ca;
    border: none;
}

#search {
    padding: 10px;
    width: 60%;
    display: flex;
    padding-left: 20px;
    padding-right: 62px;
    font-size: 18px;
    border-radius: 40px;
    background: #f6f7ff;
    color: #a6aab7;
    margin-left: 20px;
}

#dash {
    color: #0a83f5;
    padding: 10px;
    padding-right: 40px;
    width: 68%;
    display: flex;
    padding-left: 20px;
    border-radius: 40px;
    font-size: 18px;
    margin-left: 20px;
    background: #eaf5ff;
    margin-top: 22px;
}

#name {
    padding: 30px;
    font-size: 24px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-weight: 600;
    display: flex;
}

#logo {
    width: 25px;
    margin-right: 7px;
}
</style>