package com.wholeman.reversenatural

import org.assertj.core.api.Assertions.assertThat
import org.junit.Test

fun solution(n: Long) = "$n".map(Character::getNumericValue).reversed().toIntArray()

class SolutionTest {

    @Test
    fun `Convert natural number to Invert a given natural number to form an array`() {
        assertThat(solution(12345)).isEqualTo(intArrayOf(5, 4, 3, 2, 1))
        assertThat(solution(1)).isEqualTo(intArrayOf(1))
    }
}