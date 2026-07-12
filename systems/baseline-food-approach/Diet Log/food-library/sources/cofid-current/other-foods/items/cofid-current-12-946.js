/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "Recipe",
  "id": "cofid-current-12-946",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Omelette, plain, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 41.0,
    "carbs_g": 0.0,
    "energy_kcal": 191.0,
    "fat_g": 16.4,
    "fibre_g": 0.0,
    "folate_ug": 28.0,
    "iron_mg": 1.53,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 158.0,
    "potassium_mg": 128.0,
    "protein_g": 10.9,
    "salt_g": 0.34,
    "sat_fat_g": 3.22,
    "sodium_mg": 136.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 109.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 5.38,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-946",
  "state": "Unspecified",
  "subcategory": "CD",
  "tags": [
    "cd",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
