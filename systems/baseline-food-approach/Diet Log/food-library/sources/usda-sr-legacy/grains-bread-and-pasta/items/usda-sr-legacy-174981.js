/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "0-5-oz",
  "description": "Baked Products",
  "id": "usda-sr-legacy-174981",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 14.2,
      "key": "0-5-oz",
      "kind": "unit",
      "label": "0.5 oz"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "rusk",
      "kind": "unit",
      "label": "rusk"
    }
  ],
  "name": "Crackers, rusk toast",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 72.3,
    "energy_kcal": 1700.0,
    "fat_g": 7.2,
    "fibre_g": 0.0,
    "folate_ug": 87.0,
    "iron_mg": 2.72,
    "magnesium_mg": 36.0,
    "omega3_g": 0.021,
    "phosphorus_mg": 153.0,
    "potassium_mg": 245.0,
    "protein_g": 13.5,
    "salt_g": 0.6325,
    "sat_fat_g": 1.38,
    "sodium_mg": 253.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 12.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174981",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
