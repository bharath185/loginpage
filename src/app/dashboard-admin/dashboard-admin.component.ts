import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface StatCard {
  title: string;
  value: string;
  change: number;
  icon: string;
  color: string;
}

interface RecentOrder {
  id: string;
  customer: string;
  product: string;
  amount: number;
  status: 'Completed' | 'Pending' | 'Cancelled';
  date: string;
}
@Component({
  selector: 'app-dashboard-admin',
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard-admin.component.html',
  styleUrl: './dashboard-admin.component.scss'
})
export class DashboardAdminComponent {

 userName: string = 'John Doe';
  currentDate: string = new Date().toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });

  stats: StatCard[] = [
    { title: 'Total Revenue', value: '$48,290', change: 12.5, icon: '💰', color: '#6366f1' },
    { title: 'Total Orders', value: '1,284',    change: 8.2,  icon: '📦', color: '#10b981' },
    { title: 'New Customers', value: '342',     change: -2.4, icon: '👥', color: '#f59e0b' },
    { title: 'Page Views', value: '24.5K',      change: 18.7, icon: '👁️', color: '#ef4444' }
  ];
   recentOrders: RecentOrder[] = [
    { id: '#ORD-001', customer: 'Alice Smith',  product: 'Wireless Headphones', amount: 129.99, status: 'Completed', date: '2024-01-15' },
    { id: '#ORD-002', customer: 'Bob Johnson',  product: 'Smart Watch Pro',      amount: 249.50, status: 'Pending',   date: '2024-01-15' },
    { id: '#ORD-003', customer: 'Carol White',  product: 'Gaming Mouse',         amount: 79.99,  status: 'Completed', date: '2024-01-14' },
    { id: '#ORD-004', customer: 'David Brown',  product: 'USB-C Hub',            amount: 45.00,  status: 'Cancelled', date: '2024-01-14' },
    { id: '#ORD-005', customer: 'Eva Martinez', product: 'Mechanical Keyboard',  amount: 159.00, status: 'Completed', date: '2024-01-13' }
  ];

    sidebarOpen: boolean = true;

  ngOnInit(): void {}

  toggleSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen;
  }

  getStatusClass(status: string): string {
    return 'status-' + status.toLowerCase();
  }

}
