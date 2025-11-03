import type {
  DefaultNodeTypes,
  SerializedLinkNode,
  SerializedHeadingNode,
  SerializedListNode,
  SerializedListItemNode,
  SerializedQuoteNode,
} from '@payloadcms/richtext-lexical'
import type { SerializedEditorState, SerializedLexicalNode } from '@payloadcms/richtext-lexical/lexical'

import {
  type JSXConvertersFunction,
  LinkJSXConverter,
  RichText as RichTextConverter,
  SerializedLexicalNodeWithParent,
} from '@payloadcms/richtext-lexical/react'
import React from 'react'

const internalDocToHref = ({ linkNode }: { linkNode: SerializedLinkNode }) => {
  const { relationTo, value } = linkNode.fields.doc!
  if (typeof value !== 'object') {
    throw new Error('Expected value to be an object')
  }
  const slug = value.slug

  switch (relationTo) {
    case 'posts':
      return `/posts/${slug}`
    case 'categories':
      return `/category/${slug}`
    case 'pages':
      return `/${slug}`
    default:
      return `/${relationTo}/${slug}`
  }
}

const jsxConverters: JSXConvertersFunction<DefaultNodeTypes> = ({
  defaultConverters,
}) => ({
  ...defaultConverters,
  ...LinkJSXConverter({ internalDocToHref }),

  // Headings
  heading: ({ node, nodesToJSX }: { node: SerializedHeadingNode; nodesToJSX: any }) => {
    const Tag = node.tag
    const classNames = {
      h1: 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
      h2: 'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0',
      h3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
      h4: 'scroll-m-20 text-xl font-semibold tracking-tight',
      h5: 'scroll-m-20 text-lg font-semibold tracking-tight',
      h6: 'scroll-m-20 text-base font-semibold tracking-tight',
    }

    return <Tag className={classNames[node.tag]}>{nodesToJSX({ nodes: node.children })}</Tag>
  },

  // Paragraphs
  paragraph: ({ node, nodesToJSX }: { node: SerializedLexicalNode; nodesToJSX: any }) => {
    // @ts-expect-error
    return <p className="leading-7 not-first:mt-6">{nodesToJSX({ nodes: node.children })}</p>
  },

  // Lists
  list: ({ node, nodesToJSX }: { node: SerializedListNode; nodesToJSX: any }) => {
    const Tag = node.listType === 'bullet' ? 'ul' : 'ol'
    const className = node.listType === 'bullet'
      ? 'my-6 ml-6 list-disc [&>li]:mt-2'
      : 'my-6 ml-6 list-decimal [&>li]:mt-2'

    return <Tag className={className}>{nodesToJSX({ nodes: node.children })}</Tag>
  },

  listitem: ({ node, nodesToJSX }: { node: SerializedListItemNode; nodesToJSX: any }) => {
    return <li>{nodesToJSX({ nodes: node.children })}</li>
  },

  // Quote
  quote: ({ node, nodesToJSX }: { node: SerializedQuoteNode; nodesToJSX: any }) => {
    return (
      <blockquote className="mt-6 border-l-2 pl-6 italic">
        {nodesToJSX({ nodes: node.children })}
      </blockquote>
    )
  },

  // Text formatting
  text: ({ node }: { node: any }) => {
    let text = <>{node.text}</>

    if (node.format & 1) { // bold
      text = <strong className="font-semibold">{text}</strong>
    }
    if (node.format & 2) { // italic
      text = <em className="italic">{text}</em>
    }
    if (node.format & 4) { // strikethrough
      text = <span className="line-through">{text}</span>
    }
    if (node.format & 8) { // underline
      text = <span className="underline underline-offset-4">{text}</span>
    }
    if (node.format & 16) { // code
      text = <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">{text}</code>
    }

    return text
  },

  // Code block
  code: ({ node, nodesToJSX }: { node: any; nodesToJSX: any }) => {
    return (
      <pre className="mb-4 mt-6 overflow-x-auto rounded-lg border bg-black py-4">
        <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm">{nodesToJSX({ nodes: node.children })}</code>
      </pre>
    )
  },

  // Horizontal rule
  horizontalrule: () => {
    return <hr className="my-8 border-border" />
  },
})

export const RichText: React.FC<{
  lexicalData: SerializedEditorState
  className?: string
}> = ({ lexicalData, className }) => {
  return (
    <div className={className}>
      <RichTextConverter converters={jsxConverters} data={lexicalData} />
    </div>
  )
}
