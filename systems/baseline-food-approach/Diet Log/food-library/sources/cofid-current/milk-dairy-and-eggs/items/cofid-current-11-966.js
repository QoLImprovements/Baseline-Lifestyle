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
  "id": "cofid-current-11-966",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Sandwich, white bread, egg mayonnaise",
  "nutritionPerBasis": {
    "calcium_mg": 124.0,
    "carbs_g": 28.5,
    "energy_kcal": 243.0,
    "fat_g": 11.2,
    "fibre_g": 1.5,
    "folate_ug": 24.0,
    "iron_mg": 1.54,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 115.0,
    "potassium_mg": 124.0,
    "protein_g": 8.8,
    "salt_g": 0.8075,
    "sat_fat_g": 1.89,
    "sodium_mg": 323.0,
    "sugar_g": 2.2,
    "vitamin_a_ug": 69.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 3.1,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-966",
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
