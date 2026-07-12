/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "jar",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-171353",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 127.0,
      "key": "jar",
      "kind": "unit",
      "label": "jar"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "bottle-4-fl-oz",
      "kind": "unit",
      "label": "bottle (4 fl oz)"
    },
    {
      "gramsPerUnit": 31.2,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    }
  ],
  "name": "Babyfood, juice, apple and prune",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 18.1,
    "energy_kcal": 303.0,
    "fat_g": 0.1,
    "fibre_g": 0.1,
    "folate_ug": 0.0,
    "iron_mg": 0.95,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 15.0,
    "potassium_mg": 148.0,
    "protein_g": 0.2,
    "salt_g": 0.02,
    "sat_fat_g": 0.018,
    "sodium_mg": 8.0,
    "sugar_g": 10.6,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 67.5,
    "vitamin_e_mg": 0.05,
    "vitamin_k_ug": 1.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171353",
  "state": "Unspecified",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "beverages",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
