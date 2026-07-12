/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "8 samples, 6 brands, plain",
  "id": "cofid-current-12-336",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Creme fraiche, half fat",
  "nutritionPerBasis": {
    "calcium_mg": 95.0,
    "carbs_g": 4.4,
    "energy_kcal": 162.0,
    "fat_g": 15.0,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 0.1,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 81.0,
    "potassium_mg": 122.0,
    "protein_g": 2.7,
    "salt_g": 0.09,
    "sat_fat_g": 10.16,
    "sodium_mg": 36.0,
    "sugar_g": 3.0,
    "vitamin_a_ug": 304.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.42,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "12-336",
  "state": "Unspecified",
  "subcategory": "BJC",
  "tags": [
    "bjc",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
