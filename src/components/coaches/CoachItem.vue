<template>
    <li>
        <h3>{{ fullName }}</h3>
        <h4>${{ propsRate }} / hour</h4>
        <div>
            <base-badge v-for="area in propsAreas" :key="area" 
            :propsType="area" 
            :propsTitle="area"></base-badge>
        </div>
        <div class="actions">
            <base-button propsMode="outline" propsLink :to="coachContactLink">Contact</base-button>
            <base-button propsLink :propsTo="coachDetailsLink">View Details</base-button>
        </div>
    </li>
</template>

<script>
export default{
    props: ['propsID', 'propsFirstName', 'propsLastName', 'propsRate', 'propsAreas'],
    computed: {
        fullName(){
            return this.propsFirstName + ' ' + this.propsLastName;
        },
        coachContactLink(){
            return this.$route.path + '/' + this.propsID + '/contact'; 
        },
        coachDetailsLink(){
            return this.$route.path + '/' + this.propsID;
        }
    }
}
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>
