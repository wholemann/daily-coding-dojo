package com.wholeman.draw

import org.assertj.core.api.Assertions.assertThat
import org.junit.Test
import kotlin.math.ceil

fun solution(n: Int, a: Int, b: Int): Int {
    tailrec fun step(a: Double, b: Double, round: Int): Int = when {
        next(a) == next(b) -> round
        else -> step(next(a), next(b), round + 1)
    }

    return step(a.toDouble(), b.toDouble(), 1)
}

fun next(x: Double) = ceil((x / 2))

class SolutionTest {

    @Test
    fun `Find a round where two people meet`() {
        assertThat(solution(2, 1, 2)).isEqualTo(1)
        assertThat(solution(4, 3, 4)).isEqualTo(1)
        assertThat(solution(4, 2, 4)).isEqualTo(2)
        assertThat(solution(8, 4, 7)).isEqualTo(3)
        assertThat(solution(8, 4, 5)).isEqualTo(3)
        assertThat(solution(8, 1, 3)).isEqualTo(2)
    }

    @Test
    fun `Generate number in next round`() {
        assertThat(next(4.0)).isEqualTo(2.0)
        assertThat(next(7.0)).isEqualTo(4.0)
    }
}
