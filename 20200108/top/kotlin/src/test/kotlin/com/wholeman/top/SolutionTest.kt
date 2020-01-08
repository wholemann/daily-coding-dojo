package com.wholeman.top

import org.assertj.core.api.Assertions.assertThat
import org.junit.Test

/*
앞에 있는 탑 중 높이가 나보다 큰 탑을 찾아서
그 중에 가장 index가 큰 탑의 위치를 받아서 result에 넣는다.
만약 없으면 0을 result에 넣는다.
송신한 탑은 제외하고 앞의 과정을 다시 반복한다.
 */

fun solution1(heights: IntArray): IntArray {
    val result = mutableListOf<Int>()
    for (i in heights.size - 1 downTo 0) {
        result.add(
                0,
                heights.dropLast(heights.size - i).indexOfLast { it > heights[i] } + 1
        )
    }
    return result.toIntArray()
}

fun solution2(heights: IntArray): IntArray {
    return step(heights.toList(), emptyList()).reversed().toIntArray()
}

tailrec fun <T : Int> step(heights: List<T>, receivers: List<T>): List<T> = when {
    heights.isEmpty() -> receivers
    else -> step(
            heights.dropLast(1),
            receivers.plus(heights.indexOfLast { it > heights.last() } + 1)
    ) as List<T>
}

fun solution3(heights: IntArray) =
        heights.mapIndexed { i, sender ->
            heights.dropLast(heights.size - i).indexOfLast { it > sender } + 1
        }.toIntArray()

class SolutionTest {

    @Test
    fun `Find the towers that received the signal`() {
        arrayOf<(IntArray) -> IntArray>(
                ::solution1,
                ::solution2,
                ::solution3
        ).forEach { solution ->
            assertThat(solution(intArrayOf(6, 9, 5, 7, 4))).isEqualTo(intArrayOf(0, 0, 2, 2, 4))
            assertThat(solution(intArrayOf(3, 9, 9, 3, 5, 7, 2))).isEqualTo(intArrayOf(0, 0, 0, 3, 3, 3, 6))
            assertThat(solution(intArrayOf(1, 5, 3, 6, 7, 6, 5))).isEqualTo(intArrayOf(0, 0, 2, 0, 0, 5, 6))
        }
    }
}
