/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "g",
  "description": "Calculated from 16-358 using edible conversion factor of 0.87",
  "id": "cofid-current-16-483",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Salmon, farmed, flesh only, steamed, fillets weighed with bones and skin",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 0.0,
    "energy_kcal": 227.0,
    "fat_g": 16.1,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 0.34,
    "magnesium_mg": 27.0,
    "omega3_g": 3.42,
    "phosphorus_mg": 234.0,
    "potassium_mg": 370.0,
    "protein_g": 20.5,
    "salt_g": 0.1125,
    "sat_fat_g": 3.04,
    "sodium_mg": 45.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 21.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 4.7,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-483",
  "state": "Steamed",
  "subcategory": "JC",
  "tags": [
    "fish-and-seafood",
    "jc",
    "steamed"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
