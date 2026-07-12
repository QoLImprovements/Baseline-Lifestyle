/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "0-25-cup-shredded",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-171288",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "0-25-cup-shredded",
      "kind": "unit",
      "label": "0.25 cup shredded"
    }
  ],
  "name": "Cheese, Mexican blend",
  "nutritionPerBasis": {
    "calcium_mg": 659.0,
    "carbs_g": 0.13,
    "energy_kcal": 384.0,
    "fat_g": 32.1,
    "fibre_g": 0.0,
    "folate_ug": 13.0,
    "iron_mg": 0.59,
    "magnesium_mg": 25.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 438.0,
    "potassium_mg": 85.0,
    "protein_g": 23.5,
    "salt_g": 1.5175,
    "sat_fat_g": 16.1,
    "sodium_mg": 607.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 174.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.25,
    "vitamin_k_ug": 2.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171288",
  "state": "Unspecified",
  "subcategory": "Dairy and Egg Products",
  "tags": [
    "dairy-and-egg-products",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
