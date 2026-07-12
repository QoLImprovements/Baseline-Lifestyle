/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Snacks",
  "defaultMeasure": "6-piece-chips",
  "description": "Snacks",
  "id": "usda-sr-legacy-173150",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "6-piece-chips",
      "kind": "unit",
      "label": "6 piece chips"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 175.0,
      "key": "bag",
      "kind": "unit",
      "label": "bag"
    }
  ],
  "name": "Snacks, bagel chips, plain",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 66.4,
    "energy_kcal": 1890.0,
    "fat_g": 15.1,
    "fibre_g": 4.1,
    "folate_ug": 142.0,
    "iron_mg": 5.05,
    "magnesium_mg": 39.0,
    "omega3_g": 0.062,
    "phosphorus_mg": 131.0,
    "potassium_mg": 140.0,
    "protein_g": 12.3,
    "salt_g": 0.5825,
    "sat_fat_g": 6.84,
    "sodium_mg": 233.0,
    "sugar_g": 6.02,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.81,
    "vitamin_k_ug": 5.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173150",
  "state": "Unspecified",
  "subcategory": "Snacks",
  "tags": [
    "snacks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
