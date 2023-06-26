<script>
import {mapGetters} from 'vuex';

export default {
  name: "profile",
  middleware: 'auth',
  computed: {
    ...mapGetters(['loggedInUser'])
  }
}
</script>

<template>
  <section class="section">
    <div class="container">
      <h2 class="title">My Profile</h2>
      <div class="content">
        <p>
          <strong>Username:</strong>
          {{ loggedInUser.username }}
        </p>
        <p>
          <strong>Email:</strong>
          {{ loggedInUser.email }}
        </p>
        <p>
          <strong>Created At:</strong>
          {{ new Date(loggedInUser.created_at).toLocaleDateString('id-ID') }}
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
