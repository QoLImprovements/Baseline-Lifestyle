/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "cracker-sandwich",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172747",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 7.0,
      "key": "cracker-sandwich",
      "kind": "unit",
      "label": "cracker, sandwich"
    },
    {
      "gramsPerUnit": 14.2,
      "key": "0-5-oz",
      "kind": "unit",
      "label": "0.5 oz"
    }
  ],
  "name": "Crackers, wheat, sandwich, with cheese filling",
  "nutritionPerBasis": {
    "calcium_mg": 204.0,
    "carbs_g": 58.2,
    "energy_kcal": 2080.0,
    "fat_g": 25.0,
    "fibre_g": 3.1,
    "folate_ug": 64.0,
    "iron_mg": 2.62,
    "magnesium_mg": 54.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 382.0,
    "potassium_mg": 306.0,
    "protein_g": 9.8,
    "salt_g": 2.0975,
    "sat_fat_g": 4.13,
    "sodium_mg": 839.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 21.0,
    "vitamin_c_mg": 1.5,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172747",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
