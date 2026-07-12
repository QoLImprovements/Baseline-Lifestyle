/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "g",
  "description": "12 samples, shallow fried in dripping for 7 minutes per side, fillets; flesh only",
  "id": "cofid-current-16-058",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Haddock, fillets, flesh only, in flour, fried in dripping",
  "nutritionPerBasis": {
    "calcium_mg": 49.0,
    "carbs_g": 4.5,
    "energy_kcal": 138.0,
    "fat_g": 4.1,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.2,
    "magnesium_mg": 27.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 220.0,
    "potassium_mg": 380.0,
    "protein_g": 21.1,
    "salt_g": 0.1775,
    "sat_fat_g": 2.3,
    "sodium_mg": 71.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.4,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-058",
  "state": "Fried",
  "subcategory": "JA",
  "tags": [
    "fish-and-seafood",
    "fried",
    "ja"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
