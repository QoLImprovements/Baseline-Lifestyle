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
  "id": "cofid-current-13-834",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Mace, ground",
  "nutritionPerBasis": {
    "calcium_mg": 250.0,
    "carbs_g": 0.0,
    "energy_kcal": 0.0,
    "fat_g": 32.4,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 13.9,
    "magnesium_mg": 160.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 110.0,
    "potassium_mg": 460.0,
    "protein_g": 6.7,
    "salt_g": 0.2,
    "sat_fat_g": 9.5,
    "sodium_mg": 80.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 80.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-834",
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
