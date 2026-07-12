/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "g",
  "description": "Calculated based on 23.2% weight loss (as haddock, steamed in 2013 fish survey)",
  "id": "cofid-current-16-478",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Lemon sole, flesh only, steamed",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 0.0,
    "energy_kcal": 95.0,
    "fat_g": 0.9,
    "fibre_g": 0.0,
    "folate_ug": 17.0,
    "iron_mg": 0.16,
    "magnesium_mg": 34.0,
    "omega3_g": 0.18,
    "phosphorus_mg": 161.0,
    "potassium_mg": 230.0,
    "protein_g": 21.7,
    "salt_g": 0.375,
    "sat_fat_g": 0.21,
    "sodium_mg": 150.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.95,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-478",
  "state": "Steamed",
  "subcategory": "JA",
  "tags": [
    "fruit",
    "ja",
    "steamed"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
