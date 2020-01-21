package com.wholeman.usefulpattern

import org.assertj.core.api.Assertions
import org.junit.Test
import kotlin.math.sqrt

fun Int.isPrime(): Boolean = primes(sqrt(this.toDouble()).toInt()).none { this % it == 0 }

fun primes(n: Int): Set<Int> = (2..n).filter { it.isPrime() }.toSet()

fun <T> Set<T>.combinations(k: Int) = when {
    else -> powerSet(this, setOf(emptySet())).filter { it.size == k }
}

tailrec fun <T> powerSet(left: Collection<T>, acc: Set<Set<T>>): Set<Set<T>> = when {
    left.isEmpty() -> acc
    else -> powerSet(left.drop(1), acc + acc.map { it + left.first() })
}

class AppTest {

    @Test
    fun `Determine whether the given number is prime`() {
        Assertions.assertThat(2.isPrime()).isEqualTo(true)
        Assertions.assertThat(3.isPrime()).isEqualTo(true)
        Assertions.assertThat(4.isPrime()).isEqualTo(false)
        Assertions.assertThat(11.isPrime()).isEqualTo(true)
    }

    @Test
    fun `Create the set of prime numbers in range 2 to n`() {
        Assertions.assertThat(primes(12)).isEqualTo(setOf(2, 3, 5, 7, 11))
    }

    @Test
    fun `Calculate the set of combinations about given Collection`() {
        Assertions.assertThat(setOf(1, 2, 3).combinations(2)).isEqualTo(
                listOf(setOf(1, 2), setOf(1, 3), setOf(2, 3))
        )
    }

    @Test
    fun `Create the powerSet`() {
        Assertions.assertThat(powerSet(setOf(1, 2), setOf(emptySet())))
                .isEqualTo(setOf(emptySet(), setOf(1), setOf(2), setOf(1, 2)))
    }
}
