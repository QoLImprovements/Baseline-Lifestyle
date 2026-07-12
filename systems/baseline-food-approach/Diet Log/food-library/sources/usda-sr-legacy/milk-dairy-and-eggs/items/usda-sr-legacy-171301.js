/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "bottle",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-171301",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 989.0,
      "key": "bottle",
      "kind": "unit",
      "label": "bottle"
    },
    {
      "gramsPerUnit": 247.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Kefir, lowfat, strawberry, LIFEWAY",
  "nutritionPerBasis": {
    "calcium_mg": 119.0,
    "carbs_g": 10.2,
    "energy_kcal": 62.0,
    "fat_g": 0.9,
    "fibre_g": 0.0,
    "folate_ug": 22.0,
    "iron_mg": 0.04,
    "magnesium_mg": 11.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 96.0,
    "potassium_mg": 154.0,
    "protein_g": 3.39,
    "salt_g": 0.0925,
    "sat_fat_g": 0.533,
    "sodium_mg": 37.0,
    "sugar_g": 9.21,
    "vitamin_a_ug": 178.0,
    "vitamin_c_mg": 1.5,
    "vitamin_e_mg": 0.06,
    "vitamin_k_ug": 1.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171301",
  "state": "Raw",
  "subcategory": "Dairy and Egg Products",
  "tags": [
    "dairy-and-egg-products",
    "milk-dairy-and-eggs",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
