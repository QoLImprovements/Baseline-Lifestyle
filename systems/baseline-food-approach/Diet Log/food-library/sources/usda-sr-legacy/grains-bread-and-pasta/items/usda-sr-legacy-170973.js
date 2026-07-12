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
  "id": "usda-sr-legacy-170973",
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
      "gramsPerUnit": 2.4,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Babyfood, cereal, high protein, with apple and orange, dry",
  "nutritionPerBasis": {
    "calcium_mg": 751.0,
    "carbs_g": 57.6,
    "energy_kcal": 1560.0,
    "fat_g": 6.5,
    "fibre_g": 7.1,
    "folate_ug": 190.0,
    "iron_mg": 47.5,
    "magnesium_mg": 159.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 539.0,
    "potassium_mg": 1330.0,
    "protein_g": 25.4,
    "salt_g": 0.26,
    "sat_fat_g": 0.96,
    "sodium_mg": 104.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 3.1,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170973",
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
