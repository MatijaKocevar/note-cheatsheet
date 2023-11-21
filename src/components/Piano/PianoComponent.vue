<script setup lang="ts">
    import { ref } from 'vue'
    import PianoKey from './PianoKey/PianoKey.vue'

    interface PianoKeyData {
        id: string
        note: string
        octave: number
        type: 'white' | 'black'
    }

    const pianoKeys = ref<Array<PianoKeyData>>([
        { id: 'C0', note: 'C', octave: 0, type: 'white' },
        { id: 'C#0', note: 'C#', octave: 0, type: 'black' },
        { id: 'D0', note: 'D', octave: 0, type: 'white' },
        { id: 'D#0', note: 'D#', octave: 0, type: 'black' },
        { id: 'E0', note: 'E', octave: 0, type: 'white' },
        { id: 'F0', note: 'F', octave: 0, type: 'white' },
        { id: 'F#0', note: 'F#', octave: 0, type: 'black' },
        { id: 'G0', note: 'G', octave: 0, type: 'white' },
        { id: 'G#0', note: 'G#', octave: 0, type: 'black' },
        { id: 'A0', note: 'A', octave: 0, type: 'white' },
        { id: 'A#0', note: 'A#', octave: 0, type: 'black' },
        { id: 'B0', note: 'B', octave: 0, type: 'white' },
        { id: 'C1', note: 'C', octave: 1, type: 'white' },
        { id: 'C#1', note: 'C#', octave: 1, type: 'black' },
        { id: 'D1', note: 'D', octave: 1, type: 'white' },
        { id: 'D#1', note: 'D#', octave: 1, type: 'black' },
        { id: 'E1', note: 'E', octave: 1, type: 'white' },
        { id: 'F1', note: 'F', octave: 1, type: 'white' },
        { id: 'F#1', note: 'F#', octave: 1, type: 'black' },
        { id: 'G1', note: 'G', octave: 1, type: 'white' },
        { id: 'G#1', note: 'G#', octave: 1, type: 'black' },
        { id: 'A1', note: 'A', octave: 1, type: 'white' },
        { id: 'A#1', note: 'A#', octave: 1, type: 'black' },
        { id: 'B1', note: 'B', octave: 1, type: 'white' },
        { id: 'C2', note: 'C', octave: 2, type: 'white' },
        { id: 'C#2', note: 'C#', octave: 2, type: 'black' },
        { id: 'D2', note: 'D', octave: 2, type: 'white' },
        { id: 'D#2', note: 'D#', octave: 2, type: 'black' },
        { id: 'E2', note: 'E', octave: 2, type: 'white' },
        { id: 'F2', note: 'F', octave: 2, type: 'white' },
        { id: 'F#2', note: 'F#', octave: 2, type: 'black' },
        { id: 'G2', note: 'G', octave: 2, type: 'white' },
        { id: 'G#2', note: 'G#', octave: 2, type: 'black' },
        { id: 'A2', note: 'A', octave: 2, type: 'white' },
        { id: 'A#2', note: 'A#', octave: 2, type: 'black' },
        { id: 'B2', note: 'B', octave: 2, type: 'white' },
        { id: 'C3', note: 'C', octave: 3, type: 'white' },
        { id: 'C#3', note: 'C#', octave: 3, type: 'black' },
        { id: 'D3', note: 'D', octave: 3, type: 'white' },
        { id: 'D#3', note: 'D#', octave: 3, type: 'black' },
        { id: 'E3', note: 'E', octave: 3, type: 'white' },
        { id: 'F3', note: 'F', octave: 3, type: 'white' },
        { id: 'F#3', note: 'F#', octave: 3, type: 'black' },
        { id: 'G3', note: 'G', octave: 3, type: 'white' },
        { id: 'G#3', note: 'G#', octave: 3, type: 'black' },
        { id: 'A3', note: 'A', octave: 3, type: 'white' },
        { id: 'A#3', note: 'A#', octave: 3, type: 'black' },
        { id: 'B3', note: 'B', octave: 3, type: 'white' },
        { id: 'C4', note: 'C', octave: 4, type: 'white' },
        { id: 'C#4', note: 'C#', octave: 4, type: 'black' },
        { id: 'D4', note: 'D', octave: 4, type: 'white' },
        { id: 'D#4', note: 'D#', octave: 4, type: 'black' },
        { id: 'E4', note: 'E', octave: 4, type: 'white' },
        { id: 'F4', note: 'F', octave: 4, type: 'white' },
        { id: 'F#4', note: 'F#', octave: 4, type: 'black' },
        { id: 'G4', note: 'G', octave: 4, type: 'white' },
        { id: 'G#4', note: 'G#', octave: 4, type: 'black' },
        { id: 'A4', note: 'A', octave: 4, type: 'white' },
        { id: 'A#4', note: 'A#', octave: 4, type: 'black' },
        { id: 'B4', note: 'B', octave: 4, type: 'white' },
        { id: 'C5', note: 'C', octave: 5, type: 'white' },
        { id: 'C#5', note: 'C#', octave: 5, type: 'black' },
        { id: 'D5', note: 'D', octave: 5, type: 'white' },
        { id: 'D#5', note: 'D#', octave: 5, type: 'black' },
        { id: 'E5', note: 'E', octave: 5, type: 'white' },
        { id: 'F5', note: 'F', octave: 5, type: 'white' },
        { id: 'F#5', note: 'F#', octave: 5, type: 'black' },
        { id: 'G5', note: 'G', octave: 5, type: 'white' },
        { id: 'G#5', note: 'G#', octave: 5, type: 'black' },
        { id: 'A5', note: 'A', octave: 5, type: 'white' },
        { id: 'A#5', note: 'A#', octave: 5, type: 'black' },
        { id: 'B5', note: 'B', octave: 5, type: 'white' },
        { id: 'C6', note: 'C', octave: 6, type: 'white' },
        { id: 'C#6', note: 'C#', octave: 6, type: 'black' },
        { id: 'D6', note: 'D', octave: 6, type: 'white' },
        { id: 'D#6', note: 'D#', octave: 6, type: 'black' },
        { id: 'E6', note: 'E', octave: 6, type: 'white' },
        { id: 'F6', note: 'F', octave: 6, type: 'white' },
        { id: 'F#6', note: 'F#', octave: 6, type: 'black' },
        { id: 'G6', note: 'G', octave: 6, type: 'white' },
        { id: 'G#6', note: 'G#', octave: 6, type: 'black' },
        { id: 'A6', note: 'A', octave: 6, type: 'white' },
        { id: 'A#6', note: 'A#', octave: 6, type: 'black' },
        { id: 'B6', note: 'B', octave: 6, type: 'white' },
        { id: 'C7', note: 'C', octave: 7, type: 'white' },
        { id: 'C#7', note: 'C#', octave: 7, type: 'black' },
        { id: 'D7', note: 'D', octave: 7, type: 'white' },
        { id: 'D#7', note: 'D#', octave: 7, type: 'black' },
        { id: 'E7', note: 'E', octave: 7, type: 'white' },
        { id: 'F7', note: 'F', octave: 7, type: 'white' },
        { id: 'F#7', note: 'F#', octave: 7, type: 'black' },
        { id: 'G7', note: 'G', octave: 7, type: 'white' },
        { id: 'G#7', note: 'G#', octave: 7, type: 'black' },
        { id: 'A7', note: 'A', octave: 7, type: 'white' },
        { id: 'A#7', note: 'A#', octave: 7, type: 'black' },
        { id: 'B7', note: 'B', octave: 7, type: 'white' }
    ])

    const isPreviousKeyWhite = (currentIndex: number): boolean => {
        if (currentIndex === 0) return false // First key has no previous key
        return pianoKeys.value[currentIndex - 1].type === 'white'
    }
</script>

<template>
    <div class="piano">
        <PianoKey
            v-for="(key, index) in pianoKeys"
            :key="key.id"
            :key-data="key"
            :is-prev-white="isPreviousKeyWhite(index)" />
    </div>
</template>

<style lang="scss">
    .piano {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-content: center;
        width: 100%;
        max-width: 100%;
        margin: 0 auto;
        height: 100%;
    }
</style>
