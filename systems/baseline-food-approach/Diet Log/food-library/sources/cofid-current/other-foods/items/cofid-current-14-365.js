/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "22 samples, autumn and winter, UK grown and imported, pre-packed and loose, including Conference, Comice, Concorde, Rocha and Green Williams",
  "id": "cofid-current-14-365",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pears, average, raw, flesh only",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 11.3,
    "energy_kcal": 44.0,
    "fat_g": 0.1,
    "fibre_g": 2.7,
    "folate_ug": 6.0,
    "iron_mg": 0.14,
    "magnesium_mg": 5.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 9.0,
    "potassium_mg": 105.0,
    "protein_g": 0.3,
    "salt_g": 0.0025,
    "sat_fat_g": 0.01,
    "sodium_mg": 1.0,
    "sugar_g": 11.3,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 3.6
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-365",
  "state": "Raw",
  "subcategory": "F",
  "tags": [
    "f",
    "other-foods",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
