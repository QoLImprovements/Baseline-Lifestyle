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
  "id": "cofid-current-13-877",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Nutmeg, ground",
  "nutritionPerBasis": {
    "calcium_mg": 180.0,
    "carbs_g": 0.0,
    "energy_kcal": 0.0,
    "fat_g": 36.3,
    "fibre_g": 20.8,
    "folate_ug": 76.0,
    "iron_mg": 3.0,
    "magnesium_mg": 180.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 210.0,
    "potassium_mg": 350.0,
    "protein_g": 5.8,
    "salt_g": 0.04,
    "sat_fat_g": 25.9,
    "sodium_mg": 16.0,
    "sugar_g": 28.5,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-877",
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
