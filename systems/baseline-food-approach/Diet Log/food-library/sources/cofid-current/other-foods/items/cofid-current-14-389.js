/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "11 samples, UK and imported, including outdoor and forced. Ends trimmed, cut into chunks and stewed in 1-4 tbsp water for 7-11 minutes",
  "id": "cofid-current-14-389",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Rhubarb, stems only, stewed without sugar",
  "nutritionPerBasis": {
    "calcium_mg": 76.0,
    "carbs_g": 1.2,
    "energy_kcal": 14.0,
    "fat_g": 0.6,
    "fibre_g": 1.3,
    "folate_ug": 4.0,
    "iron_mg": 0.2,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 26.0,
    "potassium_mg": 261.0,
    "protein_g": 1.0,
    "salt_g": 0.0025,
    "sat_fat_g": 0.06,
    "sodium_mg": 1.0,
    "sugar_g": 1.2,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 5.0,
    "vitamin_e_mg": 0.18,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-389",
  "state": "Unspecified",
  "subcategory": "FA",
  "tags": [
    "fa",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
