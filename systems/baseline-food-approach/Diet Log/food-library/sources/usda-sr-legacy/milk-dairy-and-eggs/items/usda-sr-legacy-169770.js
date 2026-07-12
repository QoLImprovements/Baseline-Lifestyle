/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "cup-prepared",
  "description": "Meals, Entrees, and Side Dishes",
  "id": "usda-sr-legacy-169770",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 189.0,
      "key": "cup-prepared",
      "kind": "unit",
      "label": "cup prepared"
    }
  ],
  "name": "Macaroni and cheese, box mix with cheese sauce, prepared",
  "nutritionPerBasis": {
    "calcium_mg": 85.0,
    "carbs_g": 23.1,
    "energy_kcal": 164.0,
    "fat_g": 4.99,
    "fibre_g": 1.2,
    "folate_ug": 0.0,
    "iron_mg": 1.17,
    "magnesium_mg": 15.0,
    "omega3_g": 0.243,
    "phosphorus_mg": 234.0,
    "potassium_mg": 80.0,
    "protein_g": 6.68,
    "salt_g": 1.15,
    "sat_fat_g": 1.64,
    "sodium_mg": 460.0,
    "sugar_g": 1.57,
    "vitamin_a_ug": 22.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.54,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169770",
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
