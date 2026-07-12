/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-cup",
  "description": "Tomatoes",
  "id": "usda-fndds-2709724",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "1-whole",
      "kind": "unit",
      "label": "1 whole"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Tomatoes, canned, reduced sodium, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 32.0,
    "carbs_g": 3.37,
    "energy_kcal": 39.0,
    "fat_g": 2.8,
    "fibre_g": 1.8,
    "folate_ug": 7.0,
    "iron_mg": 0.56,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 17.0,
    "potassium_mg": 186.0,
    "protein_g": 0.78,
    "salt_g": 0.045,
    "sat_fat_g": 0.701,
    "sodium_mg": 18.0,
    "sugar_g": 2.48,
    "vitamin_a_ug": 33.0,
    "vitamin_c_mg": 12.2,
    "vitamin_e_mg": 0.96,
    "vitamin_k_ug": 4.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709724",
  "state": "Canned",
  "subcategory": "Tomatoes",
  "tags": [
    "canned",
    "other-foods",
    "tomatoes"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
