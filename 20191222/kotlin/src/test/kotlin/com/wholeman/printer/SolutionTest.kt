package com.wholeman.printer

import org.assertj.core.api.Assertions.assertThat
import org.junit.Test

fun getPrintOrder(priorities: IntArray, location: Int): Int {
    val queue = priorities.mapIndexed { index, value -> index to value }
    return step(queue, location, 1)
}

tailrec fun <T : Pair<Int, Int>> step(queue: List<T>, target: Int, order: Int): Int =
        when (queue.maxBy { it.second }) {
            queue.first() ->
                if (queue.first().first == target) order
                else step(queue.drop(1), target, order + 1)
            else -> step(queue.drop(1) + queue.first(), target, order)
        }

class SolutionTest {

    @Test
    fun `Find the print order of the document at the given location`() {
        assertThat(getPrintOrder(intArrayOf(2, 1), 0)).isEqualTo(1)
        assertThat(getPrintOrder(intArrayOf(2, 1, 1), 0)).isEqualTo(1)
        assertThat(getPrintOrder(intArrayOf(2, 1, 1), 2)).isEqualTo(3)
        assertThat(getPrintOrder(intArrayOf(2, 1, 3, 2), 2)).isEqualTo(1)
        assertThat(getPrintOrder(intArrayOf(2, 1, 3, 2), 0)).isEqualTo(3)
        assertThat(getPrintOrder(intArrayOf(1, 1, 9, 1, 1, 1), 0)).isEqualTo(5)
    }
}
