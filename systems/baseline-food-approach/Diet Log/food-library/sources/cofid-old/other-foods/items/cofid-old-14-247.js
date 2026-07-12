/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "10 samples, 5 brands",
  "id": "cofid-old-14-247",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Raspberries, frozen",
  "nutritionPerBasis": {
    "calcium_mg": 28.0,
    "carbs_g": 4.9,
    "energy_kcal": 26.0,
    "fat_g": 0.3,
    "fibre_g": 0.0,
    "folate_ug": 33.0,
    "iron_mg": 0.8,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 37.0,
    "potassium_mg": 160.0,
    "protein_g": 1.2,
    "salt_g": 0.03,
    "sat_fat_g": 0.1,
    "sodium_mg": 12.0,
    "sugar_g": 4.9,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 22.0,
    "vitamin_e_mg": 0.48,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID old foods",
  "sourceId": "14-247",
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
