/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "7 samples, 7 products, assorted baklava",
  "id": "cofid-current-11-842",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pastries, Greek, baklava, retail",
  "nutritionPerBasis": {
    "calcium_mg": 48.0,
    "carbs_g": 54.1,
    "energy_kcal": 456.0,
    "fat_g": 25.1,
    "fibre_g": 2.0,
    "folate_ug": 9.0,
    "iron_mg": 1.63,
    "magnesium_mg": 49.0,
    "omega3_g": 0.2,
    "phosphorus_mg": 119.0,
    "potassium_mg": 180.0,
    "protein_g": 6.7,
    "salt_g": 0.4075,
    "sat_fat_g": 9.65,
    "sodium_mg": 163.0,
    "sugar_g": 29.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 3.03,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-842",
  "state": "Unspecified",
  "subcategory": "AP",
  "tags": [
    "ap",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
