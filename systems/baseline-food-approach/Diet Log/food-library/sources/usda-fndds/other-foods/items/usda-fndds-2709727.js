/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-piece",
  "description": "Tomatoes",
  "id": "usda-fndds-2709727",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "1-piece",
      "kind": "unit",
      "label": "1 piece"
    },
    {
      "gramsPerUnit": 55.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Sun-dried tomatoes",
  "nutritionPerBasis": {
    "calcium_mg": 110.0,
    "carbs_g": 55.8,
    "energy_kcal": 258.0,
    "fat_g": 2.97,
    "fibre_g": 12.3,
    "folate_ug": 68.0,
    "iron_mg": 9.09,
    "magnesium_mg": 194.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 356.0,
    "potassium_mg": 3430.0,
    "protein_g": 14.1,
    "salt_g": 0.2675,
    "sat_fat_g": 0.426,
    "sodium_mg": 107.0,
    "sugar_g": 37.6,
    "vitamin_a_ug": 44.0,
    "vitamin_c_mg": 39.2,
    "vitamin_e_mg": 0.01,
    "vitamin_k_ug": 43.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709727",
  "state": "Dried",
  "subcategory": "Tomatoes",
  "tags": [
    "dried",
    "other-foods",
    "tomatoes"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
