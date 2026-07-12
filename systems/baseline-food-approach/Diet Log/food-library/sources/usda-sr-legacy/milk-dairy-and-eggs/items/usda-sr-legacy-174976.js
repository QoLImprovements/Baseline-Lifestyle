/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "6-cracker",
  "description": "Baked Products",
  "id": "usda-sr-legacy-174976",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 39.0,
      "key": "6-cracker",
      "kind": "unit",
      "label": "6 cracker"
    },
    {
      "gramsPerUnit": 14.2,
      "key": "0-5-oz",
      "kind": "unit",
      "label": "0.5 oz"
    },
    {
      "gramsPerUnit": 83.0,
      "key": "cup-crushed",
      "kind": "unit",
      "label": "cup, crushed"
    },
    {
      "gramsPerUnit": 6.5,
      "key": "sandwich",
      "kind": "unit",
      "label": "sandwich"
    }
  ],
  "name": "Crackers, cheese, sandwich-type with peanut butter filling",
  "nutritionPerBasis": {
    "calcium_mg": 50.0,
    "carbs_g": 56.7,
    "energy_kcal": 2070.0,
    "fat_g": 25.1,
    "fibre_g": 3.4,
    "folate_ug": 94.0,
    "iron_mg": 2.72,
    "magnesium_mg": 56.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 268.0,
    "potassium_mg": 218.0,
    "protein_g": 12.4,
    "salt_g": 2.0725,
    "sat_fat_g": 4.41,
    "sodium_mg": 829.0,
    "sugar_g": 6.98,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.37,
    "vitamin_k_ug": 12.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174976",
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
