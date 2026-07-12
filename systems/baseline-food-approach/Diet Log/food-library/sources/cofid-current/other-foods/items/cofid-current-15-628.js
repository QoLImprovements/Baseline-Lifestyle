/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "6 samples, fenugreek and potatoes",
  "id": "cofid-current-15-628",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Methi aloo, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 70.0,
    "carbs_g": 10.1,
    "energy_kcal": 142.0,
    "fat_g": 10.4,
    "fibre_g": 2.9,
    "folate_ug": 24.0,
    "iron_mg": 1.69,
    "magnesium_mg": 26.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 53.0,
    "potassium_mg": 342.0,
    "protein_g": 2.7,
    "salt_g": 1.3425,
    "sat_fat_g": 1.06,
    "sodium_mg": 537.0,
    "sugar_g": 1.5,
    "vitamin_a_ug": 139.0,
    "vitamin_c_mg": 4.0,
    "vitamin_e_mg": 4.21,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-628",
  "state": "Unspecified",
  "subcategory": "DR",
  "tags": [
    "dr",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
