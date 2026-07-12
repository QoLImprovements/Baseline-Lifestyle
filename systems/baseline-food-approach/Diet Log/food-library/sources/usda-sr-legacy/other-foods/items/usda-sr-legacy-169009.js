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
  "id": "usda-sr-legacy-169009",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 164.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "APPLEBEE'S, french fries",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 39.5,
    "energy_kcal": 290.0,
    "fat_g": 13.2,
    "fibre_g": 3.9,
    "folate_ug": 0.0,
    "iron_mg": 1.01,
    "magnesium_mg": 29.0,
    "omega3_g": 0.729,
    "phosphorus_mg": 137.0,
    "potassium_mg": 538.0,
    "protein_g": 3.31,
    "salt_g": 1.545,
    "sat_fat_g": 2.33,
    "sodium_mg": 618.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 0.93,
    "vitamin_k_ug": 33.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169009",
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
