/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "6 samples, grilled for 7 minutes, whole fish with guts removed",
  "id": "cofid-current-16-099",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Mullet, Red, flesh only, grilled",
  "nutritionPerBasis": {
    "calcium_mg": 77.0,
    "carbs_g": 0.0,
    "energy_kcal": 121.0,
    "fat_g": 4.4,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 0.4,
    "magnesium_mg": 35.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 260.0,
    "potassium_mg": 400.0,
    "protein_g": 20.4,
    "salt_g": 0.275,
    "sat_fat_g": 0.0,
    "sodium_mg": 110.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.59,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-099",
  "state": "Grilled",
  "subcategory": "JA",
  "tags": [
    "grilled",
    "ja",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
