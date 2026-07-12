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
  "id": "usda-fndds-2705660",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 490.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 490.0,
      "key": "1-banana-split",
      "kind": "unit",
      "label": "1 banana split"
    }
  ],
  "name": "Banana split",
  "nutritionPerBasis": {
    "calcium_mg": 74.0,
    "carbs_g": 32.6,
    "energy_kcal": 199.0,
    "fat_g": 6.88,
    "fibre_g": 1.0,
    "folate_ug": 7.0,
    "iron_mg": 0.17,
    "magnesium_mg": 18.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 69.0,
    "potassium_mg": 212.0,
    "protein_g": 2.42,
    "salt_g": 0.2425,
    "sat_fat_g": 4.07,
    "sodium_mg": 97.0,
    "sugar_g": 24.2,
    "vitamin_a_ug": 66.0,
    "vitamin_c_mg": 4.5,
    "vitamin_e_mg": 0.42,
    "vitamin_k_ug": 0.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705660",
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
