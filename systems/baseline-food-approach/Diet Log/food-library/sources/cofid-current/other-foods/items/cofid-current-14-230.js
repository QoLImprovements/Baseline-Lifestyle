/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Literature sources",
  "id": "cofid-current-14-230",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Prickly pears, flesh and seeds",
  "nutritionPerBasis": {
    "calcium_mg": 53.0,
    "carbs_g": 11.5,
    "energy_kcal": 49.0,
    "fat_g": 0.3,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.4,
    "magnesium_mg": 57.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 27.0,
    "potassium_mg": 210.0,
    "protein_g": 0.7,
    "salt_g": 0.01,
    "sat_fat_g": 0.1,
    "sodium_mg": 4.0,
    "sugar_g": 11.5,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 22.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-230",
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
