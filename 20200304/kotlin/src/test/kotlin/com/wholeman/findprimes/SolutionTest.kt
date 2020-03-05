package com.wholeman.findprimes

import org.assertj.core.api.Assertions.assertThat
import org.junit.Test
import kotlin.math.sqrt

fun solution(numbers: String): Int {
    val nums = perm(numbers)

    (2..sqrt(nums.max()!!.toDouble()).toInt()).forEach {
        nums -= (2 * it..nums.max()!! step it).toSet()
    }

    return (nums - setOf(0, 1)).count()
}

fun perm(numbers: String): MutableSet<Int> {
    val combNumbers = mutableSetOf<Int>()

    fun backTracking(numbers: String, result: String) {
        if (result.isNotEmpty()) {
            combNumbers.add(result.toInt())
        }

        if (numbers.isEmpty()) {
            return
        }
        numbers.forEachIndexed { index, c ->
            backTracking((numbers.removeRange(index..index)), result + c)
        }
    }

    backTracking(numbers, "")

    return combNumbers
}

class SolutionTest {

    @Test
    fun `Find out how many primes a given piece of paper can make`() {
        assertThat(solution("17")).isEqualTo(3)
        assertThat(solution("011")).isEqualTo(2)
    }

    @Test
    fun `Generate permutation of given numbers`() {
        assertThat(perm("17")).isEqualTo(setOf(1, 7, 17, 71))
        assertThat(perm("011")).isEqualTo(setOf(0, 1, 11, 10, 101, 110))
    }
}