/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "container-5-3-oz",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-170902",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "container-5-3-oz",
      "kind": "unit",
      "label": "container (5.3 oz)"
    }
  ],
  "name": "Yogurt, Greek, vanilla, nonfat",
  "nutritionPerBasis": {
    "calcium_mg": 99.0,
    "carbs_g": 10.4,
    "energy_kcal": 325.0,
    "fat_g": 0.18,
    "fibre_g": 0.5,
    "folate_ug": 11.0,
    "iron_mg": 0.04,
    "magnesium_mg": 10.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 119.0,
    "potassium_mg": 123.0,
    "protein_g": 8.64,
    "salt_g": 0.085,
    "sat_fat_g": 0.133,
    "sodium_mg": 34.0,
    "sugar_g": 9.54,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.02,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170902",
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
