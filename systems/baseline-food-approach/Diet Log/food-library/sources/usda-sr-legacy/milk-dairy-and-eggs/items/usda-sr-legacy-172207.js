/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "tbsp",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-172207",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 18.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Cheese, cream, fat free",
  "nutritionPerBasis": {
    "calcium_mg": 351.0,
    "carbs_g": 7.66,
    "energy_kcal": 441.0,
    "fat_g": 1.0,
    "fibre_g": 0.0,
    "folate_ug": 35.0,
    "iron_mg": 0.19,
    "magnesium_mg": 22.0,
    "omega3_g": 0.007,
    "phosphorus_mg": 523.0,
    "potassium_mg": 278.0,
    "protein_g": 15.7,
    "salt_g": 1.755,
    "sat_fat_g": 0.644,
    "sodium_mg": 702.0,
    "sugar_g": 5.48,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.02,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172207",
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
