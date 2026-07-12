/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "11 samples, 9 products, including Alpen and own brand",
  "id": "cofid-current-11-780",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Muesli, Swiss style, unfortified",
  "nutritionPerBasis": {
    "calcium_mg": 93.0,
    "carbs_g": 72.6,
    "energy_kcal": 366.0,
    "fat_g": 6.3,
    "fibre_g": 8.8,
    "folate_ug": 45.0,
    "iron_mg": 2.67,
    "magnesium_mg": 92.0,
    "omega3_g": 0.11,
    "phosphorus_mg": 318.0,
    "potassium_mg": 531.0,
    "protein_g": 9.2,
    "salt_g": 0.345,
    "sat_fat_g": 1.27,
    "sodium_mg": 138.0,
    "sugar_g": 21.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.52,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-780",
  "state": "Unspecified",
  "subcategory": "AI",
  "tags": [
    "ai",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
