/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "serving",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-172227",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 82.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "Ice cream cookie sandwich",
  "nutritionPerBasis": {
    "calcium_mg": 73.0,
    "carbs_g": 39.6,
    "energy_kcal": 1000.0,
    "fat_g": 7.4,
    "fibre_g": 1.2,
    "folate_ug": 5.0,
    "iron_mg": 1.1,
    "magnesium_mg": 16.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 54.0,
    "potassium_mg": 68.0,
    "protein_g": 3.7,
    "salt_g": 0.405,
    "sat_fat_g": 1.66,
    "sodium_mg": 162.0,
    "sugar_g": 21.3,
    "vitamin_a_ug": 37.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.4,
    "vitamin_k_ug": 1.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172227",
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
