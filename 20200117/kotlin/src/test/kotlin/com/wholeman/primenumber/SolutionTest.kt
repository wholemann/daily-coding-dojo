package com.wholeman.primenumber

import org.assertj.core.api.Assertions.assertThat
import org.junit.Test

fun solution(nums: IntArray): Int = sumOfThree2(nums).count { it.isPrime() }

fun Int.isPrime(): Boolean = primes(kotlin.math.sqrt(this.toDouble()).toInt()).none { this % it == 0 }

fun primes(n: Int): Set<Int> = (2..n).filter { it.isPrime() }.toSet()

// for kotlin old version
fun sumOfThree1(nums: IntArray): List<Int> {
    val result = mutableListOf<Int>()
    (0 until nums.size - 2).forEach { i ->
        (i + 1 until nums.size - 1).forEach { j ->
            (j + 1 until nums.size).forEach { k ->
                result.add(nums[i] + nums[j] + nums[k])
            }
        }
    }
    return result
}

fun sumOfThree2(nums: IntArray): List<Int> = sequence {
    (0 until nums.size - 2).forEach { i ->
        (i + 1 until nums.size - 1).forEach { j ->
            (j + 1 until nums.size).forEach { k ->
                yield(nums[i] + nums[j] + nums[k])
            }
        }
    }
}.toList()

fun <T> Set<T>.combinations(k: Int) = when {
    else -> powerSet(this, setOf(emptySet())).filter { it.size == k }
}

tailrec fun <T> powerSet(left: Collection<T>, acc: Set<Set<T>>): Set<Set<T>> = when {
    left.isEmpty() -> acc
    else -> powerSet(left.drop(1), acc + acc.map { it + left.first() })
}

class SolutionTest {

    @Test
    fun `Count the number of prime numbers made by adding three numbers`() {
        assertThat(solution(intArrayOf(1, 2, 3, 4))).isEqualTo(1)
        assertThat(solution(intArrayOf(1, 2, 7, 6, 4))).isEqualTo(4)
    }

    @Test
    fun `Determine whether the given number is prime`() {
        assertThat(2.isPrime()).isEqualTo(true)
        assertThat(3.isPrime()).isEqualTo(true)
        assertThat(4.isPrime()).isEqualTo(false)
        assertThat(11.isPrime()).isEqualTo(true)
    }

    @Test
    fun `Create the set of prime numbers in range 2 to n`() {
        assertThat(primes(12)).isEqualTo(setOf(2, 3, 5, 7, 11))
    }

    @Test
    fun `Create the set of numbers made by sum of three numbers`() {
        arrayOf(::sumOfThree1, ::sumOfThree2).forEach { sumOfThree ->
            assertThat(sumOfThree(intArrayOf(1, 2, 3, 4))).isEqualTo(listOf(6, 7, 8, 9))
        }
    }

    @Test
    fun `Calculate the set of combinations about given Collection`() {
        assertThat(setOf(1, 2, 3).combinations(2)).isEqualTo(
                listOf(setOf(1, 2), setOf(1, 3), setOf(2, 3))
        )
    }

    @Test
    fun `Create the powerSet`() {
        assertThat(powerSet(setOf(1, 2), setOf(emptySet())))
                .isEqualTo(setOf(emptySet(), setOf(1), setOf(2), setOf(1, 2)))
    }
}
