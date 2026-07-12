/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "10 samples, 7 products, including carrot, lemon and apple slices",
  "id": "cofid-current-11-840",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cakes from 'healthy eating' ranges",
  "nutritionPerBasis": {
    "calcium_mg": 103.0,
    "carbs_g": 58.8,
    "energy_kcal": 257.0,
    "fat_g": 2.5,
    "fibre_g": 2.6,
    "folate_ug": 0.0,
    "iron_mg": 0.88,
    "magnesium_mg": 9.0,
    "omega3_g": 0.06,
    "phosphorus_mg": 186.0,
    "potassium_mg": 115.0,
    "protein_g": 3.3,
    "salt_g": 0.175,
    "sat_fat_g": 1.22,
    "sodium_mg": 70.0,
    "sugar_g": 47.4,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.28,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-840",
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
