/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "6 samples, 3 brands",
  "id": "cofid-old-14-261",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Strawberries, frozen",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 7.8,
    "energy_kcal": 33.0,
    "fat_g": 0.1,
    "fibre_g": 0.0,
    "folate_ug": 20.0,
    "iron_mg": 1.0,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 25.0,
    "potassium_mg": 170.0,
    "protein_g": 0.7,
    "salt_g": 0.0025,
    "sat_fat_g": 0.0,
    "sodium_mg": 1.0,
    "sugar_g": 7.8,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 48.0,
    "vitamin_e_mg": 0.2,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "14-261",
  "state": "Frozen",
  "subcategory": "FA",
  "tags": [
    "fa",
    "frozen",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
