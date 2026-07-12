/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "4-tbsp",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-168975",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 18.0,
      "key": "4-tbsp",
      "kind": "unit",
      "label": "4 tbsp"
    }
  ],
  "name": "Babyfood, rice cereal, dry, EARTHS BEST ORGANIC WHOLE GRAIN, fortified only with iron",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 78.1,
    "energy_kcal": 1620.0,
    "fat_g": 4.9,
    "fibre_g": 0.5,
    "folate_ug": 24.0,
    "iron_mg": 47.5,
    "magnesium_mg": 112.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 256.0,
    "potassium_mg": 184.0,
    "protein_g": 7.5,
    "salt_g": 0.0175,
    "sat_fat_g": 0.919,
    "sodium_mg": 7.0,
    "sugar_g": 0.12,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 2.4,
    "vitamin_e_mg": 5.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168975",
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
