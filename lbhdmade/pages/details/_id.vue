<template>
  <div class="section">
    <div class="section-name">
      <span>ANDREA</span>
    </div>
    <div class="section-img">
      <img src="/style/images/jiapei li.png" alt="">
      <span>JIAPEI LI</span>
    </div>
    <author></author>
    <div class="section-submit">
      <p class="free">FREE</p>
      <P class="apply">申请</P>
    </div>
  </div>
</template>

<script>
  import Author from '~/components/Author'

  export default ({
    components: { Author }
  })
</script>
<style lang="less">
  .section {
    width: 100%;
    height: auto;
    background-image: url(/style/images/background.jpg);
    background-size: cover;
    overflow: hidden;
    .section-name {
      margin: 1rem 0.8125rem;
      display: inline-flex;
      flex-direction: column;
      span {
        font-size: 1.875rem;
        color: #fff;
        background: #000;
        padding: 0 0.3rem;
        margin-top: 0.5rem;
      }
    }
    .section-img {
      height: 320px;
      width: 100%;
      position: relative;
      img {
        height: 100%;
        width: 100%;
      }
      span {
        position: absolute;
        top: -0.8rem;
        left: 0.8125rem;
        font-size: 1.875rem;
        color: #fff;
        background: #000;
        padding: 0 0.3rem;
      }
    }
    .section-submit {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      display: flex;
      height: 3rem;
      .free {
        flex: 1;
        background-color: rgba(181, 0, 5, 0.6);
        font-size: 1.4375rem;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-weight: bold;
      }
      .apply {
        flex: 2;
        background-color: rgba(181, 0, 5, 1);
        font-size: 1.4375rem;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-weight: bold;
      }
    }
  }
</style>
