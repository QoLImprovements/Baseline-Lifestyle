/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Calculated from 16-397 using edible conversion factor of 0.89",
  "id": "cofid-current-16-476",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Kippers, flesh only, grilled, fillets weighed with bones and skin",
  "nutritionPerBasis": {
    "calcium_mg": 34.0,
    "carbs_g": 0.0,
    "energy_kcal": 219.0,
    "fat_g": 15.7,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 1.34,
    "magnesium_mg": 42.0,
    "omega3_g": 2.98,
    "phosphorus_mg": 240.0,
    "potassium_mg": 342.0,
    "protein_g": 19.3,
    "salt_g": 2.1075,
    "sat_fat_g": 3.33,
    "sodium_mg": 843.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 23.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.42,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-476",
  "state": "Grilled",
  "subcategory": "JC",
  "tags": [
    "grilled",
    "jc",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
