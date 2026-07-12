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
  "id": "usda-sr-legacy-172226",
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
  "name": "Ice cream sandwich",
  "nutritionPerBasis": {
    "calcium_mg": 86.0,
    "carbs_g": 37.1,
    "energy_kcal": 237.0,
    "fat_g": 8.57,
    "fibre_g": 0.0,
    "folate_ug": 34.0,
    "iron_mg": 0.26,
    "magnesium_mg": 29.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 72.0,
    "potassium_mg": 115.0,
    "protein_g": 4.29,
    "salt_g": 0.3225,
    "sat_fat_g": 2.32,
    "sodium_mg": 129.0,
    "sugar_g": 18.6,
    "vitamin_a_ug": 86.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.4,
    "vitamin_k_ug": 1.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172226",
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
