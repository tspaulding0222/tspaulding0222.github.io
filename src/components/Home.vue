<template>
    <div class="home">
        <div class="hero width-container">
            Hero Section
        </div>
        <div class="skillz">
            
        </div>
        <div class="helix-section">
            <h2>Helix Section</h2>
            <div class="helix-image-container">
                <img src="../../static/img/bg-waves.png">
            </div>
        </div>
        <div class="callout-section">

        </div>
    </div>
</template>

<script>


export default {
    name: 'home',
    components: {

    }
}
</script>

<style lang="scss" scoped>
    @import '../styles/shared.scss';

    .hero {
        display: flex;
        justify-content: center;
        align-items: center;


        height: 550px;
        color: white;

    }

    .skillz {
        height: 650px;

        background: #0e071b;
        background: -moz-linear-gradient(top, #0e071b 0%,#4656a6 8%,#0e071b 50%, #000000 100%);
        background: -webkit-linear-gradient(top, #0e071b 0%,#4656a6 8%,#0e071b 50%, #000000 100%);
        background: linear-gradient(to bottom, #0e071b 0%,#4656a6 8%,#0e071b 50%, #000000 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#0e071b', endColorstr='#0e071b',GradientType=0 );
    }

    .helix-section {
        background: #000000;
    }

    .helix-image-container {
        width: 100%;

        img {
            width: 100%;
        }
    }

    .callout-section {
        background: #211F30;
        height: 300px;
    }

</style>