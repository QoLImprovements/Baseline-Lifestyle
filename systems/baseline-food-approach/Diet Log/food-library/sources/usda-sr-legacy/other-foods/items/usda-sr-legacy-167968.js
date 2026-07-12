/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "oz",
  "description": "Snacks",
  "id": "usda-sr-legacy-167968",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 42.0,
      "key": "1-5-oz",
      "kind": "unit",
      "label": "1.5 oz"
    }
  ],
  "name": "Snacks, trail mix, tropical",
  "nutritionPerBasis": {
    "calcium_mg": 57.0,
    "carbs_g": 65.6,
    "energy_kcal": 442.0,
    "fat_g": 17.1,
    "fibre_g": 0.0,
    "folate_ug": 42.0,
    "iron_mg": 2.64,
    "magnesium_mg": 96.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 186.0,
    "potassium_mg": 709.0,
    "protein_g": 6.3,
    "salt_g": 0.2375,
    "sat_fat_g": 8.48,
    "sodium_mg": 95.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 7.6,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167968",
  "state": "Unspecified",
  "subcategory": "Snacks",
  "tags": [
    "other-foods",
    "snacks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
