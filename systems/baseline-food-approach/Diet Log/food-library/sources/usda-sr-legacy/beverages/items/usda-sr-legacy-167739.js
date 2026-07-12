/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "serving-2-fl-oz",
  "description": "Beverages",
  "id": "usda-sr-legacy-167739",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 71.0,
      "key": "serving-2-fl-oz",
      "kind": "unit",
      "label": "serving 2 fl oz"
    },
    {
      "gramsPerUnit": 355.0,
      "key": "can-10-fl-oz",
      "kind": "unit",
      "label": "can 10 fl oz"
    },
    {
      "gramsPerUnit": 36.0,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    }
  ],
  "name": "Beverages, Cocktail mix, non-alcoholic, concentrated, frozen",
  "nutritionPerBasis": {
    "calcium_mg": 2.0,
    "carbs_g": 71.6,
    "energy_kcal": 287.0,
    "fat_g": 0.01,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 0.04,
    "magnesium_mg": 1.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 2.0,
    "potassium_mg": 23.0,
    "protein_g": 0.08,
    "salt_g": 0.0,
    "sat_fat_g": 0.003,
    "sodium_mg": 0.0,
    "sugar_g": 24.5,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 4.2,
    "vitamin_e_mg": 0.02,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167739",
  "state": "Frozen",
  "subcategory": "Beverages",
  "tags": [
    "beverages",
    "frozen"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
