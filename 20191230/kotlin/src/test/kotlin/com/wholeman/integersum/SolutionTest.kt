package com.wholeman.integersum

import org.assertj.core.api.Assertions.assertThat
import org.junit.Test

fun solution(a: Int, b: Int): Long =  when {
    a >= b -> (a.toLong() downTo b.toLong()).sum()
    else -> (a.toLong()..b.toLong()).sum()
}

class SolutionTest {

    @Test
    fun `sum between two integers`() {
        assertThat(solution(3, 5)).isEqualTo(12)
        assertThat(solution(3, 3)).isEqualTo(3)
        assertThat(solution(5, 3)).isEqualTo(12)
    }
}