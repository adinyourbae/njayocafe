// Schema pizza dengan tambahan field deliveryCost
export default {
    name: 'pizza',
    title: 'Pizza',
    type: 'document',
    fields: [
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'name',
          maxLength: 90,
        },
      },
      {
        name: 'price',
        title: 'Price',
        type: 'number',
      },
      {
        name: 'details',
        title: 'Details',
        type: 'string',
      },
      {
        name: 'deliveryCost',
        title: 'Delivery Cost',
        type: 'number', // Tipe data ongkos kirim (misalnya: number)
        validation: (Rule) => Rule.min(0), // Validasi agar tidak boleh kurang dari 0
      },
    ],
  };
  