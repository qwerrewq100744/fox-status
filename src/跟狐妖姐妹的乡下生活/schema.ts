export const Schema = z.object({
  世界: z.object({
    当前时间: z.string(),
    当前天数: z.coerce.number(),
    当前位置: z.string(),
  }),
  白: z.object({
    好感度: z.coerce.number(),
    内心想法: z.string(),
  }),
  狐: z.object({
    好感度: z.coerce.number(),
    信任度: z.coerce.number(),
    内心想法: z.string(),
  }),
  剧情: z.object({
    阶段: z.enum(['观察期', '软化期', '卸防期', '深情期']),
  }),
});
export type Schema = z.output<typeof Schema>;
