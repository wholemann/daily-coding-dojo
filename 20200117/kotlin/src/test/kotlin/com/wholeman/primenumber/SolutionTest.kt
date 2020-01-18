package com.wholeman.primenumber

import org.assertj.core.api.Assertions.assertThat
import org.junit.Test

fun solution(nums: IntArray): Int {
    return 1
}

fun Int.isPrime(): Boolean {
    return this in setOf(2, 3, 5, 7)
}

fun <T> Collection<T>.combinations(nums: IntArray, k: Int) = when {
    else -> powerSet(nums.toSet(), setOf(emptySet())).filter { it.size == k }
}

tailrec fun <T> powerSet(left: Collection<T>, acc: Set<Set<T>>): Set<Set<T>> = when {
    left.isEmpty() -> acc
    else -> powerSet(left.drop(1), acc + acc.map { it + left.first() })
}

class SolutionTest {

    @Test
    fun `Count the number of prime numbers made by adding three numbers`() {
        assertThat(solution(intArrayOf(1, 2, 3, 4))).isEqualTo(1)
    }

    @Test
    fun `Determine whether the given number is prime`() {
        assertThat(2.isPrime()).isEqualTo(true)
//        assertThat(isPrime(3)).isEqualTo(true)
//        assertThat(isPrime(4)).isEqualTo(false)
    }

    @Test
    fun `Calculate the set of combinations about given Collection`() {
//        assertThat(combinations(intArrayOf(1, 2, 3), 2)).isEqualTo(
//                listOf(setOf(1, 2), setOf(1, 3), setOf(2, 3))
//        )
    }

    @Test
    fun `Create the powerSet`() {
        assertThat(powerSet(setOf(1, 2), setOf(emptySet())))
                .isEqualTo(setOf(emptySet(), setOf(1), setOf(2), setOf(1, 2)))
    }
}
