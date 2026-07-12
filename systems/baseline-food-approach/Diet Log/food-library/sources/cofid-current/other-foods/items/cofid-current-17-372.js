/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Made up according to packet directions",
  "id": "cofid-current-17-372",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Stuffing mix, dried, assorted flavours, made up",
  "nutritionPerBasis": {
    "calcium_mg": 280.0,
    "carbs_g": 19.3,
    "energy_kcal": 97.0,
    "fat_g": 1.5,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 1.5,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 37.0,
    "potassium_mg": 69.0,
    "protein_g": 2.8,
    "salt_g": 1.05,
    "sat_fat_g": 0.8,
    "sodium_mg": 420.0,
    "sugar_g": 1.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "17-372",
  "state": "Dried",
  "subcategory": "AT",
  "tags": [
    "at",
    "dried",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
