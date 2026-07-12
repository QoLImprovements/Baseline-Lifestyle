/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "1-cup-dry-yields",
  "description": "Grits and other cooked cereals",
  "id": "usda-fndds-2708443",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 705.0,
      "key": "1-cup-dry-yields",
      "kind": "unit",
      "label": "1 cup, dry, yields"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "1-cup-cooked",
      "kind": "unit",
      "label": "1 cup, cooked"
    },
    {
      "gramsPerUnit": 210.0,
      "key": "1-oz-dry-yields",
      "kind": "unit",
      "label": "1 oz, dry, yields"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Wheat cereal, chocolate flavored, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 11.0,
    "energy_kcal": 49.0,
    "fat_g": 0.47,
    "fibre_g": 1.8,
    "folate_ug": 8.0,
    "iron_mg": 0.63,
    "magnesium_mg": 25.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 59.0,
    "potassium_mg": 72.0,
    "protein_g": 1.79,
    "salt_g": 0.8425,
    "sat_fat_g": 0.156,
    "sodium_mg": 337.0,
    "sugar_g": 0.08,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.18,
    "vitamin_k_ug": 0.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708443",
  "state": "Cooked",
  "subcategory": "Grits and other cooked cereals",
  "tags": [
    "cooked",
    "grits-and-other-cooked-cereals",
    "sweets-and-desserts"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
