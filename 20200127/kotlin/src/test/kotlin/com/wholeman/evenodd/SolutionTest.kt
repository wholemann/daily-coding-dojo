package com.wholeman.evenodd

import org.assertj.core.api.Assertions.assertThat
import org.junit.Test

fun solution(num: Int) = when (num % 2) {
        0 -> "Even"
        else -> "Odd"
    }

class SolutionTest {

    @Test
    fun `If the number is even, return Even Otherwise, return Odd`() {
        assertThat(solution(3)).isEqualTo("Odd")
        assertThat(solution(4)).isEqualTo("Even")
    }
}