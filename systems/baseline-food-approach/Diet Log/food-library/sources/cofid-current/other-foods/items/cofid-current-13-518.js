/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "As raw, grilled for 6-9 minutes",
  "id": "cofid-current-13-518",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Tomatoes, standard, grilled, flesh and seeds only",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 3.4,
    "energy_kcal": 17.0,
    "fat_g": 0.2,
    "fibre_g": 0.0,
    "folate_ug": 14.0,
    "iron_mg": 0.26,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 21.0,
    "potassium_mg": 209.0,
    "protein_g": 0.6,
    "salt_g": 0.005,
    "sat_fat_g": 0.04,
    "sodium_mg": 2.0,
    "sugar_g": 3.4,
    "vitamin_a_ug": 59.0,
    "vitamin_c_mg": 30.0,
    "vitamin_e_mg": 0.89,
    "vitamin_k_ug": 12.5
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-518",
  "state": "Grilled",
  "subcategory": "DG",
  "tags": [
    "dg",
    "grilled",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
