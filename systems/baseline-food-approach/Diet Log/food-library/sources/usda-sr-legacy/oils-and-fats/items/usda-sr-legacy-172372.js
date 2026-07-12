/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "tbsp",
  "description": "Fats and Oils",
  "id": "usda-sr-legacy-172372",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Margarine-like spread, SMART BALANCE Light Buttery Spread",
  "nutritionPerBasis": {
    "calcium_mg": 3.0,
    "carbs_g": 1.98,
    "energy_kcal": 337.0,
    "fat_g": 36.4,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.0,
    "magnesium_mg": 1.0,
    "omega3_g": 1.12,
    "phosphorus_mg": 1.0,
    "potassium_mg": 32.0,
    "protein_g": 0.02,
    "salt_g": 1.45,
    "sat_fat_g": 10.1,
    "sodium_mg": 580.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 1430.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 15.8,
    "vitamin_k_ug": 46.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172372",
  "state": "Unspecified",
  "subcategory": "Fats and Oils",
  "tags": [
    "fats-and-oils",
    "oils-and-fats",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
