/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "tablespoon",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-173442",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 12.0,
      "key": "tablespoon",
      "kind": "unit",
      "label": "tablespoon"
    },
    {
      "gramsPerUnit": 230.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Sour cream, reduced fat",
  "nutritionPerBasis": {
    "calcium_mg": 141.0,
    "carbs_g": 7.0,
    "energy_kcal": 757.0,
    "fat_g": 14.1,
    "fibre_g": 0.0,
    "folate_ug": 11.0,
    "iron_mg": 0.06,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 85.0,
    "potassium_mg": 211.0,
    "protein_g": 7.0,
    "salt_g": 0.175,
    "sat_fat_g": 8.7,
    "sodium_mg": 70.0,
    "sugar_g": 0.3,
    "vitamin_a_ug": 119.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 0.4,
    "vitamin_k_ug": 0.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173442",
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
