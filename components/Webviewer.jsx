'use client'

import React, { useRef, useEffect } from 'react'
import WebViewer from '@pdftron/webviewer'

export const MyComponent = () => {
  const viewer = useRef(null)

  useEffect(() => {
    // If you prefer to use the Iframe implementation, you can replace this line with: WebViewer.Iframe(...)
    WebViewer.WebComponent(
      {
        path: '/webviewer/lib',
        initialDoc:
          'https://pdftron.s3.amazonaws.com/downloads/pl/demo-annotated.pdf',
        licenseKey:
          'demo:1743105294331:612a86b303000000004ad304a152534196c66938955bca2935f8208a86', //this demokey should be kept in a .env file but its left for the purpose of the assessment
      },
      viewer.current
    ).then((instance) => {
      const { documentViewer, annotationManager, Annotations } = instance.Core
      const { Feature } = instance.UI
      instance.UI.enableFeatures([Feature.FilePicker])

      documentViewer.addEventListener('documentLoaded', () => {
        const rectangleAnnot = new Annotations.RectangleAnnotation({
          PageNumber: 1,
          // values are in page coordinates with (0, 0) in the top left
          X: 100,
          Y: 150,
          Width: 200,
          Height: 50,
          Author: annotationManager.getCurrentUser(),
        })
        annotationManager.redrawAnnotation(rectangleAnnot)
      })
    })
  }, [])

  return (
    <div className='App p-4'>
      <div className='header flex justify-between items-center'>
        <h1 className='text-xl font-[500]'>Ritease Assessment</h1>
      </div>
      <div className='webviewer' ref={viewer}></div>
    </div>
  )
}
