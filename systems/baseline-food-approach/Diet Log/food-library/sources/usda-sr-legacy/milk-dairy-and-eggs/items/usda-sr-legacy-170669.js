/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "serving-1-bar",
  "description": "Sweets",
  "id": "usda-sr-legacy-170669",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 56.0,
      "key": "serving-1-bar",
      "kind": "unit",
      "label": "serving 1 bar"
    }
  ],
  "name": "Candies, REESE's Fast Break, milk chocolate, peanut butter, soft nougats, candy bar",
  "nutritionPerBasis": {
    "calcium_mg": 36.0,
    "carbs_g": 63.9,
    "energy_kcal": 2070.0,
    "fat_g": 23.2,
    "fibre_g": 3.6,
    "folate_ug": 28.0,
    "iron_mg": 0.64,
    "magnesium_mg": 60.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 156.0,
    "potassium_mg": 257.0,
    "protein_g": 8.93,
    "salt_g": 0.8025,
    "sat_fat_g": 8.04,
    "sodium_mg": 321.0,
    "sugar_g": 53.6,
    "vitamin_a_ug": 14.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.56,
    "vitamin_k_ug": 1.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170669",
  "state": "Unspecified",
  "subcategory": "Sweets",
  "tags": [
    "milk-dairy-and-eggs",
    "sweets",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
