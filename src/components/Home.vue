<template>
    <div class="home">
        <div class="home-header">
            <title-header></title-header>
            <div class="home-header-underline"></div>
            <div class="home-about">
                <p class="home-about-content">About Me</p>
            </div>
        </div>
        <div class="home-content">
            <div class="home-content-text">
                <p>
                    I came to appreciate the fields of Mobile/Web Development while working as an Assistant Web Enginerring Technician with the Air Force Institute of Technology.
                    The things I could make and do within the field astounded me. I love constantly being presented with the opportunity to ascertain new information, increase my
                    knowledge, and find a new challenge. Since my time with the Air Force Institute of Technology I have honed my programming skills, learned how to work with small
                    and large teams and work with several different industries such as Carbon Manufacturing, Consulting, Data Warehousing, Education, and Marketing.
                    friend, a Beagle named Nugget and two cats named Milo and Lucy.
                </p>
                <p>
                    Outside my professional life I enjoy snowboarding, mountain biking, backpacking, camping, and hiking. My immediate family consists of my wife who is also my best friend,
                    a Beagle named Nugget and two cats named Milo and Lucy.                
                </p>
            </div>
            <div class="home-content-image">
                <img src="../../static/img/profile-image.png">
            </div>
        </div>
    </div>
</template>

<script>
import TitleHeader from './Header.vue';

export default {
    name: 'home',
    components: {
        TitleHeader
    }
}
</script>

<style lang="scss" scoped>
    @import '../styles/shared.scss';

    .home-header {
        width: 814px;
        height: auto;
        margin: 0 auto;
    }

    .home-header-underline {
        width: 100%;
        height: 2px;
        margin-top: 10px;
        margin-bottom: 10px;
        background-color: $gray;
    }

    .home-about {
        position: relative;
        width: 100%;
        height: 25px;
    }

    .home-about-content {
        position: absolute;
        top: 0;
        right: 0;
        margin: 0;
        font-family: $do-hyeon-font;
        font-size: 20px;
        color: $gray;
    }

    .home-content {
        display: flex;
        flex-direction: row;
        margin-top: 50px;
        margin-right: -20px;
    }

    .home-content-text {
        width: 50%;
        padding-right: 20px;

        p {
            font-size: 1.1em;
            font-weight: 100;
            font-family: $do-hyeon-font;
        }
    }

    .home-content-image {
        width: 50%;
        border-radius: 50%;

        img {
            width: 100%;
        }
    }
</style>