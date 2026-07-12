/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "0-5-oz",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-170965",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "0-5-oz",
      "kind": "unit",
      "label": "0.5 oz"
    },
    {
      "gramsPerUnit": 2.5,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Babyfood, cereal, mixed, with bananas, dry",
  "nutritionPerBasis": {
    "calcium_mg": 696.0,
    "carbs_g": 77.1,
    "energy_kcal": 1640.0,
    "fat_g": 4.6,
    "fibre_g": 7.8,
    "folate_ug": 17.0,
    "iron_mg": 47.5,
    "magnesium_mg": 90.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 367.0,
    "potassium_mg": 668.0,
    "protein_g": 10.7,
    "salt_g": 0.0,
    "sat_fat_g": 0.846,
    "sodium_mg": 0.0,
    "sugar_g": 6.68,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 3.6,
    "vitamin_e_mg": 0.51,
    "vitamin_k_ug": 3.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170965",
  "state": "Unspecified",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
