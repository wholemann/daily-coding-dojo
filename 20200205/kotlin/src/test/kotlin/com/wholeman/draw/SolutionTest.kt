package com.wholeman.draw

import org.assertj.core.api.Assertions.assertThat
import org.junit.Test

fun solution(n: Int, a: Int, b: Int): Int {
    tailrec fun step(a: Int, b: Int, round: Int): Int = when {
        isEven(a) && a - 1 == b -> round
        isEven(b) && a + 1 == b -> round
        else -> step(next(a), next(b), round + 1)
    }

    return step(a, b, 1)
}

fun isEven(x: Int) = x % 2 == 0
fun next(x: Int) = if (x % 2 == 0) x / 2 else (x + 1) / 2

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
        assertThat(next(4)).isEqualTo(2)
        assertThat(next(7)).isEqualTo(4)
    }
}
