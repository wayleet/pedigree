<template>
  <div class="card">
    <div class="card-header">
      <h2 class="institution">{{ education.name }}</h2>
      <div class="dates">{{ formatDate(education.startDate) }} - {{ formatDate(education.endDate) }}</div>
    </div>

    <div class="card-body">
      <div class="detail"><strong>Тип:</strong> {{ education.type }}</div>
      <div class="detail"><strong>Уровень образования:</strong> {{ education.level }}</div>
      <div class="detail"><strong>Город:</strong> {{ education.city }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EducationItem',
  props: {
    education: {
      type: Object,
      required: true
    }
  },
  methods: {
    formatDate(date) {
      // Функция для форматирования даты, если необходимо
      return date;
    }
  }
}
</script>

<style scoped lang="less">
@base-color: #333;
@light-color: #666;
@background-color: #f5f5f5;
@font-family: 'Inter', sans-serif;

.card {
  display: flex;
  flex-direction: column;
  border-radius: 24px;
  background-color: @background-color;
  box-shadow: 1.5px 7px 5px 1.5px rgba(0, 0, 0, 0.1), -1.5px 7px 5px -1.5px rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
  padding: 15px;
  font-family: @font-family;

  .card-header {
    margin-bottom: 15px;

    .institution {
      font-size: 24px;
      font-weight: bold;
      margin: 0;
    }

    .dates {
      font-size: 14px;
      color: @light-color;
    }
  }

  .card-body {
    display: flex;
    flex-direction: column;
    gap: 10px;

    .detail {
      font-size: 16px;
      color: @base-color;

      strong {
        font-weight: 600;
      }
    }
  }
}
</style>