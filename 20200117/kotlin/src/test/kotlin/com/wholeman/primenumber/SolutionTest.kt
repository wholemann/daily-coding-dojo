package com.wholeman.primenumber

import org.assertj.core.api.Assertions.assertThat
import org.junit.Test
import kotlin.math.sqrt

fun solution(nums: IntArray): Int = sumOfThree(nums).count { it.isPrime() }

fun Int.isPrime(): Boolean = primes(sqrt(this.toDouble()).toInt()).none { this % it == 0 }

fun primes(n: Int): Set<Int> = (2..n).filter { it.isPrime() }.toSet()

fun sumOfThree(nums: IntArray): List<Int> = sequence {
    (0 until nums.size - 2).forEach { i ->
        (i + 1 until nums.size - 1).forEach { j ->
            (j + 1 until nums.size).forEach { k ->
                yield(nums[i] + nums[j] + nums[k])
            }
        }
    }
}.toList()

// for kotlin old version
fun sumOfThreeOld(nums: IntArray): List<Int> {
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
        arrayOf(::sumOfThree, ::sumOfThreeOld).forEach { sumOfThree ->
            assertThat(sumOfThree(intArrayOf(1, 2, 3, 4))).isEqualTo(listOf(6, 7, 8, 9))
        }
    }
}
