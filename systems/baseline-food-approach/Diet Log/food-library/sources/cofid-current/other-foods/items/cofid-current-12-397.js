/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "9 samples, 4 brands",
  "id": "cofid-current-12-397",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Creme caramel, retail",
  "nutritionPerBasis": {
    "calcium_mg": 94.0,
    "carbs_g": 20.6,
    "energy_kcal": 104.0,
    "fat_g": 1.6,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 0.0,
    "magnesium_mg": 9.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 77.0,
    "potassium_mg": 150.0,
    "protein_g": 3.0,
    "salt_g": 0.175,
    "sat_fat_g": 0.89,
    "sodium_mg": 70.0,
    "sugar_g": 18.0,
    "vitamin_a_ug": 38.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.03,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-397",
  "state": "Unspecified",
  "subcategory": "BR",
  "tags": [
    "br",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
