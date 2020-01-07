package com.wholeman.average

import org.assertj.core.api.Assertions.assertThat
import org.junit.Test

fun solution(arr: IntArray) = arr.average()

class SolutionTest {

    @Test
    fun `Calculate average of given numbers`() {
        assertThat(solution(intArrayOf(1, 2, 3, 4))).isEqualTo(2.5)
        assertThat(solution(intArrayOf(5, 5))).isEqualTo(5.0)
        assertThat(solution(intArrayOf(0))).isEqualTo(0.0)
    }
}