/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "g",
  "description": "10 samples, 6 products, including Bertolli Spread and own brands",
  "id": "cofid-current-12-505",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Fat spread, reduced fat (41-62%), not polyunsaturated, with olive oil",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 1.1,
    "energy_kcal": 537.0,
    "fat_g": 59.1,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.04,
    "magnesium_mg": 1.0,
    "omega3_g": 2.12,
    "phosphorus_mg": 7.0,
    "potassium_mg": 46.0,
    "protein_g": 0.2,
    "salt_g": 1.3775,
    "sat_fat_g": 13.22,
    "sodium_mg": 551.0,
    "sugar_g": 1.1,
    "vitamin_a_ug": 817.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 12.5,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-505",
  "state": "Unspecified",
  "subcategory": "OA",
  "tags": [
    "oa",
    "oils-and-fats",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
