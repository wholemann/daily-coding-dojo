package com.wholeman.printer

import org.assertj.core.api.Assertions.assertThat
import org.junit.Test

fun solution1(priorities: IntArray, location: Int): Int {
    var order = 1
    var queue = priorities.mapIndexed { i, p -> p to i }

    while (true) {
        if (queue.first() == queue.maxBy { it.first }) {
            if (queue.first().second == location) {
                return order
            }
            order += 1
            queue = queue.drop(1)
        } else {
            queue = queue.drop(1) + queue.first()
        }
    }
}

fun solution2(priorities: IntArray, location: Int): Int {
    tailrec fun step(queue: List<Pair<Int, Int>>, order: Int): Int =
            when (queue.first()) {
                queue.maxBy { it.first } ->
                    if (queue.first().second == location) order
                    else step(queue.drop(1), order + 1)
                else -> step(queue.drop(1) + queue.first(), order)
            }

    return step(priorities.mapIndexed { i, p -> p to i }, 1)
}

class SolutionTest {

    @Test
    fun `Find the output order of the target document`() {
        arrayOf(::solution1, ::solution2).forEach { solution ->
            assertThat(solution(intArrayOf(2, 1, 3, 2), 2)).isEqualTo(1)
            assertThat(solution(intArrayOf(1, 1, 9, 1, 1, 1), 0)).isEqualTo(5)
        }
    }
}
