<template>
  <div>
    <section>
      <base-card>
        <h2>{{ computedFullName }}</h2>
        <h3>${{ computedRate }}/hour</h3>
      </base-card>
    </section>
    <section>
      <base-card>
        <header>
          <h2>Interested? Reach out now!</h2>
          <base-button propsLink :propsTo="computedContactLink"
            >Contact</base-button
          >
        </header>
        <router-view></router-view>
      </base-card>
    </section>
    <section>
      <base-card>
        <base-badge
          v-for="area in computedAreas"
          :key="area"
          :propsType="area"
          :propsTitle="area"
        >
        </base-badge>
        <p>{{ computedDescription }}</p>
      </base-card>
    </section>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      selectedCoach: null
    };
  },
  computed: {
    computedFullName() {
      return this.selectedCoach.firstName + ' ' + this.selectedCoach.lastName;
    },
    computedAreas() {
      return this.selectedCoach.areas;
    },
    computedRate() {
      return this.selectedCoach.hourlyRate;
    },
    computedDescription() {
      return this.selectedCoach.description;
    },
    computedContactLink() {
      return this.$route.path + '/' + this.id + '/contact';
    }
  },
  created() {
    this.selectedCoach = this.$store.getters['coaches/coaches'].find(
      coach => coach.id === this.id
    );
  }
};
</script>
