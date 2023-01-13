import z from 'zod';

const addCustomerSchema = z.object({
  name: z.string().min(1).max(100),
});

export default addCustomerSchema;