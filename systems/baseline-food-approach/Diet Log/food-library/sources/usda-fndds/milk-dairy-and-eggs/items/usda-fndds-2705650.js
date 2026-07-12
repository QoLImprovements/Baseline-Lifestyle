/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-cone",
  "description": "Ice cream and frozen dairy desserts",
  "id": "usda-fndds-2705650",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "1-cone",
      "kind": "unit",
      "label": "1 cone"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Ice cream cone, soft serve, vanilla",
  "nutritionPerBasis": {
    "calcium_mg": 156.0,
    "carbs_g": 31.4,
    "energy_kcal": 189.0,
    "fat_g": 4.91,
    "fibre_g": 0.4,
    "folate_ug": 13.0,
    "iron_mg": 0.33,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 103.0,
    "potassium_mg": 204.0,
    "protein_g": 4.91,
    "salt_g": 0.2025,
    "sat_fat_g": 2.86,
    "sodium_mg": 81.0,
    "sugar_g": 21.5,
    "vitamin_a_ug": 123.0,
    "vitamin_c_mg": 1.2,
    "vitamin_e_mg": 0.15,
    "vitamin_k_ug": 0.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705650",
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
