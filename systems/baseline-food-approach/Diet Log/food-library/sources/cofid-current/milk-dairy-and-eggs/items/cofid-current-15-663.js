/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "Tomato, mushroom and onion stuffing. Recipe from review of recipe collection. Whole dish consumed",
  "id": "cofid-current-15-663",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Aubergine, stuffed with vegetables, cheese topping",
  "nutritionPerBasis": {
    "calcium_mg": 125.0,
    "carbs_g": 3.6,
    "energy_kcal": 119.0,
    "fat_g": 9.7,
    "fibre_g": 0.0,
    "folate_ug": 34.0,
    "iron_mg": 0.6,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 119.0,
    "potassium_mg": 396.0,
    "protein_g": 5.0,
    "salt_g": 0.2725,
    "sat_fat_g": 3.48,
    "sodium_mg": 109.0,
    "sugar_g": 3.2,
    "vitamin_a_ug": 98.0,
    "vitamin_c_mg": 7.0,
    "vitamin_e_mg": 1.24,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-663",
  "state": "Unspecified",
  "subcategory": "DR",
  "tags": [
    "dr",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
