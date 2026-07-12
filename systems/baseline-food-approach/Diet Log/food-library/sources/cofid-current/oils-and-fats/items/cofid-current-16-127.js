/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "g",
  "description": "10 whole fish, shallow fried for 7 minutes per side",
  "id": "cofid-current-16-127",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Red snapper, flesh only, fried in blended oil, weighed with bones and skin",
  "nutritionPerBasis": {
    "calcium_mg": 53.0,
    "carbs_g": 0.0,
    "energy_kcal": 126.0,
    "fat_g": 3.1,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.4,
    "magnesium_mg": 35.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 270.0,
    "potassium_mg": 460.0,
    "protein_g": 24.5,
    "salt_g": 0.3,
    "sat_fat_g": 0.6,
    "sodium_mg": 120.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.35,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-127",
  "state": "Fried",
  "subcategory": "JA",
  "tags": [
    "fried",
    "ja",
    "oils-and-fats"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
