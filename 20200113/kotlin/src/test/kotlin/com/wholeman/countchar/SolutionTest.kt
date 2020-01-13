package com.wholeman.countchar

import org.assertj.core.api.Assertions.assertThat
import org.junit.Test

fun solution(s: String) =
        s.toUpperCase().count { it == 'P' } === s.toUpperCase().count { it == 'Y' }

class SolutionTest {

    @Test
    fun `Count p or y counts in a string`() {
        assertThat(solution("pPoooyY")).isEqualTo(true)
        assertThat(solution("Pyy")).isEqualTo(false)
    }
}
