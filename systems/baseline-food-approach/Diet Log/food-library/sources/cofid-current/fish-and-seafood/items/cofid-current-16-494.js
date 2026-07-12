/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "g",
  "description": "Calculated from steamed 16-493",
  "id": "cofid-current-16-494",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Haddock, flesh only, smoked, steamed, weighed with bones and skin",
  "nutritionPerBasis": {
    "calcium_mg": 25.0,
    "carbs_g": 0.0,
    "energy_kcal": 84.0,
    "fat_g": 0.5,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 0.18,
    "magnesium_mg": 27.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 173.0,
    "potassium_mg": 279.0,
    "protein_g": 20.0,
    "salt_g": 1.2225,
    "sat_fat_g": 0.08,
    "sodium_mg": 489.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.71,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-494",
  "state": "Steamed",
  "subcategory": "JA",
  "tags": [
    "fish-and-seafood",
    "ja",
    "steamed"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
