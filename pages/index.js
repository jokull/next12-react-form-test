import { useField, useForm } from "@shopify/react-form";

export default function Home() {
  const {
    fields: { price },
  } = useForm({ fields: { price: useField(100) } });
  return (
    <div className="container">
      <input value={price.value} onChange={price.onChange} />
    </div>
  );
}
