/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "head",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170390",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 840.0,
      "key": "head",
      "kind": "unit",
      "label": "head"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "leaf",
      "kind": "unit",
      "label": "leaf"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "cup-shredded",
      "kind": "unit",
      "label": "cup, shredded"
    }
  ],
  "name": "Cabbage, chinese (pak-choi), raw",
  "nutritionPerBasis": {
    "calcium_mg": 105.0,
    "carbs_g": 2.18,
    "energy_kcal": 55.0,
    "fat_g": 0.2,
    "fibre_g": 1.0,
    "folate_ug": 66.0,
    "iron_mg": 0.8,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 37.0,
    "potassium_mg": 252.0,
    "protein_g": 1.5,
    "salt_g": 0.1625,
    "sat_fat_g": 0.027,
    "sodium_mg": 65.0,
    "sugar_g": 1.18,
    "vitamin_a_ug": 223.0,
    "vitamin_c_mg": 45.0,
    "vitamin_e_mg": 0.09,
    "vitamin_k_ug": 45.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170390",
  "state": "Raw",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "raw",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
