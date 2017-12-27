<template>
  <div class="author">
    <h4>FASHION PRESENTATION</h4>
    <div class="author-info">
      <div class="author-info__intro">
        <p>设计师 liyanbiao</p>
        <span>李艳彪</span>
        <span>Slienttears</span>
        <p>一句话的简介</p>
      </div>
      <div class="author-info__url">
        <img src="/style/images/1.-ANDREA-JIAPEI-LI.png" alt="">
      </div>
    </div>
    <h4>INSPIRATION</h4>
  </div>
</template>
<script></script>
<style lang="less">
  .author {
    width: 87%;
    margin: 0 auto;
    margin-top: 1rem;
    h4 {
      font-size: 1.125rem;
      color: #fff;
      background: #000;
      width: 100%;
      text-align: center;
    }
    .author-info {
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
      background: #fff;
      .author-info__intro {
        flex: 2;
        margin-left: 0.875rem;
        p {
          color: #000;
          font-size: 0.75rem;
          margin: 0.875rem 0;
        }
        span {
          color: #000;
          font-size: 0.9375rem;
        }
        span + span {
          padding: 0 0.7rem;
        }
      }
      .author-info__url {
        flex: 1;
        img {
          width: 5.625rem;
          height: 5.625rem;
          border-radius: 50%;
          margin: 0.625rem;
        }
      }
    }
  }
</style>
