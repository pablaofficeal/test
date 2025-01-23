import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Trash2 } from "lucide-react";

const Cart = () => {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 gradient-text">Корзина</h1>
        
        <div className="grid gap-6 md:grid-cols-[2fr_1fr]">
          <div className="space-y-4">
            {/* Cart Items */}
            <Card className="p-4">
              <div className="flex items-center gap-4">
                <img
                  src="/placeholder.svg"
                  alt="Track cover"
                  className="w-16 h-16 rounded object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-semibold">Summer Vibes</h3>
                  <p className="text-sm text-gray-400">Tropical Beat</p>
                </div>
                <span className="font-bold">$1.99</span>
                <button className="p-2 hover:bg-card rounded-full">
                  <Trash2 className="h-5 w-5 text-gray-400" />
                </button>
              </div>
            </Card>
          </div>

          {/* Order Summary */}
          <Card className="p-6 h-fit">
            <h2 className="text-xl font-bold mb-4">Итого</h2>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>Сумма</span>
                <span>$1.99</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>Итого к оплате</span>
                <span>$1.99</span>
              </div>
            </div>
            <Button className="w-full">Оформить заказ</Button>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Cart;