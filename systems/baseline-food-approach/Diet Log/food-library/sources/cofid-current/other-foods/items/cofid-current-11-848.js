/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "10 samples, 8 products",
  "id": "cofid-current-11-848",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Mince pies, retail",
  "nutritionPerBasis": {
    "calcium_mg": 66.0,
    "carbs_g": 60.7,
    "energy_kcal": 377.0,
    "fat_g": 14.9,
    "fibre_g": 2.6,
    "folate_ug": 14.0,
    "iron_mg": 1.2,
    "magnesium_mg": 16.0,
    "omega3_g": 0.44,
    "phosphorus_mg": 65.0,
    "potassium_mg": 211.0,
    "protein_g": 3.8,
    "salt_g": 0.2525,
    "sat_fat_g": 5.97,
    "sodium_mg": 101.0,
    "sugar_g": 35.5,
    "vitamin_a_ug": 28.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.06,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-848",
  "state": "Unspecified",
  "subcategory": "AS",
  "tags": [
    "as",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
