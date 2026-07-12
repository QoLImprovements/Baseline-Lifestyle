/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "fl-oz",
  "description": "Beverages",
  "id": "usda-sr-legacy-174140",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 30.6,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    },
    {
      "gramsPerUnit": 245.0,
      "key": "cup-8-fl-oz",
      "kind": "unit",
      "label": "cup (8 fl oz)"
    }
  ],
  "name": "Beverages, cranberry-apple juice drink, bottled",
  "nutritionPerBasis": {
    "calcium_mg": 3.0,
    "carbs_g": 15.8,
    "energy_kcal": 63.0,
    "fat_g": 0.11,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.07,
    "magnesium_mg": 1.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 2.0,
    "potassium_mg": 17.0,
    "protein_g": 0.0,
    "salt_g": 0.005,
    "sat_fat_g": 0.013,
    "sodium_mg": 2.0,
    "sugar_g": 14.5,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 39.5,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 0.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174140",
  "state": "Unspecified",
  "subcategory": "Beverages",
  "tags": [
    "beverages",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
