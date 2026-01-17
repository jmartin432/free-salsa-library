<script setup>
    import VideoModal from '../components/VideoModal.vue';
    import ContactForm from '../components/ContactForm.vue';
</script>

<template>
    <div>
        <h3>Welcome</h3>
        <p class="p-title">
            Free Salsa Library is a community resource for all things related to Salsa dancing. We offer classes 
            and workshops on Salsa dancing, we provide educational resources on Salsa music 
            and history and we promote healthy, fun social dancing events in the Portland, OR area. Salsa is an 
            improvised, social dance and we believe that it can be a vibrant avenue for self-expression, 
            community-building and fitness.
        </p>
        <!-- <p>
            For more information use the contact form below.
        </p> -->
    </div>

    <!-- <div>
        <ContactForm></ContactForm>
    </div> -->

    <!-- <div id="content-container">
        <section v-for="(section, index) in sections" v-show="section.show" class="content-section" :key="index">
            <h3>{{ section.sectionTitle }}</h3>
            <details v-for="(detail, index) in section.details" v-show="detail.show" class="section-details" :key="index">
                <summary>{{ detail.summary }}</summary>
                <div :class="[(detail.type === 'video') ? 'video-detail' : 'text-detail', 'content-detail']">
                    <div v-if="detail.type === 'video'" class="thumbnail-cell">
                        <a :href="detail.videoName">
                            <img :src=detail.thumbnailUrl>
                        </a>
                    </div>
                    <div class="text-cell">
                        <p class="p-content">{{ detail.text }}</p>
                        <ul :key="index">
                            <li v-for="(link, index) in detail.links" :key="index">
                                <a class="content-link" :key="index" :href="link.url" target="_blank">{{ link.text }}</a>
                            </li>
                        </ul>
                        <div v-show="detail.type === 'video'">
                            <button v-if="detail.videoName" class="control-item" @click="handleShowVideoModal(detail.videoName)">Play</button>
                            <p v-else>Video Coming Soon!</p>
                        </div>
                    </div>
                </div>    
            </details>
        </section>
    </div>
    <div v-if="showVideoModal" id="video-modal">
        <div id="video-container">
            <video controls autoplay :key="currentVideo" @loadstart="videoLoadStarted" @loadeddata="videoLoadedData">
                <source :src="videoSource" type="video/mp4"></source>
            </video>
            <button id="modal-close-button" class="control-item" @click="handleCloseVideoModal">Close</button>
        </div>
    </div> -->
</template>

<script>
    export default {
        methods: {
            handleShowVideoModal(videoName) {
                console.log(videoName);
                this.currentVideo = videoName;
                this.showVideoModal = true;
            },
            handleCloseVideoModal() {
                this.currentVideo = null;
                this.showVideoModal = false;
            },
            videoLoadStarted() {
                console.log('VIDEO LOAD STARTED');
            },
            videoLoadedData() {
                console.log('DATA LOADED');
            }
        },
        computed: {
            videoSource() {
            // Example: Constructing a URL with the video ID
            return `https://freesalsalibrary.com/videos/${this.currentVideo}`;

            // Or, if using local assets (requires appropriate build configuration for asset handling):
            // return require(`@/assets/${this.videoFileName}`);
            }
        },
        data() {
            return {
                currentVideo: null,
                showVideoModal: false,
                sections: [
                    {
                        sectionTitle: 'Salsa Music',
                        show: false,
                        details: [
                            {
                                summary: 'Beginner\'s Practice Playlist',
                                show: true,
                                text: `Salsa music can get pretty crazy. It's generally pretty fast and rhythmically ocomplex. 
                                There is also a lot of it out there. THis a playlist of some good tracks to get started with. 
                                They are on the slower side and hopefully not too overwhlming.`,
                                type: 'text',
                                links: [
                                    {
                                        text: `Beginner's Practice Playlist`,
                                        url: 'https://open.spotify.com/playlist/6P6I7wBmlRNEWJRhtkYhwq?si=d963d7cc58d6457b'
                                    }
                                ],
                                thumbnailUrl: null,
                                videoName: null
                            },
                            {
                                summary: 'Beginner\'s Practice Playlist',
                                show: false,
                                text: `These are some links to Spotify playlists of our favorite tracks`,
                                type: 'text',
                                links: [
                                    {
                                        text: `Justin's Favorites`,
                                        url: 'https://open.spotify.com/playlist/1Nxch1X0gqD3nttSWZydUT?si=e8466da5a6694613'
                                    }
                                ],
                                thumbnailUrl: null,
                                videoName: null
                            },
                            {
                                summary: 'The Clave',
                                show: false,
                                text: `The clave is the backbone of Salsa music. 
                                    Sometimes you hear it clearly sometimes you don't but it is always there in 
                                    Salsa music. Many of the songs in the Beginner's playlist have a very clear clave`,
                                type: 'video',
                                links: [
                                    {
                                        text: `Beginner's Practice Playlist`,
                                        url: 'https://open.spotify.com/playlist/6P6I7wBmlRNEWJRhtkYhwq?si=d963d7cc58d6457b'
                                    }
                                ],
                                thumbnailUrl: null,
                                videoName: 'clave.mp4'
                            }
                        ]
                    },
                    {
                        sectionTitle: 'The Basic Steps',
                        show: false,
                        details: [
                            {
                                summary: 'On1 or On2',
                                text: `This video will explain the difference between the basic steps of on1 and on2`,
                                type: 'video',
                                links: [],
                                thumbnailUrl: null,
                                videoName: null
                            },
                            {
                                summary: 'The Basic Step',
                                text: `This video will demonstrate the On2 Basic`,
                                type: 'video',
                                links: [],
                                thumbnailUrl: null,
                                videoName: 'basic-step.mp4'
                            },
                            {
                                summary: 'The Side Basic',
                                text: `This video will demonstrate the On2 Side Basic`,
                                type: 'video',
                                links: [],
                                thumbnailUrl: null,
                                videoName: null
                            },
                            {
                                summary: 'The Back Basic',
                                text: `This video will demonstrate the On2 Back Basic`,
                                type: 'video',
                                links: [],
                                thumbnailUrl: null,
                                videoName: null
                            }
                        ]
                    },
                    {
                        sectionTitle: 'Beginner Partner Work',
                        show: false,
                        details: [
                            {
                                summary: 'Connections',
                                text: `This video will show the open and closed connections`,
                                type: 'video',
                                links: [],
                                thumbnailUrl: null,
                                videoName: null
                            },
                            {
                                summary: 'Changing Connections',
                                text: `This video will show how to change from open to closed connection and back again`,
                                type: 'video',
                                links: [],
                                thumbnailUrl: null,
                                videoName: null
                            },
                            {
                                summary: 'Cross Body Lead',
                                text: `Some text about the move.`,
                                type: 'video',
                                links: [],
                                thumbnailUrl: null,
                                videoName: null
                            },
                            {
                                summary: `Follow's Right Turn`,
                                text: `Some text about the move.`,
                                type: 'video',
                                links: [],
                                thumbnailUrl: null,
                                videoName: null
                            },
                            {
                                summary: `Lead's Right Turn`,
                                text: `Some text about the move.`,
                                type: 'video',
                                links: [],
                                thumbnailUrl: null,
                                videoName: null
                            },
                            {
                                summary: `The Walk-Through`,
                                text: `Some text about the move.`,
                                type: 'video',
                                links: [],
                                thumbnailUrl: null,
                                videoName: null
                            },
                            {
                                summary: `Cross-Body Lead with Inside Turn`,
                                text: `Some text about the move.`,
                                type: 'video',
                                links: [],
                                thumbnailUrl: null,
                                videoName: null
                            },
                            {
                                summary: `Cross-Body Lead with Outside Turn`,
                                text: `Some text about the move.`,
                                type: 'video',
                                links: [],
                                thumbnailUrl: null,
                                videoName: null
                            }
                        ]
                    }
                ],
            };
        }
    }

</script>

<style scoped>

p {
    text-align: left;
}

.content-detail {
    display: grid;
}

/* .video-detail {
    grid-template-columns: 30% 70%;
}
.thumbnail-cell {
    padding: 1rem;
}

.thumbnail-cell img {
  width: 100%;
  height: 100%;
} */

.text-detail, video-detail {
    grid-template-columns: 100%;
}

.text-cell {
    width: 80%;
    margin: auto;
}

#video-modal {
    background-color: #00000044;
    position: fixed;
    display: flex;
    align-items: center;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    aspect-ratio: 16 / 9;
    max-width: 90vw;
    max-height: 90vh;
    border: 1px solid red;
}

#video-container {
    position: relative;
    background: none;
    margin: auto;
    height: 97%;
}

#modal-close-button {
    position: absolute;
    top: 10px;
    left: 10px;
}

video {
    max-height: 100%;
    margin: auto;
    border: 1px solid black;
    /* aspect-ratio: 16 / 9; */
}
</style>
