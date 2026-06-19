<template>
  <div class="status-bar" :class="timeClass">
    <!-- 顶部信息栏 -->
    <div class="header">
      <div class="time-info">
        <span class="day">第{{ store.stat_data.世界.当前天数 }}天</span>
        <span class="dot">·</span>
        <span class="time">{{ store.stat_data.世界.当前时间 }}</span>
        <span class="dot">·</span>
        <span class="location">{{ store.stat_data.世界.当前位置 }}</span>
      </div>
      <div class="stage" v-if="store.stat_data.剧情.阶段">
        <span class="stage-icon">🌸</span>
        <span>{{ stageLabel }}</span>
      </div>
    </div>

    <!-- 角色卡片 -->
    <div class="cards">
      <!-- 白 -->
      <div class="card shiro">
        <div class="card-header">
          <span class="chara-name">白</span>
          <span class="chara-emoji">🦊</span>
          <span class="affection">
            <span class="heart" :class="{ active: store.stat_data.白.好感度 > 30 }">♥</span>
            {{ store.stat_data.白.好感度 }}
          </span>
        </div>
        <div class="affection-bar">
          <div class="bar-fill shiro-fill" :style="{ width: store.stat_data.白.好感度 + '%' }"></div>
        </div>
        <div class="inner-thought" v-if="store.stat_data.白.内心想法">
          <span class="thought-mark">「</span>{{ store.stat_data.白.内心想法 }}<span class="thought-mark">」</span>
        </div>
      </div>

      <!-- 狐 -->
      <div class="card kitsune">
        <div class="card-header">
          <span class="chara-name">狐</span>
          <span class="chara-emoji">🦊</span>
          <div class="stats">
            <span class="affection">
              <span class="heart" :class="{ active: store.stat_data.狐.好感度 > 30 }">♥</span>
              {{ store.stat_data.狐.好感度 }}
            </span>
            <span class="trust">
              <span class="shield" :class="{ active: store.stat_data.狐.信任度 > 30 }">🛡</span>
              {{ store.stat_data.狐.信任度 }}
            </span>
          </div>
        </div>
        <div class="affection-bar">
          <div class="bar-fill kitsune-fill" :style="{ width: store.stat_data.狐.好感度 + '%' }"></div>
        </div>
        <div class="trust-bar">
          <div class="bar-fill trust-fill" :style="{ width: store.stat_data.狐.信任度 + '%' }"></div>
        </div>
        <div class="inner-thought" v-if="store.stat_data.狐.内心想法">
          <span class="thought-mark">「</span>{{ store.stat_data.狐.内心想法 }}<span class="thought-mark">」</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useDataStore } from './store';

const store = useDataStore();

const timeClass = computed(() => {
  const t = store.stat_data.世界.当前时间;
  if (t === '早晨' || t === '上午') return 'morning';
  if (t === '下午') return 'afternoon';
  if (t === '傍晚') return 'dusk';
  return 'night';
});

const stageLabel = computed(() => {
  const s = store.stat_data.剧情.阶段;
  const map: Record<string, string> = {
    '观察期': '初遇',
    '软化期': '走近',
    '卸防期': '交心',
    '深情期': '深情',
  };
  return map[s] || s;
});
</script>
