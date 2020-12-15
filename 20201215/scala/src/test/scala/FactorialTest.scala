import org.scalatest.funsuite.AnyFunSuite
import scala.annotation.tailrec

class FactorialTest extends AnyFunSuite {
  def factorial1(n: Int) = {
    @tailrec
    def go(n: Int, acc: Int): Int =
      if (n <= 0) acc
      else go(n - 1, n * acc)
    go(n, 1)
  }

  def factorial2(n: Int): Int = n match {
    case 0 => 1
    case _ => n * factorial2(n - 1)
  }

  test("factorial") {
    Array(factorial1 _, factorial2 _).foreach(factorial => {
      assert(factorial(1) === 1)
      assert(factorial(2) === 2)
      assert(factorial(3) === 6)
      assert(factorial(7) === 5040)
    })
  }
}
