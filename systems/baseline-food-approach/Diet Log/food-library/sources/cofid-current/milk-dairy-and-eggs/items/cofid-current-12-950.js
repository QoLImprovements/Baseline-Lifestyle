/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "Recipe",
  "id": "cofid-current-12-950",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Egg fu yung",
  "nutritionPerBasis": {
    "calcium_mg": 58.0,
    "carbs_g": 2.5,
    "energy_kcal": 229.0,
    "fat_g": 19.3,
    "fibre_g": 0.0,
    "folate_ug": 33.0,
    "iron_mg": 1.87,
    "magnesium_mg": 40.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 179.0,
    "potassium_mg": 237.0,
    "protein_g": 10.2,
    "salt_g": 0.6275,
    "sat_fat_g": 2.47,
    "sodium_mg": 251.0,
    "sugar_g": 1.9,
    "vitamin_a_ug": 81.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 4.96,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-950",
  "state": "Unspecified",
  "subcategory": "CDE",
  "tags": [
    "cde",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
