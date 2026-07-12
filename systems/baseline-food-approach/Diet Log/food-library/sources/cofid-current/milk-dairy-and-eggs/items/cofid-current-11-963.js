/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "Recipe from University of North London survey of commercial sandwiches",
  "id": "cofid-current-11-963",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Sandwich, white bread, cheddar cheese and pickle",
  "nutritionPerBasis": {
    "calcium_mg": 321.0,
    "carbs_g": 27.7,
    "energy_kcal": 282.0,
    "fat_g": 14.4,
    "fibre_g": 1.5,
    "folate_ug": 23.0,
    "iron_mg": 1.01,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 206.0,
    "potassium_mg": 107.0,
    "protein_g": 12.0,
    "salt_g": 1.4775,
    "sat_fat_g": 7.42,
    "sodium_mg": 591.0,
    "sugar_g": 4.6,
    "vitamin_a_ug": 157.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.46,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-963",
  "state": "Unspecified",
  "subcategory": "AB",
  "tags": [
    "ab",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
