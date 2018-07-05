<template>
    <div class="dat-footer">
        <div class="width-container">
            <div class="footer-contents">
                <div class="footer-name">
                    <h4>Contact Me:</h4>
                </div>
                <div class="footer-section">
                    <a>LinkedIn</a>
                    <a>Facebook</a>
                    <a>Phone</a>
                    <a>eMail</a>
                </div>
                <div class="footer-section">
                    <a>Github</a>
                    <a>Bitbucket</a>
                    <a>Hangouts</a>
                </div>
                <div class="footer-section quote-section">
                    <p class="footer-quote">
                        "Measuring programming progress by lines of code is like measuring aircraft building progress by weight"
                    </p>
                    <a>
                        Bill Gates
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'app',
        components: {

        }
    }
</script>

<style lang="scss" scoped>
    @import "../styles/shared.scss";

    .dat-footer {
        background: #01010F;
    }

    .footer-contents {
        display: flex;
        color: $gray;
        padding-top: 20px;
        padding-bottom: 20px;
    }

    .footer-name {
        width: 185px;
        margin-right: 100px;
        font-size: 1.2em;
        color: $pink;
    }

    .footer-section {
        display: flex;
        flex-direction: column;
        margin-right: 100px;

        h5 {
            margin-bottom: 10px;
            font-size: 1.1em;
            color: $pink;
        }

        a {
            font-size: 0.75em;
            font-weight: 900;
            margin-bottom: 5px;

            &:hover {
                cursor: pointer;
                color: white;
            }
        }
    }

    .quote-section {
        flex-grow: 1;
        margin-right: 0;
    }

    .footer-quote {
        font-size: 0.8em;
        margin-bottom: 5px;
    }
</style>