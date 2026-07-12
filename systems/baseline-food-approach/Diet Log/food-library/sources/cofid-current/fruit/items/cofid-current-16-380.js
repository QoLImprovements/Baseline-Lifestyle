/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "g",
  "description": "7 samples, 6 products, frozen and chilled",
  "id": "cofid-current-16-380",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Lemon sole, flesh only, grilled",
  "nutritionPerBasis": {
    "calcium_mg": 28.0,
    "carbs_g": 0.0,
    "energy_kcal": 91.0,
    "fat_g": 0.6,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 0.5,
    "magnesium_mg": 26.0,
    "omega3_g": 0.13,
    "phosphorus_mg": 163.0,
    "potassium_mg": 260.0,
    "protein_g": 21.5,
    "salt_g": 0.3775,
    "sat_fat_g": 0.16,
    "sodium_mg": 151.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.85,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-380",
  "state": "Grilled",
  "subcategory": "JA",
  "tags": [
    "fruit",
    "grilled",
    "ja"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
