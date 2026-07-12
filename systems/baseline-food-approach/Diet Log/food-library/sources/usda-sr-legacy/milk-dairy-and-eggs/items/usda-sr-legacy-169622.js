/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "17-pieces",
  "description": "Sweets",
  "id": "usda-sr-legacy-169622",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 39.0,
      "key": "17-pieces",
      "kind": "unit",
      "label": "17 pieces"
    }
  ],
  "name": "Candies, HERSHEY'S MILK CHOCOLATE WITH ALMOND BITES",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 51.7,
    "energy_kcal": 568.0,
    "fat_g": 35.7,
    "fibre_g": 3.6,
    "folate_ug": 16.0,
    "iron_mg": 1.5,
    "magnesium_mg": 59.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 227.0,
    "potassium_mg": 471.0,
    "protein_g": 9.76,
    "salt_g": 0.185,
    "sat_fat_g": 17.4,
    "sodium_mg": 74.0,
    "sugar_g": 44.6,
    "vitamin_a_ug": 177.0,
    "vitamin_c_mg": 1.8,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169622",
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
