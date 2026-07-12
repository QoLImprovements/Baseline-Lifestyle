/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "jar-gerber-4-oz",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-172266",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "jar-gerber-4-oz",
      "kind": "unit",
      "label": "jar, Gerber (4 oz)"
    }
  ],
  "name": "Babyfood, dinner, pasta with vegetables",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 8.4,
    "energy_kcal": 251.0,
    "fat_g": 2.1,
    "fibre_g": 1.5,
    "folate_ug": 9.0,
    "iron_mg": 0.5,
    "magnesium_mg": 24.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 50.0,
    "potassium_mg": 133.0,
    "protein_g": 1.7,
    "salt_g": 0.0275,
    "sat_fat_g": 1.23,
    "sodium_mg": 11.0,
    "sugar_g": 1.2,
    "vitamin_a_ug": 41.0,
    "vitamin_c_mg": 2.9,
    "vitamin_e_mg": 0.23,
    "vitamin_k_ug": 2.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172266",
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
