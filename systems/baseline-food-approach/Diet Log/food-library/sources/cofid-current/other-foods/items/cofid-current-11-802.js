/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "g",
  "description": "10 samples, 7 products",
  "id": "cofid-current-11-802",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Shortbread",
  "nutritionPerBasis": {
    "calcium_mg": 138.0,
    "carbs_g": 62.2,
    "energy_kcal": 515.0,
    "fat_g": 29.0,
    "fibre_g": 2.2,
    "folate_ug": 14.0,
    "iron_mg": 1.5,
    "magnesium_mg": 15.0,
    "omega3_g": 0.28,
    "phosphorus_mg": 77.0,
    "potassium_mg": 133.0,
    "protein_g": 5.3,
    "salt_g": 0.8025,
    "sat_fat_g": 17.45,
    "sodium_mg": 321.0,
    "sugar_g": 15.6,
    "vitamin_a_ug": 297.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.3,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-802",
  "state": "Unspecified",
  "subcategory": "AM",
  "tags": [
    "am",
    "other-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
