<template>
  <div class="row">
    <div class="fs-1" v-if="!expired">Buy Now</div>
    <div class="fs-1" v-else>Done</div>
    <section class="">
      <div class="row justify-content-md-center">
        <div class="fs-1 col-1">
          {{displayDays}}
          <div class="form-label bottom-0 fs-6">days</div>
        </div>
        <span class="fs-1 col-1">:</span>
        <div class="fs-1 col-1">
          {{displayHours}}
          <div class="form-label bottom-0 fs-6">hours</div>
        </div>
        <span class="fs-1 col-1">:</span>
        <div class="fs-1 col-1">
          {{displayMinutes}}
          <div class="form-label bottom-0 fs-6">minutes</div>
        </div>
        <span class="fs-1 col-1">:</span>
        <div class="fs-1 col-1">
          {{displaySeconds}}
          <div class="form-label bottom-0 fs-6">seconds</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: ["year", "month", "date", "hour", "minute", "second", "millisecond"],
  data:()=> ({
    displayDays: 0,
    displayHours: 0,
    displayMinutes: 0,
    displaySeconds: 0,
    expired: false,
  }),
  computed: {
    _seconds:() => 1000,
    _minutes() {
      return this._seconds * 60;
    },
    _hours() {
      return this._minutes * 60;
    },
    _days(){
      return this._hours * 24;
    },
    end() {
      return new Date(
          this.year,
          this.month,
          this.date,
          this.hour,
          this.minute,
          this.second,
          this.millisecond
      );
    }
  },
  mounted() {
    this.showRemaining();
  },
  methods: {
    formatNum: num => (num < 10? "0" + num: num),
    showRemaining() {
      const timer = setInterval(()=>{
        const now = new Date();
        const distance = this.end.getTime() - now.getTime();
        if (distance < 0) {
          clearInterval(timer);
          this.expired = true;
          return ;
        }
        
        const days = Math.floor(distance / this._days);
        const hours = Math.floor((distance % this._days) / this._hours);
        const minutes = Math.floor((distance % this._hours) / this._minutes);
        const seconds = Math.floor((distance % this._minutes) / this._seconds);
        this.displayMinutes = this.formatNum(minutes);
        this.displaySeconds = this.formatNum(seconds);
        this.displayHours = this.formatNum(hours);
        this.displayDays = this.formatNum(days);
      }, 1000)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>