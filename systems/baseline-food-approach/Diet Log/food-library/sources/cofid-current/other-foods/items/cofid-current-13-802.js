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
  "id": "cofid-current-13-802",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Anise seeds",
  "nutritionPerBasis": {
    "calcium_mg": 650.0,
    "carbs_g": 0.0,
    "energy_kcal": 0.0,
    "fat_g": 15.9,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 37.0,
    "magnesium_mg": 170.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 440.0,
    "potassium_mg": 1440.0,
    "protein_g": 17.6,
    "salt_g": 0.04,
    "sat_fat_g": 2.3,
    "sodium_mg": 16.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-802",
  "state": "Unspecified",
  "subcategory": "H",
  "tags": [
    "h",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
