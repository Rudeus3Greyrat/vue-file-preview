<template>
  <div class="content-wrapper">
    <div class="content" style="min-height: 20rem;">
      <iframe :src="'/static/pdf/web/viewer.html?file=' + src" class="pdf-viewer" v-if="type==='pdf'"/>
      <img :src="src" class="img-viewer" v-else-if="['png','jpg','jpeg','gif','webp','svg','gif'].includes(type)">
      <video :src="src" class="video-viewer" controls v-else-if="['mp4','webm','ogg'].includes(type)"/>
      <div v-else>该文件类型暂不支持预览！</div>
    </div>
  </div>
</template>

<script>
  import {getObjectURL} from './utils/getObjectURL'

  export default {
    name: 'FilePreview',
    props: {
      response: {
        type: Object,
        default: function () {
          return {}

        }
      },
      type: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        src: ''
      }
    },
    created() {
      this.preview()
    },
    methods: {
      preview(){
          this.src = getObjectURL(this.response) // 从文件流对象获取url
        }
      }
  }
</script>

<style scoped>
  .pdf-viewer {
    width: 100% !important;
    height: 35rem !important;
    overflow: scroll;
  }

  .img-viewer {
    max-width: 100% !important;
    max-height: 50rem !important;
    overflow: scroll;
  }

  .video-viewer {
    max-width: 100% !important;
    max-height: 50rem !important;
    overflow: scroll;
  }

  .content-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: scroll;
  }

  .content {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: scroll;
  }
</style>
