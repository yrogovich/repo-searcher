"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { z } from "zod"
import { useCallback, useEffect } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useDebouncedCallback } from "use-debounce"
import { Label } from "@/components/ui/label"

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
  const { watch, setValue } = form

  const searchPhrase = watch("searchPhrase")

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

  const debouncedSearch = useDebouncedCallback((phrase: string) => handleSearchParams(phrase), 500)

  useEffect(() => {
    if (searchPhrase === initialSearchPhrase) return

    setValue("searchPhrase", searchPhrase)
    debouncedSearch(searchPhrase)
  }, [setValue, searchPhrase, initialSearchPhrase, form, debouncedSearch])

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
              <Label
                htmlFor="searchInput"
                className="sr-only"
              >
                Search Phrase:
              </Label>
              <FormControl>
                <Input
                  placeholder="Search phrase"
                  aria-label="Search for repositories"
                  aria-describedby="searchError"
                  {...field}
                />
              </FormControl>
              <FormMessage id="searchError" />
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}
