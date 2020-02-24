package com.wholeman.baseballgame

import org.assertj.core.api.Assertions.assertThat
import org.junit.Test

fun solution(baseball: Array<IntArray>) =
        (123..987)
                .filter {
                    !it.toString().contains('0') && it.toString().toSet().size === 3 && check(it, baseball)
                }.size

inline fun check(candidate: Int, baseball: Array<IntArray>) =
        baseball.all { (question, strikes, balls) ->
            question.toString().foldIndexed(Pair(0, 0)) { index, acc, c ->
                when (c) {
                    candidate.toString()[index] -> Pair(acc.first + 1, acc.second)
                    in candidate.toString() -> Pair(acc.first, acc.second + 1)
                    else -> acc
                }
            } == Pair(strikes, balls)
        }

class SolutionTest {

    @Test
    fun `Find the number of possible answers`() {
        assertThat(
                solution(arrayOf(
                        intArrayOf(123, 1, 1),
                        intArrayOf(356, 1, 0),
                        intArrayOf(327, 2, 0),
                        intArrayOf(489, 0, 1))
                )).isEqualTo(2)
    }

    @Test
    fun `Check if it can be answered`() {
        assertThat(
                check(324, arrayOf(
                        intArrayOf(123, 1, 1),
                        intArrayOf(356, 1, 0),
                        intArrayOf(327, 2, 0),
                        intArrayOf(489, 0, 1))
                )).isEqualTo(true)
        assertThat(
                check(328, arrayOf(
                        intArrayOf(123, 1, 1),
                        intArrayOf(356, 1, 0),
                        intArrayOf(327, 2, 0),
                        intArrayOf(489, 0, 1))
                )).isEqualTo(true)
    }
}
