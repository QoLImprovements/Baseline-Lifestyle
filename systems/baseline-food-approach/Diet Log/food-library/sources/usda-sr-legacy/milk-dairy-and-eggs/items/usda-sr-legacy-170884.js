/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "container-11-oz",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-170884",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 313.0,
      "key": "container-11-oz",
      "kind": "unit",
      "label": "container (11 oz)"
    },
    {
      "gramsPerUnit": 28.4,
      "key": "fl-oz",
      "kind": "unit",
      "label": "fl oz"
    }
  ],
  "name": "Milk shakes, thick vanilla",
  "nutritionPerBasis": {
    "calcium_mg": 146.0,
    "carbs_g": 17.8,
    "energy_kcal": 468.0,
    "fat_g": 3.03,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 0.1,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 115.0,
    "potassium_mg": 183.0,
    "protein_g": 3.86,
    "salt_g": 0.2375,
    "sat_fat_g": 1.89,
    "sodium_mg": 95.0,
    "sugar_g": 17.8,
    "vitamin_a_ug": 25.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.05,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170884",
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
