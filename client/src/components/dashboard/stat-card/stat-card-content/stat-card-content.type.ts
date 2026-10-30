import { SvgIconComponent } from "@mui/icons-material";

export interface StatCardContentType {
  title: string;
  amount: number;
  caption: string;
  Icon: SvgIconComponent;
  currency ?: string;
  color ?: 'error' | 'success'
}
