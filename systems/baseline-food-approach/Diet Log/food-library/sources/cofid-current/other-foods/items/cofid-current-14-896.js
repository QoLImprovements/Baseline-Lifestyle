/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Literature sources, Prunus dulcis",
  "id": "cofid-current-14-896",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Almonds, whole kernels",
  "nutritionPerBasis": {
    "calcium_mg": 269.0,
    "carbs_g": 5.3,
    "energy_kcal": 554.0,
    "fat_g": 49.9,
    "fibre_g": 12.5,
    "folate_ug": 44.0,
    "iron_mg": 3.71,
    "magnesium_mg": 270.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 481.0,
    "potassium_mg": 733.0,
    "protein_g": 21.2,
    "salt_g": 0.0025,
    "sat_fat_g": 3.8,
    "sodium_mg": 1.0,
    "sugar_g": 4.5,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 25.63,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-896",
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
