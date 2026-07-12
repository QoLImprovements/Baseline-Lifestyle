/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Fish 100g, milk 20g and butter 3g. Calculated from raw, cutlets and steaks",
  "id": "cofid-current-16-076",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Halibut, flesh only, poached",
  "nutritionPerBasis": {
    "calcium_mg": 58.0,
    "carbs_g": 1.1,
    "energy_kcal": 154.0,
    "fat_g": 5.7,
    "fibre_g": 0.0,
    "folate_ug": 11.0,
    "iron_mg": 0.6,
    "magnesium_mg": 30.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 250.0,
    "potassium_mg": 490.0,
    "protein_g": 24.7,
    "salt_g": 0.25,
    "sat_fat_g": 2.7,
    "sodium_mg": 100.0,
    "sugar_g": 1.1,
    "vitamin_a_ug": 45.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.04,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-076",
  "state": "Poached",
  "subcategory": "JA",
  "tags": [
    "ja",
    "other-foods",
    "poached"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
