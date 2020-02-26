package com.wholeman.feature

import org.assertj.core.api.Assertions.assertThat
import org.junit.Test
import kotlin.math.ceil

// Functional
fun solution2(progresses: IntArray, speeds: IntArray): IntArray {
    tailrec fun step(queue: List<Int>, acc: IntArray): IntArray = when {
        queue.isEmpty() -> acc
        else -> step(queue.drop(deploy(queue)), acc + queue.take(deploy(queue)).count())
    }

    return step(progresses.zip(speeds, ::remainDays), intArrayOf())
}

fun remainDays(progress: Int, speed: Int): Int {
    return ceil((100f - progress) / speed).toInt()
}

fun deploy(queue: List<Int>) = when (queue.indexOfFirst { it > queue.first() }) {
    -1 -> queue.count()
    else -> queue.indexOfFirst { it > queue.first() }
}


// Imperative
fun solution1(progresses: IntArray, speeds: IntArray): IntArray {
    val result = mutableListOf<List<Int>>()
    var deploys = progresses.zip(speeds, ::remainDays)
    var index: Int = deploys.indexOfFirst { it > deploys.first() }

    while (index != -1) {
        result.add(deploys.take(index))
        deploys = deploys.drop(index).toMutableList()
        index = deploys.indexOfFirst { it > deploys.first() }
    }

    result.add(deploys)

    return result.map { it.count() }.toIntArray()
}

class SolutionTest {

    @Test
    fun `Find the number of features included in each deployment`() {
        arrayOf(::solution1, ::solution2).forEach { solution ->
            assertThat(solution(intArrayOf(93, 30, 55), intArrayOf(1, 30, 5))).isEqualTo(intArrayOf(2, 1))
        }
    }

    @Test
    fun `Calculate remaining development days`() {
        assertThat(remainDays(30, 30)).isEqualTo(3)
    }

    @Test
    fun `Calculate the number of features to deployment`() {
        assertThat(deploy(listOf(7, 3, 9))).isEqualTo(2)
    }
}
