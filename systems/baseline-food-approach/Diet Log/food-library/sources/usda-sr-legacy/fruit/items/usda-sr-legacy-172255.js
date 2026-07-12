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
  "id": "usda-sr-legacy-172255",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 88.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "Babyfood, tropical fruit medley",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 12.2,
    "energy_kcal": 46.0,
    "fat_g": 0.14,
    "fibre_g": 1.3,
    "folate_ug": 2.0,
    "iron_mg": 0.0,
    "magnesium_mg": 5.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 11.0,
    "potassium_mg": 141.0,
    "protein_g": 0.31,
    "salt_g": 0.0,
    "sat_fat_g": 0.0,
    "sodium_mg": 0.0,
    "sugar_g": 9.78,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 15.9,
    "vitamin_e_mg": 0.1,
    "vitamin_k_ug": 0.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172255",
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
