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
  "id": "usda-sr-legacy-172745",
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
      "gramsPerUnit": 22.0,
      "key": "cracker-triple",
      "kind": "unit",
      "label": "cracker, triple"
    }
  ],
  "name": "Crackers, rye, wafers, seasoned",
  "nutritionPerBasis": {
    "calcium_mg": 44.0,
    "carbs_g": 73.8,
    "energy_kcal": 1590.0,
    "fat_g": 9.2,
    "fibre_g": 20.9,
    "folate_ug": 52.0,
    "iron_mg": 3.04,
    "magnesium_mg": 106.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 307.0,
    "potassium_mg": 454.0,
    "protein_g": 9.0,
    "salt_g": 2.2175,
    "sat_fat_g": 1.29,
    "sodium_mg": 887.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172745",
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
