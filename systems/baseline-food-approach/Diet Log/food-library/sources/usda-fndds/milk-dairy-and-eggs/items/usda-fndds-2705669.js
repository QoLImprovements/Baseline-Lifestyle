/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-sandwich",
  "description": "Ice cream and frozen dairy desserts",
  "id": "usda-fndds-2705669",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "1-sandwich",
      "kind": "unit",
      "label": "1 sandwich"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Light ice cream sandwich, chocolate",
  "nutritionPerBasis": {
    "calcium_mg": 113.0,
    "carbs_g": 37.9,
    "energy_kcal": 243.0,
    "fat_g": 8.4,
    "fibre_g": 1.5,
    "folate_ug": 15.0,
    "iron_mg": 1.44,
    "magnesium_mg": 26.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 104.0,
    "potassium_mg": 190.0,
    "protein_g": 4.85,
    "salt_g": 0.5,
    "sat_fat_g": 4.06,
    "sodium_mg": 200.0,
    "sugar_g": 20.7,
    "vitamin_a_ug": 56.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 0.37,
    "vitamin_k_ug": 2.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705669",
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
