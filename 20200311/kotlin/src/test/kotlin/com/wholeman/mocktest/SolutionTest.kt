package com.wholeman.mocktest

import org.assertj.core.api.Assertions.assertThat
import org.junit.Test


fun solution(answers: IntArray): IntArray {
    val patterns = listOf(listOf(1, 2, 3, 4, 5),
            listOf(2, 1, 2, 3, 2, 4, 2, 5),
            listOf(3, 3, 1, 1, 2, 2, 4, 4, 5, 5)
    )

    val scores = answers.foldIndexed(Triple(0, 0, 0)) { index, acc, c ->
        when (c) {
            patterns[0][index % patterns[0].size] -> Triple(acc.first + 1, acc.second, acc.third)
            patterns[1][index % patterns[1].size] -> Triple(acc.first, acc.second + 1, acc.third)
            else -> Triple(acc.first, acc.second, acc.third + 1)
        }
    }.toList()

    return scores.foldIndexed(intArrayOf()) { index, acc, s ->
        when (s) {
            scores.max() -> acc + (index + 1)
            else -> acc
        }
    }
}

class SolutionTest {

    @Test
    fun `Find the person who solved the most problems`() {
        assertThat(solution(intArrayOf(1, 2, 3, 4, 5))).isEqualTo(intArrayOf(1))
    }
}
