/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "container-7-oz",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-170903",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 200.0,
      "key": "container-7-oz",
      "kind": "unit",
      "label": "container (7 oz)"
    }
  ],
  "name": "Yogurt, Greek, plain, lowfat",
  "nutritionPerBasis": {
    "calcium_mg": 115.0,
    "carbs_g": 3.94,
    "energy_kcal": 73.0,
    "fat_g": 1.92,
    "fibre_g": 0.0,
    "folate_ug": 12.0,
    "iron_mg": 0.04,
    "magnesium_mg": 11.0,
    "omega3_g": 0.007,
    "phosphorus_mg": 137.0,
    "potassium_mg": 141.0,
    "protein_g": 9.95,
    "salt_g": 0.085,
    "sat_fat_g": 1.23,
    "sodium_mg": 34.0,
    "sugar_g": 3.56,
    "vitamin_a_ug": 90.0,
    "vitamin_c_mg": 0.8,
    "vitamin_e_mg": 0.04,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170903",
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
