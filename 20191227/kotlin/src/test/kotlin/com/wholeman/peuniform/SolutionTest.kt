package com.wholeman.peuniform

import org.assertj.core.api.Assertions.assertThat
import org.junit.Test

fun solution(n: Int, lost: IntArray, reserve: IntArray) =
        distribute(n, (lost.toSet() - reserve.toSet()).toList(), (reserve.toSet() - lost.toSet()).toList())


fun <T: Int> distribute(n: T, lost: List<Int>, reserve: List<T>): Int =
        when {
            lost.isEmpty() -> n
            lost.first() - 1 in reserve -> distribute(n, lost.drop(1), reserve.filterNot { it == lost.first() - 1 })
            lost.first() + 1 in reserve -> distribute(n, lost.drop(1), reserve.filterNot { it == lost.first() + 1 })
            else -> distribute(n - 1, lost.drop(1), reserve)
        }

class SolutionTest {

    @Test
    fun `get maximum number of students in class`() {
        assertThat(solution(1, intArrayOf(1), intArrayOf(1))).isEqualTo(1)
        assertThat(solution(5, intArrayOf(2, 4), intArrayOf(1, 3, 5))).isEqualTo(5)
        assertThat(solution(5, intArrayOf(2, 4), intArrayOf(3))).isEqualTo(4)
        assertThat(solution(3, intArrayOf(3), intArrayOf(1))).isEqualTo(2)
        assertThat(solution(5, intArrayOf(3, 4), intArrayOf(1, 5))).isEqualTo(4)
    }
}