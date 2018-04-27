<template>
    <div class="test">
        <div class="inner-test">
            test
            <img src="../../static/img/eye.png"/>
        </div>
    </div>
</template>

<script>
export default {
    name: 'app',
    method: {
        test() {
            console.log("test");
        }
    }
}
</script>

<style lang="scss">
    .test {
        .inner-test {
            color: red;
        }
    }
</style>