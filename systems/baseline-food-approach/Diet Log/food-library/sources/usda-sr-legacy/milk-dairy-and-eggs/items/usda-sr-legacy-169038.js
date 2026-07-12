/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "serving-serving-size-varied-by-diameter-and-count-of-raviloi",
  "description": "Restaurant Foods",
  "id": "usda-sr-legacy-169038",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 427.0,
      "key": "serving-serving-size-varied-by-diameter-and-count-of-raviloi",
      "kind": "unit",
      "label": "serving serving size varied by diameter and count of raviloi"
    }
  ],
  "name": "Restaurant, Italian, cheese ravioli with marinara sauce",
  "nutritionPerBasis": {
    "calcium_mg": 120.0,
    "carbs_g": 18.5,
    "energy_kcal": 642.0,
    "fat_g": 5.7,
    "fibre_g": 1.2,
    "folate_ug": 28.0,
    "iron_mg": 0.82,
    "magnesium_mg": 22.0,
    "omega3_g": 0.059,
    "phosphorus_mg": 121.0,
    "potassium_mg": 195.0,
    "protein_g": 7.07,
    "salt_g": 0.765,
    "sat_fat_g": 2.56,
    "sodium_mg": 306.0,
    "sugar_g": 4.5,
    "vitamin_a_ug": 53.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.47,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169038",
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
