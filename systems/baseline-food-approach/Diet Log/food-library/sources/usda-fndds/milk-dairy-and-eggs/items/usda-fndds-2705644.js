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
  "id": "usda-fndds-2705644",
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
  "name": "Ice cream cookie sandwich",
  "nutritionPerBasis": {
    "calcium_mg": 70.0,
    "carbs_g": 43.4,
    "energy_kcal": 317.0,
    "fat_g": 14.1,
    "fibre_g": 1.7,
    "folate_ug": 31.0,
    "iron_mg": 1.5,
    "magnesium_mg": 22.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 86.0,
    "potassium_mg": 170.0,
    "protein_g": 4.61,
    "salt_g": 0.58,
    "sat_fat_g": 6.42,
    "sodium_mg": 232.0,
    "sugar_g": 26.4,
    "vitamin_a_ug": 65.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 0.83,
    "vitamin_k_ug": 2.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705644",
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
