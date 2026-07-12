/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "quantity-not-specified",
  "description": "Doughnuts, sweet rolls, pastries",
  "id": "usda-fndds-2707680",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "1-croissant",
      "kind": "unit",
      "label": "1 croissant"
    }
  ],
  "name": "Croissant, chocolate",
  "nutritionPerBasis": {
    "calcium_mg": 36.0,
    "carbs_g": 49.4,
    "energy_kcal": 421.0,
    "fat_g": 22.8,
    "fibre_g": 3.3,
    "folate_ug": 73.0,
    "iron_mg": 2.25,
    "magnesium_mg": 36.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 110.0,
    "potassium_mg": 167.0,
    "protein_g": 7.4,
    "salt_g": 0.605,
    "sat_fat_g": 12.9,
    "sodium_mg": 242.0,
    "sugar_g": 19.9,
    "vitamin_a_ug": 165.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.72,
    "vitamin_k_ug": 2.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707680",
  "state": "Unspecified",
  "subcategory": "Doughnuts, sweet rolls, pastries",
  "tags": [
    "doughnuts-sweet-rolls-pastries",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
