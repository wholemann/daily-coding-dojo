package com.wholeman.intervalnumbers

import org.assertj.core.api.Assertions.assertThat
import org.junit.Test

fun solution(x: Int, n: Int) = LongArray(n) { ((it + 1L) * x) }

class SolutionTest {

    @Test
    fun `Make numbers spaced by x`() {
        assertThat(solution(2, 5)).isEqualTo(longArrayOf(2, 4, 6, 8, 10))
        assertThat(solution(4, 3)).isEqualTo(longArrayOf(4, 8, 12))
        assertThat(solution(-4, 2)).isEqualTo(longArrayOf(-4, -8))
    }
}
