/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Snacks",
  "defaultMeasure": "bar",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-173485",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 9.9,
      "key": "bar",
      "kind": "unit",
      "label": "bar"
    }
  ],
  "name": "Babyfood, snack, GERBER GRADUATE FRUIT STRIPS, Real Fruit Bars",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 76.6,
    "energy_kcal": 1380.0,
    "fat_g": 2.24,
    "fibre_g": 2.0,
    "folate_ug": 1.0,
    "iron_mg": 1.05,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 23.0,
    "potassium_mg": 312.0,
    "protein_g": 0.82,
    "salt_g": 0.035,
    "sat_fat_g": 0.364,
    "sodium_mg": 14.0,
    "sugar_g": 68.6,
    "vitamin_a_ug": 12.0,
    "vitamin_c_mg": 180.0,
    "vitamin_e_mg": 0.96,
    "vitamin_k_ug": 2.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173485",
  "state": "Unspecified",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "snacks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
