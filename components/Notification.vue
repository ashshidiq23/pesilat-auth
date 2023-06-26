
<script>
export default {
  name: 'Notification',
  props: ['message']
}
</script>

<template>
  <div class="notification is-danger">
    {{ message }}
  </div>
</template>
