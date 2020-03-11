package com.wholeman.mocktest

import org.assertj.core.api.Assertions.assertThat
import org.junit.Test


fun solution(answers: IntArray): IntArray {
    val patterns = listOf(listOf(1, 2, 3, 4, 5),
            listOf(2, 1, 2, 3, 2, 4, 2, 5),
            listOf(3, 3, 1, 1, 2, 2, 4, 4, 5, 5)
    )
    val scores = intArrayOf(0, 0, 0)

    answers.forEachIndexed { index, i ->
        (0..2).forEach { j ->
            if (patterns[j][index % answers.size] == i) {
                scores[j] += 1
            }
        }
    }

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
        assertThat(solution(intArrayOf(1, 3, 2, 4, 2))).isEqualTo(intArrayOf(1, 2, 3))
    }
}
