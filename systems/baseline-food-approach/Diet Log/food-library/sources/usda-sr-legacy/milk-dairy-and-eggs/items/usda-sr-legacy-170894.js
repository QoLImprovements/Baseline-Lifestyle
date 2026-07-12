/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "container",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-170894",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "container",
      "kind": "unit",
      "label": "container"
    }
  ],
  "name": "Yogurt, Greek, plain, nonfat (Includes foods for USDA's Food Distribution Program)",
  "nutritionPerBasis": {
    "calcium_mg": 110.0,
    "carbs_g": 3.6,
    "energy_kcal": 246.0,
    "fat_g": 0.39,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 0.07,
    "magnesium_mg": 11.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 135.0,
    "potassium_mg": 141.0,
    "protein_g": 10.2,
    "salt_g": 0.09,
    "sat_fat_g": 0.117,
    "sodium_mg": 36.0,
    "sugar_g": 3.24,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.01,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170894",
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
