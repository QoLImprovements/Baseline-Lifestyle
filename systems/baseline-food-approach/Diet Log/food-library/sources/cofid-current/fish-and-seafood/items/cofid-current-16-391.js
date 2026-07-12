/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "g",
  "description": "7 samples, 6 products",
  "id": "cofid-current-16-391",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Crab, brown meat, purchased cooked",
  "nutritionPerBasis": {
    "calcium_mg": 366.0,
    "carbs_g": 0.0,
    "energy_kcal": 145.0,
    "fat_g": 7.8,
    "fibre_g": 0.0,
    "folate_ug": 19.0,
    "iron_mg": 2.46,
    "magnesium_mg": 49.0,
    "omega3_g": 1.3,
    "phosphorus_mg": 488.0,
    "potassium_mg": 167.0,
    "protein_g": 18.8,
    "salt_g": 0.8775,
    "sat_fat_g": 1.26,
    "sodium_mg": 351.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 7.33,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-391",
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
