lazy val root = (project in file(".")).settings(
  inThisBuild(
    List(
      organization := "com.wholeman",
      scalaVersion := "2.13.3"
    )
  ),
  name := "factorial"
)

libraryDependencies += "org.scalatest" %% "scalatest" % "3.2.2" % Test
