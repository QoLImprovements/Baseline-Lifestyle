/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "small-12-fl-oz",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170700",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 298.0,
      "key": "small-12-fl-oz",
      "kind": "unit",
      "label": "small 12 fl oz"
    },
    {
      "gramsPerUnit": 24.8,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    },
    {
      "gramsPerUnit": 397.0,
      "key": "medium-16-fl-oz",
      "kind": "unit",
      "label": "medium 16 fl oz"
    }
  ],
  "name": "BURGER KING, Vanilla Shake",
  "nutritionPerBasis": {
    "calcium_mg": 104.0,
    "carbs_g": 19.0,
    "energy_kcal": 701.0,
    "fat_g": 8.74,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.42,
    "magnesium_mg": 12.0,
    "omega3_g": 0.039,
    "phosphorus_mg": 97.0,
    "potassium_mg": 153.0,
    "protein_g": 3.19,
    "salt_g": 0.25,
    "sat_fat_g": 5.34,
    "sodium_mg": 100.0,
    "sugar_g": 11.7,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.32,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170700",
  "state": "Unspecified",
  "subcategory": "Fast Foods",
  "tags": [
    "beverages",
    "fast-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
