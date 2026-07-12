/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "packet",
  "description": "Breakfast Cereals",
  "id": "usda-sr-legacy-174624",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "packet",
      "kind": "unit",
      "label": "packet"
    }
  ],
  "name": "Cereals, QUAKER, Instant Oatmeal, fruit and cream variety, dry",
  "nutritionPerBasis": {
    "calcium_mg": 307.0,
    "carbs_g": 75.4,
    "energy_kcal": 1590.0,
    "fat_g": 6.37,
    "fibre_g": 6.0,
    "folate_ug": 251.0,
    "iron_mg": 11.3,
    "magnesium_mg": 84.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 300.0,
    "potassium_mg": 280.0,
    "protein_g": 8.3,
    "salt_g": 1.2475,
    "sat_fat_g": 1.31,
    "sodium_mg": 499.0,
    "sugar_g": 31.3,
    "vitamin_a_ug": 943.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 0.46,
    "vitamin_k_ug": 2.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174624",
  "state": "Unspecified",
  "subcategory": "Breakfast Cereals",
  "tags": [
    "breakfast-cereals",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
