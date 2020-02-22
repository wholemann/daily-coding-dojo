package com.wholeman.carpet

import org.assertj.core.api.Assertions.assertThat
import org.junit.Test

fun solution(brown: Int, red: Int): IntArray =
        (1..(red / 2 + 1))
            .filter { red % it == 0 }
            .first { (red / it + 2) * (it + 2) == brown + red }
            .let { intArrayOf(red / it + 2, it + 2) }

class SolutionTest {

    @Test
    fun `Find the number of brown grids and the number of red grids`() {
        assertThat(solution(10, 2)).isEqualTo(intArrayOf(4, 3))
        assertThat(solution(8, 1)).isEqualTo(intArrayOf(3, 3))
        assertThat(solution(12, 3)).isEqualTo(intArrayOf(5, 3))
        assertThat(solution(14, 4)).isEqualTo(intArrayOf(6, 3))
        assertThat(solution(24, 24)).isEqualTo(intArrayOf(8, 6))
        assertThat(solution(26, 10)).isEqualTo(intArrayOf(12, 3))
    }
}
