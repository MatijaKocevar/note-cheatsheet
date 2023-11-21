<script setup lang="ts">
    import { computed } from 'vue'

    interface PianoKeyProps {
        keyData: {
            note: string
            octave: number
            type: 'white' | 'black'
        }
        isPrevWhite: boolean
    }

    const props = defineProps<PianoKeyProps>()

    const keyStyle = computed(() => {
        if (props.keyData.type === 'white' && props.isPrevWhite) {
            return { marginLeft: '-6px', marginRight: '0px' }
        }
        return {}
    })
</script>

<template>
    <div
        :class="['piano-key', props.keyData.type]"
        :style="keyStyle"></div>
</template>

<style lang="scss" scoped>
    .piano-key {
        border: 1px solid black;
        border-radius: 5px;
        margin: 5px;
        transition: background-color 0.2s ease;

        &.white {
            background-color: white;
            width: 25px;
            height: 100px;
        }

        &.black {
            background-color: black;
            width: 15px;
            height: 60px;
            position: relative;
            margin-left: -15px;
            margin-right: -15px;
            z-index: 1;
        }

        &.orange {
            background-color: orange;
        }

        &.blue {
            background-color: blue;
        }
    }
</style>
