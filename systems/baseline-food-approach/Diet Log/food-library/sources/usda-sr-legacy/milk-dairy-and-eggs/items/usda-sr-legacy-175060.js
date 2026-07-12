/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "cup-cheez-its",
  "description": "Baked Products",
  "id": "usda-sr-legacy-175060",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 62.0,
      "key": "cup-cheez-its",
      "kind": "unit",
      "label": "cup Cheez-its"
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
      "gramsPerUnit": 72.0,
      "key": "cup-crushed",
      "kind": "unit",
      "label": "cup, crushed"
    },
    {
      "gramsPerUnit": 1.0,
      "key": "cracker-1-square",
      "kind": "unit",
      "label": "cracker (1\" square)"
    }
  ],
  "name": "Crackers, cheese, low sodium",
  "nutritionPerBasis": {
    "calcium_mg": 151.0,
    "carbs_g": 58.2,
    "energy_kcal": 503.0,
    "fat_g": 25.3,
    "fibre_g": 2.4,
    "folate_ug": 89.0,
    "iron_mg": 4.77,
    "magnesium_mg": 36.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 218.0,
    "potassium_mg": 106.0,
    "protein_g": 10.1,
    "salt_g": 1.145,
    "sat_fat_g": 9.64,
    "sodium_mg": 458.0,
    "sugar_g": 0.28,
    "vitamin_a_ug": 17.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.3,
    "vitamin_k_ug": 11.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175060",
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
