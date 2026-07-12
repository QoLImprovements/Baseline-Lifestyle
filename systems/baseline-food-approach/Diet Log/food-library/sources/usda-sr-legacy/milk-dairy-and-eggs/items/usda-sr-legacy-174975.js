/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "cup-bite-size",
  "description": "Baked Products",
  "id": "usda-sr-legacy-174975",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 62.0,
      "key": "cup-bite-size",
      "kind": "unit",
      "label": "cup, bite size"
    },
    {
      "gramsPerUnit": 1.0,
      "key": "cracker-1-square",
      "kind": "unit",
      "label": "cracker (1\" square)"
    },
    {
      "gramsPerUnit": 2.0,
      "key": "snack-stick",
      "kind": "unit",
      "label": "snack stick"
    },
    {
      "gramsPerUnit": 72.0,
      "key": "cup-crushed",
      "kind": "unit",
      "label": "cup, crushed"
    },
    {
      "gramsPerUnit": 14.2,
      "key": "0-5-oz",
      "kind": "unit",
      "label": "0.5 oz"
    },
    {
      "gramsPerUnit": 0.6,
      "key": "gold-fish",
      "kind": "unit",
      "label": "gold fish"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "bag-single-serving",
      "kind": "unit",
      "label": "bag, single serving"
    }
  ],
  "name": "Crackers, cheese, regular",
  "nutritionPerBasis": {
    "calcium_mg": 136.0,
    "carbs_g": 59.4,
    "energy_kcal": 2040.0,
    "fat_g": 22.7,
    "fibre_g": 2.3,
    "folate_ug": 152.0,
    "iron_mg": 4.88,
    "magnesium_mg": 25.0,
    "omega3_g": 0.717,
    "phosphorus_mg": 200.0,
    "potassium_mg": 156.0,
    "protein_g": 10.9,
    "salt_g": 2.4325,
    "sat_fat_g": 5.29,
    "sodium_mg": 973.0,
    "sugar_g": 4.53,
    "vitamin_a_ug": 17.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.19,
    "vitamin_k_ug": 9.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174975",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
