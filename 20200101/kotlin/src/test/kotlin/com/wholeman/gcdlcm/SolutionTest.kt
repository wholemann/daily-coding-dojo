package com.wholeman.gcdlcm

import org.assertj.core.api.Assertions.assertThat
import org.junit.Test

fun solution(n: Int, m: Int): IntArray {
    val gcd = if (n >= m) gcd(n, m) else gcd(m, n)
    return intArrayOf(gcd, n * m / gcd)
}

tailrec fun gcd(a: Int, b: Int): Int = when {
    b === 0 -> a
    else -> gcd(b, a % b)
}

class SolutionTest {

    @Test
    fun `calculate GCD and LCM`() {
        assertThat(solution(3, 12)).isEqualTo(intArrayOf(3, 12))
        assertThat(solution(2, 5)).isEqualTo(intArrayOf(1, 10))
    }

    @Test
    fun `calculate GCD of two given integers`() {
        assertThat(gcd(12, 3)).isEqualTo(3)
    }
}