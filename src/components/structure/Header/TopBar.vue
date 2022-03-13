<template>
    <div class="top-bar container-fluid">
        <div class="row">

            <div class="col-12 col-md-6">
                <ul class="social list-inline">
                    
                    <span v-for="social in this.constants.social" :key="social.name">
                        <li class="list-inline-item">
                            <a :href="social.url" target="_blank">
                                <i :class="social.icon" aria-hidden="true"></i>
                            </a>
                        </li>
                    </span>
                </ul><!--//social-->
            </div>
            
            <div class="col-12 col-md-6 cv-telegram">
                <a class="btn mr-1" :href="telegram.url"><i class="fas fa-paper-plane" aria-hidden="true"></i> Telegram</a>
                <a class="btn" :href="this.constants.main.cv"><i class="fas fa-download" aria-hidden="true"></i> Curriculum Vitae </a>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'TopBar',
        props: {
            constants: Object
        },
        data() {
            return {
                telegram: this.constants.social.filter(s => s.name == 'telegram')[0]
            }
        }
    }
</script>

<style scoped>
/** Header **/
.avatar {
    -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.4);
    -moz-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.4);
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.4);
    border: 1px solid #202945;
}

.header .name {
    letter-spacing: 0.5px;
    font-family: Kiona;
}

.header .title {
    font-weight: 300;
    margin-bottom: 30px;
    font-family: Kiona;

}

@media screen and (max-width: 768px) {
    .header .avatar {
        max-width: 150px;
        margin-left:auto;
        margin-right: auto;
    }

    .header .name {
        font-size: 40px;
    }
    .header .title {
        font-size: 20px;
    }

    .row-names {
        text-align: center;
    }

    .cv-telegram {
        margin-top: 25px;
        text-align: center;
    }
}

@media screen and (min-width: 769px) {
    .cv-telegram {
        text-align: right;
    }

    .header .name {
        font-size: 64px;
    }
    .header .title {
        font-size: 28px;
    }
}

@media screen and (min-width: 577px) and (max-width: 992px) {
    .header .avatar {
        margin-top: 65px;
    }

    .header .name {
        font-size: 32px;
    }
    .header .title {
        font-size: 20px;
    }
}

.header a {
    color: #fff;    
}

.header .top-bar {
    position: relative;
    padding-top: 15px;
    padding-bottom: 15px;
}

.header .social {
    margin-bottom: 0;
}

.header .social a {
    color: #FFF;
    display: inline-block;
    text-align: center;
    width: 35px;
    height: 35px;
    -ms-border-radius: 50%;
    border-radius: 50%;
    background-clip: padding-box;
    padding-top: 4px;
    font-size: 16px;
    border: 1px solid #202945;
}

.header .social a:hover {
    color: #fff;
    background-color: #202945;
}


.header .contact-info,
.header .intro {
    background: #202945;
    font-size: 16px;
}
.header .intro {
    padding-top: 90px;
    padding-bottom: 15px;
    position: relative;
    border-width: 3px 0 0;
}
</style>