"use client"

import type React from "react"

import { useState } from "react"
import { Monitor, Video, ImageIcon, Globe, Grid3x3 } from "lucide-react"

interface ContentItem {
  id: string
  name: string
  icon: React.ReactNode
  color: string
}

const contentItems: ContentItem[] = [
  { id: "camera1", name: "Camera 01", icon: <Video className="h-4 w-4" />, color: "bg-blue-500" },
  { id: "camera2", name: "Camera 02", icon: <Video className="h-4 w-4" />, color: "bg-purple-500" },
  { id: "image1", name: "Map View", icon: <ImageIcon className="h-4 w-4" />, color: "bg-green-500" },
  { id: "browser1", name: "Dashboard", icon: <Globe className="h-4 w-4" />, color: "bg-orange-500" },
]

interface PlacedContent {
  content: ContentItem
  row: number
  col: number
}

export function DragDropDemo() {
  const [draggedItem, setDraggedItem] = useState<ContentItem | null>(null)
  const [hoveredCell, setHoveredCell] = useState<{ row: number; col: number } | null>(null)
  const [rows, setRows] = useState(2)
  const [cols, setCols] = useState(3)
  const [placedContent, setPlacedContent] = useState<PlacedContent[]>([])

  const updateGridSize = (newRows: number, newCols: number) => {
    setRows(newRows)
    setCols(newCols)
    setPlacedContent([])
  }

  const handleDragStart = (item: ContentItem) => {
    setDraggedItem(item)
  }

  const handleDragEnd = () => {
    setDraggedItem(null)
    setHoveredCell(null)
  }

  const handleDragOver = (e: React.DragEvent, row: number, col: number) => {
    e.preventDefault()
    setHoveredCell({ row, col })
  }

  const isOccupied = (row: number, col: number): boolean => {
    return placedContent.some((item) => item.row === row && item.col === col)
  }

  const handleDrop = (row: number, col: number) => {
    if (draggedItem && !isOccupied(row, col)) {
      setPlacedContent([
        ...placedContent,
        {
          content: draggedItem,
          row,
          col,
        },
      ])
      setDraggedItem(null)
      setHoveredCell(null)
    }
  }

  const handleRemoveContent = (index: number) => {
    setPlacedContent(placedContent.filter((_, i) => i !== index))
  }

  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-6">
      <div className="w-full md:w-48 space-y-2">
        <div className="text-sm font-semibold mb-2 md:mb-3 text-muted-foreground">콘텐츠 목록</div>
        <div className="grid grid-cols-2 md:grid-cols-1 gap-2">
          {contentItems.map((item) => (
            <div
              key={item.id}
              draggable
              onDragStart={() => handleDragStart(item)}
              onDragEnd={handleDragEnd}
              className={`${item.color} text-white p-2 md:p-3 rounded-lg cursor-move hover:opacity-80 transition-opacity flex items-center gap-2 text-xs md:text-sm font-medium touch-none`}
            >
              {item.icon}
              {item.name}
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-3">
          <div className="text-sm font-semibold text-muted-foreground flex items-center gap-2">
            <Monitor className="h-4 w-4" />
            비디오 월 ({rows}x{cols} 그리드)
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <Grid3x3 className="h-4 w-4 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">행:</span>
              <select
                value={rows}
                onChange={(e) => updateGridSize(Number(e.target.value), cols)}
                className="text-xs border rounded px-2 py-1 bg-background"
              >
                {[1, 2, 3, 4].map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
              <span className="text-xs text-muted-foreground">열:</span>
              <select
                value={cols}
                onChange={(e) => updateGridSize(rows, Number(e.target.value))}
                className="text-xs border rounded px-2 py-1 bg-background"
              >
                {[2, 3, 4, 5, 6].map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="bg-slate-200 dark:bg-slate-800 p-4 rounded-lg">
          <div
            className="grid gap-2 relative"
            style={{
              gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
              gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
            }}
          >
            {Array.from({ length: rows * cols }).map((_, index) => {
              const r = Math.floor(index / cols)
              const c = index % cols
              const occupied = isOccupied(r, c)
              const placedItem = placedContent.find((item) => item.row === r && item.col === c)

              return (
                <div
                  key={`${r}-${c}`}
                  onDragOver={(e) => handleDragOver(e, r, c)}
                  onDrop={() => handleDrop(r, c)}
                  className={`aspect-video rounded border-2 transition-all ${
                    hoveredCell?.row === r && hoveredCell?.col === c
                      ? "border-blue-500 bg-blue-100 dark:bg-blue-900"
                      : "border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-950"
                  }`}
                >
                  {placedItem ? (
                    <div
                      className={`h-full w-full ${placedItem.content.color} rounded flex flex-col items-center justify-center text-white cursor-pointer hover:ring-4 hover:ring-white/50 transition-all`}
                      onClick={() => handleRemoveContent(placedContent.indexOf(placedItem))}
                    >
                      <div className="scale-150 mb-2">{placedItem.content.icon}</div>
                      <div className="text-xs font-medium">{placedItem.content.name}</div>
                      <div className="text-[10px] mt-1 opacity-70">(클릭: 제거)</div>
                    </div>
                  ) : (
                    <div className="h-full flex items-center justify-center text-slate-400 dark:text-slate-600 text-xs">
                      드롭
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
        <div className="mt-3 text-xs text-muted-foreground">
          💡 콘텐츠를 드래그하여 그리드에 배치하세요. 클릭하면 제거됩니다.
        </div>
      </div>
    </div>
  )
}
