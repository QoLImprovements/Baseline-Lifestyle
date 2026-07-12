/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "serving-varied-from-7-9-ravioli-per-serving",
  "description": "Restaurant Foods",
  "id": "usda-sr-legacy-169037",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 454.0,
      "key": "serving-varied-from-7-9-ravioli-per-serving",
      "kind": "unit",
      "label": "serving varied from 7-9 ravioli per serving"
    }
  ],
  "name": "OLIVE GARDEN, cheese ravioli with marinara sauce",
  "nutritionPerBasis": {
    "calcium_mg": 121.0,
    "carbs_g": 19.6,
    "energy_kcal": 159.0,
    "fat_g": 5.61,
    "fibre_g": 1.1,
    "folate_ug": 44.0,
    "iron_mg": 0.96,
    "magnesium_mg": 23.0,
    "omega3_g": 0.068,
    "phosphorus_mg": 129.0,
    "potassium_mg": 184.0,
    "protein_g": 7.44,
    "salt_g": 0.6725,
    "sat_fat_g": 2.53,
    "sodium_mg": 269.0,
    "sugar_g": 4.85,
    "vitamin_a_ug": 48.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.45,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169037",
  "state": "Unspecified",
  "subcategory": "Restaurant Foods",
  "tags": [
    "milk-dairy-and-eggs",
    "restaurant-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
