/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "g",
  "description": "Frozen and chilled. Average of brown and white crab meat. Analytical data, 2010-2011",
  "id": "cofid-current-16-441",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Crab, purchased cooked",
  "nutritionPerBasis": {
    "calcium_mg": 226.0,
    "carbs_g": 0.0,
    "energy_kcal": 115.0,
    "fat_g": 4.1,
    "fibre_g": 0.0,
    "folate_ug": 13.0,
    "iron_mg": 1.5,
    "magnesium_mg": 42.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 318.0,
    "potassium_mg": 204.0,
    "protein_g": 19.7,
    "salt_g": 0.8425,
    "sat_fat_g": 0.65,
    "sodium_mg": 337.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 4.73,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-441",
  "state": "Cooked",
  "subcategory": "JK",
  "tags": [
    "cooked",
    "fish-and-seafood",
    "jk"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
