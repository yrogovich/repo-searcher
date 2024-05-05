"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { z } from "zod"
import { useCallback } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const FormSchema = z.object({
  searchPhrase: z.string().max(30, {
    message: "Search phrase must have max 30 characters.",
  }),
})

type FormValues = z.infer<typeof FormSchema>

export function SearchForm() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const initialSearchPhrase = searchParams.get("s")?.toString() || ""

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      searchPhrase: initialSearchPhrase,
    },
  })

  const handleSearchParams = useCallback(
    (term: string) => {
      const params = new URLSearchParams(searchParams)
      if (term) {
        params.set("s", term)
      } else {
        params.delete("s")
      }
      replace(`${pathname}?${params.toString()}`)
    },
    [pathname, replace, searchParams],
  )

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    handleSearchParams(data.searchPhrase)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full space-y-4"
      >
        <FormField
          control={form.control}
          name="searchPhrase"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholder="Search phrase"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Search</Button>
      </form>
    </Form>
  )
}
