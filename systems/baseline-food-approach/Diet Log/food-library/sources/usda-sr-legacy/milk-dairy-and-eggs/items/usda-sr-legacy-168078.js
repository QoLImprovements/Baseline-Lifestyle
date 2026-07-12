/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "cup",
  "description": "Restaurant Foods",
  "id": "usda-sr-legacy-168078",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 134.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 180.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "DENNY'S, macaroni & cheese, from kid's menu",
  "nutritionPerBasis": {
    "calcium_mg": 83.0,
    "carbs_g": 21.2,
    "energy_kcal": 626.0,
    "fat_g": 4.92,
    "fibre_g": 1.2,
    "folate_ug": 36.0,
    "iron_mg": 0.79,
    "magnesium_mg": 23.0,
    "omega3_g": 0.23,
    "phosphorus_mg": 113.0,
    "potassium_mg": 165.0,
    "protein_g": 5.19,
    "salt_g": 0.75,
    "sat_fat_g": 1.38,
    "sodium_mg": 300.0,
    "sugar_g": 4.2,
    "vitamin_a_ug": 15.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.53,
    "vitamin_k_ug": 3.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168078",
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
