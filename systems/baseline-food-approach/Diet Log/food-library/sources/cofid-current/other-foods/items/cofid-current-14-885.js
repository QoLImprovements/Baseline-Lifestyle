/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Calculated from 14-874",
  "id": "cofid-current-14-885",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Hazelnuts, kernel only, weighed with shells",
  "nutritionPerBasis": {
    "calcium_mg": 53.0,
    "carbs_g": 2.3,
    "energy_kcal": 247.0,
    "fat_g": 24.1,
    "fibre_g": 2.6,
    "folate_ug": 27.0,
    "iron_mg": 1.2,
    "magnesium_mg": 61.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 110.0,
    "potassium_mg": 280.0,
    "protein_g": 5.4,
    "salt_g": 0.005,
    "sat_fat_g": 1.73,
    "sodium_mg": 2.0,
    "sugar_g": 1.5,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 9.49,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-885",
  "state": "Unspecified",
  "subcategory": "GA",
  "tags": [
    "ga",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
