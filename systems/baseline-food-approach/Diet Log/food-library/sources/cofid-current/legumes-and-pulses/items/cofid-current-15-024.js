/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "g",
  "description": "Punjabi dish. Recipe from manufacturer",
  "id": "cofid-current-15-024",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Bhaji, green bean",
  "nutritionPerBasis": {
    "calcium_mg": 46.0,
    "carbs_g": 5.0,
    "energy_kcal": 91.0,
    "fat_g": 7.6,
    "fibre_g": 0.0,
    "folate_ug": 37.0,
    "iron_mg": 1.9,
    "magnesium_mg": 26.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 46.0,
    "potassium_mg": 280.0,
    "protein_g": 2.2,
    "salt_g": 1.15,
    "sat_fat_g": 0.7,
    "sodium_mg": 460.0,
    "sugar_g": 4.1,
    "vitamin_a_ug": 70.0,
    "vitamin_c_mg": 7.0,
    "vitamin_e_mg": 1.96,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-024",
  "state": "Unspecified",
  "subcategory": "DR",
  "tags": [
    "dr",
    "legumes-and-pulses",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
