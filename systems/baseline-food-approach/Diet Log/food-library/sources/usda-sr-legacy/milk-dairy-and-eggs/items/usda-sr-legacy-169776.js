/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "serving-1-pouch",
  "description": "Meals, Entrees, and Side Dishes",
  "id": "usda-sr-legacy-169776",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 61.0,
      "key": "serving-1-pouch",
      "kind": "unit",
      "label": "serving 1 pouch"
    }
  ],
  "name": "Macaroni or noodles with cheese, microwaveable, unprepared",
  "nutritionPerBasis": {
    "calcium_mg": 328.0,
    "carbs_g": 70.8,
    "energy_kcal": 388.0,
    "fat_g": 6.56,
    "fibre_g": 1.6,
    "folate_ug": 204.0,
    "iron_mg": 2.36,
    "magnesium_mg": 49.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 328.0,
    "potassium_mg": 348.0,
    "protein_g": 11.5,
    "salt_g": 2.255,
    "sat_fat_g": 2.81,
    "sodium_mg": 902.0,
    "sugar_g": 8.2,
    "vitamin_a_ug": 99.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.13,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169776",
  "state": "Unspecified",
  "subcategory": "Meals, Entrees, and Side Dishes",
  "tags": [
    "meals-entrees-and-side-dishes",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
