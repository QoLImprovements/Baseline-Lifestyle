/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "serving",
  "description": "Restaurant Foods",
  "id": "usda-sr-legacy-169011",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 289.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    },
    {
      "gramsPerUnit": 32.0,
      "key": "piece",
      "kind": "unit",
      "label": "piece"
    }
  ],
  "name": "APPLEBEE'S, mozzarella sticks",
  "nutritionPerBasis": {
    "calcium_mg": 319.0,
    "carbs_g": 22.9,
    "energy_kcal": 316.0,
    "fat_g": 18.4,
    "fibre_g": 2.1,
    "folate_ug": 0.0,
    "iron_mg": 0.43,
    "magnesium_mg": 20.0,
    "omega3_g": 0.515,
    "phosphorus_mg": 307.0,
    "potassium_mg": 106.0,
    "protein_g": 14.9,
    "salt_g": 2.095,
    "sat_fat_g": 6.73,
    "sodium_mg": 838.0,
    "sugar_g": 2.8,
    "vitamin_a_ug": 113.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.71,
    "vitamin_k_ug": 22.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169011",
  "state": "Unspecified",
  "subcategory": "Restaurant Foods",
  "tags": [
    "other-foods",
    "restaurant-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
