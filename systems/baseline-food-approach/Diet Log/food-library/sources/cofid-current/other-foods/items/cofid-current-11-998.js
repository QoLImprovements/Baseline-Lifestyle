/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "10 samples from different outlets",
  "id": "cofid-current-11-998",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Papadums, takeaway",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 28.3,
    "energy_kcal": 501.0,
    "fat_g": 38.8,
    "fibre_g": 6.3,
    "folate_ug": 23.0,
    "iron_mg": 4.44,
    "magnesium_mg": 121.0,
    "omega3_g": 2.33,
    "phosphorus_mg": 196.0,
    "potassium_mg": 609.0,
    "protein_g": 11.5,
    "salt_g": 0.0,
    "sat_fat_g": 7.95,
    "sodium_mg": 0.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 3.7,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-998",
  "state": "Unspecified",
  "subcategory": "AF",
  "tags": [
    "af",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
