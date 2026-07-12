/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "cup",
  "description": "Beverages",
  "id": "usda-sr-legacy-167727",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 252.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 31.5,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    }
  ],
  "name": "Beverages, ABBOTT, ENSURE PLUS, ready-to-drink",
  "nutritionPerBasis": {
    "calcium_mg": 79.0,
    "carbs_g": 19.9,
    "energy_kcal": 141.0,
    "fat_g": 4.52,
    "fibre_g": 0.0,
    "folate_ug": 40.0,
    "iron_mg": 1.79,
    "magnesium_mg": 40.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 79.0,
    "potassium_mg": 175.0,
    "protein_g": 5.16,
    "salt_g": 0.2375,
    "sat_fat_g": 0.574,
    "sodium_mg": 95.0,
    "sugar_g": 8.33,
    "vitamin_a_ug": 149.0,
    "vitamin_c_mg": 11.9,
    "vitamin_e_mg": 1.34,
    "vitamin_k_ug": 7.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167727",
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
