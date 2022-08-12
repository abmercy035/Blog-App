import React from 'react'

export default async function  useFilter({string, arr}) {
         if ("" === string) return arr;
    return arr.filter((result) => {
      if ((
        (
          result.title.replace(/\s/g, '')).toLowerCase().includes(string.replace(/\s/g, '').toLowerCase()
          )
      ))
      return result;
    })
  
}
