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

interface GridCell {
  row: number
  col: number
  content: ContentItem | null
}

export function DragDropDemo() {
  const [draggedItem, setDraggedItem] = useState<ContentItem | null>(null)
  const [hoveredCell, setHoveredCell] = useState<{ row: number; col: number } | null>(null)
  const [rows, setRows] = useState(2)
  const [cols, setCols] = useState(3)
  const [grid, setGrid] = useState<GridCell[][]>(
    Array(2)
      .fill(null)
      .map((_, row) =>
        Array(3)
          .fill(null)
          .map((_, col) => ({ row, col, content: null })),
      ),
  )

  const updateGridSize = (newRows: number, newCols: number) => {
    setRows(newRows)
    setCols(newCols)
    const newGrid = Array(newRows)
      .fill(null)
      .map((_, row) =>
        Array(newCols)
          .fill(null)
          .map((_, col) => ({ row, col, content: null })),
      )
    setGrid(newGrid)
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

  const handleDrop = (row: number, col: number) => {
    if (draggedItem) {
      const newGrid = grid.map((r) => r.map((cell) => ({ ...cell })))
      newGrid[row][col].content = draggedItem
      setGrid(newGrid)
      setDraggedItem(null)
      setHoveredCell(null)
    }
  }

  const handleRemoveContent = (row: number, col: number) => {
    const newGrid = grid.map((r) => r.map((cell) => ({ ...cell })))
    newGrid[row][col].content = null
    setGrid(newGrid)
  }

  return (
    <div className="flex gap-6">
      {/* Content List */}
      <div className="w-48 space-y-2">
        <div className="text-sm font-semibold mb-3 text-muted-foreground">콘텐츠 목록</div>
        {contentItems.map((item) => (
          <div
            key={item.id}
            draggable
            onDragStart={() => handleDragStart(item)}
            onDragEnd={handleDragEnd}
            className={`${item.color} text-white p-3 rounded-lg cursor-move hover:opacity-80 transition-opacity flex items-center gap-2 text-sm font-medium`}
          >
            {item.icon}
            {item.name}
          </div>
        ))}
      </div>

      {/* Video Wall Grid */}
      <div className="flex-1">
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
        <div
          className="grid gap-2 bg-slate-200 dark:bg-slate-800 p-4 rounded-lg"
          style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
        >
          {grid.map((row, rowIndex) =>
            row.map((cell, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                onDragOver={(e) => handleDragOver(e, rowIndex, colIndex)}
                onDrop={() => handleDrop(rowIndex, colIndex)}
                className={`aspect-video rounded border-2 transition-all ${
                  hoveredCell?.row === rowIndex && hoveredCell?.col === colIndex
                    ? "border-blue-500 bg-blue-100 dark:bg-blue-900 scale-105"
                    : "border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-950"
                }`}
              >
                {cell.content ? (
                  <div
                    className={`h-full ${cell.content.color} rounded flex flex-col items-center justify-center text-white p-2 cursor-pointer hover:opacity-80`}
                    onClick={() => handleRemoveContent(rowIndex, colIndex)}
                  >
                    <div className="scale-150 mb-2">{cell.content.icon}</div>
                    <div className="text-xs font-medium">{cell.content.name}</div>
                    <div className="text-[10px] mt-1 opacity-70">(클릭하여 제거)</div>
                  </div>
                ) : (
                  <div className="h-full flex items-center justify-center text-slate-400 dark:text-slate-600 text-xs">
                    드롭 영역
                  </div>
                )}
              </div>
            )),
          )}
        </div>
        <div className="mt-3 text-xs text-muted-foreground">
          💡 왼쪽 콘텐츠를 드래그하여 그리드에 배치해보세요. 배치된 콘텐츠를 클릭하면 제거됩니다.
        </div>
      </div>
    </div>
  )
}
