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
  "id": "usda-fndds-2705672",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "1-bar",
      "kind": "unit",
      "label": "1 bar"
    }
  ],
  "name": "Light ice cream bar, chocolate",
  "nutritionPerBasis": {
    "calcium_mg": 104.0,
    "carbs_g": 19.7,
    "energy_kcal": 240.0,
    "fat_g": 16.9,
    "fibre_g": 1.0,
    "folate_ug": 4.0,
    "iron_mg": 0.58,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 76.0,
    "potassium_mg": 149.0,
    "protein_g": 3.31,
    "salt_g": 0.1375,
    "sat_fat_g": 13.4,
    "sodium_mg": 55.0,
    "sugar_g": 11.1,
    "vitamin_a_ug": 53.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 0.19,
    "vitamin_k_ug": 1.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705672",
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
