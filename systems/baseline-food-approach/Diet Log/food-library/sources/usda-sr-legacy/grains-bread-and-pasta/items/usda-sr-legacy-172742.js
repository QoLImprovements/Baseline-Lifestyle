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
  "id": "usda-sr-legacy-172742",
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
      "gramsPerUnit": 28.0,
      "key": "matzo",
      "kind": "unit",
      "label": "matzo"
    }
  ],
  "name": "Crackers, matzo, whole-wheat",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 78.9,
    "energy_kcal": 1470.0,
    "fat_g": 1.5,
    "fibre_g": 11.8,
    "folate_ug": 35.0,
    "iron_mg": 4.65,
    "magnesium_mg": 134.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 305.0,
    "potassium_mg": 316.0,
    "protein_g": 13.1,
    "salt_g": 0.005,
    "sat_fat_g": 0.243,
    "sodium_mg": 2.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172742",
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
