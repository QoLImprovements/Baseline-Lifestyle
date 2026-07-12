/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "10 samples, 9 products, including soft, ready-to-eat and partially rehydrated",
  "id": "cofid-current-14-391",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Prunes, ready-to-eat, semi-dried",
  "nutritionPerBasis": {
    "calcium_mg": 64.0,
    "carbs_g": 36.5,
    "energy_kcal": 149.0,
    "fat_g": 0.3,
    "fibre_g": 5.2,
    "folate_ug": 1.0,
    "iron_mg": 1.44,
    "magnesium_mg": 36.0,
    "omega3_g": 0.02,
    "phosphorus_mg": 69.0,
    "potassium_mg": 734.0,
    "protein_g": 2.3,
    "salt_g": 0.0075,
    "sat_fat_g": 0.06,
    "sodium_mg": 3.0,
    "sugar_g": 36.5,
    "vitamin_a_ug": 39.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.09,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "14-391",
  "state": "Dried",
  "subcategory": "FA",
  "tags": [
    "dried",
    "fa",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
