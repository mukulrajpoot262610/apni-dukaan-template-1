import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Home from "../../components/Home";
import { setDetails, setProducts } from "../../redux/detailsReducer";
import { GetBusinessDetails, GetBusinessProduct } from "../../services/api";

export default function Homepage() {

  const router = useRouter()
  const dispatch = useDispatch()

  const slug = router.query.index

  useEffect(() => {

    const fetchData = async () => {
      try {
        const { data } = await GetBusinessDetails({ slug })
        typeof window == "undefined" ? null : localStorage.setItem('STORELINK', slug)
        dispatch(setDetails(data.details))
      } catch (err) {
        console.log(err)
      }
    }

    fetchData()
  }, [slug, dispatch])

  useEffect(() => {

    const fetchData = async () => {
      try {
        const { data } = await GetBusinessProduct({ slug })
        dispatch(setProducts(data.products))
      } catch (err) {
        console.log(err)
      }
    }

    fetchData()
  }, [slug, dispatch])

  return (
    <main>
      <Home />

    </main>
  )
}