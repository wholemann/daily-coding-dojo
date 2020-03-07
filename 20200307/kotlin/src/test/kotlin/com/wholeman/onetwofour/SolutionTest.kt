package com.wholeman.onetwofour

import org.assertj.core.api.Assertions.assertThat
import org.junit.Test

fun solution(n: Int): String {
    fun step(n: Int): String =
            if (n < 3) arrayOf("1", "2", "4")[n]
            else step(n / 3 - 1) + step(n % 3)
    return step(n - 1)
}

class SolutionTest {

    @Test
    fun `Convert n to 124 country's number`() {
        assertThat(solution(1)).isEqualTo("1")
        assertThat(solution(2)).isEqualTo("2")
        assertThat(solution(3)).isEqualTo("4")
        assertThat(solution(4)).isEqualTo("11")
        assertThat(solution(5)).isEqualTo("12")
        assertThat(solution(6)).isEqualTo("14")
        assertThat(solution(7)).isEqualTo("21")
        assertThat(solution(8)).isEqualTo("22")
        assertThat(solution(9)).isEqualTo("24")
        assertThat(solution(10)).isEqualTo("41")
        assertThat(solution(11)).isEqualTo("42")
        assertThat(solution(12)).isEqualTo("44")
        assertThat(solution(13)).isEqualTo("111")
    }
}
