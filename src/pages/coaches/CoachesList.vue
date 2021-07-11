<template>
  <div>
    <section>
      FILTER
    </section>
    <section>
      <base-card>
        <div class="controls">
          <base-button propsMode="outline">Refresh</base-button>
          <base-button propsLink propsTo="/register">Register as Coach</base-button>
        </div>
        <ul v-if="hasCoaches">
          <coach-item
            v-for="coach in filteredCoaches"
            :key="coach.id"
            :propsID="coach.id"
            :propsFirstName="coach.firstName"
            :propsLastName="coach.lastName"
            :propsRate="coach.hourlyRate"
            :propsAreas="coach.areas"
          >
          </coach-item>
        </ul>
        <h3 v-else>
          No coaches found.
        </h3>
      </base-card>
    </section>
  </div>
</template>

<script>
import CoachItem from '../../components/coaches/CoachItem.vue';
import BaseButton from '../../components/ui/BaseButton.vue';

export default {
  components: {
    CoachItem,
    BaseButton
  },
  computed: {
    filteredCoaches() {
      return this.$store.getters['coaches/coaches'];
    },
    hasCoaches() {
      return this.$store.getters['coaches/hasCoaches'];
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
