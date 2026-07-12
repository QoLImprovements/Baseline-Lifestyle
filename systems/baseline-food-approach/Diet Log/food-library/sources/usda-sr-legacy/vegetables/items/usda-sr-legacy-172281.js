/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "serving",
  "description": "Baby Foods",
  "id": "usda-sr-legacy-172281",
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
  "name": "Babyfood, dinner, mixed vegetable, junior",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 7.88,
    "energy_kcal": 34.0,
    "fat_g": 0.11,
    "fibre_g": 1.0,
    "folate_ug": 11.0,
    "iron_mg": 0.31,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 30.0,
    "potassium_mg": 112.0,
    "protein_g": 1.01,
    "salt_g": 0.1,
    "sat_fat_g": 0.0,
    "sodium_mg": 40.0,
    "sugar_g": 3.08,
    "vitamin_a_ug": 462.0,
    "vitamin_c_mg": 3.3,
    "vitamin_e_mg": 0.3,
    "vitamin_k_ug": 5.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172281",
  "state": "Unspecified",
  "subcategory": "Baby Foods",
  "tags": [
    "baby-foods",
    "unspecified",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
