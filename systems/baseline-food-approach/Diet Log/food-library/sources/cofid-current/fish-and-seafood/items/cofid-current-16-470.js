/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "g",
  "description": "Calculated from brown and white crab meat using 0.44 edible conversion factor",
  "id": "cofid-current-16-470",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Crab, white and brown meat, purchased cooked, weighed with shell",
  "nutritionPerBasis": {
    "calcium_mg": 99.0,
    "carbs_g": 0.0,
    "energy_kcal": 51.0,
    "fat_g": 1.8,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 0.66,
    "magnesium_mg": 18.0,
    "omega3_g": 0.3,
    "phosphorus_mg": 140.0,
    "potassium_mg": 90.0,
    "protein_g": 8.6,
    "salt_g": 0.37,
    "sat_fat_g": 0.29,
    "sodium_mg": 148.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.08,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-470",
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
