/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "g",
  "description": "8 samples, 4 products, including Bertolli Light Spread and own brands",
  "id": "cofid-current-12-498",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Fat spread, low fat (26-39%), not polyunsaturated, with olive oil",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 0.5,
    "energy_kcal": 353.0,
    "fat_g": 38.9,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.04,
    "magnesium_mg": 1.0,
    "omega3_g": 1.43,
    "phosphorus_mg": 6.0,
    "potassium_mg": 48.0,
    "protein_g": 0.1,
    "salt_g": 1.22,
    "sat_fat_g": 8.9,
    "sodium_mg": 488.0,
    "sugar_g": 0.5,
    "vitamin_a_ug": 892.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 13.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-498",
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
