/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-171304",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Yogurt, Greek, plain, whole milk",
  "nutritionPerBasis": {
    "calcium_mg": 100.0,
    "carbs_g": 3.98,
    "energy_kcal": 97.0,
    "fat_g": 5.0,
    "fibre_g": 0.0,
    "folate_ug": 5.0,
    "iron_mg": 0.0,
    "magnesium_mg": 11.0,
    "omega3_g": 0.027,
    "phosphorus_mg": 135.0,
    "potassium_mg": 141.0,
    "protein_g": 9.0,
    "salt_g": 0.0875,
    "sat_fat_g": 2.4,
    "sodium_mg": 35.0,
    "sugar_g": 4.0,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.01,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171304",
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
