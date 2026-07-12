/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "0-7-oz",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-173429",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "0-7-oz",
      "kind": "unit",
      "label": "0.7 oz"
    },
    {
      "gramsPerUnit": 9.9,
      "key": "0-35-oz",
      "kind": "unit",
      "label": "0.35 oz"
    }
  ],
  "name": "Egg substitute, powder",
  "nutritionPerBasis": {
    "calcium_mg": 326.0,
    "carbs_g": 21.8,
    "energy_kcal": 444.0,
    "fat_g": 13.0,
    "fibre_g": 0.0,
    "folate_ug": 125.0,
    "iron_mg": 3.16,
    "magnesium_mg": 65.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 478.0,
    "potassium_mg": 744.0,
    "protein_g": 55.5,
    "salt_g": 2.0,
    "sat_fat_g": 3.77,
    "sodium_mg": 800.0,
    "sugar_g": 21.8,
    "vitamin_a_ug": 369.0,
    "vitamin_c_mg": 0.8,
    "vitamin_e_mg": 1.26,
    "vitamin_k_ug": 0.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173429",
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
