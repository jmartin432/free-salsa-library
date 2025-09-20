<script setup>
    import VideoModal from '../components/VideoModal.vue';
</script>

<template>
    <div>
        <h3>Welcome</h3>
        <p>
            Here you will find lots of accordions with salsa music, dance moves and culture.
        </p>
    </div>

    <div id="content-container">
        <section v-for="(section, index) in sections" class="content-section" :key="index">
            <h3>{{ section.sectionTitle }}</h3>
            <details v-for="(detail, index) in section.details" class="section-details" :key="index">
                <summary>{{ detail.summary }}</summary>
                <div :class="[(detail.type === 'video') ? 'video-detail' : 'text-detail', 'content-detail']">
                    <div v-if="detail.type === 'video'" class="thumbnail-cell">
                        <a :href="detail.videoUrl">
                            <img :src=detail.thumbnailUrl>
                        </a>
                    </div>
                    <div class="text-cell">
                        <p>{{ detail.text }}</p>
                        <ul :key="index">
                            <li v-for="(link, index) in detail.links" :key="index">
                                <a class="content-link" :key="index" :href="link.url" target="_blank">{{ link.text }}</a>
                            </li>
                        </ul>
                        <button class="control-item" @click="handleShowVideoModal(detail.videoUrl)">Play</button>
                    </div>
                </div>    
            </details>
        </section>
    </div>
    <div v-if="showVideoModal" id="video-modal-container">
        <video controls :key="currentVideo">
            <source :src="currentVideo" type="video/mp4"></source>
        </video>
        <button class="control-item" @click="handleCloseVideoModal()">Close</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                currentVideo: null,
                showVideoModal: false,
                sections: [
                    {
                        sectionTitle: 'Salsa Music',
                        details: [
                            {
                                summary: 'Playlists',
                                text: `These are some links to Spotify playlists of our favorite tracks`,
                                type: 'text',
                                links: [
                                    {
                                        text: `Beginner's Practice Playlist`,
                                        url: 'https://open.spotify.com/playlist/6P6I7wBmlRNEWJRhtkYhwq?si=d963d7cc58d6457b'
                                    },
                                    {
                                        text: `Justin's Favorites`,
                                        url: 'https://open.spotify.com/playlist/1Nxch1X0gqD3nttSWZydUT?si=e8466da5a6694613'
                                    }
                                ],
                                thumbnailUrl: '',
                                videoUrl: ''
                            },
                            {
                                summary: 'The Clave',
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
                                thumbnailUrl: 'src/assets/images/image-coming-soon-3x2.jpg',
                                videoUrl: '/clave.mp4'
                            }
                        ]
                    },
                    {
                        sectionTitle: 'The Basic Steps',
                        details: [
                            {
                                summary: 'On1 or On2',
                                text: `This video will explain the difference between the basic steps of on1 and on2`,
                                type: 'video',
                                links: [],
                                thumbnailUrl: '',
                                videoUrl: ''
                            },
                            {
                                summary: 'The Basic Step',
                                text: `This video will demonstrate the On2 Basic`,
                                type: 'video',
                                links: [],
                                thumbnailUrl: 'src/assets/images/image-coming-soon-3x2.jpg',
                                videoUrl: ''
                            },
                            {
                                summary: 'The Side Basic',
                                text: `This video will demonstrate the On2 Side Basic`,
                                type: 'video',
                                links: [],
                                thumbnailUrl: 'src/assets/images/image-coming-soon-3x2.jpg',
                                videoUrl: ''
                            },
                            {
                                summary: 'The Back Basic',
                                text: `This video will demonstrate the On2 Back Basic`,
                                type: 'video',
                                links: [],
                                thumbnailUrl: 'src/assets/images/image-coming-soon-3x2.jpg',
                                videoUrl: ''
                            }
                        ]
                    },
                    {
                        sectionTitle: 'Beginner Partner Work',
                        details: [
                            {
                                summary: 'Connections',
                                text: `This video will show the open and closed connections`,
                                type: 'video',
                                links: [],
                                thumbnailUrl: 'src/assets/images/image-coming-soon-3x2.jpg',
                                videoUrl: ''
                            },
                            {
                                summary: 'Changing Connections',
                                text: `This video will show how to change from open to closed connection and back again`,
                                type: 'video',
                                links: [],
                                thumbnailUrl: 'src/assets/images/image-coming-soon-3x2.jpg',
                                videoUrl: ''
                            },
                            {
                                summary: 'Cross Body Lead',
                                text: `Some text about the move.`,
                                type: 'video',
                                links: [],
                                thumbnailUrl: 'src/assets/images/image-coming-soon-3x2.jpg',
                                videoUrl: ''
                            },
                            {
                                summary: `Follow's Right Turn`,
                                text: `Some text about the move.`,
                                type: 'video',
                                links: [],
                                thumbnailUrl: 'src/assets/images/image-coming-soon-3x2.jpg',
                                videoUrl: ''
                            },
                            {
                                summary: `Lead's Right Turn`,
                                text: `Some text about the move.`,
                                type: 'video',
                                links: [],
                                thumbnailUrl: 'src/assets/images/image-coming-soon-3x2.jpg',
                                videoUrl: ''
                            },
                            {
                                summary: `The Walk-Through`,
                                text: `Some text about the move.`,
                                type: 'video',
                                links: [],
                                thumbnailUrl: 'src/assets/images/image-coming-soon-3x2.jpg',
                                videoUrl: ''
                            },
                            {
                                summary: `Cross-Body Lead with Inside Turn`,
                                text: `Some text about the move.`,
                                type: 'video',
                                links: [],
                                thumbnailUrl: 'src/assets/images/image-coming-soon-3x2.jpg',
                                videoUrl: ''
                            },
                            {
                                summary: `Cross-Body Lead with Outside Turn`,
                                text: `Some text about the move.`,
                                type: 'video',
                                links: [],
                                thumbnailUrl: 'src/assets/images/image-coming-soon-3x2.jpg',
                                videoUrl: ''
                            }
                        ]
                    }
                ],
            };
        },
        methods: {
            handleShowVideoModal(videoUrl) {
                console.log(videoUrl);
                this.currentvideo = videoUrl;
                this.showVideoModal = true;
            },
            handleCloseVideoModal() {
                this.currentVideo = null;
                this.showVideoModal = false;
            },
        }
    }

</script>

<style>
.content-detail {
    display: grid;
}

.video-detail {
    grid-template-columns: 30% 70%;
}
.thumbnail-cell {
    padding: 1rem;
}

.thumbnail-cell img {
  width: 100%;
  height: 100%;
}

.text-detail {
    grid-template-columns: 100%;
}

video {
    width: 100%;
    aspect-ratio: 16 / 9;
}
</style>
