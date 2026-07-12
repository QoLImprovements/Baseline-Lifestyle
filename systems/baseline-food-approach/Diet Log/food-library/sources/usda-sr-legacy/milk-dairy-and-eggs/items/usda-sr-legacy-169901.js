/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "slice",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-169901",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 21.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    },
    {
      "gramsPerUnit": 18.0,
      "key": "cubic-inch",
      "kind": "unit",
      "label": "cubic inch"
    },
    {
      "gramsPerUnit": 224.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Cheese, american cheddar, imitation",
  "nutritionPerBasis": {
    "calcium_mg": 562.0,
    "carbs_g": 11.6,
    "energy_kcal": 1000.0,
    "fat_g": 14.0,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 0.33,
    "magnesium_mg": 29.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 712.0,
    "potassium_mg": 242.0,
    "protein_g": 16.7,
    "salt_g": 3.35,
    "sat_fat_g": 8.79,
    "sodium_mg": 1340.0,
    "sugar_g": 7.74,
    "vitamin_a_ug": 114.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.27,
    "vitamin_k_ug": 2.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169901",
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
