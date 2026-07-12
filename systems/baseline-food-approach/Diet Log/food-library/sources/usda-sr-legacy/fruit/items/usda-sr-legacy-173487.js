/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "serving",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-173487",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 99.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "Babyfood, GERBER, 2nd Foods, apple, carrot and squash, organic",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 14.8,
    "energy_kcal": 64.0,
    "fat_g": 0.0,
    "fibre_g": 1.2,
    "folate_ug": 2.0,
    "iron_mg": 0.15,
    "magnesium_mg": 5.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 17.0,
    "potassium_mg": 106.0,
    "protein_g": 1.1,
    "salt_g": 0.05,
    "sat_fat_g": 0.0,
    "sodium_mg": 20.0,
    "sugar_g": 9.09,
    "vitamin_a_ug": 21.0,
    "vitamin_c_mg": 2730.0,
    "vitamin_e_mg": 0.07,
    "vitamin_k_ug": 1.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173487",
  "state": "Unspecified",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "fruit",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
