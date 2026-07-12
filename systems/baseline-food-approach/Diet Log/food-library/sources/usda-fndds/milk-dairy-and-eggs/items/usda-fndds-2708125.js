/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-bar",
  "description": "Nutrition bars",
  "id": "usda-fndds-2708125",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "1-bar",
      "kind": "unit",
      "label": "1 bar"
    },
    {
      "gramsPerUnit": 55.0,
      "key": "1-king-size-bar",
      "kind": "unit",
      "label": "1 king size bar"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Nutrition bar (Tiger's Milk)",
  "nutritionPerBasis": {
    "calcium_mg": 429.0,
    "carbs_g": 56.5,
    "energy_kcal": 387.0,
    "fat_g": 14.3,
    "fibre_g": 2.3,
    "folate_ug": 55.0,
    "iron_mg": 10.3,
    "magnesium_mg": 336.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 560.0,
    "potassium_mg": 294.0,
    "protein_g": 16.8,
    "salt_g": 0.42,
    "sat_fat_g": 2.07,
    "sodium_mg": 168.0,
    "sugar_g": 36.4,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 16.8,
    "vitamin_e_mg": 2.48,
    "vitamin_k_ug": 4.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708125",
  "state": "Unspecified",
  "subcategory": "Nutrition bars",
  "tags": [
    "milk-dairy-and-eggs",
    "nutrition-bars",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
