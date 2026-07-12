/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "10 samples, 6 products",
  "id": "cofid-current-11-838",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Eccles cakes, retail",
  "nutritionPerBasis": {
    "calcium_mg": 75.0,
    "carbs_g": 48.8,
    "energy_kcal": 365.0,
    "fat_g": 18.3,
    "fibre_g": 3.6,
    "folate_ug": 3.0,
    "iron_mg": 1.52,
    "magnesium_mg": 22.0,
    "omega3_g": 0.28,
    "phosphorus_mg": 77.0,
    "potassium_mg": 428.0,
    "protein_g": 4.4,
    "salt_g": 0.5525,
    "sat_fat_g": 9.4,
    "sodium_mg": 221.0,
    "sugar_g": 34.0,
    "vitamin_a_ug": 64.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.9,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-838",
  "state": "Unspecified",
  "subcategory": "AN",
  "tags": [
    "an",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
