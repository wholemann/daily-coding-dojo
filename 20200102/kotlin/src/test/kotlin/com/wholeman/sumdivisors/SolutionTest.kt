package com.wholeman.sumdivisors

import org.assertj.core.api.Assertions.assertThat
import org.junit.Test

fun solution(n: Int) = (1..n).filter { n % it == 0 }.sum()

class SolutionTest {

    @Test
    fun `sum of common divisors of two given integers`() {
        assertThat(solution(12)).isEqualTo(28)
        assertThat(solution(5)).isEqualTo(6)
        assertThat(solution(0)).isEqualTo(0)
    }
}