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
  "id": "usda-sr-legacy-169865",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 14.4,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 128.0,
      "key": "jar-earth-s-best-4-5-oz",
      "kind": "unit",
      "label": "jar Earth's Best (4.5 oz)"
    },
    {
      "gramsPerUnit": 230.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Babyfood, peas and brown rice",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 11.5,
    "energy_kcal": 268.0,
    "fat_g": 0.5,
    "fibre_g": 2.5,
    "folate_ug": 16.0,
    "iron_mg": 1.5,
    "magnesium_mg": 25.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 52.0,
    "potassium_mg": 93.0,
    "protein_g": 3.4,
    "salt_g": 0.015,
    "sat_fat_g": 0.1,
    "sodium_mg": 6.0,
    "sugar_g": 2.89,
    "vitamin_a_ug": 19.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 0.07,
    "vitamin_k_ug": 12.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169865",
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
