package com.wholeman.sumdigits

import org.assertj.core.api.Assertions.assertThat
import org.junit.Test

fun solution(n: Int) = "$n".map(Character::getNumericValue).sum()

class SolutionTest {

    @Test
    fun `Find the sum of each digit in a given natural number`() {
        assertThat(solution(123)).isEqualTo(6)
        assertThat(solution(987)).isEqualTo(24)
        assertThat(solution(1)).isEqualTo(1)
    }
}
