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
  "id": "usda-sr-legacy-172230",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "Ice cream sandwich, vanilla, light, no sugar added",
  "nutritionPerBasis": {
    "calcium_mg": 86.0,
    "carbs_g": 42.9,
    "energy_kcal": 200.0,
    "fat_g": 2.86,
    "fibre_g": 7.1,
    "folate_ug": 12.0,
    "iron_mg": 0.0,
    "magnesium_mg": 10.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 26.0,
    "potassium_mg": 41.0,
    "protein_g": 5.71,
    "salt_g": 0.41,
    "sat_fat_g": 0.821,
    "sodium_mg": 164.0,
    "sugar_g": 6.58,
    "vitamin_a_ug": 129.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.14,
    "vitamin_k_ug": 0.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172230",
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
