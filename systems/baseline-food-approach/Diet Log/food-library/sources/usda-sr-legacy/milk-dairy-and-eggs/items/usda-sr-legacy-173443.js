/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "cup",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-173443",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 230.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 12.0,
      "key": "tablespoon",
      "kind": "unit",
      "label": "tablespoon"
    }
  ],
  "name": "Sour cream, light",
  "nutritionPerBasis": {
    "calcium_mg": 141.0,
    "carbs_g": 7.1,
    "energy_kcal": 569.0,
    "fat_g": 10.6,
    "fibre_g": 0.0,
    "folate_ug": 11.0,
    "iron_mg": 0.07,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 71.0,
    "potassium_mg": 212.0,
    "protein_g": 3.5,
    "salt_g": 0.2075,
    "sat_fat_g": 6.6,
    "sodium_mg": 83.0,
    "sugar_g": 0.22,
    "vitamin_a_ug": 90.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 0.3,
    "vitamin_k_ug": 0.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173443",
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
