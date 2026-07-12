/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "tbsp",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-170974",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 2.5,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "0-5-oz",
      "kind": "unit",
      "label": "0.5 oz"
    }
  ],
  "name": "Babyfood, cereal, rice, with bananas, dry",
  "nutritionPerBasis": {
    "calcium_mg": 691.0,
    "carbs_g": 79.9,
    "energy_kcal": 1690.0,
    "fat_g": 4.2,
    "fibre_g": 1.0,
    "folate_ug": 12.0,
    "iron_mg": 47.5,
    "magnesium_mg": 141.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 410.0,
    "potassium_mg": 769.0,
    "protein_g": 8.7,
    "salt_g": 0.0,
    "sat_fat_g": 0.978,
    "sodium_mg": 0.0,
    "sugar_g": 16.7,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 0.37,
    "vitamin_k_ug": 3.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170974",
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
