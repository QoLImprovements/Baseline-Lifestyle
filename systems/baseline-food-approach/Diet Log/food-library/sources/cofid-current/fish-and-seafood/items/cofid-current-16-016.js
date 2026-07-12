/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "g",
  "description": "Calculated from poached 16-015",
  "id": "cofid-current-16-016",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cod, flesh only, poached in milk, butter and salt added, weighed with bones and skin",
  "nutritionPerBasis": {
    "calcium_mg": 1.0,
    "carbs_g": 0.0,
    "energy_kcal": 81.0,
    "fat_g": 1.0,
    "fibre_g": 0.0,
    "folate_ug": 12.0,
    "iron_mg": 0.1,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 160.0,
    "potassium_mg": 290.0,
    "protein_g": 18.2,
    "salt_g": 0.24,
    "sat_fat_g": 0.3,
    "sodium_mg": 96.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.53,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-016",
  "state": "Poached",
  "subcategory": "JA",
  "tags": [
    "fish-and-seafood",
    "ja",
    "poached"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
