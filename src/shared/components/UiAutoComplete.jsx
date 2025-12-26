'use client'
import React, { useState, useEffect } from 'react'
import {
  Autocomplete,
  TextField,
  CircularProgress,
  debounce,
} from '@mui/material'
import { Controller } from 'react-hook-form'
import ApiManager from '../hoc/useApiManager'

export default function UiAutoComplete({
  url: path = '/country?page=1&per_page=250',
  control,
  name,
  defaultValue,
  variant,
  secondaryValue,
  minWidth = '150px',
  opt = [],
  optionRenderKeys = {
    label: 'label',
    value: 'value',
  },
  onChange,
  error,
  helperText,
  label,
  size = "medium",
  ...props
}) {
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData] = useState([])
  const [inputValue, setInputValue] = useState('')

  const getData = async (search) => {
    if (opt?.length) {
      setData(
        opt?.map((e) => ({
          id: e[optionRenderKeys?.value],
          name: e[optionRenderKeys?.label],
          ...e
        }))
      )
      return
    }
    if (!path) return
    if (search) path += `&search=${search}`
    setIsLoading(true)
    try {
      const { data } = await ApiManager({ path })
      console.log(data)
      if (data.status == 200 && data?.response) {
        const res = data?.response?.data ?? data?.response
        setData(res)
      }
    } catch (error) {
      console.log('🚀 ~ getData ~ error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const debouncedGetData = debounce(getData, 300)

  useEffect(() => {
    getData()
  }, [])

  const filterOptions = (options, { inputValue }) => {
    return options.filter(option =>
      option.name.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  if (control) {
    return (
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue || null}
        render={({ field: { onChange: fieldOnChange, value, ...field } }) => (
          <Autocomplete
            {...field}
            {...props}
            options={data}
            getOptionLabel={(option) => option?.name || ''}
            isOptionEqualToValue={(option, value) => option?.id === value?.id}
            value={value || null}
            onChange={(event, newValue) => {
              fieldOnChange(newValue)
              if (onChange) onChange(event, newValue)
            }}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue)
              if (newInputValue) {
                debouncedGetData(newInputValue)
              }
            }}
            filterOptions={filterOptions}
            renderInput={(params) => (
              <TextField
                {...params}
                label={label}
                variant={variant || 'outlined'}
                error={error}
                helperText={helperText}
                size={size}
                sx={{ minWidth, ...props.sx }}
                InputProps={{
                  ...params.InputProps,
                  endAdornment: (
                    <>
                      {isLoading ? <CircularProgress color="inherit" size={20} /> : null}
                      {params.InputProps.endAdornment}
                    </>
                  ),
                }}
              />
            )}
          />
        )}
      />
    )
  }

  return (
    <Autocomplete
      {...props}
      options={data}
      getOptionLabel={(option) => option?.name || ''}
      isOptionEqualToValue={(option, value) => option?.id === value?.id}
      onChange={onChange}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue)
        if (newInputValue) {
          debouncedGetData(newInputValue)
        }
      }}
      filterOptions={filterOptions}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          variant={variant || 'outlined'}
          error={error}
          helperText={helperText}
          size={size}
          sx={{ minWidth, ...props.sx }}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {isLoading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
    />
  )
}