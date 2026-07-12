/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "oz",
  "description": "Dairy and Egg Products",
  "id": "usda-sr-legacy-172198",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "cup-shredded",
      "kind": "unit",
      "label": "cup, shredded"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "3-oz",
      "kind": "unit",
      "label": "3 oz"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    },
    {
      "gramsPerUnit": 18.0,
      "key": "cubic-inch",
      "kind": "unit",
      "label": "cubic inch"
    }
  ],
  "name": "Cheese substitute, mozzarella",
  "nutritionPerBasis": {
    "calcium_mg": 610.0,
    "carbs_g": 23.7,
    "energy_kcal": 1040.0,
    "fat_g": 12.2,
    "fibre_g": 0.0,
    "folate_ug": 11.0,
    "iron_mg": 0.4,
    "magnesium_mg": 41.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 583.0,
    "potassium_mg": 455.0,
    "protein_g": 11.5,
    "salt_g": 1.7125,
    "sat_fat_g": 3.71,
    "sodium_mg": 685.0,
    "sugar_g": 23.7,
    "vitamin_a_ug": 437.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.11,
    "vitamin_k_ug": 1.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172198",
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
