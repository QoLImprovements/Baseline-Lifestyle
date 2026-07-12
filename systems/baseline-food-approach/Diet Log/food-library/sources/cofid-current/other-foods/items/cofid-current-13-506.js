/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "As raw, stewed for 5-10 minutes",
  "id": "cofid-current-13-506",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Mushrooms, white, stewed in unsalted water",
  "nutritionPerBasis": {
    "calcium_mg": 3.0,
    "carbs_g": 0.1,
    "energy_kcal": 9.0,
    "fat_g": 0.3,
    "fibre_g": 2.6,
    "folate_ug": 15.0,
    "iron_mg": 0.32,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 75.0,
    "potassium_mg": 216.0,
    "protein_g": 1.4,
    "salt_g": 0.0075,
    "sat_fat_g": 0.08,
    "sodium_mg": 3.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.01,
    "vitamin_k_ug": 0.27
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-506",
  "state": "Unspecified",
  "subcategory": "DG",
  "tags": [
    "dg",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
