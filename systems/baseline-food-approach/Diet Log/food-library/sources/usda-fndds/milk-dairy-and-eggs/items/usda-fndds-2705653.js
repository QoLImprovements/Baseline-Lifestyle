/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "quantity-not-specified",
  "description": "Ice cream and frozen dairy desserts",
  "id": "usda-fndds-2705653",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 255.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 255.0,
      "key": "1-cone",
      "kind": "unit",
      "label": "1 cone"
    }
  ],
  "name": "Ice cream cone, soft serve, chocolate, waffle cone",
  "nutritionPerBasis": {
    "calcium_mg": 152.0,
    "carbs_g": 29.1,
    "energy_kcal": 200.0,
    "fat_g": 6.99,
    "fibre_g": 0.9,
    "folate_ug": 12.0,
    "iron_mg": 0.91,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 84.0,
    "potassium_mg": 169.0,
    "protein_g": 5.17,
    "salt_g": 0.21,
    "sat_fat_g": 4.16,
    "sodium_mg": 84.0,
    "sugar_g": 24.8,
    "vitamin_a_ug": 67.0,
    "vitamin_c_mg": 1.1,
    "vitamin_e_mg": 0.19,
    "vitamin_k_ug": 0.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705653",
  "state": "Unspecified",
  "subcategory": "Ice cream and frozen dairy desserts",
  "tags": [
    "ice-cream-and-frozen-dairy-desserts",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
