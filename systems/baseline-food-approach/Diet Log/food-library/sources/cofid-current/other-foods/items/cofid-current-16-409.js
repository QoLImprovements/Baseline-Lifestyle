/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "11 samples, 11 products, frozen and chilled",
  "id": "cofid-current-16-409",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Scampi, coated in breadcrumbs, baked",
  "nutritionPerBasis": {
    "calcium_mg": 105.0,
    "carbs_g": 24.3,
    "energy_kcal": 232.0,
    "fat_g": 10.5,
    "fibre_g": 1.5,
    "folate_ug": 14.0,
    "iron_mg": 1.91,
    "magnesium_mg": 34.0,
    "omega3_g": 0.74,
    "phosphorus_mg": 260.0,
    "potassium_mg": 234.0,
    "protein_g": 11.6,
    "salt_g": 1.4025,
    "sat_fat_g": 0.85,
    "sodium_mg": 561.0,
    "sugar_g": 0.8,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 3.18,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-409",
  "state": "Baked",
  "subcategory": "JR",
  "tags": [
    "baked",
    "jr",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
