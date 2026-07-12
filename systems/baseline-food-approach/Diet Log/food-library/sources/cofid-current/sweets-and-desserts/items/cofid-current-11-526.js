/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "g",
  "description": "11 samples, including Black Forest gateau.",
  "id": "cofid-current-11-526",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Gateau, chocolate based, frozen",
  "nutritionPerBasis": {
    "calcium_mg": 49.0,
    "carbs_g": 37.2,
    "energy_kcal": 295.0,
    "fat_g": 15.7,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 1.5,
    "magnesium_mg": 20.0,
    "omega3_g": 0.16,
    "phosphorus_mg": 153.0,
    "potassium_mg": 189.0,
    "protein_g": 3.5,
    "salt_g": 0.4325,
    "sat_fat_g": 10.3,
    "sodium_mg": 173.0,
    "sugar_g": 17.4,
    "vitamin_a_ug": 115.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.01,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-526",
  "state": "Frozen",
  "subcategory": "AN",
  "tags": [
    "an",
    "frozen",
    "sweets-and-desserts"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
