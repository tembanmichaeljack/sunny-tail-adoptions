CREATE TABLE public.order_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL CHECK (char_length(full_name) BETWEEN 1 AND 200),
  email TEXT NOT NULL CHECK (char_length(email) BETWEEN 3 AND 255),
  phone TEXT CHECK (phone IS NULL OR char_length(phone) <= 50),
  city_state TEXT CHECK (city_state IS NULL OR char_length(city_state) <= 200),
  puppy_id TEXT CHECK (puppy_id IS NULL OR char_length(puppy_id) <= 100),
  puppy_name TEXT CHECK (puppy_name IS NULL OR char_length(puppy_name) <= 100),
  delivery_method TEXT NOT NULL DEFAULT 'pickup' CHECK (delivery_method IN ('pickup','ground','flight')),
  notes TEXT CHECK (notes IS NULL OR char_length(notes) <= 5000),
  status TEXT NOT NULL DEFAULT 'new',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT INSERT ON public.order_requests TO anon, authenticated;
GRANT ALL ON public.order_requests TO service_role;
ALTER TABLE public.order_requests ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit an order request"
ON public.order_requests FOR INSERT TO anon, authenticated
WITH CHECK (status = 'new');