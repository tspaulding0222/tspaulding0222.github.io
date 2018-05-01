<template>
    <div class="unsplash-image" v-if="data">
        <div class="unsplash-image-header">
            <h2>Location: {{data.user.location}}</h2>
            <h3>Artist: {{data.user.first_name}} {{data.user.last_name}}</h3>
        </div>
        <img class="unsplash-image-img" :src="data.urls.regular">
    </div>
    <div class="no-unsplash-image" v-else>
        <span class="epic-fail-word">E</span>
        <span class="epic-fail-word">p</span>
        <span class="epic-fail-word">i</span>
        <span class="epic-fail-word">c</span>
        <span class="epic-fail-word">{{"\xa0"}}</span>
        <span class="epic-fail-word">F</span>
        <span class="epic-fail-word">a</span>
        <span class="epic-fail-word">i</span>
        <span class="epic-fail-word">l</span>
    </div>
</template>

<script>
export default {
    props: ["data"],
    
}
</script>

<style lang="scss" scoped>
    .unsplash-image {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    .unsplash-image-header {
        color: white;

        h2, h3 {
            text-align: center;
        }
    }

    .no-unsplash-image {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-top: 150px;

        .epic-fail-word {
            font-size: 5em;
            font-weight: 900;
            letter-spacing: 10px;
            color: white;
            text-align: center;
        }

        @for $i from 1 to 10 {
            span:nth-child(#{$i}) {
                animation: blur-text 1.5s (#{$i/5}s) linear alternate infinite;
            }
        }
    }

    @keyframes blur-text {
        0% {filter: blur(1px);}
        100% {filter: blur(5px);}
    }
</style>
