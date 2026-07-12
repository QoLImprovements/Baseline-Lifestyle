/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "10 samples",
  "id": "cofid-old-19-049",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Steaklets, frozen, raw",
  "nutritionPerBasis": {
    "calcium_mg": 26.0,
    "carbs_g": 3.4,
    "energy_kcal": 293.0,
    "fat_g": 24.3,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 1.7,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 170.0,
    "potassium_mg": 190.0,
    "protein_g": 15.3,
    "salt_g": 1.0,
    "sat_fat_g": 10.1,
    "sodium_mg": 400.0,
    "sugar_g": 0.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "19-049",
  "state": "Frozen",
  "subcategory": "MI",
  "tags": [
    "frozen",
    "mi",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
